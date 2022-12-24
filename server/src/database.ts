import { Pool, PoolClient, QueryConfig, QueryResult, QueryResultRow } from 'pg';

const pool = new Pool({
  database: 'postgres',
  user: 'postgres',
  password: 'test',
  host: 'localhost',
  port: 5432,
});

export default pool;
