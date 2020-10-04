import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import {AgmMap, MapsAPILoader  } from '@agm/core';  

@Component({
  selector: 'app-user-details-page',
  templateUrl: './user-details-page.component.html',
  styleUrls: ['./user-details-page.component.scss']
})
export class UserDetailsPageComponent implements OnInit {
details: any = [];
  zoom: number;
  lat: number;
  lng: number;
  constructor(private activatedRoute: ActivatedRoute, private service: UserService, private apiloader: MapsAPILoader) { }

  ngOnInit() {
    let id =this.activatedRoute.snapshot.paramMap.get('id');
    console.log('iddddddddddddddddd',id);
    this.getDetails(id);
    this.zoom = 16; 
  }
getDetails(id){
  this.service.getUserDetailsService(id).subscribe(res=>{
    console.log('usersssssssssssss',res);
    this.details = res;
    
  },err=>{
  console.error(err);
  });
}
mapClicked($event: any) {  
  this.details.latitude = $event.coords.lat,  
      this.details.longitude = $event.coords.lng  
  this.apiloader.load().then(() => {  
      let geocoder = new google.maps.Geocoder;  
      let latlng = {  
          lat: this.details.latitude,  
          lng: this.details.longitude  
      };  
      geocoder.geocode({  
          'location': latlng  
      }, function(results) {  
          if (results[0]) {  
              this.currentLocation = results[0].formatted_address;  
              console.log(this.currentLocation);  
          } else {  
              console.log('Not found');  
          }  
      });  
  });  
}  
}
