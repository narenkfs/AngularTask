import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class DataService {

  constructor(private http: Http) { }
  getData(): any {
  return this.http.get("../assets/data.json")
             .toPromise()
             .then(response => response.json().data)
             .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
    }
}
