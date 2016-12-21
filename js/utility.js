
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    var sections = document.getElementsByClassName("section");
/*    for (var i = sections.length - 1; i >= 0; i--) {
      sections[i].style.marginLeft = "250px";
    };*/
    document.getElementById("directory").style.display="none";
    //document.getElementsByClassName("section")[0].style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
        var sections = document.getElementsByClassName("section");
/*    for (var i = sections.length - 1; i >= 0; i--) {
      sections[i].style.marginLeft= "0";
    };*/
    document.getElementById("directory").style.display="block";
}

Array.prototype.sortBy = function(p, reverseOrder) {
  return this.slice(0).sort(function(a,b) {

    if(reverseOrder == true){
      return (a[p] < b[p]) ? 1 : (a[p] > b[p]) ? -1 : 0;
    }
    return (a[p] > b[p]) ? 1 : (a[p] < b[p]) ? -1 : 0;
  });
}



