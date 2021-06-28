function showFAQ() {
  var x = document.getElementById("text");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

$("#firstButton").click(function () {
  var button_text = $('#firstButton').text();
  if (button_text == "-") {
    $('#firstButton').text("+");
  } else {
    $('#firstButton').text("-");
  }
});
