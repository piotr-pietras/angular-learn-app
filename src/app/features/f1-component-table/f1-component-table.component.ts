import { Component } from '@angular/core';

const COLUMNS = [
  { headerName: 'name' },
  { headerName: 'surname' },
  { headerName: 'sex' },
  { headerName: 'phoneNumber' },
];
const DATA = [
  { name: 'Adaś', surname: 'Fajny', sex: 'male', phoneNumber: 123123123 },
  { name: 'Ania', surname: 'Duża', sex: 'female', phoneNumber: 123123123 },
  { name: 'Marek', surname: 'Brzydki', sex: 'male', phoneNumber: 123123123 },
  { name: 'Klaudia', surname: 'Mała', sex: 'female', phoneNumber: 123123123 },
] as any[];

@Component({
  selector: 'app-f1-component-table',
  templateUrl: './f1-component-table.component.html',
  styleUrls: ['./f1-component-table.component.scss'],
})
export class BasicsComponent {
  columns = COLUMNS;
  data = DATA;
}
