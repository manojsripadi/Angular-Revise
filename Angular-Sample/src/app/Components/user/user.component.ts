import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {
  id;
  paramsSubscription: Subscription;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
   this.paramsSubscription= this.route.params.subscribe((params:Params) => {
      this.id = params['id'];
    })
  }

  ngOnDestroy(){
this.paramsSubscription.unsubscribe();
  }

}
