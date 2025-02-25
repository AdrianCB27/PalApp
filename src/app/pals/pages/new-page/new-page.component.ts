import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PalsService } from '../../services/pals.service';
import { PalToPost } from '../../../interfaces/pal.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ValidatorService } from '../../../shared/services/validator.service';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: ``
})
export class NewPageComponent {
  public types:string[]=['Grass','Normal','Fire','Ice','Dragon','Water','Ground','Electric','Flying']
  form!: FormGroup;

  constructor(private fb: FormBuilder, private palsService:PalsService, private snackbar: MatSnackBar) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      abilities: ['', Validators.required],
      trainerTips: ['',Validators.required],
      image: ['',Validators.required]
    });
  }
  onSubmit() {
    if (this.form.valid) {
      const valoresFormulario=this.form.value;

      const newPal:PalToPost={
        name: valoresFormulario.name,
        type: valoresFormulario.type,
        abilities: valoresFormulario.abilities,
        trainerTips: valoresFormulario.trainerTips,
        image: valoresFormulario.image

      }
      this.palsService.createAPal(newPal).subscribe((pal)=>{
        if(pal){
          this.snackbar.open("Pal Añadido Correctamente 👍")
        }else{
          this.snackbar.open("Algo ha ido mal 😯")
        }
      })
    }
  }

}
