import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { FIND_UNIQUE_BRAND, LIST_BRANDS } from './graphql/queries';
import { Brand } from './brand.model';
import { CREATE_BRAND, DELETE_BRAND, UPDATE_BRAND } from './graphql/mutations';


@Injectable()
export class BrandService {

  constructor(private readonly apollo: Apollo) {}

  listBrands(): Observable<any> {
    return this.apollo
      .watchQuery<Brand>({
        query: LIST_BRANDS(),
      })
      .valueChanges
  }

  findUniqueBrand(id: Brand["id"]): Observable<any> {
    return this.apollo
      .watchQuery<Brand>({
        query: FIND_UNIQUE_BRAND(id),
      })
      .valueChanges
  }

  createBrand(category: Brand) {
    return this.apollo
      .mutate<any>({
        mutation: CREATE_BRAND(category),
      });
  }

  updateBrand(category: Brand) {
    return this.apollo
      .mutate({
        mutation: UPDATE_BRAND(category),
      });
  }

  deleteBrand(id: string) {
    return this.apollo
      .mutate({
        mutation: DELETE_BRAND(id),
      });
  }
}
