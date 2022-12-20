import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cad-multi-check-box-filter',
  templateUrl: './multi-check-box-filter.component.html',
  styleUrls: ['./multi-check-box-filter.component.scss']
})
export class MultiCheckBoxFilterComponent implements OnInit {
  @Input() items:any[];
  @Input() GroupName:string;
  constructor() { }

  ngOnInit(): void {
  }

}
