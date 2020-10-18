import { Observable } from "rxjs";

export const example2Observable = new Observable((observer) => {
  observer.next("a");
});
