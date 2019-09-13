import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RightColComponent } from './right-col/right-col.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { MidContentComponent } from './mid-content/mid-content.component';
import { HelpContentComponent } from './help-content/help-content.component';
import { NormalContentComponent } from './normal-content/normal-content.component';
import { UserlistComponent } from './userlist/userlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RightColComponent,
    LeftNavComponent,
    MidContentComponent,
    HelpContentComponent,
    NormalContentComponent,
    UserlistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
