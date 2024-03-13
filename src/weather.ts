{
  const weatherName = document.querySelector(
    "#weather__name"
  )! as HTMLSpanElement;
  const weatherConditions = document.querySelector(
    "#weather__conditions"
  )! as HTMLSpanElement;
  const weatherTemp = document.querySelector(
    "#weather__temp"
  )! as HTMLSpanElement;

  function successCallback(position: GeolocationPosition) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=968a90c163215f6efb5908864760133c&units=metric`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        weatherName.textContent = data.name;
        weatherConditions.textContent = data.weather[0].main;
        weatherTemp.textContent = `${data.main.temp}`;
      });
  }
  function errorCallback() {
    alert("위치 정보 확인을 허용해주세요!");
  }
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
}
