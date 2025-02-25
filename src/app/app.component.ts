import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'PalApp';
  constructor(private authService:AuthService) {
    
  }
  ngOnInit(): void {
    this.authService.checkAuthenticacion().subscribe( ()=>
      console.log("Validada la autenticacion")
    )
  }
}
