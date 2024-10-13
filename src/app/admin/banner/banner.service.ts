import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import { FIND_UNIQUE_BANNER, LIST_BANNERS } from './graphql/queries';
import { Banner } from './banner.model';
import { CREATE_BANNER, UPDATE_BANNER } from './graphql/mutations';

const TOTAL_PAGES = 7;

export class NewsPost {
  title: string;
  link: string;
  creator: string;
  text: string;
}

@Injectable()
export class BannerService {

  constructor(private http: HttpClient, private readonly apollo: Apollo) {}

  load(page: number, pageSize: number): Observable<NewsPost[]> {
    const startIndex = ((page - 1) % TOTAL_PAGES) * pageSize;

    return this.http
      .get<NewsPost[]>('assets/data/news.json')
      .pipe(
        map(news => news.splice(startIndex, pageSize)),
        delay(1500),
      );
  }

  listBanners(): Observable<any> {
    return this.apollo
      .watchQuery<Banner>({
        query: LIST_BANNERS(),
      })
      .valueChanges
  }

  findUniqueBanner(id: Banner["id"]): Observable<any> {
    return this.apollo
      .watchQuery<Banner>({
        query: FIND_UNIQUE_BANNER(id),
      })
      .valueChanges
  }

  createBanner(banner: Banner) {
    console.log(CREATE_BANNER(banner));
    return this.apollo
      .mutate<any>({
        mutation: CREATE_BANNER(banner),
      });
  }

  updateBanner(banner: Banner) {
    console.log(UPDATE_BANNER(banner));
    return this.apollo
      .mutate({
        mutation: UPDATE_BANNER(banner),
      });
  }
}
