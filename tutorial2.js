function calculateArea() {

    var height = document.getElementById("height").value;
    var width = document.getElementById("width").value;
    var area = height * width;
    document.getElementById("area").innerHTML = "The are of height " + height + " and width " + width + " is " + area
}
