import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectComponent } from './components/select/select.component';
import { DisplayWomanComponent } from './components/display-woman/display-woman.component';
import { HeaderComponent } from './pages/header/header.component';
import { DrawComponent } from './pages/draw/draw.component';
import { AbsentComponent } from './pages/absent/absent.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DisplayManComponent } from './components/display-man/display-man.component';
import { AbsentManComponent } from './components/absent-man/absent-man.component';
import { AbsentWomanComponent } from './components/absent-woman/absent-woman.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectComponent,
    DisplayWomanComponent,
    HeaderComponent,
    DrawComponent,
    AbsentComponent,
    NotFoundComponent,
    DisplayManComponent,
    AbsentManComponent,
    AbsentWomanComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
