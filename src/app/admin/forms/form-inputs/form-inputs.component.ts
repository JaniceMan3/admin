import { Component, OnDestroy, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Subscription } from 'rxjs';

// We use the gql tag to parse our query string into a query document
const GET_POSTS = gql`
  query ListCategorys {
    listCategorys {
        createdAt
        id
        name
        updatedAt
    }
  }
`;

@Component({
  selector: 'ngx-form-inputs',
  styleUrls: ['./form-inputs.component.scss'],
  templateUrl: './form-inputs.component.html',
})
export class FormInputsComponent implements OnInit, OnDestroy {

  starRate = 2;
  heartRate = 4;
  radioGroupValue = 'This is value 2';
  
  loading: boolean;
  posts: any;
  private querySubscription: Subscription;

  constructor(private readonly apollo: Apollo) {}

  ngOnInit() {
    this.querySubscription = this.apollo
      .watchQuery<any>({
        query: GET_POSTS,
      })
      .valueChanges.subscribe(({ data, loading }) => {
        this.loading = loading;
        this.posts = data.posts;
        console.log(this.posts);
      });
  }
 
  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }
}
