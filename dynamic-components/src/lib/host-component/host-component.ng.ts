import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from '@angular/core';

export function createHostComponent(initialName: string) {
  @Component({
    imports: [CommonModule],
    template: `<p>HostComponent works!</p>
      <div>{{ sayHi() }}!</div> `,
    styles: ``,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
      class: 'block border border-gray-300 p-4 m-4',
    },
  })
  class HostComponent {
    readonly greeting = input<string>('Heya');

    readonly name = signal(initialName);

    readonly sayHi = computed(() => `${this.greeting()}, ${this.name()}`);
  }

  return HostComponent;
}
