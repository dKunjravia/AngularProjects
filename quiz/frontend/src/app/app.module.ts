import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { 
  MatButtonModule, 
  MatInputModule, 
  MatCardModule, 
  MatListModule, 
  MatToolbarModule, 
  MatExpansionModule, 
  MatRadioModule,
  MatDialogModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { QuestionComponent } from './question.component';
import { ApiService } from './api.service';
import { AuthService } from './auth.service';
import { AuthInterceptop } from './auth.interceptor';
import { QuestionsComponent } from './questions.component';
import { HomeComponent } from './home.component';
import { NavComponent } from './nav.component';
import { QuizComponent } from './quiz.component';
import { QuizzesComponent } from './quizzes.component';
import { RegisterComponent } from './register.component';
import { LoginComponent } from './login.component';
import { PlayComponent } from './play.component';
import { PlayQuizComponent } from './playQuiz.component';
import { FinishedComponent } from './finished.component';

const routes = [
  { path: '', component: HomeComponent},
  { path: 'question', component: QuestionComponent},
  { path: 'question/:quizId', component: QuestionComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'quiz', component: QuizComponent},
  { path: 'login', component: LoginComponent},
  { path: 'play', component: PlayComponent},
  { path: 'playQuiz/:quizId', component: PlayQuizComponent}
]

@NgModule({
  declarations: [
    AppComponent, 
    QuestionComponent, 
    QuestionsComponent, 
    HomeComponent, 
    NavComponent, 
    QuizComponent,
    QuizzesComponent,
    RegisterComponent,
    LoginComponent,
    PlayComponent,
    PlayQuizComponent,
    FinishedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatRadioModule,
    MatDialogModule
  ],
  providers: [ApiService, AuthService, 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptop,
      multi: true
    }],
  bootstrap: [AppComponent],
  entryComponents: [FinishedComponent]
})
export class AppModule { }
