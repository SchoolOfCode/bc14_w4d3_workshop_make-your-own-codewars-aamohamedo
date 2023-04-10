/* 

Its the last day before eid, you've left work and need to do shopping in atleast 4 of the shops on 
the list given to you by your partner.

You have 15 mins in each shop. 

create a function that returns "Well done, You're a great shopper!" if you made it to 4 or more shops.
or returns "Sorry, You're a bad shopper!" if you didnt make it to a minimum of 4 shops.

*/



export function howMuchTime(timeAvailable){
    const timeInEachShop = 15;
    const numberOfShops = Math.floor(timeAvailable / timeInEachShop); 

    if (numberOfShops >= 4) {
       return "Well Done, You're a good shopper! "
    } else {
        return "Sorry, you're a bad shopper!"
    }
}

