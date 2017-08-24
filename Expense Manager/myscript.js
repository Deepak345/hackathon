var myLink = document.getElementById('mylink');
myLink.onclick = function() {
    update();
    percentage();
    excess();
    document.getElementById("input").value = "";
}

function percentage() {
    var fp = (document.getElementById("foodex").innerHTML / document.getElementById("fl").innerHTML) * 100;
    var tp = (document.getElementById("travelex").innerHTML / document.getElementById("tl").innerHTML) * 100;
    var cp = (document.getElementById("clothesex").innerHTML / document.getElementById("cl").innerHTML) * 100;
    var bp = (document.getElementById("billex").innerHTML / document.getElementById("bl").innerHTML) * 100;
    document.getElementById("fper").innerHTML = fp.toFixed(2);
    document.getElementById("tper").innerHTML = tp.toFixed(2);
    document.getElementById("cper").innerHTML = cp.toFixed(2);
    document.getElementById("bper").innerHTML = bp.toFixed(2);
}

function update() {
    var e = document.getElementById("myList").value;
    var x = document.getElementById("input").value;
    if (e == 'food') {
        var s = Number(x) + Number(document.getElementById("foodex").innerHTML);
        document.getElementById("foodex").innerHTML = s;
    }
    if (e == 'travel') {
        var s = Number(x) + Number(document.getElementById("travelex").innerHTML);
        document.getElementById("travelex").innerHTML = s;
    }
    if (e == 'clothes') {
        var s = Number(x) + Number(document.getElementById("clothesex").innerHTML);
        document.getElementById("clothesex").innerHTML = s;
    }
    if (e == 'bill') {
        var s = Number(x) + Number(document.getElementById("billex").innerHTML);
        document.getElementById("billex").innerHTML = s;
    }
}

function excess() {
    if (document.getElementById("foodex").value > document.getElementById("fl").value) {
        highlight("food", "fl", "fper", "foodex");
    }
    if (document.getElementById("travelex").value > document.getElementById("tl").value) {
        highlight("travel", "tl", "tper", "travelex");
    }
    if (document.getElementById("clothesex").value > document.getElementById("cl").value) {
        highlight("clothes", "cl", "cper", "clothesex");
    }
    if (document.getElementById("billex").value > document.getElementById("bl").value) {
        highlight("bill", "bl", "bper", "billex");
    }
}

function highlight(category, categoryl, categoryper, categoryex) {
    document.getElementById(category).style.background = "red";
    document.getElementById(categoryl).style.color = "red";
    document.getElementById(categoryper).style.color = "red";
    document.getElementById(categoryex).style.color = "red";
}