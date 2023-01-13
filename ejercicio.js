const ejercicio = () => {
  let size = 1003;
  let maxIteration = Math.floor(size / 2)
  //suma diagonal (0,n) - (n,0)
  let sum1 = sumDiagonal(maxIteration, 4, 8 )
  //suma de diagonal (0,0) - (n,n)
  let sum2 = sumDiagonal(maxIteration, 6, 2 ) - 1
  console.log(sum1 + sum2);

};

const sumDiagonal = (maxIteration, initial1, initial2) =>{
  let previous1 = 1;
  let next1 = initial1
  let previous2 = 1;
  let next2 = initial2;
  let sum = 1;

  for (let i = 1; i <= maxIteration; i++) {
    previous1 += next1;
    sum += previous1;
    next1 += 8;
    previous2 += next2;
    sum += previous2;
    next2 += 8;
  }
}

ejercicio()