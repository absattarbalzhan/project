import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopSpecialistsComponent } from './top-specialists/top-specialists.component';
import { CategoriesComponent } from './categories/categories.component';
import { LogInComponent } from './log-in/log-in.component';
import { MainListComponent } from './main-list/main-list.component';
import { MainComponent } from './main/main.component';
import { MySpecialistsComponent } from './my-specialists/my-specialists.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { SpecialistDetailComponent } from './specialist-detail/specialist-detail.component';
import { SavedComponent } from './saved/saved.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopSpecialistsComponent,
    CategoriesComponent,
    LogInComponent,
    MainListComponent,
    MainComponent,
    MySpecialistsComponent,
    NavbarComponent,
    ProfileDetailComponent,
    SpecialistDetailComponent,
    SavedComponent,
    SignUpComponent,
    UserProfileComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
