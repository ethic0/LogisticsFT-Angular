import { Component, OnInit, ViewChild } from '@angular/core';
import { delay } from 'rxjs/operators';
import { BreakpointObserver } from '@angular/cdk/layout';

import { MatSidenav } from '@angular/material';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-dashboarad',
  templateUrl: './dashboarad.component.html',
  styleUrls: ['./dashboarad.component.scss']
})
export class DashboaradComponent implements OnInit {
id:string;
  constructor(private router:Router,
    private authService:AuthService,private observer: BreakpointObserver) { }
 @ViewChild(MatSidenav)
 sidenav!:MatSidenav;
 search : String ="";
  ngOnInit() {
    // let data = localStorage.getItem("userid");
    // if(!data)
    //   this.router.navigate(["/"]);
    
    this.id = localStorage.getItem('token');

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
