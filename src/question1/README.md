# Question 1

## Observables

Observables are part of a paradigm called reactive programming. **An Observable connects an observer (think of a callback function) to a producer (a data source).**

Observables are a bit like Promises, but instead of resolving to a single value they provide a stream of values.

- A stream can emit zero or more values
- A stream can emit an error
- A stream can complete

The data source can be a simple string value like 'Hello World!'. In this case the observable will emit only a single value and then complete. Or it can be for example a WebSocket. In this case it is possible that the observable emits many values.

Here is how you would create an Observable

```
import { Observable } from "rxjs";

// call `new Observable` and pass a function that will 'connect' the producer(data source) to the observer

export const example1Observable = new Observable((observer) => {

    // the producer(data source) in this case is just a string
    const dataSource = "hello world";

    // calling `next` on the observer emits a value in to the stream
    observer.next(dataSource);
});
```

If you like to `listen` to the stream of the observable, you have to subscribe to the observable, and pass the observer (again, think of a callback). The observer can specifiy a `next` function (a callback to listen to values emitted), an `error` function (a callback to listen to any errors) and a `complete` function (to listen for a possible complete event)

```
example1Observable.subscribe({
    next: (value) => {
        console.log(value);
    },
    error: (error) => {
        console.log('an error occurred: ', error)
    },
    complete: () => {
        console.log('this observable completed. there are no more values coming');
    }
});

// In case you would for example only like to know about the next value that is emitted, there is a short
// form for passing the observer

example1Observable.subscribe((value) => {
  console.log(value);
});
```

you can execute the above example (src/example1/main.ts) by running `npm run example1` in your terminal.

## Jasmine Marbles

Because observable can potentially emit many values over time, it is difficult to write unit test for them in the traditional way.

To be able to write unit tests with observables, we can use something called **Marble Diagrams**.

Marble Diagrams are a way to represent the values that are emitted by the observable over time. We can use a
string to represent the values emitted. In this string we can use (amongst others) the following symbols

```
-           : a dash simulates the passage of time, one dash correspond to a sinlge time frame (in steps of 10)
a-z         : represents a value emitted
|           : emit a completed (end of the stream)
#           : indicate an error (end of the stream)
( )         : multiple values together in the same unit of time
```

e.g. the marble diagram 'a-(bc)' represents an observable that emits the value "a" on timeframe 0, nothing on timeframe 10, the values "b" and "c" on timeframe 20 etc.

to create an observable of this diagram you can use the `cold` function `cold('a-(bc)')`

If you wish to emit values other than simple characters, you can suply a values object like so
`cold('a-(bc)', { a: 1, b: 2, c: { result: 'my complex object' } })`
this observable will emit `1`, `2` and `{ result: 'my complex object' }`

You can use this `cold` function only inside a Jasmine test. An example of such test would be

```
export const example2Observable = new Observable((observer) => {
  observer.next("a");
});

describe("Main", () => {
  it("Example 2", () => {
    const expectedObservable = cold("a");

    expect(example2Observable).toBeObservable(expectedObservable);
  });
});
```

run this test with `npm run example2`

## What you need to do:

Your task is to make sure the unit test for Question 1 passes.
without changing the test.
you can run the unit test with `npm run question1`

Please look at both files in this folder before you start. You should only edit main.ts. It is indicated in main.ts which line should be replaced.

You can send me the line on a private chat in Teams or by email
