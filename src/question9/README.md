# Question 9 Your own operator

Read this article :-)
https://netbasal.com/creating-custom-operators-in-rxjs-32f052d69457

## What you should do

- Create an operator, called `prefix` **that take a single string parameter**.
- the operator should prefix every value that is emitted from the source with the value from this parameter

```
const myObservable = of('one', 'two', 'three');

myObservable.pipe(prefix('ww-')).subscribe((value) => {
    console.log(value);
})

// ww-one
// ww-two
// ww-three
```

Note: You can assume that the values that come from the source observable are string. You can change the typing to reflect that (In the article the author uses generics <T> if necessary you can change that to <string>. I think it is only necessary for the returned observable.)
