const returnFirstTwoDrivers = function (){
   const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
   return drivers.splice(0,2);
}

const returnLastTwoDrivers = function (){
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    return drivers.splice(-2);
}

const selectingDrivers = [
    returnFirstTwoDrivers, 
    returnLastTwoDrivers
];

function createFareMultiplier(num){
    return function(number){
        return number * num;
    }
}

function fareDoubler(num){
    return num * 2;
}

function fareTripler(num){
    return num * 3;
}

function selectDifferentDrivers(drivers, func){
    return func(drivers);
}