import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataServeService {
  root_url = "https://dev.gozayaan.com/api/gozayaan_campaign/real_estate_list/?city_name=";

  constructor(private http: HttpClient) {
  }

  test_api(city_name: string) {
    const tree_data = this.http.get(`${this.root_url}${city_name}`);

    return tree_data;
  }
}
