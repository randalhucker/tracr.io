import jwt from 'jsonwebtoken';
import { prisma } from '../index';
import { Request, Response } from 'express';
import { hashPassword, comparePassword } from '../utils/auth';
import { UserRole } from '@prisma/client';

/**
 * Register a new user.
 *
 * @param data Request object.
 * @returns
 */
export const registerUser = async (data: Request) => {
  const user = await prisma.user.create({
    data: {
      ...data.body,
      password: await hashPassword(data.body.password)
    }
  });
  const token = jwt.sign(
    { id: user.id, email: user.email, role: UserRole.USER },
    process.env.ACCESS_TOKEN_SECRET as string,
    { expiresIn: '1h' }
  );

  return token;
};

/**
 * Register a new admin.
 *
 * @param data Request object.
 * @returns
 */
export const registerAdmin = async (data: Request) => {
  const admin = await prisma.user.create({
    data: {
      ...data.body,
      password: await hashPassword(data.body.password)
    }
  });
  const token = jwt.sign(
    { id: admin.id, email: admin.email, role: UserRole.ADMIN },
    process.env.ACCESS_TOKEN_SECRET as string,
    { expiresIn: '1h' }
  );

  return token;
};

/**
 * Login a user.
 *
 * @param req Express request object.
 * @param res Express response object.
 */
export const login = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) return res.status(400).send('User not found');

    const validPassword = await comparePassword(password, user.password);
    if (!validPassword) return res.status(400).send('Invalid password');

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.ACCESS_TOKEN_SECRET as string,
      { expiresIn: '1h' }
    );

    return res.json({ token });
  } catch (error) {
    console.error('Error logging in user:', (error as Error).message);
    return res.status(500).json({ error: (error as Error).message });
  }
};
