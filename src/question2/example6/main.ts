import { of } from "rxjs";
import { filter, map } from "rxjs/operators";

const example6Observable = of(1, 2).pipe(
  filter((value) => {
    return value % 2 === 0;
  }),
  map((value) => {
    return value * 10;
  })
);

example6Observable.subscribe((value) => {
  console.log(value);
});
