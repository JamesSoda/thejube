import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <div class="bg-dark text-white">
      <app-navbar></app-navbar>
        <div style="overflow-y: auto" class="pb-5">
          <router-outlet></router-outlet>
        </div>
      <app-footer></app-footer>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'thejube';
}
