$(document).ready(function () {

    //Set up HTML with time slots and save buttons
    var hours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
    for (var i = 0; i < hours.length; i++) {
        var newRow = $("<div>").addClass("row");
        var newHour = $("<div>").addClass("col-sm-1 hour");
        var newEntry = $("<textarea>").addClass("col-sm-10 form-control");
        var newButton = $("<button>").addClass("col-sm-1 saveBtn");
        var saveIcon = $('<i class="far fa-save fa-2x"></i>');

        $(".container").append(newRow);
        newRow.append(newHour);
        newRow.append(newEntry);
        newRow.append(newButton);
        newButton.append(saveIcon);
        newHour.text(hours[i])
    }

    //Set up event listeners
    $(".saveBtn").on("click", function () { 
        var text = $(this).siblings(".form-control").val();
        var time = $(this).siblings(".hour").text();
        console.log(text);
        console.log(time);
    })

});