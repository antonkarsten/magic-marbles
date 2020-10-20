import { Observable } from "rxjs";

export const question1Observable = new Observable((observer) => {
  observer.next(5);
});
