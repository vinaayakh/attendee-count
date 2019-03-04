import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector  } from '@angular/core';
import { createCustomElement } from "@angular/elements";
import { HttpClientModule } from '@angular/common/http';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [
    CounterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  entryComponents: [ CounterComponent ]
})
export class AppModule { 
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(CounterComponent, {
      injector: this.injector
    });
    customElements.define("attendee-count", el);
  }
}
