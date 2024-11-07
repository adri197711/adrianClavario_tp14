const peliculas = ["Turno de día", "30 noches con mi ex", "Bestia", "El monte", "Top gun maverick", "Elvis", "Thor: amor y trueno"];

function primera(pelicula) {
  let primera = peliculas.pop()
  peliculas.unshift(primera.toUpperCase());
  return peliculas;
}

console.log(primera("Thor: amor y trueno"));


let proximas = "Counter-Strike, NOP, Vértigo, Nick, Avatar";
console.log(proximas);
console.log(typeof proximas);
console.log(peliculas);

let proximasPeliculas = proximas.split(", ");
console.log(proximasPeliculas)
function TodasLasPeliculas(...data) {
  let todas = peliculas.concat(proximasPeliculas).join(" - ");
  return todas;
}

console.log(TodasLasPeliculas());

