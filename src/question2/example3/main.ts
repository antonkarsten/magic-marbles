import { of } from "rxjs";

const example3Observable = of("Hello world!", "Its a great day");

example3Observable.subscribe((value) => {
  console.log(value);
});
