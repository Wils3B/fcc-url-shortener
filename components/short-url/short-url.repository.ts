import ShortUrl from './short-url.model';

const urls: any = {};

const ShortUrlRepository = {
  insert(url: ShortUrl) {
    urls[url.short_url] = url;
    return url;
  },
  get(id: string) {
    if (!urls[id]) {
      throw new Error('Short url not found');
    }
    return urls[id];
  },
};

export default ShortUrlRepository;
