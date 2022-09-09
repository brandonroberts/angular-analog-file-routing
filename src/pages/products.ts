import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  template: `
    <p>products works!</p>

    <router-outlet></router-outlet>
  `,
  standalone: true,
  imports: [RouterOutlet]
})
export default class About {}
