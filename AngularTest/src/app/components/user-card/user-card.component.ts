import { Component ,Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  @Input() cardData: any;
  constructor(private router: Router) {}
  onClickUserInfo(userId: number) {
    this.router.navigate(['/user-info', userId]);
  }
}
