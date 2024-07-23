import { Request, Response } from 'express';
import { prisma } from '../index';

/**
 * Create a new admin.
 */
export const createAdmin = async (req: Request, res: Response): Promise<void> => {
  try {
    const { firstName, lastName, email, password, profilePicture } = req.body;

    // Create a new user
    const newUser = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password,
        profilePicture,
        role: 'ADMIN'
      }
    });

    // Create an admin and associate with the new user
    const newAdmin = await prisma.admin.create({
      data: {
        userId: newUser.id
      }
    });

    res.status(201).json(newAdmin);
  } catch (error) {
    console.error('Error creating admin:', (error as Error).message);
    res.status(500).json({ error: (error as Error).message });
  }
};

/**
 * Get admin details.
 */
export const getAdminDetails = async (req: Request, res: Response): Promise<void> => {
  try {
    const { adminId } = req.params;
    const admin = await prisma.admin.findUnique({
      where: { id: parseInt(adminId) },
      include: { user: true } // Include the associated user information
    });
    if (!admin) {
      res.status(404).json({ error: 'Admin not found' });
      return;
    }
    res.status(200).json(admin);
  } catch (error) {
    console.error('Error fetching admin details:', (error as Error).message);
    res.status(500).json({ error: (error as Error).message });
  }
};

/**
 * Update admin details.
 */
export const updateAdminDetails = async (req: Request, res: Response): Promise<void> => {
  try {
    const { adminId } = req.params;
    const { firstName, lastName, email, password, profilePicture } = req.body;

    // Fetch the admin to get the associated userId
    const admin = await prisma.admin.findUnique({
      where: { id: parseInt(adminId) }
    });

    if (!admin) {
      res.status(404).json({ error: 'Admin not found' });
      return;
    }

    // Update the associated user information
    const updatedUser = await prisma.user.update({
      where: { id: admin.userId },
      data: { firstName, lastName, email, password, profilePicture }
    });

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error('Error updating admin:', (error as Error).message);
    res.status(500).json({ error: (error as Error).message });
  }
};

/**
 * Delete an admin.
 */
export const deleteAdmin = async (req: Request, res: Response): Promise<void> => {
  try {
    const { adminId } = req.params;

    // Fetch the admin to get the associated userId
    const admin = await prisma.admin.findUnique({
      where: { id: parseInt(adminId) }
    });

    if (!admin) {
      res.status(404).json({ error: 'Admin not found' });
      return;
    }

    // Delete the admin record
    await prisma.admin.delete({
      where: { id: parseInt(adminId) }
    });

    // Optionally, delete the associated user record
    // await prisma.user.delete({
    //   where: { id: admin.userId }
    // });

    res.status(200).json({ message: 'Admin deleted successfully' });
  } catch (error) {
    console.error('Error deleting admin:', (error as Error).message);
    res.status(500).json({ error: (error as Error).message });
  }
};
