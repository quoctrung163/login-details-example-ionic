import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.page.html',
  styleUrls: ['./detail-user.page.scss'],
})
export class DetailUserPage implements OnInit {
  name: string; email: string; password: string; amount: string;
  state$: Observable<object>;
  constructor() {
    this.email = history.state.email;
    this.name = history.state.name;
    this.password = history.state.password;
    this.amount = history.state.amount;
  }

  ngOnInit() {
  }

}
