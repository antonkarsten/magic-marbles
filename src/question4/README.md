# Question 4: Hot observables continued

As mentioned in question 3, the events in a hot observables are happening also when you are not subscribed. This means that if you subscribe to a hot observable, there could have been events, that were emitted before you subscribed and that you will never receive.

## What you need to do

In src/question4/main.ts there is a hold observable with 2 subscribers. If you run the script with `npm run question4` you will see the events being logged in the terminal.

```
subscriber1 0
subscriber2 0
subscriber1 1
subscriber2 1
subscriber1 2
subscriber2 2
etc
```

You need to **add** two or three lines of code so that the second subscriber misses out on the first two events and you will get an output like so:

```
subscriber1 0
subscriber1 1
subscriber1 2
subscriber2 2
subscriber1 3
subscriber2 3
etc
```
