var a = "Hello guys...";
function first(){
  var b = "How are you? ...";
  second();
  
  function second(){
    var c = "Myself Vishal Birajdar...";
    console.log(a+b+c);
  }
}

first();
