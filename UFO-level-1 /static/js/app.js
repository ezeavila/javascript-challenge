// from data.js
var tablewData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

console.log(tablewData);

tablewData.forEach(function(ovni) {
  var row = tbody.append("tr");
  Object.entries(ovni).forEach(function([key, value]) {
    var cell = row.append("td");
    cell.text(value);
  });
});


  var bttn = d3.select("#filter-btn");
  var formfilled = d3.select("#form");
  

  bttn.on("click", runEnter);
  formfilled.on("submit",runEnter);
  

  function runEnter() {
  

    d3.event.preventDefault();
  

    var inptElmnt = d3.select("#datetime");
  

    var inptVal = inptElmnt.property("value");
  

    console.log(inptVal);
  

    var TableOutput = []
    function selectDate(date) {
        return date.datetime === inptVal;
    }
    var userDate = tablewData.filter(selectDate);
  

    console.log(userDate);
   

    var tbody2 = d3.select("tbody")
    
 
    tbody.html("");


    userDate.forEach(function(selectDate) {
        var row = tbody.append("tr");
        Object.entries(selectDate).forEach(function([key, value]) {
          var cell = row.append("td");
          cell.text(value);
        });
      });
}
