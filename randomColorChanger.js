
function RandomlyChangeColor() {

  var letterofcolor = '0987654321ABCDEF'
  var emptycol = '#'

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  for (var i = 0; i < 6; i++) {
    var mytemp = getRandomInt(16)
    var emptycol =emptycol+letterofcolor[mytemp]
  }


  var famousobj = document.querySelector('#seeyouinhell')
  famousobj.style.color=emptycol

}
setInterval('RandomlyChangeColor()', 700);
