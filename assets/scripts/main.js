function showInfos(id) {
  var popup = document.getElementById('Popup' + id);
  popup.classList.toggle("show");
}

function showTitle(id) {
  var title = document.getElementById('Title' + id);
  title.classList.add("show")
}

function closeTitle(id) {
  var title = document.getElementById('Title' + id);
  title.classList.remove("show");
}