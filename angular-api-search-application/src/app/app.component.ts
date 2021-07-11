import {Component} from '@angular/core';
import {DataServeService} from "./data-serve.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'real-estate-api';
  result = null;
  message = null;

  constructor(private dataService: DataServeService) {
  }

  showResults(city_name: string) {
    if (city_name.length === 0) {
      this.result = null;
      this.message = "Please enter search term in the search bar.";
      return;
    }
    try {
      this.dataService.test_api(city_name).subscribe((data) => {
        this.result = data["result"][0];
        if (this.result == null) {
          this.message = "Sorry, we couldn't find anything matching that query.";
        } else {
          this.message = null;
        }
      });
    } catch (error) {
      this.message = "Some error has occured! Please try again.";
    }
  }
}
