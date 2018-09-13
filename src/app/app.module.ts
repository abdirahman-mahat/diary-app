import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { DiaryComponent } from './diary/diary.component';
import { DiaryDetailsComponent } from './diary-details/diary-details.component';
import { DateCountPipe } from './date-count.pipe';
import { StrikethroughDirective } from './strikethrough.directive';

import { DiaryFormComponent } from './diary-form/diary-form.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    DiaryComponent,
    DiaryDetailsComponent,
    DateCountPipe,
    StrikethroughDirective,
    DiaryFormComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
