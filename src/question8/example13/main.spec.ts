import { cold, hot } from "jasmine-marbles";
import { switchMap, map, first } from "rxjs/operators";
import { of, EmptyError } from "rxjs";

describe("Error", () => {
  it("Expect an error", () => {
    const result = of().pipe(first());

    const expected = cold("#", null, new EmptyError());
    expect(result).toBeObservable(expected);
  });
});
