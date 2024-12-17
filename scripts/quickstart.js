// function show(){

// }

var obj = {};

obj.handleClick = function (arg) {

  return function(){

    var headLevelThree = document.querySelector("h3");

    headLevelThree.innerHTML = arg
  }
;
};
obj.init = function () {
  var header = document.getElementById("title");

  header.innerHTML = "Sri Real Estate";
  header.style.textAlign = "center";
  header.setAttribute("class", "blue-color");

  var btnOneRef = document.querySelector("#btnOne");

  btnOneRef.addEventListener("click", obj.handleClick("Chennai-50"));

  //   header.addEventListener("click", function () {
  //     header.innerHTML = "Sri Real Estate";
  //   });
};

obj.init();
