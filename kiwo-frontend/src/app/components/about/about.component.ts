import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/DataService';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(private dataService: DataService) {}
  appdata: any = [];

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.dataService.getDataObservable().subscribe((data) => {
      this.appdata = this.dataService.anmeldung;
    });
  }
}
