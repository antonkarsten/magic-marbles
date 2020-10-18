import { cold } from "jasmine-marbles";
import { question1Observable } from "./main";

describe("Main", () => {
  it("Question 1", () => {
    const expectedObservable = cold("b", {
      b: 5,
    });

    expect(question1Observable).toBeObservable(expectedObservable);
  });
});
