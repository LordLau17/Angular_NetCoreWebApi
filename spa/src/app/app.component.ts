import { Component, OnInit } from '@angular/core';
import { WeatherForecastClient, WorldCupClient } from 'src/client/angularNetWebApiClient';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular-NetWebApi';

  public wcWinner: string = '';

  constructor(private weatherForecastClient: WeatherForecastClient, private worldCupClient: WorldCupClient){

  }

  ngOnInit(): void {
    this.getWorldCupWinner();
  }

  public getTest(): string {
    return 'Success';
  }

  public getWeather(): string {
    this.weatherForecastClient.get().subscribe((values) => {
      return values[0].summary;
    });

    return 'ErrorLau';
  }

  private getWorldCupWinner() {
    this.worldCupClient.getWinner().subscribe((value) => {
      this.wcWinner = value;
    });
  }
}
