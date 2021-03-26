fetch("./side-menu.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("side-menu").innerHTML = data;
  });