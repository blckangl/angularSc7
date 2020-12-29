import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ServerService} from '../server.service';
import {Server} from '../Models/server.model';

@Component({
  selector: 'app-server-toolbar',
  templateUrl: './server-toolbar.component.html',
  styleUrls: ['./server-toolbar.component.scss']
})
export class ServerToolbarComponent implements OnInit {

  instanceTypes = ['Large', 'Medium', 'Small'];

  serverForm: FormGroup;

  constructor(private srvService: ServerService) {
  }

  ngOnInit(): void {
    this.serverForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      status: new FormControl('offline', Validators.required),
      instanceType: new FormControl('Large', Validators.required),
      day: new FormControl(10, [Validators.required, Validators.min(1), Validators.max(31)]),
      month: new FormControl(10, [Validators.required, Validators.min(1), Validators.max(12)]),
      year: new FormControl(2020, Validators.required)

    });
  }

  onServerAdded() {
    console.log(this.serverForm);
    const srv = new Server();
    srv.name = this.serverForm.value.name;
    srv.status = this.serverForm.value.status;
    srv.instanceType = this.serverForm.value.instanceType;
    srv.date = new Date(this.serverForm.value.day, this.serverForm.value.month, this.serverForm.value.year);
    this.srvService.addServer(srv);
  }
}
