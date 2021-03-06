import { Component, OnInit } from '@angular/core';
import { UserComponent } from 'src/app/modules/user/user.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends UserComponent implements OnInit {

  constructor(

  ) { 
    super(

    );
  }

  ngOnInit(): void {
  }

}
