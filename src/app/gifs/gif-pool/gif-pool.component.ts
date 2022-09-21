import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-gif-pool',
  templateUrl: './gif-pool.component.html',
  styleUrls: ['./gif-pool.component.scss']
})
export class GifPoolComponent implements OnInit {

  get resultados(){
    return this.gifsService.gifPool;
  }

  constructor(private gifsService: GifsService) { }

  ngOnInit(): void {
  }

}
