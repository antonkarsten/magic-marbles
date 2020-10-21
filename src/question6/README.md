# Question 6 Merging Observables

this question is about an operator that merges observables in to other observables: concatMap

here is how its used (run with `npm run example11`):

```
const source1 = of("one", "two", "three");
const source2 = interval(1000).pipe(take(4));

source1
  .pipe(
    concatMap(() => {
      return source2;
    })
  )
  .subscribe((value) => {
    console.log(value);
  });
```

source1 is an observable that immediately emits 3 items: "one", "two", "three".
source2 is an observables that emits 4 items in total. It waits one second, then emits 0, waits another second emits 1 etc. (the waiting is because of using "interval" the fact that it emits only 4 items is because of the take(4)). source2 would be like the observable `of(0,1,2,3)` with the only difference that there is always a one second wait before it emits an item.

So how does concatMap work. source 1 emits an item, and concatMap "maps" that item. We have seen the map operator before. the difference is, that here we are not returning a value, but an observable. If we would use map, we would get a stream of observables, instead of a stream of values. But with concatMap the items of source2 are flattened in to stream. concatMap takes an item from source1 and maps the items of source2 in to the steam. **and it makes sure that source2 completes, before it maps the next item of source1**

so the result is

```
0
1
2
3
0
1
2
3
0
1
2
3
```

for every item in source1 it return 0123. Also note that the items of source1 are not in the resulting observables

## What do you need to do?

there are 2 unit test in Question 6 needs to be fixed. run it with `npm run question6`.

You have to replace the `xxxxx` in the expected observable. The test are not using any value objects so the "fake" observables only emit the letters a,b,c,d.

Keep in mind that a hot observable keeps running once the tests starts. If you have any question about this, ask me.

I suggest you try to fix one test at a time. If you want to run only one of the two test, use `fit` instead of `it` for the test.
