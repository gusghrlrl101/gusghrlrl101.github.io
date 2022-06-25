const getAge = () => 1 + Math.floor((new Date() - new Date("2019-06-24").getTime()) / 3.15576e+10);

// set age
var element = document.getElementById("my-career-ages");
element.innerText = getAge().toString();
