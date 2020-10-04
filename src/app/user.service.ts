import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getList(){
    return this.http.get("https://5f75b1131cf3c900161ce54d.mockapi.io/api/v1/list/users");
  }
  postList(data){
    return this.http.post("https://5f75b1131cf3c900161ce54d.mockapi.io/api/v1/list/users",data);
  }
  getUserDetailsService(id){
    return this.http.get("https://5f75b1131cf3c900161ce54d.mockapi.io/api/v1/list/users/"+id);
  }
}
