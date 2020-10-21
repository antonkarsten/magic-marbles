# Question 5

## Unit test error messages

When writing Unit Tests you will have to understand the errors that come up with Jasmine marbles. When the unit test is executed and jasmine compares the result observable with the expected observable. It is actually comparing objects like the following

```
{
  “frame”: 10, // this refers to the virtual timeslot
  ”notification”: {
    “kind”: ”N”, // N = value emitted, E = Error, C = completed
    ”value”: ”a”,
    ”hasValue”: true
  }
}
```

So jasmine gets one list of these kind of objects for the result observable and one of these lists for the expected observable

If you run the following test with `npm run example8`

```
describe("Main", () => {
  it("Example 8", () => {
    const a = cold("a");
    const b = cold("b");
    expect(a).toBeObservable(b);
  });
});
```

You will get the following error message:

```
Expected $[0].notification.value = 'a' to equal 'b'.
```

This means there is only a single error and it is in the first item of the list ( \$[0] ).
the value of this item in the result observable is 'a' and in the expected observable 'b'

now run `npm run example9`. What do you think the error message wants to say?

Another important error message can be seen in example 10 `npm run example10`

```
describe("Main", () => {
  it("Example 10", () => {
    const a = cold("a");
    const b = cold("-a");
    expect(a).toBeObservable(b);
  });
});
```

the error message is:

```
Expected $[0].frame = 0 to equal 10.
```

it means that the first object in the result observable is emmited at frame 0 and in the expected observable it is at frame 10.

Run the examples and play around with the inputs and see what error messages you get, so you really understand
how these error messages work. (It looks tricky at first, but it is not as hard as it seems)

## What do you need to do?

you need to break the test of question 5. you can run it with `npm run question5`. It is working now,
but you should break it so that you see the following error message:

```
Expected $[0].frame = 10 to equal 0.
Expected $[0].notification.value = 'c' to equal 'd'.
```
