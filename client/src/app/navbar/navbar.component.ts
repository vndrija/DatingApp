import { Component, inject } from '@angular/core';
import { AccountService } from '../services/account.service';
import { Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  accountService = inject(AccountService); 
  private router = inject(Router)
  private toastr = inject (ToastrService)

  model: any = {};

  login() {
    this.accountService.login(this.model).subscribe({
      next: () => {
        this.router.navigateByUrl("/members")
        this.toastr.success("You are logged in!")
      },
      error: error => this.toastr.error(error.error)
      
    })
  }

  logout() {
    this.accountService.logout()
    this.router.navigateByUrl("/")
  }

}
