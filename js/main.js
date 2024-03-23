document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value

  //Conditionals go here
  if (day.toLowerCase() === "tuesday" || day === "thursday") {
    document.querySelector("#placeToSee").innerText = "Today is a class day";
  } else if (day.toLowerCase() === "Saturday" || day === "Sunday") {
    document.querySelector("#placeToSee").innerText = "Today is the weekend";
  } else {
    document.querySelector("#placeToSee").innerText = "Today is boring";
  }

}
