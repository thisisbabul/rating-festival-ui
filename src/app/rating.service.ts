import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(private http: HttpClient) { }

  public saveRating(rating) {
    return this.http.post('http://localhost:9999/addrating', rating, {responseType: 'text' as 'json'});
  }

  public getAllRating() {
    return this.http.get('http://localhost:9999/getallrating');
  }

  public getAvgRatingOne() {
    return this.http.get('http://localhost:9999/getavgratingone');
  }

  public getAvgRatingTwo() {
    return this.http.get('http://localhost:9999/getavgratingtwo');
  }

  public getAvgRatingThree() {
    return this.http.get('http://localhost:9999/getavgratingthree');
  }
}
