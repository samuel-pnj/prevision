import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Environment } from '../Constants/environment.local';


@Injectable({providedIn: 'root'})

export class ComunicationService {

myHeaders = {headers:
    {'Content-Type': 'application/json', }
};

constructor(private http: HttpClient){
}

post(url, body): Promise<any>{

    return this.http.post(this._buildUrl(url), body, this.myHeaders).toPromise();

}

get(url): Promise<any> {

    return this.http.get(this._buildUrl(url), this.myHeaders).toPromise();

}

private _buildUrl(url): string {

    return Environment.API_URL + url ;

}

}
