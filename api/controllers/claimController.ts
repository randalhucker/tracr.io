import { Request, Response } from 'express';
import { prisma } from '../index';

/**
 * Create a new claim.
 */
export const createClaim = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId, itemId, description, status } = req.body;
    const newClaim = await prisma.claim.create({
      data: { userId, itemId, description, status }
    });
    res.status(201).json(newClaim);
  } catch (error) {
    console.error('Error creating claim:', (error as Error).message);
    res.status(500).json({ error: (error as Error).message });
  }
};

/**
 * Get claim details.
 */
export const getClaimDetails = async (req: Request, res: Response): Promise<void> => {
  try {
    const { claimId } = req.params;
    const claim = await prisma.claim.findUnique({
      where: { id: parseInt(claimId) }
    });
    if (!claim) {
      res.status(404).json({ error: 'Claim not found' });
      return;
    }
    res.status(200).json(claim);
  } catch (error) {
    console.error('Error fetching claim details:', (error as Error).message);
    res.status(500).json({ error: (error as Error).message });
  }
};

/**
 * Get claim details.
 */
export const getClaims = async (req: Request, res: Response): Promise<void> => {
  try {
    const claims = await prisma.claim.findMany();
    res.status(200).json(claims);
  } catch (error) {
    console.error('Error fetching claims:', (error as Error).message);
    res.status(500).json({ error: (error as Error).message });
  }
};

/**
 * Update claim details.
 */
export const updateClaimDetails = async (req: Request, res: Response): Promise<void> => {
  try {
    const { claimId } = req.params;
    const { userId, itemId, description, status } = req.body;
    const updatedClaim = await prisma.claim.update({
      where: { id: parseInt(claimId) },
      data: { userId, itemId, description, status }
    });
    res.status(200).json(updatedClaim);
  } catch (error) {
    console.error('Error updating claim:', (error as Error).message);
    res.status(500).json({ error: (error as Error).message });
  }
};

/**
 * Delete a claim.
 */
export const deleteClaim = async (req: Request, res: Response): Promise<void> => {
  try {
    const { claimId } = req.params;
    await prisma.claim.delete({
      where: { id: parseInt(claimId) }
    });
    res.status(200).json({ message: 'Claim deleted successfully' });
  } catch (error) {
    console.error('Error deleting claim:', (error as Error).message);
    res.status(500).json({ error: (error as Error).message });
  }
};
