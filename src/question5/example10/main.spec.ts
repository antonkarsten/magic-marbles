import { cold } from "jasmine-marbles";

/**
 * Test written with Jasmine Marbles
 */
describe("Main", () => {
  it("Example 10", () => {
    const a = cold("a");
    const b = cold("-a");
    expect(a).toBeObservable(b);
  });
});
