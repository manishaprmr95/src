import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  public apiKey= "4859f5245043bea568ebfd9ed2f5c671";
  public path = "https://api.openweathermap.org/data/2.5/";
  //https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=4859f5245043bea568ebfd9ed2f5c671

  constructor(private http:HttpClient) { 

    
  }
  getData(location:any){
      return this.http.get(this.path + `weather?q=${location}&appid=${this.apiKey}`);
  }
}
