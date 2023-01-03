import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { WeatherForecast, WeatherForecastClient, WorldCupClient } from 'src/client/angularNetWebApiClient';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular-NetWebApi';

  public weatherForecasts: WeatherForecast[] = [];
  public wcWinner: string = '';

  constructor(private weatherForecastClient: WeatherForecastClient, private worldCupClient: WorldCupClient){

  }

  ngOnInit() : void {
    this.getWeather();
    this.getWorldCupWinner();
  }

  public getTest() : string {
    return 'Success';
  }

  public getWeather() : void {
    this.weatherForecastClient.get().subscribe((values) => {
      this.weatherForecasts = values;
    });
  }

  private getWorldCupWinner() : void {
    this.worldCupClient.getWinner().subscribe((value) => {
      this.wcWinner = value;
    });
  }
}
