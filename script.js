function changeMode() {
  let myBody = document.body;

  myBody.classList.toggle("bg-dark");
  myBody.classList.toggle("text-white");

  let spanELements = document.getElementsByTagName("span");

  let aELements = document.getElementsByTagName("a");

  let pELements = document.getElementsByTagName("p");

  let navbarscrollList = document.getElementById("navbarScroll");

  let navbarul = navbarscrollList.getElementsByTagName("ul");

  if (myBody.classList.contains("bg-dark")) {
    document.getElementById("logoToggle").src =
      "https://i.ibb.co/XZVSChk/clipboard.png";

    document.getElementById("darkModeButton").classList.add("text-white");

    document.getElementById("navbar2List").classList.add("text-white");

    document.getElementById("navbar1List").classList.add("text-white");

    for (var i = 0; i < spanELements.length; i++) {
      spanELements[i].classList.remove("text-dark");
      spanELements[i].classList.add("text-white");
    }

    for (var i = 0; i < aELements.length; i++) {
      aELements[i].classList.remove("text-dark");
      aELements[i].classList.add("text-white");
    }

    for (var i = 0; i < pELements.length; i++) {
      pELements[i].classList.remove("text-dark");
      pELements[i].classList.add("text-white");
    }

    for (var i = 0; i < navbarul.length; i++) {
      navbarul[i].classList.add("bg-dark");
    }
  } else {
    document.getElementById("logoToggle").src =
      "https://i.ibb.co/GJTnmbz/image.png";

    document.getElementById("darkModeButton").classList.remove("text-white");

    document.getElementById("navbar2List").classList.remove("text-white");

    document.getElementById("navbar1List").classList.remove("text-white");

    for (var i = 0; i < spanELements.length; i++) {
      spanELements[i].classList.remove("text-white");
      spanELements[i].classList.add("text-dark");
    }

    for (var i = 0; i < aELements.length; i++) {
      aELements[i].classList.remove("text-white");
      aELements[i].classList.add("text-dark");
    }

    for (var i = 0; i < pELements.length; i++) {
      pELements[i].classList.remove("text-white");
      pELements[i].classList.add("text-dark");
    }

    for (var i = 0; i < navbarul.length; i++) {
      navbarul[i].classList.remove("bg-dark");
    }
  }

  let darkIcon = document.getElementById("darkModeButton");

  if (darkIcon.classList.contains("bi-toggle-off")) {
    document.getElementById("darkModeButton").classList.add("bi-toggle-on");

    document.getElementById("darkModeButton").classList.remove("bi-toggle-off");
  } else {
    document.getElementById("darkModeButton").classList.add("bi-toggle-off");

    document.getElementById("darkModeButton").classList.remove("bi-toggle-on");
  }
}

let navbarLocation;
let weatherLocation;
let temperatureText;
let temperatureDesc;
let temperatureIcon;
let timeStamp;

function geoLocation() {
  navbarLocation = document.getElementById("locationNameNavBar");
  weatherLocation = document.getElementById("locationNameWeatherDiv");
  temperatureText = document.getElementById("temperatureText");
  temperatureDesc = document.getElementById("temperatureDesc");
  temperatureIcon = document.getElementById("tempIcon");
  timeStamp = document.getElementById("timeStamp");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getLocation);
  }
}

function getLocation(data) {
  let latitude = data.coords.latitude;
  let longitude = data.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;

  fetch(url, { method: "GET" })
    .then((res) => res.json())
    .then((data) => {
      let cityName = data.city.name;
      let country = data.city.country;
      let temperature = data.list[0].temp.day;
      let tempDescription = data.list[0].weather[0].description;
      let id = data.list[0].weather[0].id;

      let dateTime = new Date(data.list[0].dt * 1000);

      let dateText = dateTime.toDateString();

      navbarLocation.innerText = `${cityName}, ${country}`;

      weatherLocation.innerText = `${cityName}, ${country}`;

      temperatureText.innerText = `${temperature} °C`;

      temperatureDesc.innerText = `${tempDescription}`;

      timeStamp.innerText = `${dateText}`;

      if (id == 800) {
        temperatureIcon.src = "https://openweathermap.org/img/wn/01d@2x.png";
      }
      if (id == 801) {
        temperatureIcon.src = "https://openweathermap.org/img/wn/02d@2x.png";
      }
      if (id == 802) {
        temperatureIcon.src = "https://openweathermap.org/img/wn/03d@2x.png";
      }
      if (id == 803 || id == 804) {
        temperatureIcon.src = "https://openweathermap.org/img/wn/04d@2x.png";
      }
      if ((id >= 300 && id < 400) || (id >= 520 && id < 532)) {
        temperatureIcon.src = "https://openweathermap.org/img/wn/09d@2x.png";
      }
      if (id >= 500 && id < 505) {
        temperatureIcon.src = "https://openweathermap.org/img/wn/10d@2x.png";
      }
      if (id >= 200 && id < 300) {
        temperatureIcon.src = "https://openweathermap.org/img/wn/11d@2x.png";
      }
      if ((id >= 600 && id < 700) || id == 511) {
        temperatureIcon.src = "https://openweathermap.org/img/wn/13d@2x.png";
      }
      if (id >= 700 && id < 800) {
        temperatureIcon.src = "https://openweathermap.org/img/wn/50d@2x.png";
      }
    });
}
