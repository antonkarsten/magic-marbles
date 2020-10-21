import { cold } from "jasmine-marbles";

/**
 * Test written with Jasmine Marbles
 */
describe("Main", () => {
  it("Question5", () => {
    const a = cold("a");
    const b = cold("a");
    expect(a).toBeObservable(b);
  });
});
