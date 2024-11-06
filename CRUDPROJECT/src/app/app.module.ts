import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouteReuseStrategy } from '@angular/router';

// Importando o TodoPageModule em vez de declarar o TodoPage
import { TodoPageModule } from './todo/todo.module';

@NgModule({
  declarations: [
    AppComponent
    // Não declare o TodoPage aqui, pois já está declarado no TodoPageModule
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TodoPageModule // Importe o TodoPageModule aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
