import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { NavParams } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  name: string; email: string; password: string; amount: string;
  state$: Observable<object>;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.email = history.state.email;
    this.name = history.state.name;
    this.password = history.state.password;
    this.amount = history.state.amount;
  }

  ngOnInit() {
    console.log(this.email);
  }

  detail() {
    const data = {
      email: this.email,
      name: this.name,
      password: this.password,
      amount: this.amount
    };
    this.router.navigateByUrl('/detail-user', { state: data });
  }

}
