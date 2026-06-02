import { Request, Response, NextFunction } from 'express';

export interface RequestLogger {
  (req: Request, res: Response, next: NextFunction): void;
}

export const requestLogger: RequestLogger = (req, res, next) => {
  const now = new Date().toISOString();
  const method = req.method;
  const url = req.url;
  
  console.log(`[${now}] ${method} ${url}`);
  next();
};

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('Error:', err.message);
  console.error('Stack:', err.stack);
  
  res.status(500).json({
    success: false,
    error: {
      code: 'INTERNAL_SERVER_ERROR',
      message: 'Something went wrong',
      details: process.env.NODE_ENV === 'development' ? { message: err.message } : undefined
    }
  });
};
