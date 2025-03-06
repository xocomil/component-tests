import { NgComponentOutlet } from '@angular/common';
import { Component, signal, Type, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule, NgComponentOutlet, FormsModule],
  selector: 'app-root',
  template: `
    <h1>Component Tests</h1>
    <ng-container
      #container
      *ngComponentOutlet="hostComponent; inputs: { greeting: greeting() }"
    />
    <div>
      <input [(ngModel)]="name" />
      <input [(ngModel)]="greeting" />
      <button (click)="changeName()">Change name</button>
    </div>
    <router-outlet></router-outlet>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  protected hostComponent: Type<any> | null = null;
  protected greeting = signal('Yo');
  protected name = signal('World');
  protected container = viewChild.required(NgComponentOutlet);

  title = 'component-tests';

  constructor() {
    this.#loadHostComponent();
  }

  #loadHostComponent(greeting = 'World') {
    import('@comp-test/dynamic-components').then(({ createHostComponent }) => {
      this.hostComponent = createHostComponent(greeting);
    });
  }

  protected changeName() {
    console.log('componentInstance', this.container());

    this.container()['_viewContainerRef'].clear();

    this.#loadHostComponent(this.name());
  }
}
