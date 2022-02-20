import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

constructor() { }

generateRandomColor() : string
{
  //fromCharCode
  //charCodeAt
  let result = "#";
  let num = Math.trunc(Math.random() * 15);
  for(let i = 0; i < 6; i++)
  {
    if(num < 10)
    {
      result += num;
    } 
    else 
    {
      result += String.fromCharCode((num - 10) + "a".charCodeAt(0));
    }
    num = Math.trunc(Math.random() * 15);
  }
  return result;
}



}
