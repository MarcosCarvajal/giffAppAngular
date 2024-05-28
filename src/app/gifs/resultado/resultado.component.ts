import { Component, OnInit } from '@angular/core';
import { Gifs } from '../interfaces/gifs.interface';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styles: [
  ]
})
export class ResultadoComponent {

  get resultados(): Gifs[]{return this.gifsService.resultados}

  constructor(
    private gifsService:GifsService
  ) { }

}
