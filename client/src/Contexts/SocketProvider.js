import { createContext } from 'react';
import {io} from 'socket.io-client'

const SocketCotext = createContext({});
const socket = io.connect("https://localhost:5000");

export const SocketProvider = ({ children }) => {
    return (
        <SocketCotext.Provider value={{socket}}>
            {children}
        </SocketCotext.Provider>
    )
}

export default SocketCotext;