import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/utils/data-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
@Input()
name;
@Output()
selectHeader = new EventEmitter<string>();
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.dummyServiceData.push({
      "color": "black",
      "value": "#000"
  });
  }
 onHeaderClick(){
   this.selectHeader.emit('Thanks for Clicking on Header!');
 }
}
