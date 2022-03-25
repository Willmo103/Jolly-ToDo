import { Component, OnInit } from '@angular/core';
import { ToDoItem } from 'src/shared/models/to-do-item-class';
import { completedItems } from 'src/shared/models/completedItemsArr';
@Component({
  selector: 'completed-cards',
  templateUrl: './completed-cards.component.html',
  styleUrls: ['./completed-cards.component.scss']
})
export class CompletedCardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  completedArr: ToDoItem[] = completedItems;
}
