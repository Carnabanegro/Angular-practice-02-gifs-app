import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _apiKey : string = 'Yn0nOrkZqe4UoQ1gHf2e8vTs8AOtH4nW';
  private _service : string = 'http://api.giphy.com/v1/gifs';
  private _historial : string[] = [];

  public gifPool : Gif[] = []

  constructor(private httpService : HttpClient) {
    
      this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
      this.gifPool = JSON.parse(localStorage.getItem('historialGifs')!) || [];
    
  }

  get historial(){
    
    return [...this._historial]
  }

  buscarGifs( query : string) {
      if (!this._historial.includes(query.toLowerCase())){
        this._historial.unshift(query)
        this._historial =  this._historial.splice(0,10)

        //Guardo los ultimos 10 en el local storage
        localStorage.setItem('historial', JSON.stringify(this._historial));
      } 


      const params = new HttpParams()
          .set('api_key',this._apiKey)
          .set('q',query)
          .set('limit','10');
          
      

      this.httpService.get<SearchGifsResponse>(`${this._service}/search`,{params})
        .subscribe( (resp:SearchGifsResponse) =>{
          this.gifPool = resp.data;
          localStorage.setItem('historialGifs',JSON.stringify(resp.data));
        })

  }

  
}
