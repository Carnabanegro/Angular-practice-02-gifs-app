import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  get historial(){
      return this.gifsService.historial
  }

  buscarGifs(item:string){
    this.gifsService.buscarGifs(item)
  }

  constructor(private gifsService : GifsService) { }



}
