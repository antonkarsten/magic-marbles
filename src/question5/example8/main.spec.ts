import { cold } from "jasmine-marbles";

/**
 * Test written with Jasmine Marbles
 */
describe("Main", () => {
  it("Example 8", () => {
    const a = cold("a");
    const b = cold("b");
    expect(a).toBeObservable(b);
  });
});
