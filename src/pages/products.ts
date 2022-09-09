import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  template: `
    <h1>Products</h1>

    <router-outlet></router-outlet>
  `,
  standalone: true,
  imports: [RouterOutlet]
})
export default class About {}
