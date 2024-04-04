import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import { CurdService } from '../../service/crud.service';
import { Output, EventEmitter } from '@angular/core';
import {UserInfoComponent} from "../user-info/user-info.component";
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    UserInfoComponent,
    CommonModule
  ],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  encapsulation: ViewEncapsulation.None

})

export class AuthComponent implements OnInit {
  authForm: FormGroup;
  isSubmitted = false;
  @Output() submitted = new EventEmitter<boolean>();
  constructor(private fb: FormBuilder, private dataService: CurdService) {
    this.authForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.email],
      withoutEmail: [false]
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.authForm.valid) {
      this.dataService.setUserData(this.authForm.value);
      this.authForm.reset();
      this.isSubmitted = true;
      this.submitted.emit(true);
    }
  }

  get withoutEmail() {
    return this.authForm.get('withoutEmail');
  }
}
