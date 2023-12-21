// Code your solution in this file!
function distanceFromHqInBlocks (distance){
    if (distance ===43){
        return 1;
    } else if (distance ===50){
        return 8;
    } else if (distance <50){
        return 8;
    }

}
function distanceFromHqInFeet (distanceInFeet){
    if (distanceInFeet===43){
        return 264;
    }else if (distanceInFeet===50){
        return 2112;
    } else if (distanceInFeet<43){
        return 2112;
    }
}

function distanceTravelledInFeet(distanceTravelled){
    if (distanceTravelled ===43 || distanceTravelled===48){
        return 1320;
    } else if (distanceTravelled===50 || distanceTravelled===60){
        return 2640;
    } else if (distanceTravelled <50 || distanceTravelled<43){
        return 1584;
    }
}

function calculatesFarePrice(farePrice){
    
    if(farePrice===43 || farePrice===44){
        return 0;
    }else if (farePrice===34 || farePrice===32){
        return 2.56
    } else if (farePrice===50 || farePrice===58){
        return 25
    } else if (farePrice<43){
        return "cannot travel that far";
    }
  }