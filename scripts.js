//Finds location on click
const findState = function () {

    const location = document.querySelector(".locationP");

    const successfulLookup = (position) => {
        const { latitude, longitude } = position.coords;
        fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=bbf45608290b47a5bdae434efcc52c87`)
          .then((response) => response.json())
          .then((data) => {
            location.textContent = data.results[0].components.state
          })
      }
      const error = () => {
        location.textContent = 'Unable to retrieve location';
      }
        navigator.geolocation.getCurrentPosition(successfulLookup, error);
    };

document.querySelector('.findState').addEventListener('click', findState);

//Locking the orientation of a screen(mostly for phones)
screen.addEventListener("orientationchange", () => {
  screen.orientation.lock();
});