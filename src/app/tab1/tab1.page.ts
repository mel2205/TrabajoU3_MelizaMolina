import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  constructor(private navCtrl: NavController) {}

  irATab2() {
    // limpia el historial y abre tab2
    this.navCtrl.navigateRoot('/tabs/tab2');
  }
}
