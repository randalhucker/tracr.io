import { Request, Response } from 'express';
import { prisma } from '../index';

/**
 * Create a new message.
 */
export const createMessage = async (req: Request, res: Response): Promise<void> => {
  try {
    const { content, senderUserId, receiverUserId, senderAdminId, receiverAdminId } = req.body;
    const newMessage = await prisma.message.create({
      data: { content, senderUserId, receiverUserId, senderAdminId, receiverAdminId }
    });
    res.status(201).json(newMessage);
  } catch (error) {
    console.error('Error creating message:', (error as Error).message);
    res.status(500).json({ error: (error as Error).message });
  }
};

/**
 * Get message details.
 */
export const getMessageDetails = async (req: Request, res: Response): Promise<void> => {
  try {
    const { messageId } = req.params;
    const message = await prisma.message.findUnique({
      where: { id: parseInt(messageId) }
    });
    if (!message) {
      res.status(404).json({ error: 'Message not found' });
      return;
    }
    res.status(200).json(message);
  } catch (error) {
    console.error('Error fetching message details:', (error as Error).message);
    res.status(500).json({ error: (error as Error).message });
  }
};

/**
 * Update message details.
 */
export const updateMessageDetails = async (req: Request, res: Response): Promise<void> => {
  try {
    const { messageId } = req.params;
    const { content, senderUserId, receiverUserId, senderAdminId, receiverAdminId } = req.body;
    const updatedMessage = await prisma.message.update({
      where: { id: parseInt(messageId) },
      data: { content, senderUserId, receiverUserId, senderAdminId, receiverAdminId }
    });
    res.status(200).json(updatedMessage);
  } catch (error) {
    console.error('Error updating message:', (error as Error).message);
    res.status(500).json({ error: (error as Error).message });
  }
};

/**
 * Delete a message.
 */
export const deleteMessage = async (req: Request, res: Response): Promise<void> => {
  try {
    const { messageId } = req.params;
    await prisma.message.delete({
      where: { id: parseInt(messageId) }
    });
    res.status(200).json({ message: 'Message deleted successfully' });
  } catch (error) {
    console.error('Error deleting message:', (error as Error).message);
    res.status(500).json({ error: (error as Error).message });
  }
};
