$(document).ready(function () {


    //Set up HTML with time intervals and save buttons
    var hours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
    for (var i = 0; i < hours.length; i++) {
        var newRow = $("<div>").addClass("row");
        var newHour = $("<div>").addClass("col-md-1 hour");
        var newEntry = $("<textarea>").addClass("col-md-10 form-control");
        var newButton = $("<button>").addClass("col-md-1 saveBtn");
        var saveIcon = $('<i class="far fa-save fa-2x"></i>');

        $(".container").append(newRow);
        newRow.append(newHour);
        newRow.append(newEntry);
        newRow.append(newButton);
        newButton.append(saveIcon);
        newHour.text(hours[i])

    }



});