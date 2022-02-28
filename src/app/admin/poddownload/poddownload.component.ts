import { Component, OnInit,ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { delay } from 'rxjs/operators';
import { MatSidenav } from '@angular/material';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-poddownload',
  templateUrl: './poddownload.component.html',
  styleUrls: ['./poddownload.component.scss']
})
export class PODDownloadComponent implements OnInit {
  @ViewChild(MatSidenav)
  sidenav!:MatSidenav;
  constructor(private observer: BreakpointObserver, private authService:AuthService, private router:Router) { }
  search:String=""
  ngOnInit() {
  }
  logout(){
    console.log("loggin out");
    this.authService.logout();
    this.router.navigate([""]);
  }
  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
  }
}
