import { Router } from 'express';
import GamePlayController from '../controllers/GamePlayController';

const router = Router();

/**
 * Define all gameplay related endpoints/routes i.e all endpoints starting with "http://localhost:3000/players"
 * */

router.get('/', GamePlayController.getAllGamePlays);
router.get('/player', GamePlayController.getAllGamesByPlayer);
router.get('/count', GamePlayController.countGamesByPlayer);

export default router;