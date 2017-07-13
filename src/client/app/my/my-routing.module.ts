import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MyComponent } from './my.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'my', component: MyComponent }
    ])
  ],
  exports: [RouterModule]
})
export class MyRoutingModule { }
