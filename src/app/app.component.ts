import { Component } from '@angular/core';

import { Service, Employee } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Service],
})
export class AppComponent {
  employee: Employee;
  isHomeAddressVisible: any;
  checkBoxOptions: any;
  phoneOptions: any[] = [];
  addPhoneButtonOptions: any;
  positions: any;
  checkBoxValue: boolean;
  constructor(service: Service) {
    this.checkBoxValue = true;
    this.positions = service.getPositions();
    this.employee = service.getEmployee();
    this.isHomeAddressVisible = true;
    // this.checkBoxOptions = {
    //   text: 'Show Address',
    //   value: this.isHomeAddressVisible,
    //   onValueChanged: (e: any) => {
    //     let value = e.value;
    //     e.value = !value;
    //     console.log(e);
    //     this.isHomeAddressVisible = e.component.option('value');
    //   },
    // };
  }
  changeValue(e: any) {
    this.isHomeAddressVisible = e.component.option('value');
  }
}
