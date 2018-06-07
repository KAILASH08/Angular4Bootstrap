import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-create-package',
  templateUrl: './app-create-package.component.html',
  styleUrls: ['./app-create-package.component.css']
})
export class AppCreatePackageComponent implements OnInit {

  time = {hour: 13, minute: 30};

  selectedValue: string;

  public CalImgUrl ="./assets/calendar-icon.svg";

  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  constructor() { }

  ngOnInit() {
  }

  public config = { hour: 7, minute: 15, meriden: 'PM', format: 12 };

}
