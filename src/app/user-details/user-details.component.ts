import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import {AgmMap, MapsAPILoader  } from '@agm/core';  
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {


  model: any = {
    name:'',
    email:'',
    image: '',
    phoneNo:'',
    latitude:'',
    longitude:'',
    address:''
};
  
  zoom: number;
  userList:any = [];
  getAddress: number;
  lat: number;
  lng: number;
  constructor(private service: UserService, private apiloader: MapsAPILoader, private route: Router) { }

  ngOnInit() {
    this.getUserList();
    this.get()  
    this.agmMap.triggerResize(true);  
     this.zoom = 16; 
  }
  @ViewChild(AgmMap,{static: true}) public agmMap: AgmMap;  
  get() {  
    if (navigator.geolocation) {  
        navigator.geolocation.getCurrentPosition((position: Position) => {  
            if (position) {  
                this.lat = position.coords.latitude;  
                this.lng = position.coords.longitude;  
                this.getAddress = (this.lat, this.lng)  
                console.log(position)  
                this.apiloader.load().then(() => {  
                    let geocoder = new google.maps.Geocoder;  
                    let latlng = {  
                        lat: this.lat,  
                        lng: this.lng  
                    };  
                    geocoder.geocode({  
                        'location': latlng  
                    }, function(results) {  
                        if (results[0]) {  
                            this.currentLocation = results[0].formatted_address;  
                            console.log(this.assgin);  
                        } else {  
                            console.log('Not found');  
                        }  
                    });  
                });  
            }  
        })  
    }  
}   

 

   getBase64(event) {
    let me = this;
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      me.model.image = reader.result;
      console.log(reader.result);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
 }

  getUserList(){
this.service.getList().subscribe(
  (res) =>{
this.userList = res;
console.log(this.userList);
},
(err) => {
  console.error(err);
});
  }
  postUser(){
    console.log('model',this.model);
    
    this.service.postList(this.model).subscribe(
      (res)=>{
       console.log('res',res);
       this.getUserList();
       
      },
      (err) => {
        console.error(err);
      }
    );
  }
  userDetails(id){
this.route.navigate(['/details',id]);
  }
  getFile($event){

  }
}
