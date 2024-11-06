import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TodoPageRoutingModule } from './todo-routing.module';
import { TodoPage } from './todo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodoPageRoutingModule // Certifique-se de que este módulo está corretamente configurado
  ],
  declarations: [TodoPage],
  exports: [TodoPage] // Se necessário, exporte o TodoPage para ser usado em outros módulos
})
export class TodoPageModule {}

