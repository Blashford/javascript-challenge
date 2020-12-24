// from data.js
var tableData = data;

// YOUR CODE HERE!
var form = d3.select("form");
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");

form.on("submit", runEnter);
button.on("click", runEnter);

function runEnter() {
    tbody.text("")
    d3.event.preventDefault();

    var inputDate = d3.select("#datetime").property("value");
    var inputCity = d3.select("#city").property("value");
    var inputState = d3.select("#state").property("value");
    var inputCountry = d3.select("#country").property("value");
    var inputShape = d3.select("#shape").property("value");

    var filters = {
        "date": inputDate,
        "city": inputCity,
        "state": inputState,
        "country": inputCountry,
        "shape": inputShape
    };

    var filteredTable = tableData.filter(dicty => {
        Object.entries(filters).forEach(([key, value]) => {
            if (!value.length) {
                return true;
            }
        }) 
        console.log(filters) 
        return dicty.datetime == filters.date && dicty.city == filters.city && dicty.state == filters.state && dicty.country == filters.country && dicty.shape == filters.shape;
    });
    console.log(filteredTable)

    filteredTable.forEach(dicty => {
        var row = tbody.append("tr");
        Object.entries(dicty).forEach(([key, value]) => {
            row.append("td").text(value);
        });
    });
};