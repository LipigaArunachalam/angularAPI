// src/app/data-display/data-display.component.ts
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent implements OnInit {

  data: any[] = [];
  error: string = '';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(
      (data) => {
        this.data = data;
        console.log(data);
      },
      (error) => {
        this.error = `Error fetching data: ${error.message}`;
        console.error('Error fetching data', error);      }
    );
  }

}
