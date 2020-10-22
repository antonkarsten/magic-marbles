# Question 7 Merging Observables continued

this question is about another operator that merges observables in to other observables: switchMap

here is how its used (run with `npm run example12`):

```
const source1 = of("one", "two", "three");
const source2 = interval(1000).pipe(take(4));

source1
  .pipe(
    switchMap(() => {
      return source2;
    })
  )
  .subscribe((value) => {
    console.log(value);
  });
```

source1 and source2 are the same as question 6.

So how does switchMap work. source 1 emits an item, and switchMap "maps" that item just like concatMap. But switchMap doesnt wait for the items of source2. As soon as it received the nex item of source1 it "switches" the observable to map the next copy of the source2 observable. It abandons the previous mapped observable.

so the result is

```
0
1
2
3
```

this is because source1 emits all three items before the first item of source2 is received. So the first two items of source1 are "lost" or "abandonned" and we see only the map of the last item to source2.

## What do you need to do?

there are 2 unit test in Question 7 needs to be fixed. run it with `npm run question7`
