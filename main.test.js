//👉 Write your tests below here:

import { howMuchTime } from './main';

import { test, expect} from '@jest/globals'; 


// function howMuchTime(timeAvailable){
//     const timeInEachShop = 15;
//     const numberOfShops = Math.floor(timeAvailable / timeInEachShop); 

//     if (numberOfShops >= 4) {
//        return "Well Done, You're a good shopper! "
//     } else {
//         return "Sorry, you're a bad shopper!"
//     }
// }

// test for time less that 60 mins 
describe('findMessage', () => {

test('Time less than 60 mins', function () {
    const actual  = howMuchTime(30); //  2 shops
    const expected = "Sorry, you're a bad shopper!"
  expect(actual).toBe(expected);
});

// test for time equal to 60 mins
test('Time equal to 60 mins', function () {
    const actual = howMuchTime(60); // -- 4 shops 
    const expected = "Well Done, You're a good shopper!"
  expect(actual).toBe(expected);
});

// test for time 
test('Time is more than 60 mins', function () {
    const actual = howMuchTime(90); // -- 6 shops 
    const expected = "Well Done, You're a good shopper!"
  expect(actual).toBe(expected);
});
});