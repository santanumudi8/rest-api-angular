import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http : HttpClient) { }

  getURL = "http://localhost:8080/get/all/git-details";
  postURL = "http://localhost:8080/add/git-details";

  getData(){
    return this.http.get(this.getURL);
  }

  postData(data:any){
    return this.http.post(this.postURL, data);
  }

}
