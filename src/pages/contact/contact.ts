import { Component, Inject } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, @Inject(DOCUMENT) private document: any) {

  }

  getMyResume() {
    this.document.location.href = 'http://www.nicolasfontes.com.br/Resume.pdf';
  }

}
