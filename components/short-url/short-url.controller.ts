import { Request, Response } from 'express';
import ShortUrlService from './short-url.service';

const ShortUrlController = {
  async createShortUrl(req: Request, res: Response) {
    try {
      console.log(req.body);
      const url = await ShortUrlService.createShortUrl(req.body.original_url);
      res.json(url);
    } catch (e: any) {
      res.json({ error: e.message });
    }
  },
  visitShortUrl(req: Request, res: Response) {
    try {
      const originalUrl = ShortUrlService.getOriginalUrl(req.params.shortUrl);
      res.redirect(originalUrl);
    } catch (e: any) {
      res.json({ error: e.message });
    }
  },
};

export default ShortUrlController;
