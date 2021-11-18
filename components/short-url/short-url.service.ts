import * as util from 'util';
import * as dns from 'dns';
import { v4 } from 'uuid';
import ShortUrlRepository from './short-url.repository';

const ShortUrlService = {
  async createShortUrl(originalUrl: string) {
    console.log(originalUrl);
    try {
      const response = await util.promisify(dns.lookup)(originalUrl);
      console.log(response);
      return ShortUrlRepository.insert({ original_url: originalUrl, short_url: v4() });
    } catch (e) {
      throw new Error('invalid url');
    }
  },
  getOriginalUrl(shortUrl: string) {
    return ShortUrlRepository.get(shortUrl).original_url;
  },
};

export default ShortUrlService;
