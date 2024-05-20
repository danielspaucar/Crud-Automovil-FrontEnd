import { Component, OnInit } from '@angular/core';
import { Automovil } from '../../../modelos/Automovil';
import { AutomovilService } from '../../../servicio/automovil.service';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet, Router} from '@angular/router';

@Component({
  selector: 'app-listar-automovil',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterModule],
  templateUrl: './listar-automovil.component.html',
  styleUrl: './listar-automovil.component.css'
})
export class ListarAutomovilComponent implements OnInit{
  
  automovil?:Automovil[];

  constructor(private automovilService:AutomovilService, private router:Router){}

  ngOnInit():void{

    this.automovilService.getAutomovil().subscribe(
      data=>{
        this.automovil=data;
      },
      error=>{
          console.log(error);
      }
    )
  }

  nuevo():void{
    this.router.navigate(['nuevoAutomovil']);
  }

  editar(automovil:Automovil):void{
    localStorage.setItem("id",automovil.id.toString());
    this.router.navigate(['editarAutomovil']);
  }


  eliminar(automovil:Automovil):void{
    this.automovilService.deleteAutomovil(automovil.id).subscribe(data=>{
        this.automovil=this.automovil?.filter(a=>a!==automovil);
      },
      error=>{
        console.log(error);
      }
    )
  }
}
