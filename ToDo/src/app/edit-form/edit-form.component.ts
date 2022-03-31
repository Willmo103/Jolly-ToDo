import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { leftArr } from 'src/shared/models/leftArray';
import { rightArr } from 'src/shared/models/rightArray';
import { ToDoItem } from 'src/shared/models/to-do-item-class';
import { NgForm } from '@angular/forms';
import { itemArray } from 'src/shared/models/ItemArray';

@Component({
  selector: 'edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {

  @Output() close: EventEmitter<void> = new EventEmitter<void>();
  @Input() editEntry!: ToDoItem;
  @Output() deleteEditEntry: EventEmitter<void> = new EventEmitter<void>();
  due: Boolean = false; //<-- boolean value to hide the date input field 
  updated: Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  isDue() {
    //toggles boolean to hide date input field 
    if (!this.due) { this.due = true } else { this.due = false };
  }

  onSubmit(form: NgForm) {
    this.modalClose()
    let values = form.value;
    let dueCheck: Boolean = false;

    if (values.dueDate) {
      dueCheck = true;
    }

    let newItem = new ToDoItem(values.title, values.content, dueCheck, values.dueDate, values.priority);

    itemArray[itemArray.indexOf(this.editEntry)] = newItem;

    if (leftArr.includes(this.editEntry)) {
      leftArr[(leftArr.indexOf(this.editEntry))] = newItem;
    } else if (rightArr.includes(this.editEntry)) {
      rightArr[(rightArr.indexOf(this.editEntry))] = newItem;
    }

    let x: void;
    this.deleteEditEntry.emit(x);
  }

  modalClose() {
    //sends event to toggle form modal in main component.
    this.close.emit();
  }

}
