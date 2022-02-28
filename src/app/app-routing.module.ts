import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessComponent } from './admin/business/business.component';
import { CreateLoginComponent } from './admin/create-login/create-login.component';
import { PendingManifestComponent } from './admin/pending-manifest/pending-manifest.component';
import { PendingRunsheetComponent } from './admin/pending-runsheet/pending-runsheet.component';
import { PODDownloadComponent } from './admin/poddownload/poddownload.component';
import { SalesReportComponent } from './admin/sales-report/sales-report.component';
import { StatusEntryComponent } from './admin/status-entry/status-entry.component';
import { StatusReportComponent } from './admin/status-report/status-report.component';
import { StockIssueComponent } from './admin/stock-issue/stock-issue.component';
import { SummaryComponent } from './admin/summary/summary.component';
import { DashboaradComponent } from './dashboarad/dashboarad.component';


import { AuthGuard } from './guards/auth.guard';

import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"dashboard",
    component:DashboaradComponent,canActivate:[AuthGuard]
  },
  //admin routes
  {
    path:"salesReport",
    component:SalesReportComponent
  },
  {
    path:"statusReport",
    component:StatusReportComponent
  },
  {
    path:"pendingManifest",
    component:PendingManifestComponent
  },
  {
    path:"pendingRunSheet",
    component:PendingRunsheetComponent
  },
  {
    path:"summary",
    component:SummaryComponent
  },
  {
    path:"createLogin",
    component:CreateLoginComponent
  },
  {
    path:"statusEntry",
    component:StatusEntryComponent
  },
  {
    path:"business",
    component:BusinessComponent
  },
  {
    path:"PODdownload",
    component:PODDownloadComponent
  },
  {
    path:"stockIssue",
    component:StockIssueComponent
  },

  
  {path:"**",
  component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
