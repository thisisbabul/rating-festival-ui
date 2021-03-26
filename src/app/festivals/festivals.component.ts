import { Component, OnInit } from '@angular/core';
import {RatingService} from '../rating.service';
import {Rating} from '../Rating';
import {of} from 'rxjs';

@Component({
  selector: 'app-festivals',
  templateUrl: './festivals.component.html',
  styleUrls: ['./festivals.component.css']
})
export class FestivalsComponent implements OnInit {

  private allRating: any;
  private avgRatingOne: any;
  private avgRatingTwo: any;
  private avgRatingThree: any;

  constructor(private ratingService: RatingService) {}

  ngOnInit() {
    const allRating = this.ratingService.getAllRating();
    allRating.subscribe((data) => this.allRating = data);

    const avgRatingOne = this.ratingService.getAvgRatingOne();
    avgRatingOne.subscribe((data) => this.avgRatingOne = data);

    const avgRatingTwo = this.ratingService.getAvgRatingTwo();
    avgRatingTwo.subscribe((data) => this.avgRatingTwo = data);

    const avgRatingThree = this.ratingService.getAvgRatingThree();
    avgRatingThree.subscribe((data) => this.avgRatingThree = data);
  }
}
