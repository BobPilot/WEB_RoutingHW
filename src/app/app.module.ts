import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { MainComponent } from './main/main.component';
import { ListComponent } from './list/list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NewFormComponent } from './new-form/new-form.component';
import {FormsModule} from '@angular/forms';
import {Service} from './service';
import { CardComponent } from './card/card.component';
import { EditComponent } from './edit/edit.component';
import { AlertComponent } from './alert/alert.component';

const appRouters: Routes = [
  {path:'',component:MainComponent},
  {path:'form',component:NewFormComponent},
  {path:'list',component:ListComponent},
  {path:'**',component:NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ListComponent,
    NotFoundComponent,
    NewFormComponent,
    CardComponent,
    EditComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRouters)
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
