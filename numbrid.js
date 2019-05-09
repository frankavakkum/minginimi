// muutujatele pannakse js-s ette var.

var a = 1;
var b = "2";

if (typeof b == "string") {
    b = parseInt(b); //täisarvuks teisendamine
}
var c = a + b;

c = c.toString(); // stringiks teisendamine
