import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { VehicleService } from '@cad-private/vehicles/shared/services/vehicle-service.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'cad-table-filter',
  templateUrl: './table-filter.component.html',
  styleUrls: ['./table-filter.component.scss'],
})
export class TableFilterComponent implements OnInit {
  @Output() searchEvent = new EventEmitter<number>();
  @Output() editEvent = new EventEmitter<number>();
  @Output() deleteEvent = new EventEmitter<number>();

  @ViewChild('dt') dt: Table | undefined;
  @Input() items: any[];
  selectedItem: any;
  @Input() actions: any[];
  @Input() columns: any[];

  scrollable: any;

  private ACTIVE: string = 'Activo';
  private UNSUSCRIBE: string = 'De Baja';

  constructor() {}

  ngOnInit(): void {
    if (this.columns.length > 9) {
      this.scrollable = true;
    }
    if (this.columns.length < 9 && screen.width <= 1400) {
      this.scrollable = false;
    }
    if (screen.width < 1024) {
      this.scrollable = true;
    }
  }
  ngOnChanges() {
    if (this.items != null) {
      this.items.forEach(x => {
        if (x.registrationState) {
          x.registrationState = this.ACTIVE;
        } else x.registrationState = this.UNSUSCRIBE;
      });
    }
  }

  applyFilterGlobal($event, stringVal) {
    this.dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  searchAction(id: number) {
    this.searchEvent.emit(id);
  }
  editAction(id: number) {
    this.editEvent.emit(id);
  }
  deleteAction(id: number) {
    this.deleteEvent.emit(id);
  }
}
