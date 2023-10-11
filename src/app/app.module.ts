import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';
import { LoginAdminComponent } from './login/login-admin/login-admin.component';
import { LoginUserComponent } from './login/login-user/login-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BillsComponent } from './bills/bills.component';
import { HttpClientModule } from '@angular/common/http';
import { ReceiptsComponent } from './receipts/receipts.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginAdminComponent,
    LoginUserComponent,
    BillsComponent,
    ReceiptsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
