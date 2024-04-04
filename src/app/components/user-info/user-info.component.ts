import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { CurdService } from '../../service/crud.service';
import {CommonModule} from "@angular/common";
@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class UserInfoComponent implements OnInit {
  userData: any;

  constructor(private dataService: CurdService) { }

  ngOnInit() {
    this.dataService.getUserData().subscribe(data => {
      this.userData = data;
    });
  }
}
