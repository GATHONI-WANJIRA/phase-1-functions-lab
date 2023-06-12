// Code your solution in this file!

function distanceFromHqInBlocks (pickUpLocation) {
    const hQ = 42;
    return Math.abs(pickUpLocation - hQ);

}
function distanceFromHqInFeet (pickUpLocation) {
    const blocks = distanceFromHqInBlocks(pickUpLocation);
    const feetPerBlock = 264;
    return feetPerBlock * blocks;

}
function distanceTravelledInFeet(start, destination){
    let distance;
    if (destination > start) {
        distance = destination - start;
    } else {
        distance = start - destination;
    }
    return distance * 264;
}

function calculatesFarePrice (startBlock, endBlock){
    const distance = Math.abs(endBlock-startBlock) * 264 ;


    if (distance <= 400){
        return 0;
    }
    if (distance >400 && distance <= 2000){
        return (distance - 400) * 0.02;

    } else if (distance >2000 && distance <2500){
        return 25;

    }else if (distance >= 2500) {
        return "cannot travel that far";

    }


}
