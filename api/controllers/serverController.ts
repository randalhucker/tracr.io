import { Request, Response } from 'express';
import { prisma } from '../index';

/**
 * Get Server Uptime.
 */
export const getUptime = async (req: Request, res: Response): Promise<void> => {
  try {
    const result: [{ uptime: Date }] =
      await prisma.$queryRaw`SELECT pg_postmaster_start_time() as uptime`;
    const uptime = result[0].uptime;
    const currentTime = new Date();
    const uptimeDuration = currentTime.getTime() - new Date(uptime).getTime();
    const uptimeInSeconds = Math.floor(uptimeDuration / 1000);
    const uptimeInMinutes = Math.floor(uptimeInSeconds / 60);
    const uptimeInHours = Math.floor(uptimeInMinutes / 60);
    const uptimeInDays = Math.floor(uptimeInHours / 24);

    const formattedUptime = `${uptimeInDays} days, ${uptimeInHours % 24} hours, ${uptimeInMinutes % 60} minutes`;

    res.json({ uptime: formattedUptime });
  } catch (error) {
    console.error('Error fetching uptime:', error);
    res.status(500).json({ error: 'Error fetching uptime' });
  }
};

/**
 * Get Server Users.
 */
export const getCount = async (req: Request, res: Response): Promise<void> => {
  try {
    const userCount = await prisma.user.count();
    res.json({ count: userCount });
  } catch (error) {
    console.error('Error fetching user count:', error);
    res.status(500).json({ error: 'Error fetching user count' });
  }
};
