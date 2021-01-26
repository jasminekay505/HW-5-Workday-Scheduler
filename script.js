$(document).ready(function () {

    //Display current time and date
    var currentDate = moment().format('MMMM Do YYYY, h:mm a');
    $("#currentDay").text(currentDate);

    //Set up HTML with time slots and save buttons
    var hours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
    for (var i = 0; i < hours.length; i++) {
        var newRow = $("<div>").addClass("row");
        var newHour = $("<div>").addClass("col-sm-1 hour");
        var newEntry = $("<textarea>").addClass("col-sm-10 form-control description " + parseInt(hours[i]));
        var newButton = $("<button>").addClass("col-sm-1 saveBtn");
        var saveIcon = $('<i class="far fa-save fa-2x"></i>');

        $(".container").append(newRow);
        newRow.append(newHour);
        newRow.append(newEntry);
        newRow.append(newButton);
        newButton.append(saveIcon);
        newHour.text(hours[i])
    }

    //Set up color formatting based on current time
    function format() {
        var currentTime = moment().hour();
        $(".description").each(function () {
            var blockTime = parseInt($(this).siblings(".hour").text());
            //Convert to military time for the afternoon hours
            if (blockTime < 6) {
                blockTime = blockTime + 12
            }
            //Change formatting of description box based on current time
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

    //Call formatting function
    format();

    //Set up array for local storage objects
    var todoFromStorage = JSON.parse(localStorage.getItem("entry"));
    if (!todoFromStorage) {
        todoFromStorage = [];
    }

    //When save button is clicked, store the input and time in local storage
    $(".saveBtn").on("click", function () {
        var newText = $(this).siblings(".description").val();
        var newTime = parseInt($(this).siblings(".hour").text());
        var newEntry = {
            text: newText,
            time: newTime
        };

        todoFromStorage.push(newEntry);

        localStorage.setItem("entry", JSON.stringify(todoFromStorage));
    })

    //Display text from local storage if applicable
    if (todoFromStorage.length > 0) {
        for (var i = 0; i < todoFromStorage.length; i++) {
            if (parseInt(todoFromStorage[i].time) === 9) {
                $(".9").text(todoFromStorage[i].text);
            }
            if (parseInt(todoFromStorage[i].time) === 10) {
                $(".10").text(todoFromStorage[i].text);
            }
            if (parseInt(todoFromStorage[i].time) === 11) {
                $(".11").text(todoFromStorage[i].text);
            }
            if (parseInt(todoFromStorage[i].time) === 12) {
                $(".12").text(todoFromStorage[i].text);
            }
            if (parseInt(todoFromStorage[i].time) === 1) {
                $(".1").text(todoFromStorage[i].text);
            }
            if (parseInt(todoFromStorage[i].time) === 2) {
                $(".2").text(todoFromStorage[i].text);
            }
            if (parseInt(todoFromStorage[i].time) === 3) {
                $(".3").text(todoFromStorage[i].text);
            }
            if (parseInt(todoFromStorage[i].time) === 4) {
                $(".4").text(todoFromStorage[i].text);
            }
            if (parseInt(todoFromStorage[i].time) === 5) {
                $(".5").text(todoFromStorage[i].text);
            }
        }
    }
});