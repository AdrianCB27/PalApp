import { Component, OnInit } from '@angular/core';
import { Pal } from '../../../interfaces/pal.interface';
import { PalsService } from '../../services/pals.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: ``,
})
export class ListPageComponent implements OnInit {
    allPals:Pal[]=[]

    constructor(private palService:PalsService, private router:Router, private snackBar:MatSnackBar ) {}

  ngOnInit(): void {
    this.palService.getAllPals().subscribe((pals)=>{
      this.allPals=pals
      console.log(this.allPals);
    })
  }
  mostrar(pal: Pal) {
    this.router.navigate([`/pals/edit`, pal.id]); 
  }
  deletePal(pal:Pal){
    Swal.fire({
      title: `¿Quieres eliminar a ${pal.name}?`,
      showDenyButton: true,
      confirmButtonText: "Eliminar",
      confirmButtonColor: 'red',
      denyButtonText: `Mantener`,
      denyButtonColor: 'blue'
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.palService.deleteAPal(pal.id).subscribe(pal=>{
    
          if (pal) {
            this.snackBar.open('Pal Eliminado')
            this.router.navigateByUrl('/pals/list');
            setTimeout(() => {
              location.reload()
            }, 600);
            
          }
        })
      }
    });


  }
  



  

}
