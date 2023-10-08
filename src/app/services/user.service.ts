import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { Login, SignUp } from '../data-type';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {

  invalidUserAuth = new EventEmitter<boolean>(false)

  constructor(private http:HttpClient, private router:Router) { }
  ngOnInit(): void {
    
    
  }

  userSignUp(user:SignUp){
    console.log(user);
    this.http.post("http://localhost:3000/user",user,{observe:'response'}).subscribe((result)=>{
      console.log(result);
      if(result){
        localStorage.setItem('user', JSON.stringify(result.body))
        this.router.navigate(['/'])
        console.log(result);
        
      }
      
    })
    
  }
  userLogin(data:Login){
    console.log(data);
    this.http.get<SignUp[]>(`http://localhost:3000/user?email=${data.email}&password=${data.password}`,{observe: 'response'}).subscribe((result)=>{
      // console.log(result);
      if(result && result.body?.length){
        this.invalidUserAuth.emit(false)
        localStorage.setItem('user', JSON.stringify(result.body[0]))
        this.router.navigate(['/'])
        console.log(result);
      }else{
        this.invalidUserAuth.emit(true)
      }
      
    })
    
  }


  userAuthReload(){
    if(localStorage.getItem('user')){
      this.router.navigate(['/']);

    }
  }
}
