import { Request, Response } from 'express';
import { prisma } from '../index';

/**
 * Create a new audit log.
 */
export const createAuditLog = async (req: Request, res: Response): Promise<void> => {
  try {
    const { action, userId, adminId } = req.body;
    const newAuditLog = await prisma.auditLog.create({
      data: { action, userId, adminId }
    });
    res.status(201).json(newAuditLog);
  } catch (error) {
    console.error('Error creating audit log:', (error as Error).message);
    res.status(500).json({ error: (error as Error).message });
  }
};

/**
 * Get audit log details.
 */
export const getAuditLogDetails = async (req: Request, res: Response): Promise<void> => {
  try {
    const { auditLogId } = req.params;
    const auditLog = await prisma.auditLog.findUnique({
      where: { id: parseInt(auditLogId) }
    });
    if (!auditLog) {
      res.status(404).json({ error: 'Audit log not found' });
      return;
    }
    res.status(200).json(auditLog);
  } catch (error) {
    console.error('Error fetching audit log details:', (error as Error).message);
    res.status(500).json({ error: (error as Error).message });
  }
};

/**
 * Update audit log details.
 */
export const updateAuditLogDetails = async (req: Request, res: Response): Promise<void> => {
  try {
    const { auditLogId } = req.params;
    const { action, userId, adminId } = req.body;
    const updatedAuditLog = await prisma.auditLog.update({
      where: { id: parseInt(auditLogId) },
      data: { action, userId, adminId }
    });
    res.status(200).json(updatedAuditLog);
  } catch (error) {
    console.error('Error updating audit log:', (error as Error).message);
    res.status(500).json({ error: (error as Error).message });
  }
};

/**
 * Delete an audit log.
 */
export const deleteAuditLog = async (req: Request, res: Response): Promise<void> => {
  try {
    const { auditLogId } = req.params;
    await prisma.auditLog.delete({
      where: { id: parseInt(auditLogId) }
    });
    res.status(200).json({ message: 'Audit log deleted successfully' });
  } catch (error) {
    console.error('Error deleting audit log:', (error as Error).message);
    res.status(500).json({ error: (error as Error).message });
  }
};
