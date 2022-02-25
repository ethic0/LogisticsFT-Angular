import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatTreeModule, MatTabsModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';

import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboaradComponent } from './dashboarad/dashboarad.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { BannerComponent } from './banner/banner.component';
import { MainDBComponent } from './main-db/main-db.component';
import { BookingComponent } from './dBComponents/Operation/booking/booking.component';
import { SalesReportComponent } from './dBComponents/admin/sales-report/sales-report.component';
import { NavigationComponent } from './layout/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboaradComponent,
    NotFoundComponent,
    
    BannerComponent,
    MainDBComponent,
    BookingComponent,
    SalesReportComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatTreeModule,
    MatTabsModule
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
