import {Component, ViewEncapsulation} from '@angular/core';
import {AuthComponent} from "./components/auth/auth.component";
import {UserInfoComponent} from "./components/user-info/user-info.component";
import {CommonModule} from "@angular/common";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AuthComponent, UserInfoComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class AppComponent {
  title = 'My App';
  isSubmitted = false;
}


