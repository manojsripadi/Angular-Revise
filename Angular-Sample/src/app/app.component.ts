import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { HideDirective } from './hide.directive';
import dummyData from './dummyJSON';
import { DataService } from './utils/data-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit{
  @ViewChild('enterName', {static:false}) enterYrName:ElementRef;
  title = 'Angular-Sample';
  name = 'John';
  dummyJson = dummyData;
  filterValue = '';
  headerName = 'Joseph';
  thanksMsg = '';
  constructor(private dataService:DataService){}
ngOnInit(){
  console.log('enterYrname', this.enterYrName);
  console.log('serviceData', this.dataService.getData())
}
ngAfterViewInit(){
  console.log('enterYrname in view', this.enterYrName);
}
buttonClick(){
  this.name = '';
this.dataService.statusUpdate.emit('emmited from app component');
}
onHeaderClick(msg){
this.thanksMsg = msg;
}

}
