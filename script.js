/**
 * array of strings, "9AM etc."
 * create a for loop, for each item in the array make a row in the HTML and append to the page
 * get something to appear, add the times
 * row with three columns
 * 
 *
 * 
 */

$(document).ready(function() {

 var hours = ["9AM", "10 AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
 
var i;
for (i = 0; i < hours.length; i++) {
    //creating the row for the hours
    var hoursRow = $("<div>");   
    hoursRow.addClass("row");
    hoursRow.attr("data-index", hours[i]);

    //column 1
    var timeColumn = $("<div>");   
    timeColumn.addClass("hour col-sm-1");
    timeColumn.text(hours[i]);
    $(hoursRow).append(timeColumn);

    //column 2
    var textColumn = $("<div>");
    textColumn.addClass("col-sm-10");
    $(hoursRow).append(textColumn);
    

    //column 3
    var saveColumn = $("<div>");
    saveColumn.addClass("col-sm-1");
    $(hoursRow).append(saveColumn);

    //text input field

    var textArea = $("<textarea></textarea>");
    textArea.addClass("row col-sm-10");
    $(textColumn).append(textArea);

    //adding save button

    var saveBtn = $("<button>Save</button>");
    saveBtn.addClass("saveBtn col-sm=1");
    $(saveColumn).append(saveBtn);


    //last step
    $(".container").append(hoursRow)

    
}


});

//display date
var currentDate = moment().format("MMMM Do YYYY");
$("#currentDay").text(currentDate);


//local storage
localStorage.setItem("data-index");