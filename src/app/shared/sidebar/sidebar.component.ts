import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';
import { Gifs } from '../../gifs/interfaces/gifs.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  get busquedas(){
    return this.gifsService.historial;
  }

  constructor(
    private gifsService: GifsService,
  ) { }

  ngOnInit(): void {
  }

  buscar(busqueda:string):void{
    this.gifsService.buscarGifs(busqueda)
  }

}
