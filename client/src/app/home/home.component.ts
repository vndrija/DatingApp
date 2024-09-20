import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  ngOnInit(): void {
    this.getUsers()
  }
  registerMode = false;
  users: any;
  http = inject(HttpClient)




  registerToggle() {
    this.registerMode = !this.registerMode
  }

  getUsers() {
    this.http.get('https://localhost:5001/api/users').subscribe({
      next: (response) => this.users = response,
      error: error => console.log(error),
      complete: () => console.log('Get users request prosao ')
    })

  }
  cancelRegisterMode(event: boolean) {
    this.registerMode = event;

}
}
