import {IPodcast} from '../constants/types/Podcast';

class ItuneApiServices {
  private baseUrl = 'https://itunes.apple.com/search';

  public async searchPodcast(term: string): Promise<IPodcast[]> {
    const url = `${this.baseUrl}?entity=podcast&term=${term}`;

    const res = await fetch(url, {
      method: 'GET',
    });

    const resJSON = (await res.json()) as {results: IPodcast[]};

    return resJSON.results;
  }
}

export const itunesApiServices = new ItuneApiServices();
