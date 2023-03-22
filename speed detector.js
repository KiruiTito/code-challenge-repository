const speed = prompt("Enter car speed (km/h): ");
const speedLimit = 70;
const demeritPointsPer5kmh = 1;

if (speed <= speedLimit) {
  console.log("Ok");
} else {
  const demeritPoints = Math.floor((speed - speedLimit) / 5) * demeritPointsPer5kmh;
  console.log("Points: " + demeritPoints);
  
  if (demeritPoints >= 12) {
    console.log("License suspended");
  }
}
