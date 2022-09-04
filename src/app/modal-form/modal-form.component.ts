import { Component, OnInit } from '@angular/core';
//import { Output, EventEmitter } from '@angular/core';
import { Todo } from '../models/Todo';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css'],
})
export class ModalFormComponent implements OnInit {
  //@Output() aggiungiFrase = new EventEmitter<string>();

  todos!: Todo[];
  inputTodo: string = '';
  constructor() {}

  ngOnInit(): void {
    this.inputTodo;
  }

  // addNewItem(value: string) {
  //   this.aggiungiFrase.emit(this.addTodo);
  // }
  // addTodo ():void {
  //   this.todos.push({
  //     content: this.inputTodo,
  //     completed: false
  //   });

  //   this.inputTodo = "";
  // }
}
