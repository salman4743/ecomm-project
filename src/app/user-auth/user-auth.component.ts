import { Component, OnInit } from '@angular/core';
import { Login, SignUp } from '../data-type';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.scss']
})
export class UserAuthComponent implements OnInit {
  showLogin = true;
  isError: string="";

  constructor(private user:UserService) {}
  ngOnInit(): void {
    this.user.userAuthReload()
    
  }

  signUp(data:SignUp){
    console.log(data);
    this.user.userSignUp(data)
    
  }
  login(data:Login){
    this.user.userLogin(data);
    this.user.invalidUserAuth.subscribe((result)=>{
      console.log('apple', result);
      if(result){
        this.isError="Please enter valid user"
      }
      
    })
  }
  openLogin(){
    this.showLogin = true;
  }
  openSignUp(){
    this.showLogin = false;
  }
}
