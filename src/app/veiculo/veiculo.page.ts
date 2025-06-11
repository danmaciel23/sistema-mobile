import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonContent, IonHeader, IonTitle, IonToolbar,IonSearchbar, IonList,IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle,IonCardContent} from '@ionic/angular/standalone';
import { VeiculoService } from './veiculo.service';


@Component({
  selector: 'app-veiculo',
  templateUrl: './veiculo.page.html',
  styleUrls: ['./veiculo.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonList,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent, 
    IonSearchbar,
  ]
})
//falta somente limpar esses veiculos da lista recebida pelo array da api
//também verificar os nomes das variaveis que a api envia para casar com os nomes que coloquei dentro do veiculo.page.html
export class VeiculoPage implements OnInit {
  veiculos: any[] = [];

  constructor(private veiculoService: VeiculoService) { 
    // Injeta o serviço VeiculoService para obter os dados dos veículos   
  }

    ngOnInit() {
    this.veiculoService.getVeiculos().subscribe({
    next: data => {
      console.log('Recebido:', data);
      this.veiculos = data;
    },
    error: err => {
      console.error('Erro ao buscar veículos:', err);
    }
  });
  }
}