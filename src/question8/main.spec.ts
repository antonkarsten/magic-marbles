import { cold } from "jasmine-marbles";
import { map } from "rxjs/operators";

describe("Error", () => {
  it("Expect an error", () => {
    const a = cold("ab", {
      a: 2,
      b: 3,
    });

    const expected = cold(
      "c#", // Replace the xx
      {
        c: 10,
      },
      "mystrangeerror"
    );

    const result = a.pipe(
      map((value) => {
        if (value % 2 === 0) {
          return value * 5;
        } else {
          throw "mystrangeerror";
        }
      })
    );

    expect(result).toBeObservable(expected);
  });
});
