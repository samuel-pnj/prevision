import { Injectable } from "@angular/core";
import { ComunicationService } from './comunication.service';


@Injectable({providedIn:'root'})

export class UserService {

constructor(private comunication:ComunicationService){
}

login(email,pwd):Promise<any>{

    let body={
      
        email:email,
        pwd:pwd
    }

    return this.comunication.post('/users/login',body)

}

}