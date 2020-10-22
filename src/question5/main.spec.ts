import { cold } from "jasmine-marbles";

/**
 * Test written with Jasmine Marbles
 */
describe("Main", () => {
  it("Question5", () => {
    const a = cold("-c");
    const b = cold("d");
    expect(a).toBeObservable(b);
  });
});
