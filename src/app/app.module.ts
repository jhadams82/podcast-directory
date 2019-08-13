import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';

// Components
import { HeaderComponent } from './components/header/header.component';
import { PodcastListComponent } from './components/podcast-list/podcast-list.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

// Structure & Routes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './routes/home/home.component';
import { PodcastDetailComponent } from './routes/podcast-detail/podcast-detail.component';
import { PodcastInfoComponent } from './routes/podcast-info/podcast-info.component';
import { PodcastFormComponent } from './components/podcast-form/podcast-form.component';
import { AccountNavComponent } from './components/account-nav/account-nav.component';
import { SubscriptionFormComponent } from './components/subscription-form/subscription-form.component';
import { SocialFormComponent } from './components/social-form/social-form.component';
import { LoginComponent } from './routes/login/login.component';
import { TypographyComponent } from './routes/typography/typography.component';

@NgModule({
  declarations: [
    AppComponent,
    PodcastListComponent,
    HeaderComponent,
    HomeComponent,
    SearchBarComponent,
    PodcastDetailComponent,
    PodcastInfoComponent,
    PodcastFormComponent,
    AccountNavComponent,
    SubscriptionFormComponent,
    SocialFormComponent,
    LoginComponent,
    TypographyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
