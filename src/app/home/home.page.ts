import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { AlertController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


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

  constructor(private alertController: AlertController, private router: Router) {}

  async login() {
    if (this.username === 'teste' && this.senha === '123') {  
      this.router.navigate(['/veiculo']);
    } else {
      const alert = await this.alertController.create({
        header: 'Erro',
        message: 'Usuário ou senha inválidos.',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }
}
