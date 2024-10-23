import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { FIND_UNIQUE_BANNER, LIST_BANNERS } from './graphql/queries';
import { Banner } from './banner.model';
import { CREATE_BANNER, UPDATE_BANNER } from './graphql/mutations';

@Injectable()
export class BannerService {

  constructor(private readonly apollo: Apollo) {}

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
