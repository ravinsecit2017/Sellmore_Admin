import { Component, OnInit } from '@angular/core';
import { BackendApiService } from '../services/backend-api.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.sass']
})
export class TestComponent implements OnInit {
  datalist: any;
  constructor(private backendApiService: BackendApiService) {}

  ngOnInit(): void {
    this.showData();
  }

  async showData() {
    let dt = await this.backendApiService.getPrice(
      'P5HypGUHEkuAGieAlqK4j7MpZp35GbhVSdn41wHo2QzdtCLRQ9CW2pNypWo9TcTz'
    );
    console.log('dt', dt);
    this.datalist = dt;
    //console.log(JSON.stringify(this.dataList));
  }
}
