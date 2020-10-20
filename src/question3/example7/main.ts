import { Observable } from "rxjs";

export const example2Observable = new Observable((observer) => {
  const dataSource = Math.round(Math.random() * 100);
  observer.next(dataSource);
});

example2Observable.subscribe((randomValue) => {
  console.log(randomValue);
});

example2Observable.subscribe((randomValue) => {
  console.log(randomValue);
});
