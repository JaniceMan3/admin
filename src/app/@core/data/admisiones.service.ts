import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Config } from './../../app-config';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

const path = Config.LOCAL.ADMISIONES_SERVICE;


@Injectable()
export class AdmisionesService {

    constructor(private http: HttpClient) {
    }

    get(endpoint) {
        return this.http.get(path + endpoint).pipe(
          catchError(this.handleError)
        );
      }
    post(endpoint, element) {
        return this.http.post(path + endpoint, element, httpOptions).pipe(
          catchError(this.handleError)
        );
    }
    put(endpoint, element) {
        return this.http.put(path + endpoint + '/' + element.Id, element, httpOptions).pipe(
          catchError(this.handleError)
        );
    }
    delete(endpoint, element) {
        return this.http.delete(path + endpoint + '/' + element.Id).pipe(
          catchError(this.handleError)
        );
    }

    private handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
      }
      // return an observable with a user-facing error message
      return throwError(
        'Something bad happened; please try again later.');
    };
}
