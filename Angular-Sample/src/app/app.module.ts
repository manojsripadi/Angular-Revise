import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from './Components/header/header.module';
import { FooterModule } from './Components/footer/footer.module';
import { MenuModule} from './Components/menu/menu.module';
import { AppComponent } from './app.component';
import { HideDirective } from './hide.directive';
import { SortColorPipe } from './Pipe/sort-color.pipe';
import { DataService } from './utils/data-service';
import { UserComponent } from './Components/user/user.component';
import { UsersComponent } from './Components/users/users.component';
import { AuthGuard } from './utils/guard/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HideDirective,
    SortColorPipe,
    UserComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HeaderModule,
    FooterModule,
    MenuModule
  ],
  providers: [DataService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
