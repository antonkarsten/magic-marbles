import { cold } from "jasmine-marbles";
import { filter, map } from "rxjs/operators";
/**
 * Test written with Jasmine Marbles
 */
describe("Main", () => {
  it("Question 1", () => {
    /**
     * This creates an observable that emits 2 values over 4 time frames
     */
    const question2Observable = cold("-a-b", {
      a: 5,
      b: 6,
    });

    /**
     * the filter and map operators change the observable
     */
    const resultObservable = question2Observable.pipe(
      filter((value) => value % 2 === 0),
      map((value) => 4 * value)
    );

    const expectedObservable = cold(
      /* replace the string between here */ "xxxx" /* and here */,
      {
        e: /* replace the value between here */ 5 /* and here */,
      }
    );

    expect(resultObservable).toBeObservable(expectedObservable);
  });
});
