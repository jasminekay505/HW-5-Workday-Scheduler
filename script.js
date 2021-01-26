$(document).ready(function () {

    //Display current time and date
    var currentDate = moment().format('MMMM Do YYYY, h:mm a');
    $("#currentDay").text(currentDate);

    //Set up HTML with time slots and save buttons
    var hours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
    for (var i = 0; i < hours.length; i++) {
        var newRow = $("<div>").addClass("row");
        var newHour = $("<div>").addClass("col-sm-1 hour " + parseInt(hours[i]));
        var newEntry = $("<textarea>").addClass("col-sm-10 form-control description");
        var newButton = $("<button>").addClass("col-sm-1 saveBtn");
        var saveIcon = $('<i class="far fa-save fa-2x"></i>');

        $(".container").append(newRow);
        newRow.append(newHour);
        newRow.append(newEntry);
        newRow.append(newButton);
        newButton.append(saveIcon);
        newHour.text(hours[i])
    }

    //Set up color formatting based on time
    function format () { 
        var currentTime = moment().hour();
        $(".description").each(function () {
            var blockTime = parseInt($(this).siblings(".hour").text());
            //Convert to military time for the afternoon hours
            if (currentTime >= 13) { 
                currentTime = currentTime - 12
            }
            if (blockTime < currentTime) { 
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            } else if (blockTime === currentTime) { 
                $(this).removeClass("future");
                $(this).addClass("present");
                $(this).removeClass("past");
            } else {
                $(this).addClass("future");
                $(this).removeClass("present");
                $(this).removeClass("past");
            }
        })
    }

    format();

    //When save button is clicked, store the input and time in local storage
    $(".saveBtn").on("click", function () { 
        var text = $(this).siblings(".description").val();
        var time = parseInt($(this).siblings(".hour").text());
        localStorage.setItem("time", JSON.stringify(time));
        localStorage.setItem("text", JSON.stringify(text));
        console.log(localStorage.time);
        console.log(localStorage.text);
    })

    //Get items from local storage if applicable
    for (var i = 0; i < hours.length; i++) { 
        $(".i").val
    }
    $(".description").each(function () { 
        var blockTime = parseInt($(this).siblings(".hour").text());
        console.log(blockTime);
        var localStorageTime = parseInt(localStorage.time)
        console.log(localStorageTime);
        console.log(localStorage.text)
        if (blockTime === localStorageTime) { 
           $(".description").text(localStorage.text)
        }
    })

});