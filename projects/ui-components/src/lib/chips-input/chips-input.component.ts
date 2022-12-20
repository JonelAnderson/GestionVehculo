import { Component, Input, OnInit } from '@angular/core';
import { MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'cad-chips-input',
  templateUrl: './chips-input.component.html',
  styleUrls: ['./chips-input.component.scss']
})
export class ChipsInputComponent implements OnInit {
  @Input() InputLabel:string;
  @Input() InputCheckLabel:string;
  itemsControl = new FormControl([]);
  @Input()  items: any[];
  constructor() { }

  ngOnInit(): void {
  }
  onItemRemoved(item: string) {
    const items = this.itemsControl.value as string[];
    this.removeFirst(items, item);
    this.itemsControl.setValue(items); // To trigger change detection
  }

  private removeFirst<T>(array: T[], toRemove: T): void {
    const index = array.indexOf(toRemove);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }
}
