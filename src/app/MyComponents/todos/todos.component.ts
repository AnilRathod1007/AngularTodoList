import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  constructor() {
    this.todos = [
      {
        slno: 1,
        title: 'hii',
        desc: 'how are you',
        active: true,
      },
      {
        slno: 2,
        title: 'hello',
        desc: 'good morning',
        active: true,
      },
      {
        slno: 3,
        title: 'hey',
        desc: 'what are you doing',
        active: true,
      },
    ];
  }

  ngOnInit(): void {}

  deleteTodo(todo: Todo) {
    console.log(todo);
    let index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
  addTodo(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
  }
}
