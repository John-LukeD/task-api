import { param } from 'express-validator';
import { checkValidationResults } from './handleValidationErrors.js';

export const validateTaskId = [
  param('id')
    .isInt({ min: 1 })
    .withMessage('Post id must be a positive integer'),
  checkValidationResults,
];