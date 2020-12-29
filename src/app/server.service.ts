import {Injectable} from '@angular/core';
import {Server} from './Models/server.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  servers: Server[] = [
    {name: 'Prod Server', status: 'online', instanceType: 'large', date: new Date(29, 12, 2020)},
    {name: 'Dev Server', status: 'online', instanceType: 'medium', date: new Date(29, 12, 2020)},
    {name: 'Database Server', status: 'offline', instanceType: 'small', date: new Date(29, 12, 2020)},
  ];
  serversSubject = new Subject<Server[]>();


  constructor() {
  }

  getServers(): Server[] {
    return this.servers.slice();
  }

  addServer(srv: Server): void {
    this.servers.push(srv);
    this.serversSubject.next(this.servers.slice());
  }
}
