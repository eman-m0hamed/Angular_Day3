import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() login:string="";
  @Output() myevent =new EventEmitter();

  ngOnInit(): void {
    this.myevent.emit(this.login);
  }
}
