import { cold, hot } from "jasmine-marbles";
import { switchMap } from "rxjs/operators";

describe("SwitchMap", () => {
  it("the cold observable example", () => {
    const a = cold("ab");
    const b = cold("--c|");
    const expected = cold("---c"); // Replace the xxxx

    const result = a.pipe(switchMap(() => b));
    expect(result).toBeObservable(expected);
  });

  it("the hot observable example", () => {
    const a = cold("a-b");
    const b = hot("^c---d|");
    const expected = cold("-c---d"); // Replace the xxxxxx

    const result = a.pipe(switchMap(() => b));
    expect(result).toBeObservable(expected);
  });
});
