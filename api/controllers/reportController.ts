import { Request, Response } from 'express';
import { prisma } from '../index';

/**
 * Create a new report.
 */
export const createReport = async (req: Request, res: Response): Promise<void> => {
  try {
    const { description, image, status, userId, itemId } = req.body;
    const newReport = await prisma.report.create({
      data: { description, image, status, userId, itemId }
    });
    res.status(201).json(newReport);
  } catch (error) {
    console.error('Error creating report:', (error as Error).message);
    res.status(500).json({ error: (error as Error).message });
  }
};

/**
 * Get report details.
 */
export const getReportDetails = async (req: Request, res: Response): Promise<void> => {
  try {
    const { reportId } = req.params;
    const report = await prisma.report.findUnique({
      where: { id: parseInt(reportId) }
    });
    if (!report) {
      res.status(404).json({ error: 'Report not found' });
      return;
    }
    res.status(200).json(report);
  } catch (error) {
    console.error('Error fetching report details:', (error as Error).message);
    res.status(500).json({ error: (error as Error).message });
  }
};

/**
 * Update report details.
 */
export const updateReportDetails = async (req: Request, res: Response): Promise<void> => {
  try {
    const { reportId } = req.params;
    const { description, image, status, userId, itemId } = req.body;
    const updatedReport = await prisma.report.update({
      where: { id: parseInt(reportId) },
      data: { description, image, status, userId, itemId }
    });
    res.status(200).json(updatedReport);
  } catch (error) {
    console.error('Error updating report:', (error as Error).message);
    res.status(500).json({ error: (error as Error).message });
  }
};

/**
 * Delete a report.
 */
export const deleteReport = async (req: Request, res: Response): Promise<void> => {
  try {
    const { reportId } = req.params;
    await prisma.report.delete({
      where: { id: parseInt(reportId) }
    });
    res.status(200).json({ message: 'Report deleted successfully' });
  } catch (error) {
    console.error('Error deleting report:', (error as Error).message);
    res.status(500).json({ error: (error as Error).message });
  }
};
