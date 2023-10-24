import { rateLimit } from 'express-rate-limit'

export const rateLimitChange = rateLimit({
  windowMs: 60 * 1000,
  max: 3,
  message:
    'You have exceeded your 3 requests per minute limit for change data.',
  headers: true,
})

export const rateLimitGet = rateLimit({
  windowMs: 1000,
  max: 1,
  message: 'You have exceeded your 1 requests per second limit for get data.',
  headers: true,
})
