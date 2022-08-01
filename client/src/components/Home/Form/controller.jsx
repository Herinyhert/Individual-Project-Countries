
export default function Validate({input, countryId}) {
    let error = {};
    if (!input.name) { error.name = "Debe ingresar un Nombre" }
    else if (!input.dificulty) { error.dificulty = "Debe identificar la dificultad" }
    else if (input.dificulty > 5 || input.dificulty < 1) { error.dificulty = "Solo puede ser en rango de 1 a 5" }
    else if (!input.duration) { error.duration = "Debe identificar la duration" }
    else if (input.duration > 24) { error.duration = "La duracion no puede ser mayor a 24 horas" }
    else if (!input.season) { error.season = "Debe identificar un Season" }
    else if (!countryId.length) { error.id = "Debe ingresar al menos un país" }

    return error;

}

// function validate({ name, value }) {
//     let error;
//     if (name === "email") {
//       if (!value.endsWith(".com")) {
//         error = "El email debe terminar con '.com'";
//       }
//       if (!value.includes("@")) {
//         error = "El email debe de contener una '@'";
//       }
//     }
//     if (name === "password") {
//       if (value.length < 8) {
//         error = "El password debe de ser de almenos 8 caracteres";
//       }
//       if (!/\d/.test(value)) {
//         error = "El password debe de contener un numero";
//       }
//       if (!/[A-Z]/.test(value)) {
//         error = "El password debe de contener una letra Mayuscula";
//       }
//       if (!/[a-z]/.test(value)) {
//         error = "El password debe de contener una letra minuscula";
//       }
//     }
//     return { [name]: error };
//   }