import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Router, RouterModule } from '@angular/router';


// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class Auth {
  // Configure Auth0

  lock = new Auth0Lock('fWLIc6gHhVx9cNzyzJ3DZc2VpDyXSYF5', 'jdoyle112.auth0.com', {});

  user: any;

  constructor(private router: Router) {
    // Add callback for lock `authenticated` event
    this.user = JSON.parse(localStorage.getItem('profile'));
   
    this.lock.on("authenticated", (authResult:any) => {
        localStorage.setItem('id_token', authResult.idToken);

      this.lock.getProfile(authResult.idToken, function(error: any, profile: any){

        console.log('profile');
       /* if(error){
          alert(error);
          return;
        }*/

        localStorage.setItem('profile', JSON.stringify(profile));
        console.log(profile);
        this.user = profile;
      });
      //this.router.navigate(['/profile']);
    });
  }


  public login() {
    // Call the show method to display the widget.
    this.lock.show();
  };

  public authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  };

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    this.user = undefined;
  };
}