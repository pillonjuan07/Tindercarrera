import express from 'express';
import { 
  saveTestResult, 
  getUserHistory, 
  getRecentTests, 
  deleteTest 
} from '../controllers/testController.js';

const router = express.Router();

router.post('/', saveTestResult);
router.get('/user/:userId', getUserHistory);
router.get('/recent', getRecentTests);
router.delete('/:testId', deleteTest);

export default router;