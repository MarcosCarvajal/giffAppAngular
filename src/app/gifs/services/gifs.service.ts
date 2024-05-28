import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Gifs, SearchGifsRespuesta } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apyKey: string = '6f0BJIGr3njjC15CZT2nWTZr5l5j5t17';
  private _historial: string[] = [];
  private _resultados: Gifs[] = [];

  get historial():string[]{
    return [...this._historial];
  }

  get resultados():Gifs[]{
    return [...this._resultados];
  }

  constructor(
    private http: HttpClient,
  ){
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this._resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
  }
  
  buscarGifs(query: string):void{
    const newQuery = query.trim().toLowerCase();
    if(query.trim().length === 0){ return; }
    if(!this._historial.includes(newQuery)){
      this._historial.unshift(newQuery);
    }
    this.consultaGifs(newQuery);
    this._historial = this._historial.splice(0,10);
  }

  consultaGifs(query:string):void{
    const params = new HttpParams()
          .set('api_key', this.apyKey)
          .set('limit', '20')
          .set('q', query)

    this.http.get<SearchGifsRespuesta>(`${environment.gifs}search?`, {params})
    .subscribe((resp:SearchGifsRespuesta) =>{
      this._resultados=resp.data;
      localStorage.setItem('resultados', JSON.stringify(resp.data));
    });
  }


}
