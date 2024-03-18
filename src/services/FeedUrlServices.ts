import * as rssParser from 'react-native-rss-parser';

class FeedUrlServices {
  public async getFeed(feedurl: string) {
    const res = await fetch(feedurl, {
      method: 'GET',
    });

    const resText = await res.text();

    // console.log('Response', resText);

    return rssParser.parse(resText);
  }
}
export const feedurlServices = new FeedUrlServices();
