import { cold, hot } from "jasmine-marbles";
import { concatMap } from "rxjs/operators";
/**
 * Test written with Jasmine Marbles
 */
describe("ConcatMap", () => {
  it("the cold observable example", () => {
    const a = cold("a-b");
    const b = cold("--c|");
    const expected = cold("--c--c");

    const result = a.pipe(concatMap(() => b));
    expect(result).toBeObservable(expected);
  });

  it("the hot observable example", () => {
    const a = cold("a-b");
    // ^ marks the beginning of a hot observable and | marks the end
    const b = hot("^--c|");
    const expected = cold("---c");

    const result = a.pipe(concatMap(() => b));
    expect(result).toBeObservable(expected);
  });
});
