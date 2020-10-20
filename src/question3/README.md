# Question 3

The Observables we saw in Question 1 and 2 are "cold" observables. **An Observable is "cold" when the data source is set up inside the observable**. It means that when you subscribe to the Observable twice, it will setup the data source twice. Each subscriber has its own stream of events. It is basically the act of subscribing that is the reason for the events existing at all.

run this following example with `npm run example7`

```
import { Observable } from "rxjs";

export const example2Observable = new Observable((observer) => {
  const dataSource = Math.round(Math.random() * 100);
  observer.next(dataSource);
});

example2Observable.subscribe((randomValue) => {
  console.log(randomValue);
});

example2Observable.subscribe((randomValue) => {
  console.log(randomValue);
});
```

as you can see the result for both subscribers is **different** eventhough they subscribe to the **same** observable.

## Hot observables

In case of a "hot" observable the **data source is created outside of the Observable** and the observable only 'passes' the data from the source to the observer.

- In a hot obserable the events are happening, also when you are not subscribed.
- In a hot observable multiple subscribers can receive the same events

## What you need to do:

You are going to turn a "cold" observable in to a "hot" observable

In src/question3/main.ts there is a cold observable (similar to the one in example 7) with 2 subscribers. If you run the script with `npm run question3` you will see the events being logged in the terminal.

```
subscriber1 878
subscriber2 979
subscriber1 570
subscriber2 509
subscriber1 419
subscriber2 554
etc
```

(The numbers will be different for you because they are randomly generated)

You need to **move 1 line** in src/question3/main.ts so that both subscribers emit the same values (pairwise).

So the result will be something like this

```
subscriber1 847
subscriber2 847
subscriber1 600
subscriber2 600
subscriber1 713
subscriber2 713
etc
```

(again the numbers will be different for you)
