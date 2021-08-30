function CriarString(informacao1, informacao2, informacao3)
{
  var stringMontada = informacao1;
  
  if(typeof informacao2 !== "undefined") {
      stringMontada += informacao2;
  }
  if(typeof informacao3 !== "undefined") {
      stringMontada += informacao3;
  }
  return stringMontada;
};

console.log(CriarString("Breno"));        // Breno
console.log(CriarString("Breno", 6));     // Breno6
console.log(CriarString("Breno",6,true)); // Breno6true