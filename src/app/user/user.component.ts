import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User = new User('', '', 0, '');
  message: any;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  public registerNow() {
    const response = this.userService.doRegistration(this.user);
    response.subscribe((data) => this.message = data);
  }

  public onSubmit() {
    this.router.navigate(['/festival']);
  }
}
