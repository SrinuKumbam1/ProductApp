import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isLoggedIn =false;
  title = 'ProductApp';
  
  constructor(private router: Router){
    router.events.subscribe(
      (val)=>{
        if(val instanceof NavigationEnd){
          if(val.url=='/login'){
            this.isLoggedIn = false;
          }
          else if(val.url == '/'){
            this.isLoggedIn = false;
          }
          else{
            this.isLoggedIn = true;
          }
        }
      }
    )
  }

  ngOnInit(): void {

  }

}
