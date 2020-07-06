import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {OverviewComponent} from './components/overview/overview.component';
import {HeaderComponent} from './components/header/header.component';
import {SlideshowComponent} from './components/slideshow/slideshow.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { VideoComponent } from './components/video/video.component';
import { AudioComponent } from './components/audio/audio.component';
import { AnimationComponent } from './components/animation/animation.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    HeaderComponent,
    SlideshowComponent,
    VideoComponent,
    AudioComponent,
    AnimationComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
