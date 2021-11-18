import { Router } from 'express';
import ShortUrlController from './short-url.controller';

const ShortUrlRouter = Router();

ShortUrlRouter.post('/', ShortUrlController.createShortUrl);
ShortUrlRouter.get('/:shortUrl?', ShortUrlController.visitShortUrl);

export default ShortUrlRouter;
