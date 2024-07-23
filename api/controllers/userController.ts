import { Request, Response } from 'express';
import { prisma } from '../index';
import { registerUser } from './authController';

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
    const { firstName, lastName, email, password, profilePicture, role } = req.body;
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
    await prisma.user.delete({
      where: { id: parseInt(userId) }
    });
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', (error as Error).message);
    res.status(500).json({ error: (error as Error).message });
  }
};
