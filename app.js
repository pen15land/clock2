function Time(){
  var date = new Date();
  var hour = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  document.getElementById("Time").innerText = hour + " : " + minutes + " : " + seconds;
}
Time();

function Bk(color){
        document.body.style.background = color;
};s