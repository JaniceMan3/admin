import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { FIND_UNIQUE_SUB_CATEGORY, LIST_CATEGORIES, LIST_SUB_CATEGORIES } from './graphql/queries';
import { CREATE_SUB_CATEGORY, UPDATE_SUB_CATEGORY } from './graphql/mutations';
import { SubCategory } from './sub-category.model';

@Injectable()
export class SubCategoryService {

  constructor(private readonly apollo: Apollo) {}

  listCategories(): Observable<any> {
    return this.apollo
      .watchQuery<SubCategory>({
        query: LIST_CATEGORIES(),
      })
      .valueChanges
  }

  findUniqueSubCategory(id: SubCategory["id"]): Observable<any> {
    return this.apollo
      .watchQuery<SubCategory>({
        query: FIND_UNIQUE_SUB_CATEGORY(id),
      })
      .valueChanges
  }

  createSubCategory(subCategory: SubCategory) {
    console.log(CREATE_SUB_CATEGORY(subCategory));
    return this.apollo
      .mutate<any>({
        mutation: CREATE_SUB_CATEGORY(subCategory),
      });
  }

  updateSubCategory(subCategory: SubCategory) {
    console.log(subCategory.categoryId);
    return this.apollo
      .mutate({
        mutation: UPDATE_SUB_CATEGORY(subCategory),
      });
  }

  listSubCategories(): Observable<any> {
    return this.apollo
      .watchQuery<SubCategory>({
        query: LIST_SUB_CATEGORIES(),
      })
      .valueChanges
  }
}
