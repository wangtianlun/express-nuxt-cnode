import { Router } from 'express'

import users from './users'
import topics from './topics'

const router = Router()

// Add USERS Routes
router.use(users)
router.use(topics)

export default router
