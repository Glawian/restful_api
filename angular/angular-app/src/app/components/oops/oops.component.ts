import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-oops',
  templateUrl: './oops.component.html',
  styleUrls: ['./oops.component.css']
})
export class OopsComponent {

  constructor(private router: Router) { }

  mainPage() {
    this.router.navigate(['']);
  }

}
