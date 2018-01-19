export const isAdult = age => age > 18;

export const canDrink = age => age > 20;

const isSenior = age => age >= 65;

//export {isAdult, canDrink, isSenior as default};
export default isSenior;