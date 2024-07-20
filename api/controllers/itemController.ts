import { Request, Response } from 'express';
import { prisma } from '../index';

/**
 * Create a new item.
 */
export const createItem = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, description, location, status, image, category, buildingId } = req.body;
    const newItem = await prisma.item.create({
      data: { name, description, location, status, image, category, buildingId }
    });
    res.status(201).json(newItem);
  } catch (error) {
    console.error('Error creating item:', (error as Error).message);
    res.status(500).json({ error: (error as Error).message });
  }
};

/**
 * Get item details.
 */
export const getItemDetails = async (req: Request, res: Response): Promise<void> => {
  try {
    const { itemId } = req.params;
    const item = await prisma.item.findUnique({
      where: { id: parseInt(itemId) }
    });
    if (!item) {
      res.status(404).json({ error: 'Item not found' });
      return;
    }
    res.status(200).json(item);
  } catch (error) {
    console.error('Error fetching item details:', (error as Error).message);
    res.status(500).json({ error: (error as Error).message });
  }
};

/**
 * Update item details.
 */
export const updateItemDetails = async (req: Request, res: Response): Promise<void> => {
  try {
    const { itemId } = req.params;
    const { name, description, location, status, image, category, buildingId } = req.body;
    const updatedItem = await prisma.item.update({
      where: { id: parseInt(itemId) },
      data: { name, description, location, status, image, category, buildingId }
    });
    res.status(200).json(updatedItem);
  } catch (error) {
    console.error('Error updating item:', (error as Error).message);
    res.status(500).json({ error: (error as Error).message });
  }
};

/**
 * Delete an item.
 */
export const deleteItem = async (req: Request, res: Response): Promise<void> => {
  try {
    const { itemId } = req.params;
    await prisma.item.delete({
      where: { id: parseInt(itemId) }
    });
    res.status(200).json({ message: 'Item deleted successfully' });
  } catch (error) {
    console.error('Error deleting item:', (error as Error).message);
    res.status(500).json({ error: (error as Error).message });
  }
};
