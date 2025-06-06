import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { AlertController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule], // ← ESSENCIAL!
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  username: string = '';
  senha: string = '';

  constructor(private alertController: AlertController) {}

  async login() {
    if (this.username === 'teste' && this.senha === '123') {
      const alert = await this.alertController.create({
        header: 'Sucesso',
        message: 'Login realizado com sucesso!',
        buttons: ['OK'],
      });
      await alert.present();
    } else {
      const alert = await this.alertController.create({
        header: 'Erro',
        message: 'userename ou senha inválidos.',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }
}
