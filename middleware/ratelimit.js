import { rateLimit } from 'express-rate-limit'

export const rateLimitChange = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
  message:
    'You have exceeded your 5 requests per minute limit for change data.',
  headers: true,
})

export const rateLimitGet = rateLimit({
  windowMs: 1000,
  max: 2,
  message: 'You have exceeded your 2 requests per second limit for get data.',
  headers: true,
})
