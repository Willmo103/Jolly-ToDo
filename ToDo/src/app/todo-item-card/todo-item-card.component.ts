import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { completedItems } from 'src/shared/models/completedItemsArr';
import { itemArray } from 'src/shared/models/ItemArray';
import { leftArr } from 'src/shared/models/leftArray';
import { rightArr } from 'src/shared/models/rightArray';
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

  @Output() updatePoints: EventEmitter<number> = new EventEmitter<number>();
  @Output() editEntry: EventEmitter<ToDoItem> = new EventEmitter<ToDoItem>();
  
  cardArr: ToDoItem[] = itemArray;/* mirrors the shared array
   to pass completed ToDoItems into and read them out of*/

  left: ToDoItem[] = leftArr;
  right: ToDoItem[] = rightArr;

  deleteTask(item: ToDoItem) {
    /*send the card to this function to delete 
    it from the array */
    if (leftArr.includes(item)){
      leftArr.splice((leftArr.indexOf(item)), 1);
    } else 
      rightArr.splice((rightArr.indexOf(item)), 1);
    // let index: number = itemArray.indexOf(item);
    itemArray.splice((itemArray.indexOf(item)), 1);
    // console.log("delete", index, itemArray);
    this.organize();
  }

  editTask(item: ToDoItem) {
    /*send the index of item in the array to 
    the form for changes and save the new values.*/
    // this.deleteTask(item);
    let index: number;
    console.log(item);
    if (leftArr.includes(item)){
      index = leftArr.indexOf(item);
      this.editEntry.emit(leftArr[index]);
      // console.log(index + "Left");
    } else if (rightArr.includes(item)){
      index = rightArr.indexOf(item);
      this.editEntry.emit(rightArr[index])
      // console.log(index + "Right");

    }
  }

  completeTask(item: ToDoItem) {
    /*move the card to the "completed Array" 
    and add the point value of the card to the 
    displayed point value on the main page component */
    completedItems.push(item);
    this.deleteTask(item);
    this.updatePoints.emit(item.pointVal);
    this.organize();
  }

  organize(){
    if (rightArr.length === leftArr.length + 1){
      return;
    }  
    if (rightArr.length > leftArr.length && rightArr.length !== 0){
      leftArr.push(rightArr[rightArr.length - 1]);
      rightArr.pop();
    } else if (leftArr.length > rightArr.length && leftArr.length !== 0){ 
      rightArr.push(leftArr[leftArr.length - 1]);
      leftArr.pop();
    } 
  }


}
