import express from 'express';
import { http } from '../config/http'
import { router } from './Routes/index.routes';

// server start config
const app = express();
http(app);
// Routing
router(app);