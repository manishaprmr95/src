import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../weather.service';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public result:any;
  constructor(private ser:WeatherService) { }

  ngOnInit(): void {
    this.ser.getData("mumbai").subscribe(
      (response)=>{
        console.log(response);
        this.result = response;
      }
    )
  }

  myfunc(cityvalue){
    if(cityvalue!=""){
      this.ser.getData(cityvalue).subscribe(
        (response)=>{
          console.log(response);
          this.result = response;
        }
      )
    }
  }
}
