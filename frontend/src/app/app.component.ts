import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <mat-toolbar>
        <h1>
          Welcome to {{title}}!
        </h1>
      </mat-toolbar>
      <!--
      Here are some links to help you start:

      https://angular.io/tutorial
      https://github.com/angular/angular-cli/wiki
      https://blog.angular.io/
      -->
      <div>
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'frontend';
}
