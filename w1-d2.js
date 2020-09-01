const camelCase = function(input) {
  let happy = " ";
  let banana = input.split(happy);
  y = banana[0];
  for ( x = 1; x < banana.length; x++) {
y = y + banana[x].charAt(0).toUpperCase() + banana[x].slice(1).toLowerCase();
  }
  return y;
};

console.log(camelCase("this is a string"));
console.log(camelCase("holy heck"));
console.log(camelCase("supercalifragalisticexpialidocious"));