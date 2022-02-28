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
import { NavigationComponent } from './layout/navigation/navigation.component';
import { SalesReportComponent } from './admin/sales-report/sales-report.component';
import { SalesComponent } from './import/sales/sales.component';
import { ReportSalesComponent } from './report/sales/sales.component';
import { StatusReportComponent } from './admin/status-report/status-report.component';
import { PendingManifestComponent } from './admin/pending-manifest/pending-manifest.component';
import { ReportPendingManifestComponent } from './report/pending-manifest/pending-manifest.component';
import { SummaryComponent } from './admin/summary/summary.component';
import { CreateLoginComponent } from './admin/create-login/create-login.component';
import { StatusEntryComponent } from './admin/status-entry/status-entry.component';
import { BusinessComponent } from './admin/business/business.component';
import { PODDownloadComponent } from './admin/poddownload/poddownload.component';
import { StockIssueComponent } from './admin/stock-issue/stock-issue.component';
import { PendingRunsheetComponent } from './admin/pending-runsheet/pending-runsheet.component';
import { BookingComponent } from './operation/booking/booking.component';
import { FastBookingComponent } from './operation/fast-booking/fast-booking.component';
import { ManifestComponent } from './operation/manifest/manifest.component';
import { InScanComponent } from './operation/in-scan/in-scan.component';
import { RunSheetComponent } from './operation/run-sheet/run-sheet.component';
import { PODupdateComponent } from './operation/podupdate/podupdate.component';
import { PermissionComponent } from './operation/permission/permission.component';
import { UpdateRateComponent } from './billing/update-rate/update-rate.component';
import { GenerateInvoiceComponent } from './billing/generate-invoice/generate-invoice.component';
import { ViewInvoiceComponent } from './billing/view-invoice/view-invoice.component';
import { PickupComponent } from './expense/pickup/pickup.component';
import { ForwardingComponent } from './expense/forwarding/forwarding.component';
import { BranchVendorComponent } from './expense/branch-vendor/branch-vendor.component';
import { DeliveryComponent } from './import/delivery/delivery.component';
import { RTOComponent } from './import/rto/rto.component';
import { QueryComponent } from './report/query/query.component';
import { InboundComponent } from './report/inbound/inbound.component';
import { LogFIleComponent } from './report/log-file/log-file.component';
import { OutstandingComponent } from './report/outstanding/outstanding.component';
import { ExpenseReportComponent } from './report/expense-report/expense-report.component';
import { ExpenseReportStmtComponent } from './report/expense-report-stmt/expense-report-stmt.component';
import { CompanyMasterComponent } from './master/company-master/company-master.component';
import { HUBMasterComponent } from './master/hubmaster/hubmaster.component';
import { BranchMasterComponent } from './master/branch-master/branch-master.component';
import { FranchiseMasterComponent } from './master/franchise-master/franchise-master.component';
import { DestinationMasterComponent } from './master/destination-master/destination-master.component';
import { PincodeMasterComponent } from './master/pincode-master/pincode-master.component';
import { CountryMasterComponent } from './master/country-master/country-master.component';
import { StateMasterComponent } from './master/state-master/state-master.component';
import { ZoneMasterComponent } from './master/zone-master/zone-master.component';
import { MultipleZoneMasterComponent } from './master/multiple-zone-master/multiple-zone-master.component';
import { ODAMasterComponent } from './master/odamaster/odamaster.component';
import { ModeMasterComponent } from './master/mode-master/mode-master.component';
import { ProductMasterComponent } from './master/product-master/product-master.component';
import { CustomerMasterComponent } from './master/customer-master/customer-master.component';
import { ConsigneeMasterComponent } from './master/consignee-master/consignee-master.component';
import { ExpenseMasterComponent } from './master/expense-master/expense-master.component';
import { RateMasterCustomerComponent } from './master/rate-master-customer/rate-master-customer.component';
import { VehicleMasterComponent } from './master/vehicle-master/vehicle-master.component';
import { EmployeeMasterComponent } from './master/employee-master/employee-master.component';
import { RateMasterFranchiseComponent } from './master/rate-master-franchise/rate-master-franchise.component';
import { RateMasterGroupComponent } from './master/rate-master-group/rate-master-group.component';
import { RateMasterViewComponent } from './master/rate-master-view/rate-master-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboaradComponent,
    NotFoundComponent,
    BannerComponent,
    NavigationComponent,
    SalesReportComponent,
    StatusReportComponent,
    PendingManifestComponent,
    ReportPendingManifestComponent,
    SummaryComponent,
    CreateLoginComponent,
    StatusEntryComponent,
    BusinessComponent,
    PODDownloadComponent,
    StockIssueComponent,
    PendingRunsheetComponent,
    BookingComponent,
    FastBookingComponent,
    ManifestComponent,
    InScanComponent,
    RunSheetComponent,
    PODupdateComponent,
    PermissionComponent,
    UpdateRateComponent,
    GenerateInvoiceComponent,
    ViewInvoiceComponent,
    PickupComponent,
    ForwardingComponent,
    BranchVendorComponent,
    ReportSalesComponent,
    SalesComponent,
    DeliveryComponent,
    RTOComponent,
    QueryComponent,
    InboundComponent,
    LogFIleComponent,
    OutstandingComponent,
    ExpenseReportComponent,
    ExpenseReportStmtComponent,
    CompanyMasterComponent,
    HUBMasterComponent,
    BranchMasterComponent,
    FranchiseMasterComponent,
    DestinationMasterComponent,
    PincodeMasterComponent,
    CountryMasterComponent,
    StateMasterComponent,
    ZoneMasterComponent,
    MultipleZoneMasterComponent,
    ODAMasterComponent,
    ModeMasterComponent,
    ProductMasterComponent,
    CustomerMasterComponent,
    ConsigneeMasterComponent,
    ExpenseMasterComponent,
    RateMasterCustomerComponent,
    VehicleMasterComponent,
    EmployeeMasterComponent,
    RateMasterFranchiseComponent,
    RateMasterGroupComponent,
    RateMasterViewComponent
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
