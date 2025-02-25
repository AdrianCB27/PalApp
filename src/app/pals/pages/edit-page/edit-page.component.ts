import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PalsService } from '../../services/pals.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pal } from '../../../interfaces/pal.interface';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html'
})
export class EditPageComponent implements OnInit{
  public types:string[]=['Grass','Normal','Fire','Ice','Dragon','Water','Ground','Electric','Flying'];
  public currentPal?:Pal;
  public updatedPal?:Pal;

  public form!:FormGroup
  constructor(private palsService:PalsService,private fb: FormBuilder, private activatedRoute: ActivatedRoute,private snackbar: MatSnackBar
  ) {}
  
  ngOnInit(): void {
      this.form=this.fb.group({
         name: ['', Validators.required],
              type: ['', Validators.required],
              abilities: ['', Validators.required],
              trainerTips: ['',Validators.required],
              image: ['',Validators.required]
      })
      this.activatedRoute.params.pipe(
        switchMap(({id})=> this.palsService.getAPal(id))
      ).subscribe((pal)=>{
        this.currentPal=pal;
        this.form.reset(pal);

      })


  }
  onSubmit(){
    if (this.form.invalid) return;
    if(this.currentPal?.id){
      this.updatedPal=this.form.value;
      console.log(this.updatedPal);
      this.palsService.updateAPal(this.currentPal.id,this.updatedPal!).subscribe(
        (pal)=> {
          this.snackbar.open(`${this.updatedPal?.name} Actualizado correctamente`);
        }
      )
    }
  }

}
