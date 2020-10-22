# Question 8 Errors

Sometimes the Observable will emit an error, for example when a backend call fails. This error will be expected and should be tested. You can specify an error in the expected observable by using the `#`. in the third paramater of the cold and hot function you can specify the exact error.

run the following example with `npm run example13`

```
describe("Error", () => {
  it("Expect an error", () => {
    const result = of().pipe(first());

    const expected = cold("#", null, new EmptyError());
    expect(result).toBeObservable(expected);
  });
});
```

the `first` operator throws an error (EmptyError) because there is no first item in `of()`.

## What you need to do:

Your task is to make sure the unit test of Question 8 pass.
you can run the unit test with `npm run question8`

I indicated in main.spec.ts the part that you should replace.

You can send me the line on a private chat in Teams
