import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  userData = [
    {
        "id": "1",
        "name": "John"
    },
    {
      "id": "2",
      "name": "Joseph"
    },
    {
      "id": "3",
      "name": "Andrew"
    },
    {
      "id": "4",
      "name": "Kimmy"
    },
    {
      "id": "5",
      "name": "Mark"
    },
    {
      "id": "6",
      "name": "Derek"
    },
    {
      "id": "7",
      "name": "Hiral"
    }
];

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onIdClick(id){
    this.router.navigate([`/user/${id}`]);
  }

}
