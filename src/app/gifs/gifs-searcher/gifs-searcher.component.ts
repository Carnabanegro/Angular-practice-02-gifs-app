import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-gifs-searcher',
  templateUrl: './gifs-searcher.component.html',
  styleUrls: ['./gifs-searcher.component.scss']
})
export class GifsSearcherComponent implements OnInit {

  constructor(private gifsService : GifsService) { }

  ngOnInit(): void {
  }

  @ViewChild('txtBuscar') txtBuscar! : ElementRef<HTMLInputElement> ;

  buscar(text: string){
      if (text.trim().length === 0) return;
      const valor = this.txtBuscar.nativeElement.value;
      this.gifsService.buscarGifs(text)
      this.txtBuscar.nativeElement.value = ''
  }
}
