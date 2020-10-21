import { Observable } from "rxjs";

/**
 * Random clock generates a random number every second.
 */
class RandomClock {
  listeners = [];
  id;

  constructor() {
    this.id = setInterval(() => this.tick(), 1000);
  }

  destroy() {
    clearInterval(this.id);
  }

  addEventListener(listener) {
    this.listeners.push(listener);
  }

  tick() {
    const time = Math.round(Math.random() * 1000);
    const listeners = this.listeners;
    if (listeners) {
      listeners.forEach((handler) => handler(time));
    }
  }
}
const randomClock = new RandomClock();

const example3Observable = new Observable((observer) => {
  randomClock.addEventListener((e) => observer.next(e));
});

example3Observable.subscribe((time) => {
  console.log("subscriber1", time);
});

example3Observable.subscribe((time) => {
  console.log("subscriber2", time);
});
