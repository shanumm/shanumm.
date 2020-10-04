window.onload = (event) => {
  sendApiRequest();
};
async function sendApiRequest() {
  let response3 = await fetch("https://api.wheretheiss.at/v1/satellites/25544");
  let response = await fetch(
    "https://api.nasa.gov/planetary/apod?api_key=SpezrwbrezFkiAe5SdZsz7KtCRWUigo6oh64aDoD"
  );
  console.log(response);

  console.log(response3);
  let data = await response.json();
  let data3 = await response3.json();
  console.log(data3.latitude);
  useApiData(data);
  useApiData3(data3);
}
function useApiData3(data3) {
  console.log(data3)
  document.getElementById("latitude").innerHTML += data3.latitude;
  document.getElementById("longitude").innerHTML += data3.longitude;
  document.getElementById("altitude").innerHTML += data3.altitude;
}
function useApiData(data) {
  console.log(data.url);
  document.getElementById(
    "card1"
  ).style.background = `url("${data.url}") no-repeat`;
  document.getElementById("card1-p").innerHTML = data.title;
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.getElementById("main-head").style.width = "80%";
    document.getElementById("main-head").style.fontSize = "1.5rem";
    document.querySelector("nav").style.minHeight = "5vh";
  } else {
    document.getElementById("main-head").style.width = "95%";
    document.getElementById("main-head").style.fontSize = "2rem";
    document.querySelector("nav").style.minHeight = "10vh";
  }
}

var cursor = document.getElementById('object');
document.addEventListener('mousemove', function (e) {
	var x = e.clientX;
	var y = e.clientY;
	cursor.style.left = x + "px";
	cursor.style.top = y + "px";


});
