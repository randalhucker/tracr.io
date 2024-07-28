import { Request, Response } from 'express';
import { prisma } from '../index';
import { registerUser } from './authController';
import { hashPassword } from '../utils/auth';

/**
 * Create a new user.
 */
export const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user_token = await registerUser(req);
    res.status(201).json(user_token);
  } catch (error) {
    console.error('Error creating user:', (error as Error).message);
    res.status(500).json({ error: (error as Error).message });
  }
};

/**
 * Get all users.
 */
export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', (error as Error).message);
    res.status(500).json({ error: (error as Error).message });
  }
};

/**
 * Get user details.
 */
export const getUserDetails = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId } = req.params;
    const user = await prisma.user.findUnique({
      where: { id: parseInt(userId) }
    });
    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }
    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user details:', (error as Error).message);
    res.status(500).json({ error: (error as Error).message });
  }
};

/**
 * Update user details.
 */
export const updateUserDetails = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId } = req.params;
    const { firstName, lastName, email, profilePicture, role } = req.body;
    let { password } = req.body;
    if (password) {
      password = await hashPassword(password);
    }
    const updatedUser = await prisma.user.update({
      where: { id: parseInt(userId) },
      data: { firstName, lastName, email, password, profilePicture, role }
    });
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error('Error updating user:', (error as Error).message);
    res.status(500).json({ error: (error as Error).message });
  }
};

/**
 * Delete a user.
 */
export const deleteUserAccount = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId } = req.params;
    const deleted = await prisma.user.delete({
      where: { id: parseInt(userId) }
    });
    if (deleted.role === 'ADMIN') {
      await prisma.admin.delete({
        where: { userId: deleted.id }
      });
    }
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', (error as Error).message);
    res.status(500).json({ error: (error as Error).message });
  }
};

/**
 * Getting a users messages.
 */
export const getUserMessages = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId } = req.params;
    const messages = await prisma.message.findMany({
      where: { receiverUserId: parseInt(userId) }
    });
    res.status(200).json(messages);
  } catch (error) {
    console.error('Error fetching user messages:', (error as Error).message);
    res.status(500).json({ error: (error as Error).message });
  }
};

/**
 * Getting a users claims.
 */
export const getUserClaims = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId } = req.params;
    const claims = await prisma.claim.findMany({
      where: { userId: parseInt(userId) }
    });
    res.status(200).json(claims);
  } catch (error) {
    console.error('Error fetching user claims:', (error as Error).message);
    res.status(500).json({ error: (error as Error).message });
  }
};
