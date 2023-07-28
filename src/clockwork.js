let root;
let container;

// Functions should not return double digits for values less than ten. Return values are used for animation double digits may break animation.
const getUnitSecond = () => {
  const seconds = new Date().getSeconds();
  return seconds < 10 ? 0 : +seconds.toString()[0];
};
const getTensSecond = () => {
  const seconds = new Date().getSeconds();
  return seconds < 10 ? seconds : +seconds.toString()[1];
};
const getUnitMinute = () => {
  const minute = new Date().getMinutes();
  return minute < 10 ? 0 : +minute.toString()[0];
};
const getTensMinute = () => {
  const minute = new Date().getMinutes();
  return minute < 10 ? minute : +minute.toString()[1];
};
const getUnitHour = () => {
  const hour = new Date().getHours();
  return hour < 10 ? 0 : +hour.toString()[0];
};
const getTensHour = () => {
  const hour = new Date().getHours();
  return hour < 10 ? hour : +hour.toString()[1];
};
const getFullTime = () => {
  return `${getHour()}:${getMinute()}:${getSecond()}`;
};

// Exported function - responsible for settings up math
const startClockwork = (root) => {
  // Makes root global
  root = root;
  // Makes container global
  container = root.getElementById("clock");
  container.style.display = "block";

  const tensSecondHand = root.getElementById("tensSecondHand");
  const unitsSecondHand = root.getElementById("unitsSecondHand");
  const unitsHourHand = root.getElementById("unitsHourHand");
  const tensHourHand = root.getElementById("tensHourHand");
  const unitsMinuteHand = root.getElementById("unitsMinuteHand");
  const tensMinuteHand = root.getElementById("tensMinuteHand");

  const numberElement = root.querySelector("div.number");
  const numberElementHeight = numberElement.style.height;
  const moveDistance = +numberElementHeight.slice(
    0,
    numberElementHeight.length - 2
  );

  const movingGears = () => {
    tensSecondHand.style.top = `${moveDistance * getTensSecond()}px`;
    unitsSecondHand.style.top = `${moveDistance * getUnitSecond()}px`;

    unitsMinuteHand.style.top = `${moveDistance * getUnitMinute()}px`;
    tensMinuteHand.style.top = `${moveDistance * getTensMinute()}px`;

    unitsHourHand.style.top = `${moveDistance * getUnitHour()}px`;
    tensHourHand.style.top = `${moveDistance * getTensHour()}px`;
  };
  movingGears();
  // Creates interval at which to calculate time
  setInterval(() => {
    movingGears();
  }, 1000);
};

export { startClockwork };
