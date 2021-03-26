import { Component, OnInit } from '@angular/core';
import {RatingService} from '../rating.service';
import {Rating} from '../Rating';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-rate-festival',
  templateUrl: './rate-festival.component.html',
  styleUrls: ['./rate-festival.component.css']
})
export class RateFestivalComponent implements OnInit {

  rating: Rating = new Rating(1, '', '', 1);
  message: any;
  imageName: any;
  festName: any;
  private capacity: number;

  constructor(private ratingService: RatingService, private actRoute: ActivatedRoute) {
    if (this.actRoute.snapshot.params.id === '1') {
      this.festName = 'Sonne Mond and Sterne Festival';
      this.imageName = 'sonne_mond_sterne';
      this.rating.festival = 1;
    } else if (this.actRoute.snapshot.params.id === '2') {
      this.festName = 'Fusion Festival';
      this.imageName = 'fushion';
      this.rating.festival = 2;
    } else {
      this.festName = 'XJAZZ Festival';
      this.imageName = 'xjazz';
      this.rating.festival = 3;
    }
  }

  ngOnInit() {
  }
  public saveRating() {
    const response = this.ratingService.saveRating(this.rating);
    response.subscribe((data) => this.message = data);
  }

  public preventInput(event) {
    const value = this.capacity;
    if (value >= 5) {
      event.preventDefault();
      // tslint:disable-next-line:radix
      this.capacity = 5;
    }
  }
}
