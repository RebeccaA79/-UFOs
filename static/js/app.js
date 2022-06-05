// from data.js
let tableData = data;
// 1. Create a variable to keep track of all the filters as an object.
var filters = {};
// the data we've filtered stored globally
let filteredData = [];
// prevFilters
let prevFilters = {};

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 3. Use this function to update the filters. 
function updateFilters() {
  
    // 4a. Save the element that was changed as a variable.
    let changedElement = d3.select(this);
    console.log("changedElement: ", changedElement);
    // 4b. Save the value that was changed as a variable.
    let elementValue = changedElement.property("value");
    console.log(elementValue);
    // 4c. Save the id of the filter that was changed as a variable.
    let filterID = changedElement.attr("id")
    console.log(filterID);

    prevFilters = filters;

    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    if (elementValue) {
      console.log("element value is true!");
      filters[filterID] = elementValue;
      console.log("filters: ", filters);
      console.log("filters[filterID]: ", filters[filterID]);
      console.log("filterID: ", filterID);
      console.log("elementValue: ", elementValue);
    } else {
      console.log("elementValue is not true!!!");
      console.log("deleting filter: ", filters[filterID]);
      delete filters[filterID];
      console.log("filters: ", filters);
    }
  
    // 6. Call function to apply all filters and rebuild the table
    filterTable();
  
  }
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {

    // if the user cleared all filter fields or if the previous filter state doesn't match the current filter state
    // we just reset the filteredData and use the original data set
    if (Object.keys(filters).length === 0 || (Object.keys(prevFilters).legnth !== Object.keys(filters).length)) {
      console.log("the user cleared all filters");
      filteredData = [];
    }

    // 8. Set the filtered data to the tableData.
    let originalData = tableData;
    console.log("currentFilters: ", filters);
    console.log("originalData: ", originalData);
    console.log("fitleredData: ", filteredData);
    // if the filteredData array is empty use the original data set
    if (filteredData.length == 0) {
      console.log("filteredData was empty let's use the originalData");
      filterCurrentData(originalData);
    // if the filteredData array is not empty, use the filteredData set
    // for iterative filtering and filtering with a combination of filters
    } else if (filteredData.length >= 1) {
      console.log("filters were not all cleared, so let's filter the filteredData");
      filterCurrentData(filteredData);
    }
    console.log("filteredData:", filteredData);
    // 10. Finally, rebuild the table using the filtered data
    console.log("Object.keys(filters):", Object.keys(filters));
    // if the filters object is empty build the table with original data set
    if (Object.keys(filters).length === 0) {
      buildTable(originalData);
    // if the filters object is not empty use the newly filteredData
    } else if (Object.keys(filters).length >= 1) {
      buildTable(filteredData);
    }
  }

  // filters either the original data set or the data we already filtered previously
  function filterCurrentData(data) {
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    data.forEach((row, index) => {
      // compares the filter keys to the row keys and pulls out the common keys between them
      let matchingKeys = Object.keys(row).filter({}.hasOwnProperty.bind(filters));
      // utilizes the matchingKeys to get an array of the currently selected filter values
      let selectedFilterValues = matchingKeys.map(k => filters[k]);
      // utilizes the matchingKeys to get an array of the currently selected row values
      let selectedRowValues = matchingKeys.map(k => row[k]);
      console.log("selectedRowValues: ", selectedRowValues);
      // compares the selectedFilterValues to the selectedRowValues to ensure they are equal
      if (arrayCompare(selectedFilterValues, selectedRowValues) && arrayCompare(selectedRowValues, selectedFilterValues)) {
        // if so push the row into the fitleredData array
        filteredData.push(row);
      }
    });
  }
  
  // uses the built in every() method to compare each array value of 2 arrays
  function arrayCompare(arr1, arr2) {
    return arr2.every(arr2Item => arr1.includes(arr2Item));
  }
  
  // 2. Attach an event to listen for changes to each filter
  d3.selectAll("input").on("change", updateFilters);
  
  // Build the table when the page loads
  buildTable(tableData);
