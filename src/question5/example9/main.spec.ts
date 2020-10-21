import { cold } from "jasmine-marbles";

/**
 * Test written with Jasmine Marbles
 */
describe("Main", () => {
  it("Example 9", () => {
    const a = cold("aa");
    const b = cold("b");
    expect(a).toBeObservable(b);
  });
});
