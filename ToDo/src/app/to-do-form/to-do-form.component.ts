import { NullVisitor } from '@angular/compiler/src/render3/r3_ast';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { ToDoItem } from '../../shared/models/to-do-item-class';

@Component({
  selector: 'todo-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.scss']
})
export class ToDoFormComponent implements OnInit {

  @Input()editIndex!: number;
  /* ^^ this will allow for the editing of the to do task by opening the modal
   with the populated values of the ToDoItem. */
  @Output() todoForm: EventEmitter<object> = new EventEmitter<object>();
  /* ^^output for the form values to the main body component */
  @Output() close: EventEmitter<void> = new EventEmitter<void>();
  /* ^^ output event to close the modal on the main page component */

  hideModel: Boolean = true;
  due: Boolean = false; //<-- boolean value to hide the date input field 

  isDue() {
    //toggles boolean to hide date input field 
    if (!this.due) { this.due = true } else { this.due = false }
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    /*emits events to send the form's values and to
     close the form modal to the main component.*/
    this.todoForm.emit(form.value);
    this.modalClose()
  }
  
  modalClose() { 
    //sends event to toggle form modal in main component.
    this.close.emit();
  }

}
