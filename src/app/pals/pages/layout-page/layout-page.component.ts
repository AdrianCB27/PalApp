import { Component } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``
})
export class LayoutPageComponent {
  
  constructor(private authService:AuthService) { }
  onLogout(){
    this.authService.logout();
  }

}
