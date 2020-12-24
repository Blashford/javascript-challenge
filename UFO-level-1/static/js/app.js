// from data.js
var tableData = data;

// YOUR CODE HERE!
var form = d3.select("form");
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");

form.on("submit", runEnter);
button.on("click", runEnter);

function runEnter() {
    d3.event.preventDefault();

    var input = d3.select("#datetime");
    var inputValue = input.property("value");

    var filteredTable = tableData.filter(dicty => {
        return dicty.datetime === inputValue;
    });
    console.log(filteredTable)

    filteredTable.forEach(dicty =>{
      var row = tbody.append("tr");
      Object.entries(dicty).forEach(([key, value]) => {
          row.append("td").text(value);
      });
    });
};