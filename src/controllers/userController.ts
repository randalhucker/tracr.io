import { Request, Response } from 'express';
import User from '../models/User';

/**
 * Create a new user.
 * 
 * @param req Express request object.
 * @param res Express response object.
 */
export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (error) {
    console.error('Error creating user:', (error as Error).message);
    res.status(500).json({ error: (error as Error).message });
  }
};

/**
 * Get all users.
 * 
 * @param req Express request object.
 * @param res Express response object.
 */
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', (error as Error).message);
    res.status(500).json({ error: (error as Error).message });
  }
};

/**
 * Get a user by ID.
 * 
 * @param req Express request object.
 * @param res Express response object.
 */
export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error fetching user:', (error as Error).message);
    res.status(500).json({ error: (error as Error).message });
  }
};

/**
 * Update a user.
 * 
 * @param req Express request object.
 * @param res Express response object.
 */
export const updateUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      await user.update(req.body);
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error updating user:', (error as Error).message);
    res.status(500).json({ error: (error as Error).message });
  }
};

/**
 * Delete a user.
 * 
 * @param req Express request object.
 * @param res Express response object.
 */
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      await user.destroy();
      res.json({ message: 'User deleted' });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error deleting user:', (error as Error).message);
    res.status(500).json({ error: (error as Error).message });
  }
};