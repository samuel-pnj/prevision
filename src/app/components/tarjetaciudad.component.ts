import { Component, Input, OnInit } from '@angular/core';
import { Estadoscielo } from '../enums/estadoscielo.enum';
import { Ciudad } from '../models/ciudad.model';


@Component({
  selector: 'app-tarjetaciudad',
  templateUrl: './tarjetaciudad.component.html',
  styleUrls: ['./tarjetaciudad.component.css']
})
export class TarjetaciudadComponent implements OnInit {

  @Input() ciudad:Ciudad;
 

  constructor() { }

  ngOnInit(): void {
  }


  iconoEstado(){
    let parsedNumber = Number(this.ciudad.stateSky.id)
    switch (parsedNumber) {
      case Estadoscielo.POCO_NUBOSO:
        return "fas fa-cloud-sun";
      
      case Estadoscielo.DESPEJADO:
          return "fas fa-sun";
      
      case Estadoscielo.NUBES_ALTAS:
        return "fas fa-smog";
      
      case Estadoscielo.INTERVALOS_NUBOSOS_CON_LLUVIA:
        return "fas fa-cloud-sun-rain";
      
      case Estadoscielo.MUY_NUBOSO_CON_LLUVIA:
        return "fas fa-cloud-showers_heavy";
      
      case Estadoscielo.MUY_NUBOSO_CON_LLUVIA_ESCASA:
        return "fas fa-cloud-rain";
      
      case Estadoscielo.CUBIERTO_CON_LLUVIA:
        return "fas fa-cloud-rain";
      
      case Estadoscielo.MUY_NUBOSO:
        return "fas fa-cloud";   
      
      case Estadoscielo.NUBOSO:  
        return "fas fa-cloud";
      
      case Estadoscielo.INTERVALOS_NUBOSOS_CON_LLUVIA_ESCASA:  
        return "fas fa-cloud-rain";  
      
      case Estadoscielo.INTERVALOS_NUBOSOS:  
        return "fas fa-cloud-sun";  
    }
  }

}
