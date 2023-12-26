import { Component } from '@angular/core';
import {UsersService} from './users.service'
import { FormControl, FormGroup } from '@angular/forms';

interface typeP{
  id:number,
  branchName:string,
  commitMessage:string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rest-api-angular';

  // constructor(private users: UsersService){
  //   this.users.getData().subscribe(user=>{
  //     console.warn(user)
  //   })
  // }

  constructor(private userService : UsersService){}

  users:any;
  getUsers(){
    this.userService.getData().subscribe(user=>{
      console.warn(user)
      this.users = user
    })
  }

  userForm = new FormGroup({
    branchName: new FormControl(""),
    commitMessage: new FormControl("")
  })

  onSubmit(){
    this.userService.postData(this.userForm.value).subscribe(response=>{
      console.warn(response)
    })
  }

}


