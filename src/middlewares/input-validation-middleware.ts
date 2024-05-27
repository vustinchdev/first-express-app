import { NextFunction, Request, Response } from "express"
import { body, validationResult } from 'express-validator'

export const inputValidationMiddleware = [
    body('title')
        .trim()
        .notEmpty().withMessage('Title cannot be empty')
        .isLength({ max: 100 }).withMessage('Title cannot be more than 100 characters')
        .escape(),
    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
        }
        next()
    }
]