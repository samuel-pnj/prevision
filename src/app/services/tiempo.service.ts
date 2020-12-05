import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Environment } from '../Constants/environment.local';

@Injectable({
  providedIn: 'root'
})
export class TiempoService {

  myHeaders = {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
      'Access-Control-Allow-Credentials':'true',
      'Access-Control-Allow-Methods':'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    }
  };

  constructor(private http: HttpClient) { }

  getPrevisionDiariaProvincia(provinciaId) {

    return this._get('/provincias/' + provinciaId);

    }

  private _post(url, body): Promise<any>{

    return this.http.post(this._buildUrl(url), body, this.myHeaders).toPromise();

  }

  private _get(url): Promise<any> {

    return this.http.get(this._buildUrl(url), this.myHeaders).toPromise();

  }

  private _buildUrl(url): string {

  return Environment.API_EXTERNAL_URL + url ;

  }
}
