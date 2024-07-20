import { Request, Response } from 'express';
import { prisma } from '../index';

/**
 * Create a new notification.
 */
export const createNotification = async (req: Request, res: Response): Promise<void> => {
  try {
    const { message, type, read, userId } = req.body;
    const newNotification = await prisma.notification.create({
      data: { message, type, read, userId }
    });
    res.status(201).json(newNotification);
  } catch (error) {
    console.error('Error creating notification:', (error as Error).message);
    res.status(500).json({ error: (error as Error).message });
  }
};

/**
 * Get notification details.
 */
export const getNotificationDetails = async (req: Request, res: Response): Promise<void> => {
  try {
    const { notificationId } = req.params;
    const notification = await prisma.notification.findUnique({
      where: { id: parseInt(notificationId) }
    });
    if (!notification) {
      res.status(404).json({ error: 'Notification not found' });
      return;
    }
    res.status(200).json(notification);
  } catch (error) {
    console.error('Error fetching notification details:', (error as Error).message);
    res.status(500).json({ error: (error as Error).message });
  }
};

/**
 * Update notification details.
 */
export const updateNotificationDetails = async (req: Request, res: Response): Promise<void> => {
  try {
    const { notificationId } = req.params;
    const { message, type, read, userId } = req.body;
    const updatedNotification = await prisma.notification.update({
      where: { id: parseInt(notificationId) },
      data: { message, type, read, userId }
    });
    res.status(200).json(updatedNotification);
  } catch (error) {
    console.error('Error updating notification:', (error as Error).message);
    res.status(500).json({ error: (error as Error).message });
  }
};

/**
 * Delete a notification.
 */
export const deleteNotification = async (req: Request, res: Response): Promise<void> => {
  try {
    const { notificationId } = req.params;
    await prisma.notification.delete({
      where: { id: parseInt(notificationId) }
    });
    res.status(200).json({ message: 'Notification deleted successfully' });
  } catch (error) {
    console.error('Error deleting notification:', (error as Error).message);
    res.status(500).json({ error: (error as Error).message });
  }
};
