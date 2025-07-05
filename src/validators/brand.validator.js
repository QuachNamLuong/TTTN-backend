import { z } from 'zod';

export const brandSchema = z.object({
  brandName: z.string().min(1, 'Brand name is required'),
  description: z.string().optional(),
});