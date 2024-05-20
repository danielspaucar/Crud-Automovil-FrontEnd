import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { Automovil } from '../../../modelos/Automovil';
import { AutomovilService } from '../../../servicio/automovil.service';

@Component({
  selector: 'app-add-automovil',
  standalone: true,
  imports: [CommonModule, RouterOutlet,RouterModule,FormsModule],
  templateUrl: './add-automovil.component.html',
  styleUrl: './add-automovil.component.css'
})
export class AddAutomovilComponent {

  constructor(private router:Router, private automovilService:AutomovilService){}

  regAutomovil = new Automovil();

  guardar(automovil:Automovil){
    this.automovilService.createAutomovil(automovil).subscribe(
      data=>{
      this.router.navigate(['automovil'])
  }
)
  }
}
