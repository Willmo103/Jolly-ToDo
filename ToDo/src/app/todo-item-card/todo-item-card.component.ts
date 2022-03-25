import { Component, OnInit } from '@angular/core';
import { itemArray } from 'src/shared/models/ItemArray';
import { ToDoItem } from 'src/shared/models/to-do-item-class';

@Component({
  selector: 'todo-item-card',
  templateUrl: './todo-item-card.component.html',
  styleUrls: ['./todo-item-card.component.scss']
})
export class TodoItemCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cardArr: ToDoItem[] = itemArray;

}
