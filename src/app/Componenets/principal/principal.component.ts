import { Component, OnInit } from '@angular/core';
import { Municipios } from 'src/app/Constants/municipios';
import { TiempoService } from 'src/app/services/aemet.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  listadoMunicipios= Municipios.list;
  municipioSelected=null;
  

  constructor(
    private tiempoService: TiempoService
  ) { }

  ngOnInit(): void {
    this.tiempoService.getPrevisionDiariaMunicipio(null,null)
    .then(response =>{
      console.log(response);
    })
    .catch(error => console.log(error))
  }

  municipioOnChange($event){

   this.tiempoService.getPrevisionDiariaMunicipio(this.municipioSelected)
   .then(response =>{
     console.log(response);
   })
   .catch(error => console.log(error))

  }

}
