import {Component, OnInit} from '@angular/core';
import {Server} from '../Models/server.model';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.scss']
})
export class ServerListComponent implements OnInit {

  servers: Server[] = [
    {name: 'Prod Server', status: 'online', instanceType: 'large', date: new Date(29, 12, 2020)},
    {name: 'Dev Server', status: 'online', instanceType: 'medium', date: new Date(29, 12, 2020)},
    {name: 'Database Server', status: 'offline', instanceType: 'small', date: new Date(29, 12, 2020)},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  getServeStatus(server: Server): string {
    if (server.status === 'online') {
      return 'list-group-item-success';
    } else {
      return 'list-group-item-danger';
    }

  }
}
