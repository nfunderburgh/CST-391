import { Router } from "express";
import * as ArtistController from './artist.controller';

const router = Router();
router
    .route('/artists')
    .get(ArtistController.readArtists);

export default router;
