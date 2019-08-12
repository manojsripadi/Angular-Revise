import { Component, OnInit } from '@angular/core';
import { DataService } from '../../utils/data-service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.statusUpdate.subscribe(status => {
      console.log('inside menu',  status)
    });
    console.log(this.dataService.getData());    
  }

}
