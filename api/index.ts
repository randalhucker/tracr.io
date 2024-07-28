import { PrismaClient } from '@prisma/client';
import express from 'express';

import userRoutes from './routes/userRoutes';
import reportRoutes from './routes/reportRoutes';
import claimRoutes from './routes/claimRoutes';
import itemRoutes from './routes/itemRoutes';
import messageRoutes from './routes/messageRoutes';
import notificationRoutes from './routes/notificationRoutes';
import buildingRoutes from './routes/buildingRoutes';
import auditLogRoutes from './routes/auditLogRoutes';
import authRoutes from './routes/authRoutes';
import adminRoutes from './routes/adminRoutes';
import serverRoutes from './routes/serverRoutes';

export const prisma = new PrismaClient();
const port = 5431;
const app = express();

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/admins', adminRoutes);
app.use('/users', userRoutes);
app.use('/reports', reportRoutes);
app.use('/claims', claimRoutes);
app.use('/items', itemRoutes);
app.use('/messages', messageRoutes);
app.use('/notifications', notificationRoutes);
app.use('/buildings', buildingRoutes);
app.use('/auditLogs', auditLogRoutes);
app.use('/server', serverRoutes);

app.listen(port, () => console.log(`REST API server ready at: http://localhost:${port}`));
