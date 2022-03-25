import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { completedItems } from 'src/shared/models/completedItemsArr';
import { itemArray } from 'src/shared/models/ItemArray';
import { ToDoItem } from 'src/shared/models/to-do-item-class';

@Component({
  selector: 'todo-item-card',
  templateUrl: './todo-item-card.component.html',
  styleUrls: ['./todo-item-card.component.scss']
})
export class TodoItemCardComponent implements OnInit {

  // @Output() cardDetails: EventEmitter<ToDoItem> = new EventEmitter<ToDoItem>();
  constructor() { }

  ngOnInit(): void {
  }

  cardArr: ToDoItem[] = itemArray;

  editTask(item: ToDoItem){
    /*send the index of item in the array to 
    the form for changes and save the new values.*/
    console.log("edit");
  }

  deleteTask(item: ToDoItem){
    /*send the card to this function to delete 
    it from the array */
    let index: number = itemArray.indexOf(item)
    itemArray.splice(index, 1);
    // console.log("delete", index, itemArray);
  }

  completeTask(item: ToDoItem){
    /*move the card to the "completed Array" 
    and add the point value of the card to the 
    displayed point value on the main page component */
    console.log("complete");
    let index: number = itemArray.indexOf(item)
    itemArray.splice(index, 1);
    completedItems.push(item);

  }

}
