import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventService } from '../event.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  data: any;

  // @Input()
  // // public fromParent: any;
  // @Input('fromParent') public parent:any;

  // @Output()
  //  public childInfo=new EventEmitter();
  constructor(private _eh:EventService) { }


  

  ngOnInit() {
    this._eh.data.subscribe((msg2)=>this.data=msg2);
    }

  // fireEvent(){
  //    this.childInfo.emit("This is from child");
  // }

}
