let vuelta1: number = Number(
  prompt("Ingrese el tiempo de la primera vuelta en segundos")
);
let vuelta2: number = Number(
  prompt("Ingrese el tiempo de la segunda vuelta en segundos")
);
let vuelta3: number = Number(
  prompt("Ingrese el tiempo de la tercera vuelta en segundos")
);
let vuelta4: number = Number(
  prompt("Ingrese el tiempo de la cuarta vuelta en segundos")
);

console.log(
  "El tiempo total de todas las vueltas es de",
  vuelta1 + vuelta2 + vuelta3 + vuelta4,
  "segundos"
);

console.log(
  "El tiempo promedio de cada vuelta es de",
  (vuelta1 + vuelta2 + vuelta3 + vuelta4) / 4,
  "segundos"
);
