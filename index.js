// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#dt");
var $cityInput = document.querySelector("#cty");
var $stateInput = document.querySelector("#sta");
var $countryInput = document.querySelector("#cntry");
var $shapeInput = document.querySelector("#shp");

var $searchBtn = document.querySelector("#search");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

// Set filteredData to Data initially
var filteredData = dataSet;
console.log(filteredData);
// renderTable renders the filteredAddresses to the tbody
function renderTable() {
  
  $tbody.innerHTML = "";
  // for (var i = 0; i < filteredData.length; i++) {
    for (var i = 0; i < 50; i++) {
    // Get get the current address object and its fields
    var dataset = filteredData[i];
    var fields = Object.keys(dataset);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = dataset[field];
    }
  }
}

function handleSearchButtonClick() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterDate = $dateInput.value.trim();
  var filterCity = $cityInput.value.trim();
  var filterState = $stateInput.value.trim();
  var filterCountry = $countryInput.value.trim();
  var filterShape = $shapeInput.value.trim();
  
  // Set filteredDate to an array of all addresses whose "date" matches the filter

  filteredData = dataSet.filter(function(data) {
    var datadate = data.datetime;
    var datacity = data.city;
    var datastate = data.state;
    var datacountry = data.country;
    var datashape = data.shape;

    // if (filterDate == data.datetime){
    //   return data;
    // } else if (filterDate == data.city){
    //   return data;
    // } else if (filterDate == data.state){
    //   return data; 
    // }

    //did not use the following since it is using or conditions instead of and.
    // if (filterDate == data.datetime){
    //   return data;
    // } else if (filterCity == data.city){
    //   return data;
    // } else if (filterState == data.state){
    //   return data;
    // } 

    //Check to see if the value the user enters is the same as the filteredData
    //OR if the user doesn't enter a value in the textbox, then it is true.
    //Do this for every data element. If all are true, return true and render table
    //with filtered data. If it is false, it will not render the table.
    //False would mean that the value the user enters doesn't match any value in our data 
    //for that data element. 
// True statements are added to the array allData to be looped back through function renderTable()
if (
  (filterDate === datadate || filterDate == '')&&
  (filterCity === datacity || filterCity == '')&&
  (filterState === datastate || filterState == '')&&
  (filterCountry === datacountry || filterCountry == '')&&
  (filterShape === datashape || filterShape == '')
) {
  return true;
} 
return false;




    // if (filterDate.length > 0 &&
    //   filterCity.length == 0 &&
    //   filterState.length == 0 &&
    //   filterCountry.length == 0 && 
    //   filterShape.length == 0) {
    //      return (datadate === filterDate); 
    // }

    // if (filterDate.length == 0 &&
    //   filterCity.length > 0 &&
    //   filterState.length == 0 &&
    //   filterCountry.length == 0 && 
    //   filterShape.length == 0) {
    //      return (datacity === filterCity); 
    // }

    // if (filterDate.length == 0 &&
    //   filterCity.length == 0 &&
    //   filterState.length > 0 &&
    //   filterCountry.length == 0 && 
    //   filterShape.length == 0) {
    //      return (datastate === filterState); 
    // }

    // if (filterDate.length == 0 &&
    //   filterCity.length == 0 &&
    //   filterState.length == 0 &&
    //   filterCountry.length > 0 && 
    //   filterShape.length == 0) {
    //      return (datacountry === filterCountry); 
    // }

    // if (filterDate.length == 0 &&
    //   filterCity.length == 0 &&
    //   filterState.length == 0 &&
    //   filterCountry.length == 0 && 
    //   filterShape.length > 0) {
    //      return (datashape === filterShape); 
    // }

    // if (filterDate.length > 0 &&
    //    filterCity.length > 0 &&
    //    filterState.length > 0 &&
    //    filterCountry.length > 0 && 
    //    filterShape.length > 0) {
    //       return (datadate === filterDate && 
    //               datacity === filterCity &&
    //               datastate === filterState &&
    //               datacountry === filterCountry &&
    //               datashape === filterShape);
    // }



//DNU
    // If true, add the data to the filteredData, otherwise don't add it to filteredData
    //if (filterDate.length > 0 && filterCity.length > 0 ) {
    //    return (datadate === filterDate && datacity === filterCity);
    //}
  });
  renderTable();
}

// Render the table for the first time on page load
renderTable();

// Adding for pagination - using Datatables
// $(document).ready(function() {
//   $('#example').DataTable( {
//       "pagingType": "full_numbers"
//   } );
// } );

// https://datatables.net/examples/advanced_init/length_menu.html
// $(document).ready(function() {
//   $('#example').DataTable( {
//       "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]]
//   } );
// } );