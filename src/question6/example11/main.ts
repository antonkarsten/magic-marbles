import { of, interval } from "rxjs";
import { concatMap, take } from "rxjs/operators";

const source1 = of("one", "two", "three");
const source2 = interval(1000).pipe(take(4));

source1
  .pipe(
    concatMap(() => {
      return source2;
    })
  )
  .subscribe((value) => {
    console.log(value);
  });
