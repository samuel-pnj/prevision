import { Identifiers } from '@angular/compiler';

export class Ciudad{

    id:number;
    idProvince:string;
    name:string;
    temperatures:{
        max:number,
        min:number
    }
    stateSky:{
        id:number,
        description:string
    };
}