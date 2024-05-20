import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { Automovil } from '../../../modelos/Automovil';
import { AutomovilService } from '../../../servicio/automovil.service';


@Component({
  selector: 'app-edit-automovil',
  standalone: true,
  imports: [CommonModule, RouterOutlet,RouterModule,FormsModule],
  templateUrl: './edit-automovil.component.html',
  styleUrl: './edit-automovil.component.css'
})
export class EditAutomovilComponent {

  constructor(private roter:Router, private automovilService:AutomovilService){}

  regAutomovil = new Automovil();

  ngOnInit():void{
    this.editar();
}

editar(){
  let id=JSON.parse(localStorage.getItem("id") as string);
  this.automovilService.getAutomovilId(id).subscribe(data=>{
    this.regAutomovil=data;
  });
}

actualizar(automovil:Automovil) {
  this.automovilService.updateAutomovil(automovil).subscribe(data=>{
    this.regAutomovil=data;
    this.roter.navigate(['automovil']);
  });
}

}