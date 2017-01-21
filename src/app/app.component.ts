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
}

