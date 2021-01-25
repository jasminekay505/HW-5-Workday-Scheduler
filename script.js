$(document).ready(function() {


    //Set up HTML with time intervals and save buttons
    var hours = ["9", "10", "11", "12", "1", "2", "3", "4", "5"];
    var newRow = $("<div>").addClass("row");
    var newCol = $("<div>").addClass("col-md-1");
    var newEntry = $("<textarea>").addClass("col-md-10");
    var newButton = $("<button>").addClass("col-md-1 btn btn-primary");
    
    $(".container").append(newRow);
    newRow.append(newCol);
    newRow.append(newEntry);
    newRow.append(newButton);



});