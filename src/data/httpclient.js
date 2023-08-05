const API = 'https://api.themoviedb.org/3/';

export const get = async (path) => {
  try {
    const result = await fetch(API + path, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODQ0OGE0ZjJlMzRjZDE2ODgyZDM5MzBiZWNmNjliNiIsInN1YiI6IjY0YzVkNjdiNjNlNmZiMDEzOGQ5YmMyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rOEL51d9BY2zcO9lnqjMtVm3SJ106xCsyCMuwTLheMs",
        "Content-Type": "application/json;charset=utf-8", // Corrección aquí
      },
    });

    // Aquí, necesitas retornar el resultado directamente sin usar await result.json()
    return await result.json();
  } catch (error) {
    console.log(error);
    throw error; // Agrega un throw error aquí para que puedas manejar el error donde llamas a la función 'get'
  }
};
