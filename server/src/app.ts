import express, { Application } from 'express';
import bodyParser from 'body-parser';
import { populateDatabase } from './populatescript';
import routes from './routes/routes';
import path from 'path';
import fs from 'fs';
import { Server, Socket } from 'socket.io';

const listEndpoints = require('express-list-endpoints');
const morgan = require('morgan');
var cors = require('cors');

var options = {
  key: fs.readFileSync(path.join(__dirname, 'cert', 'key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem')),
};

var https = require('https');
const app: Application = express();
const server = https.createServer(options, app);

//middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
//app.use(morgan('tiny'));

app.use('/', routes);

server.listen(5000, async () => {
  console.log('Secure server on 5000');
  console.log(listEndpoints(app));
});

const io = new Server(server, {
  cors: {
    origin: 'https://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket: Socket) => {
  app.set('socket', socket);
  socket.on('join_session', (data) => {
    console.log('A user joined on :', data.session);
    socket.join(data.session);
    io.to(socket.id).emit('welcome', {id: socket.id})
    socket.broadcast
      .to(data.session)
      .emit('user_joined', { session: data.session, id: socket.id });
  });

  socket.on('leave_session', (data) => {
    console.log('A user left: ', data.session);
    socket.leave(data.session);
  });

  socket.on('send_change', (data) => {
    console.log('sending: ' + data.session);
    socket.to(data.session).emit('receive_change', data);
  });

  socket.on('send_semester_update', (data) => {
    console.log('sending semester update');
    socket.to(data.session).emit('receive_semester_update', data);
  });
});
