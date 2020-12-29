import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-server-toolbar',
  templateUrl: './server-toolbar.component.html',
  styleUrls: ['./server-toolbar.component.scss']
})
export class ServerToolbarComponent implements OnInit {

  instanceTypes = ['Large', 'Medium', 'Small'];

  serverForm: FormGroup;

  constructor() {
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
  }
}
