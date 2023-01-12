import { Component, OnInit } from '@angular/core';
import { WeatherForecast, WeatherForecastClient, WorldCupClient } from 'src/client/angularNetWebApiClient';

interface Alert {
	type: string;
	message: string;
}

const ALERTS: Alert[] = [
	{
		type: 'success',
		message: 'This is an success alert',
	},
	{
		type: 'info',
		message: 'This is an info alert',
	},
	{
		type: 'warning',
		message: 'This is a warning alert',
	},
	{
		type: 'danger',
		message: 'This is a danger alert',
	},
	{
		type: 'primary',
		message: 'This is a primary alert',
	},
	{
		type: 'secondary',
		message: 'This is a secondary alert',
	},
	{
		type: 'light',
		message: 'This is a light alert',
	},
	{
		type: 'dark',
		message: 'This is a dark alert',
	},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular-NetWebApi';

  public weatherForecasts: WeatherForecast[] = [];
  public wcWinner: string = '';

  public currentRate: number = 4;

  public alerts: Alert[] = [];

  constructor(private weatherForecastClient: WeatherForecastClient, private worldCupClient: WorldCupClient){

  }

  ngOnInit() : void {
    this.getWeather();
    this.getWorldCupWinner();
		this.reset();
  }

  public getTest() : string {
    return 'Success';
  }

  public getWeather() : void {
    this.weatherForecastClient.get().subscribe((values) => {
      this.weatherForecasts = values;
    });
  }

  public close(alert: Alert) {
		this.alerts.splice(this.alerts.indexOf(alert), 1);
	}

	public reset() {
		this.alerts = Array.from(ALERTS);
	}

  private getWorldCupWinner() : void {
    this.worldCupClient.getWinner().subscribe((value) => {
      this.wcWinner = value;
    });
  }
}
