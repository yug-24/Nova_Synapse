import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();
const httpServer = createServer(app);

const PORT = Number(process.env.PORT || 3001);
const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN || 'http://localhost:5173';

app.use(cors({ origin: FRONTEND_ORIGIN, credentials: true }));
app.use(express.json());

// Health
app.get('/api/health', (_req, res) => res.json({ ok: true }));

// Sample endpoints expected by frontend prototype
app.get('/api/mood', (_req, res) => {
  res.json([
    { id: '1', date: '2025-01-09', mood: 'शांत (Peaceful)', intensity: 7 },
    { id: '2', date: '2025-01-08', mood: 'उत्साहित (Enthusiastic)', intensity: 8 },
  ]);
});

app.post('/api/mood', (req, res) => {
  const entry = { id: Date.now().toString(), ...req.body };
  res.status(201).json(entry);
});

const io = new Server(httpServer, {
  cors: {
    origin: FRONTEND_ORIGIN,
    credentials: true,
  },
});

io.on('connection', (socket) => {
  socket.emit('welcome', { message: 'Welcome to MindBridge realtime!' });

  socket.on('chat:message', (msg) => {
    socket.broadcast.emit('chat:message', msg);
  });
});

httpServer.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});


