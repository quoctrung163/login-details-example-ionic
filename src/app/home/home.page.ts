import { Component, Injectable } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

import { Validators, FormGroup, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  registrationForm: FormGroup;

  emailInput: string;
  passInput: string;

  user = {
    name: 'Phan Quoc Trung',
    email: 'phanquocctrung@gmail.com',
    password: '1234',
    amount: '10000'
  };

  constructor(private router: Router, public navCtrl: NavController, public toastController: ToastController) {
    this.registrationForm = new FormGroup({
      emailValidation: new FormControl('', [Validators.required, Validators.email, Validators.minLength(4)]),
      passwordVaildation: new FormControl('', [Validators.required, Validators.minLength(4)])
    });
  }

  logForm() {
    const data = this.user;
    if (this.emailInput === this.user.email && this.passInput === this.user.password) {
      this.router.navigateByUrl('/dashboard', { state: data });
      this.correctToast();
    } else {
      this.errorToast();
    }
  }

  async errorToast() {
    const toast = await this.toastController.create({
      message: 'Wrong password or email!',
      duration: 2000
    });
    toast.present();
  }

  async correctToast() {
    const toast = await this.toastController.create({
      message: 'Login successfully! ^^',
      duration: 2000
    });
    toast.present();
  }

  async openAll() {
    await this.logForm();
  }
}
