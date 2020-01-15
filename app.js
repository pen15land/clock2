function Time(){
  var date = new Date();
  var hour = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  hour = updateTime(hour);
  minutes = updateTime(minutes);
  seconds = updateTime(seconds);
  document.getElementById("Time").innerText = hour + " : " + minutes + " : " + seconds;
  var t = setTimeout(function(){ Time() }, 1000);
}
function updateTime(k) {
  if (k < 10) {
    return "0" + k;
  }
  else {
    return k;
  }
}

Time();

function Bk(color){
        document.body.style.background = color;
};