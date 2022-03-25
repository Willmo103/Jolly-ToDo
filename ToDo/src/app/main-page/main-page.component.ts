import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToDoItem } from '../../shared/models/to-do-item-class';
import { itemArray } from 'src/shared/models/ItemArray';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {


  // toDoItems: ToDoItem[] = new Array<ToDoItem>(); /* <-- array of the items stored and displayed via the cards.*/
  @Output() cardContent: EventEmitter<ToDoItem> = new EventEmitter<ToDoItem>();
  
  toDoArray: ToDoItem[] = itemArray;
  // created a shared array to make sharing easier made a variable here to mirrior sahred array

  points: number = 0; /*<-- Value total of the point score for
  marking items complete.*/

  formDisplay: Boolean = false; /* <-- to toggle the Modal used by
  cancel and submit button on the todo-form, and the new task 
  button on the main page component.*/

  constructor() { }
  ngOnInit(): void {
  }


  displayForm() { 
    // the function used to toggle modal by main page buttons.
    if (this.formDisplay === false) {
      this.formDisplay = true;
    } else {
      this.formDisplay = false;
    }
  }


  modalClose(x: void) { 
    //toggle modal by the form component event emitter.
    this.formDisplay = false;
  }


  
  newToDoItem(todo: any) {
    let item = new ToDoItem(todo.title, todo.content, todo.due, todo.dueDate, todo.priority);
    itemArray.push(item);
    console.log(item);
  }
}