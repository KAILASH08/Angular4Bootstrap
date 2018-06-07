import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Component, Pipe, PipeTransform, enableProdMode, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import {TranslateModule} from '@ngx-translate/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; //importing the module
import { Ng2OrderModule } from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NewPackagescheduleComponent } from './new-packageschedule/new-packageschedule.component';
import { RouterModule, Routes  } from '@angular/router';
import { routing, appRoutingProviders }  from './app.routing';
import { AppSearchComponent } from './app-search/app-search.component';
import { AppPageNotFoundComponent } from './app-page-not-found/app-page-not-found.component'
import {NgTree} from "ng.tree";
import { AngularDualListBoxModule } from 'angular-dual-listbox'
import { CustomListboxComponent } from './custom-listbox/custom-listbox.component';
import { AppCreatePackageComponent } from './app-create-package/app-create-package.component';
import {MatNativeDateModule, MatInputModule, MatSlideToggleModule} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { Ng5TimePickerModule } from 'ng5-time-picker';
import { FlexLayoutModule } from '@angular/flex-layout';

const appRoutes: Routes = [
  { path: 'search', component: AppSearchComponent },
  { path: 'newpackage' , component : NewPackagescheduleComponent},
  { path: '',   redirectTo: '/search', pathMatch: 'full' },
  { path: '**', component: AppPageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AppFooterComponent,
    NewPackagescheduleComponent,
    AppSearchComponent,
    AppPageNotFoundComponent,
    NgTree,
    CustomListboxComponent,
    AppCreatePackageComponent
  ],
  exports: [
    CustomListboxComponent
	],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    CommonModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    HttpClientModule,
    Ng5TimePickerModule,
    MatNativeDateModule,
    FlexLayoutModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatSlideToggleModule,
    AngularDualListBoxModule ,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
