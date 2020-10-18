import { cold } from "jasmine-marbles";
import { example4Observable } from "./main";
/**
 * Test written with Jasmine Marbles
 */
describe("Main", () => {
  it("Example 4", () => {
    /**
     * Please note the ( ) they mean that the events with it happen on the same time frame
     *
     * the values "Hello world!", "Its a great day" and the completed event | all happen in the same time frame
     */
    const expectedObservable = cold("(ab|)", {
      a: "Hello world!",
      b: "Its a great day",
    });

    expect(example4Observable).toBeObservable(expectedObservable);
  });
});
