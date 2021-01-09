// from data.js
var tableData = data;

// YOUR CODE HERE!
var form = d3.select("form");
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");

form.on("submit", runEnter);
button.on("click", runEnter);

function init() {
    data.forEach(dicty =>{
        var row = tbody.append("tr");
        Object.entries(dicty).forEach(([key, value]) => {
            row.append("td").text(value);
        })
})};

function runEnter() {
    tbody.text("")
    d3.event.preventDefault();

    var inputDate = d3.select("#datetime").property("value").trim();
    var inputCity = d3.select("#city").property("value").toLowerCase().trim();
    var inputState = d3.select("#state").property("value").toLowerCase().trim();
    var inputCountry = d3.select("#country").property("value").toLowerCase().trim();
    var inputShape = d3.select("#shape").property("value").toLowerCase().trim();
    
    var filters = {
        datetime: inputDate,
        city: inputCity,
        state: inputState,
        country: inputCountry,
        shape: inputShape
    };
    
    var filteredTable = tableData.filter(dicty => {
        
        return Object.keys(filters).map(key => dicty[key] === filters[key] || filters[key] === "").every(f => f)
        
        // This also works but is more clunky
        // return (dicty.datetime === filters.datetime || filters.datetime === "" ) && 
        //         (dicty.city === filters.city || filters.city === "") && 
        //         (dicty.state === filters.state || filters.state === "") && 
        //         (dicty.country === filters.country || filters.country === "") && 
        //         (dicty.shape === filters.shape || filters.shape === "");
    });
    console.log(filteredTable)

    filteredTable.forEach(dicty => {
        var row = tbody.append("tr");
        Object.entries(dicty).forEach(([key, value]) => {
            row.append("td").text(value);
        });
    });
};

init()