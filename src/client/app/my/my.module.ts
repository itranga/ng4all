import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyComponent } from './my.component';
import { MyRoutingModule } from './my-routing.module';

@NgModule({
  imports: [CommonModule, MyRoutingModule],
  declarations: [MyComponent],
  exports: [MyComponent]
})
export class MyModule { }
