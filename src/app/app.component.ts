import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title:string='Angular2 Google Map by Sheheryar';
  latitude:number=51.678418;
  logitude:number=7.809007;
  zoom:number=15;

  clickedMarker(lable:string,index:number){
    console.log('click the marker: ${lable||index}')
  }
  
}

