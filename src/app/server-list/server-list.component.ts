import {Component, OnInit} from '@angular/core';
import {Server} from '../Models/server.model';
import {ServerService} from '../server.service';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.scss']
})
export class ServerListComponent implements OnInit {

  servers: Server[];

  constructor(private srvService: ServerService) {
  }

  ngOnInit(): void {
    this.servers = this.srvService.getServers();
    this.srvService.serversSubject.subscribe(data => {
      this.servers = data;
    });
  }

  getServeStatus(server: Server): string {
    if (server.status === 'online') {
      return 'list-group-item-success';
    } else {
      return 'list-group-item-danger';
    }

  }
}
