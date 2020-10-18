import { cold } from "jasmine-marbles";
import { example2Observable } from "./main";
/**
 * Test written with Jasmine Marbles
 */
describe("Main", () => {
  it("Example 2", () => {
    /**
     * This represents an observable that emits a single item `a`
     */
    const expectedObservable = cold("a");

    expect(example2Observable).toBeObservable(expectedObservable);
  });
});
