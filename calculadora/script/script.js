function insert(num) {
    var numero = document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML = numero + num;
  }
  function clear() {
    document.getElementById("result").innerHTML = "";
  }
  function back() {
    var resul = document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML = resul.substring(
      0,
      resul.length - 1
    );
  }
  function calcular(){
      var resul = document.getElementById("result").innerHTML;
      if(resul){
          document.getElementById("result").innerHTML = eval(resul);
      }
  }