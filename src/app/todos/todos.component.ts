import { Component, OnInit, Input} from '@angular/core';
import { Todo } from '../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  titolo = 'To Do List';

  todos!: Todo[];
  //@Input() inputTodo!:string

  inputTodo:string = "";


  constructor() {}

  ngOnInit(): void {
    this.todos = [
      {
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis modi deleniti praesentium porro.',
        completed: false,
      },
    ];
  }
  // barra
  toggleDone(id: number) {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;
      return v;
    });
  }
  // cancella
  deleteTodo(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

 addTodo ():void {
      this.todos.push({
        content: this.inputTodo,
        completed: false
      });

      this.inputTodo = "";
    }
}
