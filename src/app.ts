import express from 'express';
import { http } from '../config/http'
import { router } from './controllers/index.routes';
import { apiRouter } from './controllers/api';
import { dbConection } from '../config/database'
// server start config
const app = express();

http(app);
// Routing
router(app);

// main apis
apiRouter(app)

// database connection
dbConection()