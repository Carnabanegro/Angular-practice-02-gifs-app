import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { GifsSearcherComponent } from './gifs-searcher/gifs-searcher.component';
import { GifPoolComponent } from './gif-pool/gif-pool.component';



@NgModule({
  declarations: [
    GifsPageComponent,
    GifsSearcherComponent,
    GifPoolComponent
  ],
  exports:[
    GifsPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
