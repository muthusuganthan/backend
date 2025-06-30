import { ZodError } from 'zod';
import { Prisma } from '@prisma/client';

const errorMiddleware = (err, req, res, next) => {
  // Zod validation errors
  if (err instanceof ZodError) {
    return res.status(400).json({ success: false, error: err.errors.map(e => e.message).join(', ') });
  }

  // Prisma known errors
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    let message = 'Database error';
    if (err.code === 'P2002') message = 'Unique constraint failed';
    if (err.code === 'P2025') message = 'Resource not found';
    return res.status(400).json({ success: false, error: message });
  }

  // Prisma validation errors
  if (err instanceof Prisma.PrismaClientValidationError) {
    return res.status(400).json({ success: false, error: 'Validation error: ' + err.message });
  }

  // Custom API errors or fallback
  const status = err.status || 500;
  const errorMsg = err.message || 'Internal server error';
  res.status(status).json({ success: false, error: errorMsg });
};

export default errorMiddleware; 