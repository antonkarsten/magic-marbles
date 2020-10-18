import { of } from "rxjs";
import { filter } from "rxjs/operators";

const example5Observable = of(1, 2).pipe(
  filter((value) => {
    return value % 2 === 0;
  })
);

example5Observable.subscribe((value) => {
  console.log(value);
});
