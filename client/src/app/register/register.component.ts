import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { AccountService } from '../services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  private accountService = inject(AccountService)
  private toastr = inject(ToastrService)
  @Output() cancelRegister = new EventEmitter();
  model: any = {}

  register() {
    this.accountService.register(this.model).subscribe({
      next: response => {
        console.log(response);
        this.cancel();
      },
      error: error => this.toastr.error(error.error)
      
    })
  }
  
  cancel() {
    this.cancelRegister.emit(false)
  }
}
