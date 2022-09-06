import { Observable } from "rxjs";

export const getNumbers = new Observable( subscriber =>{
    //we emit values
    subscriber.next(1);  //emmits 1
    subscriber.next(2); // 2
    subscriber.next(3); //3
    setTimeout(() => {
      subscriber.next(4);  //4
      subscriber.complete(); // se completa y termina
    }, 1000);
  });

