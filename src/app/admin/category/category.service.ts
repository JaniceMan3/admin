import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { FIND_UNIQUE_CATEGORY, LIST_CATEGORIES } from './graphql/queries';
import { Category } from './category.model';
import { CREATE_CATEGORY, UPDATE_CATEGORY } from './graphql/mutations';

@Injectable()
export class CategoryService {

  constructor(private readonly apollo: Apollo) {}

  listCategories(): Observable<any> {
    return this.apollo
      .watchQuery<Category>({
        query: LIST_CATEGORIES(),
      })
      .valueChanges
  }

  findUniqueCategory(id: Category["id"]): Observable<any> {
    return this.apollo
      .watchQuery<Category>({
        query: FIND_UNIQUE_CATEGORY(id),
      })
      .valueChanges
  }

  createCategory(category: Category) {
    console.log(CREATE_CATEGORY(category));
    return this.apollo
      .mutate<any>({
        mutation: CREATE_CATEGORY(category),
      });
  }

  updateCategory(category: Category) {
    console.log(UPDATE_CATEGORY(category));
    return this.apollo
      .mutate({
        mutation: UPDATE_CATEGORY(category),
      });
  }
}
