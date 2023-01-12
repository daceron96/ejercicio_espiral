const ejercicio = () => {
  let size = 1003;
  let maxIteration = Math.floor(size / 2)
  //suma diagonal (0,n) - (n,0)
  let sum1 = sumLeft(maxIteration, 4) + sumRigth(maxIteration, 8)
  //suma de diagona (0,0) - (n,n)
  let sum2 = sumLeft(maxIteration, 6) -1 + sumRigth(maxIteration, 2) 
  console.log(sum1 + sum2);

};
const sumLeft = (maxIteration, initial) => {
  let previous = 1;
  let next = initial;
  let sum = 1;
  for (let i = 1; i <= maxIteration; i++) {
    previous += next
    sum += previous
    next += 8
  }
  return sum
};
const sumRigth = (maxIteration, initial) => {
  let previous = 1
  let next = initial ;
  let sum = 0;

  for (let i = 1; i <= maxIteration; i++) {
    previous += next
    sum += previous
    next += 8
  }
  return sum
};

ejercicio()