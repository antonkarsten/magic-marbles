import { Observable } from "rxjs";

const example1Observable = new Observable((observer) => {
  const dataSource = "hello world!";
  observer.next(dataSource);
});

// In case you would for example only like to know about the next value, there is a short
// form for passing the observable
example1Observable.subscribe((value) => {
  console.log(value);
});
