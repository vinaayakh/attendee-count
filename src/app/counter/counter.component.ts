import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class CounterComponent implements OnInit {

  counter : number = 0;
  intervalSubscription : Subscription;
  initSubscription : Subscription;

  constructor(private http : HttpClient) { }

  ngOnInit() {
    this.initCounterValue(10055);
  }

  ngOnDestroy(){
    this.intervalSubscription.unsubscribe()
  }

  initCounterValue(initialCounter){
    this.initSubscription = interval(10).subscribe(()=>{
      if(this.counter< initialCounter){
        this.counter = Math.floor(Math.random() * Math.pow(10,initialCounter.toString().length-1));
      }else{
        this.initSubscription.unsubscribe();
      }
    })
    setTimeout(()=>{
      this.counter = initialCounter;
      this.initSubscription.unsubscribe();
    },1000)
    this.intervalSubscription = interval(10000).subscribe(time=>{
      this.updateCounter();
    });
  }

  getAttendeeList(){
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    const header = new HttpHeaders();
    this.http.get(url, { headers : header}).subscribe(response=>{
      console.log(response);
    })
  }

  updateCounter(){
    this.counter ++;
  }

}
