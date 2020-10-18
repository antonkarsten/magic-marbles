# Question 2

## built in observables

Rxjs has a lot of standard observable function included in its library. The observable we created in Question 1 exists in RxJS (sort of):

```
const obs = of("Hello World!");
```

But `of` can emit more than a sinlge value that you pass to it

```
const obs = of("Hello world!", "Its a great day");
```

run the above example with `npm run example3`

This observable immediately emits both values and than completes

run the unit test ( src/example4/main.spec.ts ) that goes along with it `npm run example4` and notice that all the events happen in the same time frame.

## operators

Besides providing us with built in observables, RxJS also provides us with "operators" that can manipulate the stream. We can for example filter our stream, so that the resulting observable only emits values that match our filter

run the following example with `npm run example5`

```
const example5Observable = of(1, 2).pipe(
  filter((value) => {
    return value % 2 === 0;
  })
);
```

run the following example with `npm run example6`

```
const example6Observable = of(1, 2).pipe(
  filter((value) => {
    return value % 2 === 0;
  }),
  map((value) => {
    return value * 10;
  })
);
```

## What you need to do:

Your task is to make sure the unit test of Question 2 passes.
you can run the unit test with `npm run question2`

I indicated in main.spec.ts the part that you can edit. It is easier if you remove those comments that indicate where you can edit, before you begin.

You can send me the line on a private chat in Teams
