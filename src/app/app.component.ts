import { Component } from '@angular/core';
import { EventService } from './components/event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-Tasks';
  public parentMessage="This is from parent";
  public msg:any;

  
  constructor(private _eh:EventService){
     
  }
  transfer(ven:any){
    this._eh.data.emit(ven);
  }
}
