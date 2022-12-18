console.log('the game is started!');
var tendency = false
var tend = prompt('do you like to start managing class now ?(yes/no)')
if (tend=='y'||tend=='yes') {
  var studentsarray = []
  while (true) {
    var userchoice = prompt("select what you wanna do  (add , display , remove, quit):")
    if (userchoice=='add') {
      var stname = prompt('write the name of the student you wanna add : ')
      studentsarray.push(stname)

    }


    else if (userchoice=='display') {

      console.log(studentsarray);

    }


    else if (userchoice=='remove') {
      var toremove = prompt('write the name you wanna remove : ')
      var index = studentsarray.indexOf(toremove)
      studentsarray.splice(index,1)


    }


    else if (userchoice=='quit') {
      break

    }





  }




}
