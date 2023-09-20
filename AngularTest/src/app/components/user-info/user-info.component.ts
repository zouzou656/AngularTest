import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserInfoService } from './user-info.service';
import { User } from 'src/app/Models/User';
import { shareReplay, catchError } from 'rxjs';
import { OverlayService } from '../loader-overlay/overlay.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent {
  userId!: string | null;
  user!: User;
  constructor(private route: ActivatedRoute,private router: Router,private userInfoService:UserInfoService,private overlayService: OverlayService) {}


  goBack() {
    this.router.navigate(['/users-list']);
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.userId = params.get('userId');
      
      this.userInfoService.getUserById(this.userId) .subscribe(response => {
        this.overlayService.open();
        this.user = response.data;
        this.overlayService.close();
        shareReplay({ bufferSize: 1, refCount: true }),catchError(error => captureException(error));
      });
    });
  }
}
function captureException(error: any): any {
  throw new Error('Function not implemented.');
}

