let firstSide, secondSide;

document.getElementById("myButton").onclick = function(){
    firstSide = document.getElementById("firstSide").value;
    secondSide = document.getElementById("secondSide").value;
    let thirdSide = Math.sqrt(Math.pow(firstSide,2)+Math.pow(secondSide,2));
    console.log('Legth of third side is' ,thirdSide);
    document.getElementById("thirdSide").innerHTML = thirdSide;
}

















