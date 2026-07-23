import {  Router } from 'express';
import { searchBusinesses } from '../controllers/search.controller';

const router = Router();

router.get("/", searchBusinesses);

export default router;