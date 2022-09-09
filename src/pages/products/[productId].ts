import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

function useActivateRoute(): ActivatedRoute {
  return inject(ActivatedRoute);
}

@Component({
  template: `
    <h2>Product Details</h2>

    Params: {{ params$ | async | json }}
  `,
  standalone: true,
  imports: [
    AsyncPipe,
    JsonPipe
  ]
})
export default class About {
  route = useActivateRoute();
  params$ = this.route.params;
}
