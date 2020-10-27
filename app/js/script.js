console.log('hello world');
var active = false;

function toggleAnswer() {
    var x = document.getElementById("a1");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }

    var y = document.getElementById("q1");
    if (active) {
        active = false;
        y.style.fontWeight = "700";
    } else {
        active = true;
        y.style.fontWeight = "300";
    }
}