import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isLoggedIn : any;
  title = 'ProductApp';
  
  constructor(private router: Router){

  }

  ngOnInit(): void {
    this.isLoggedIn = localStorage.getItem("username");
  }

  logout(){
    localStorage.removeItem("username");
    this.goToHome();
  }

  goToHome(){
    this.router.navigate(['']);
  }
}
