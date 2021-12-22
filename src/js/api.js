const url = "https://swapi.py4e.com/api/";

function getName(response) {
  const name = response.name
  let tagName = document.querySelector(".char-name")
  const span = document.createElement("span");
  tagName.appendChild(span)
  span.innerHTML = "Informações sobre: <br>"
  span.innerHTML += name
}

function getMovies(response) {
  const movieUrl = response.films;
  if (movieUrl.length == 0) {
    const movieTitle = "N/A";
    const movieList = document.querySelector(".movie-list");
    const movieTag = document.createElement("li");
    movieTag.classList.add("result-tag","result-na");
    movieList.appendChild(movieTag);
    const span = document.createElement("span");
    movieTag.appendChild(span);
    span.innerText = movieTitle;
  }

  for (movie of movieUrl) {
    axios
      .get(movie)
      .then((response) => {
        const movieTitle = response.data.title;
        const movieList = document.querySelector(".movie-list");
        const movieTag = document.createElement("li");
        movieTag.classList.add("result-tag");
        movieList.appendChild(movieTag);
        const span = document.createElement("span");
        movieTag.appendChild(span);
        span.innerText = movieTitle;
      })
      .catch((error) => console.log(error));
  }
}

function getStarships(response) {
  const starshipUrl = response.starships;
  if (starshipUrl.length == 0) {
    const starshipTitle = "N/A";
    const starshipList = document.querySelector(".starship-list");
    const starshipTag = document.createElement("li");
    starshipTag.classList.add("result-tag","result-na");
    starshipList.appendChild(starshipTag);
    const span = document.createElement("span");
    starshipTag.appendChild(span);
    span.innerText = starshipTitle;
  }

  for (starship of starshipUrl) {
    axios
    .get(starshipUrl)
    .then((response) => {
      const starshipTitle = response.data.name;
      const starshipList = document.querySelector(".starship-list");
      const starshipTag = document.createElement("li");
      starshipTag.classList.add("result-tag");
      starshipList.appendChild(starshipTag);
      const span = document.createElement("span");
      starshipTag.appendChild(span);
      span.innerText = starshipTitle;
    })
    .catch((error) => console.log(error));
  }
}

function getVehicles(response) {
  const vehicleUrl = response.vehicles;
  if (vehicleUrl.length == 0) {
    const vehicleTitle = "N/A";
    const vehicleList = document.querySelector(".vehicle-list");
    const vehicleTag = document.createElement("li");
    vehicleTag.classList.add("result-tag","result-na");
    vehicleList.appendChild(vehicleTag);
    const span = document.createElement("span");
    vehicleTag.appendChild(span);
    span.innerText = vehicleTitle;
  }

  for (vehicle of vehicleUrl) {
    axios
    .get(vehicleUrl)
    .then((response) => {
      const vehicleTitle = response.data.name;
      const vehicleList = document.querySelector(".vehicle-list");
      const vehicleTag = document.createElement("li");
      vehicleTag.classList.add("result-tag");
      vehicleList.appendChild(vehicleTag);
      const span = document.createElement("span");
      vehicleTag.appendChild(span);
      span.innerText = vehicleTitle;
    })
    .catch((error) => console.log(error));
  }
}

function getSpecies(response) {
  const specieUrl = response.species;
  if (specieUrl.length == 0) {
    const specieTitle = "N/A";
    const specieList = document.querySelector(".specie-list");
    const specieTag = document.createElement("li");
    specieTag.classList.add("result-tag","result-na");
    specieList.appendChild(specieTag);
    const span = document.createElement("span");
    specieTag.appendChild(span);
    span.innerText = specieTitle;
  }

  for (specie of specieUrl) {
    axios
    .get(specieUrl)
    .then((response) => {
      const specieTitle = response.data.name;
      const specieList = document.querySelector(".specie-list");
      const specieTag = document.createElement("li");
      specieTag.classList.add("result-tag");
      specieList.appendChild(specieTag);
      const span = document.createElement("span");
      specieTag.appendChild(span);
      span.innerText = specieTitle;
    })
    .catch((error) => console.log(error));
  }
}

function getPlanets(response) {
  const planetUrl = response.homeworld;
  if (planetUrl.length == 0) {
    const planetTitle = "N/A";
    const planetList = document.querySelector(".planet-list");
    const planetTag = document.createElement("li");
    planetTag.classList.add("result-tag","result-na");
    planetList.appendChild(specieTag);
    const span = document.createElement("span");
    planetTag.appendChild(span);
    span.innerText = planetTitle;
  }

  axios
  .get(planetUrl)
  .then((response) => {
    const planetTitle = response.data.name;
    const planetList = document.querySelector(".planet-list");
    const planetTag = document.createElement("li");
    planetTag.classList.add("result-tag");
    planetList.appendChild(planetTag);
    const span = document.createElement("span");
    planetTag.appendChild(span);
    span.innerText = planetTitle;
  })
  .catch((error) => console.log(error));
}

function getChar() {
  axios
    .get(characterUrl)
    .then((response) => {
      console.log(response);
      getName(response.data.results[0])
      getMovies(response.data.results[0]);
      getStarships(response.data.results[0]);
      getVehicles(response.data.results[0]);
      getSpecies(response.data.results[0])
      getPlanets(response.data.results[0])
    })
    .catch((error) => console.log(error));
}
// getChar()