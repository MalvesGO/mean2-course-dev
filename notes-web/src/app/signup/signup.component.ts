import {Component, OnInit} from '@angular/core';
import {AuthService} from "../shared/auth.service";
import {User} from "../shared/user";

@Component({
    moduleId: module.id,
    selector: 'signup',
    templateUrl: 'signup.component.html',
    styleUrls: ['signup.component.css']
})
export class SignupComponent implements OnInit {

    public user:User = new User(null, null);
  
    constructor(private authService:AuthService) {
    }

    onSubmit():void {
        this.authService.signUp(this.user).subscribe(
            (user) => {
                console.log(JSON.stringify(user));
            },
            (err) => {
                console.log(err);
            }
        );
    }
    
    ngOnInit() {
    }
}
