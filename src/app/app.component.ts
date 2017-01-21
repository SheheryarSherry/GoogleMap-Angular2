import { Component } from '@angular/core';
import {MapsAPILoader,NoOpMapsAPILoader,MouseEvent,ANGULAR2_GOOGLE_MAPS_PROVIDERS
} from 'angular2-google-maps/core';
interface marker{
  lat:number;
  lng:number;
  lable?:string;
  dragabble:boolean;
  icon?:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ANGULAR2_GOOGLE_MAPS_PROVIDERS]
})
export class AppComponent {
  title:string='Angular2 Google Map by Sheheryar';
  latitude:number=51.678418;
  logitude:number=7.809007;
  zoom:number=15;

  clickedMarker(lable:string,index:number){
    console.log('click the marker: ${lable||index}')
  }
  markers:marker[]=[
    {
      lat:-37.7863713,
      lng:175.2796333,
      dragabble:false
    },
    {
      lat:-37.8253519,
      lng:175.30493468,
      dragabble:false
    }

  ];
}

