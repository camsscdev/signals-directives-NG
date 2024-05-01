import { Component, OnInit, computed, signal } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css'],
})
export class CounterPageComponent implements OnInit {
  public counter = signal(0);
  public squareCounter = computed(() => this.counter() * this.counter());

  constructor() {}

  ngOnInit() {}

  increaseBy(value: number) {
    this.counter.update((current) => current + value);
  }
}
