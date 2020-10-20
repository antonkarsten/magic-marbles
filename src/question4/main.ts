import { Observable } from "rxjs";

class Timer {
  listeners = [];
  id;
  count = 0;

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
    const time = this.count++;
    const listeners = this.listeners;
    if (listeners) {
      listeners.forEach((handler) => handler(time));
    }
  }
}

const timer = new Timer();

const question4Observable = new Observable((observer) => {
  timer.addEventListener((e) => observer.next(e));
});

question4Observable.subscribe((time) => {
  console.log("subscriber1", time);
});

question4Observable.subscribe((time) => {
  console.log("subscriber2", time);
});
