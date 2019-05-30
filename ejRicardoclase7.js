/* Joel tiene que informar a sus alumnos quienes tienen que repetir curso,
el tiene una lista de alumnos, cada alumno tiene un nombre
y una lista de calificaciones que se tienen que promediar
para saber si el alumno está aprobado, el promedio mínimo para aprobar es 6.
Haz un algoritmo que escriba el nombre de los alumnos que no aprobaron.
*/

let suma = 0;
let alumnos = [{

  name: "José",
  calificaciones: [8,7,6]
}, {
  name: "Javier",
  calificaciones: [4,7,9]
}, {
  name: "María",
  calificaciones: [8,9,10]
}, {
  name: "Martha",
  calificaciones: [4,5,5]
}]

for (let contador = 0 ; contador<alumnos.length ; contador++) {
  suma+=alumnos[contador]["calificaciones"]


    console.log(suma);
  }
