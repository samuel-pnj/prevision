import { Component, OnInit } from '@angular/core';
import { ListadoProvincias } from 'src/app/Constants/listadoprovincias';
import { Ciudad } from 'src/app/models/ciudad.model';
import { TiempoService } from 'src/app/services/tiempo.service';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

 listadoProvincias= ListadoProvincias.provincia;
 provinciaSelected = null;
 ciudades:Ciudad[]=[];


  constructor(
    private tiempoService: TiempoService
  ) { }

  ngOnInit(): void {
  }

  provinciaOnChange($event){

   this.tiempoService.getPrevisionDiariaProvincia(this.provinciaSelected)
   .then(response => {
    this.ciudades= response.ciudades;
   })
   .catch(error => console.log(error));

  }

}
