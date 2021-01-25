$(document).ready(function() {


    //Set up HTML with time intervals and save buttons
    var hours = ["9", "10", "11", "12", "1", "2", "3", "4", "5"];
    var newRow = $("<div>").addClass("row");
    var newHour = $("<div>").addClass("col-md-1");
    var newEntry = $("<textarea>").addClass("col-md-10 form-control");
    var newButton = $("<button>").addClass("col-md-1 btn btn-primary");
    var saveIcon = $('<i class="far fa-save fa-2x"></i>');

    $(".container").append(newRow);
    newRow.append(newHour);
    newRow.append(newEntry);
    newRow.append(newButton);
    newButton.append(saveIcon);



});