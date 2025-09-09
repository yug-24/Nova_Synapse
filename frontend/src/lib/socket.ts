import { io, Socket } from 'socket.io-client';

const backendUrl = (import.meta as any).env?.VITE_BACKEND_URL || 'http://localhost:3001';

let socket: Socket | null = null;

export function getSocket(): Socket {
  if (!socket) {
    socket = io(backendUrl, {
      transports: ['websocket'],
      withCredentials: true,
    });
  }
  return socket;
}


