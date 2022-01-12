import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from '../_services/user-auth.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(
    private userService: UserService,
    private router: Router,
    private userAuthenService: UserAuthService
  ) {}

  ngOnInit(): void {}

  signup(signupForm: NgForm) {
    this.userService.signup(signupForm.value).subscribe(
      (response: any) => {
        console.log(response[0]);

        this.userAuthenService.setSignupResponse(response[0]);
        this.router.navigate(['/login']);
        //this.userAuthenService.setToken(response.jwtToken);
        // this.userAuthenService.setRoles(response.user.role);
        /*
        const role = response.user.role[0].roleName;
        if (role === 'Admin') {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/user']);
        }
        */
      },

      (error) => {
        console.log(error);
      }
    );
  }

  public isSignUpResponse() {
    return this.userAuthenService.isSignUpResponse();
  }

  public isSignUpResponseMatched() {
    return this.userService.signupResponseMatch('success');
  }
}
