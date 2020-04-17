import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarDirective, BurgerDirective, MenuDirective} from './navbar.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, NavbarDirective, BurgerDirective, MenuDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
