const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    // TODO
    const res = (distanceToPump / mpg) <= fuelLeft ? true : false;
  
    return res;
  };