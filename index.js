let addCounter = -1;
let btn = document.getElementById("btn");

btn.addEventListener("click", function() {

  let ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'addition.json');
  ourRequest.onload = function() {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
      let ourData = JSON.parse(ourRequest.responseText);
      //renderHTML(ourData);
      btn.insertAdjacentHTML('beforebegin', ourData[addCounter].content);
    } else {
      console.log("We connected to the server, but it returned an error.");
    }
  };

  ourRequest.onerror = function() {
    console.log("Connection error");
  };

  ourRequest.send();
  addCounter++;
  if (addCounter >= 1) {
    btn.classList.add("hide");
  }

  function
  renderHTML(data) {

  }

});
