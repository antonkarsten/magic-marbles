import { of, Observable } from "rxjs";

// write your operator here

const myObservable = of("one", "two", "three");

myObservable.pipe(prefix("ww-")).subscribe((value) => {
  console.log(value);
});
