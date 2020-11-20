import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Environment } from '../Constants/environment.local'

@Injectable({
  providedIn: 'root'
})
export class TiempoService {

  myHeaders = {
    headers:{
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'http://localhost:4200'
    }
  };
 
  constructor(private http:HttpClient) { }

  getPrevisionDiariaMunicipio(provinciaId ="01", municipioId="01010") {

    return this._get("/provincias/" + provinciaId +"/municipios/" + municipioId)
    
    }

  private _post(url,body):Promise<any>{

    return this.http.post(this._buildUrl(url),body,this.myHeaders).toPromise();

  }

  private _get(url):Promise<any> {

    return this.http.get(this._buildUrl(url),this.myHeaders).toPromise();

  }

  private _buildUrl(url):string {

  return Environment.API_EXTERNAL_URL + url ;

  }
}
