import { Request, Response } from 'express';
import { prisma } from '../index';

/**
 * Create a new building.
 */
export const createBuilding = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name } = req.body;
    const newBuilding = await prisma.building.create({
      data: { name }
    });
    res.status(201).json(newBuilding);
  } catch (error) {
    console.error('Error creating building:', (error as Error).message);
    res.status(500).json({ error: (error as Error).message });
  }
};

/**
 * Get building details.
 */
export const getBuildingDetails = async (req: Request, res: Response): Promise<void> => {
  try {
    const { buildingId } = req.params;
    const building = await prisma.building.findUnique({
      where: { id: parseInt(buildingId) }
    });
    if (!building) {
      res.status(404).json({ error: 'Building not found' });
      return;
    }
    res.status(200).json(building);
  } catch (error) {
    console.error('Error fetching building details:', (error as Error).message);
    res.status(500).json({ error: (error as Error).message });
  }
};

/**
 * Get all buildings.
 */
export const getBuildings = async (_req: Request, res: Response): Promise<void> => {
  try {
    const buildings = await prisma.building.findMany();
    res.status(200).json(buildings);
  } catch (error) {
    console.error('Error fetching buildings:', (error as Error).message);
    res.status(500).json({ error: (error as Error).message });
  }
};

/**
 * Update building details.
 */
export const updateBuildingDetails = async (req: Request, res: Response): Promise<void> => {
  try {
    const { buildingId } = req.params;
    const { name } = req.body;
    const updatedBuilding = await prisma.building.update({
      where: { id: parseInt(buildingId) },
      data: { name }
    });
    res.status(200).json(updatedBuilding);
  } catch (error) {
    console.error('Error updating building:', (error as Error).message);
    res.status(500).json({ error: (error as Error).message });
  }
};

/**
 * Delete a building.
 */
export const deleteBuilding = async (req: Request, res: Response): Promise<void> => {
  try {
    const { buildingId } = req.params;
    await prisma.building.delete({
      where: { id: parseInt(buildingId) }
    });
    res.status(200).json({ message: 'Building deleted successfully' });
  } catch (error) {
    console.error('Error deleting building:', (error as Error).message);
    res.status(500).json({ error: (error as Error).message });
  }
};
