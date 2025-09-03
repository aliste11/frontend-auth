import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styles: ``
})
export default class Dashboard {
users = signal<any[]>([
  {id:2},{id:3},{id:4}
])
}
