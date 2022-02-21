import express from 'express';
import { http } from '../config/http'
import { router } from './Routes/index.routes';
import { apiRouter } from './Routes/api';

// server start config
const app = express();
http(app);
// Routing
router(app);

// main apis
apiRouter(app)