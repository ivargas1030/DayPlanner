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
    hoursRow.addClass("hours-row row hours-row-color");
    hoursRow.attr("data-index", hours[i]);

    //column 1
    var timeColumn = $("<div>");   
    timeColumn.addClass("col-sm");
    timeColumn.text(hours[i]);
    $(hoursRow).append(timeColumn);

    //column 2
    var textColumn = $("<div>");
    textColumn.addClass("col-lg");
    $(hoursRow).append(textColumn);
    

    //column 3
    var saveColumn = $("<div>");
    saveColumn.addClass("col-sm");
    $(hoursRow).append(saveColumn);

    var textArea = $("<textarea></textarea>");
    textArea.addClass("col-lg");
    $(textColumn).append(textArea)


    //last step
    $(".container").append(hoursRow)

    
}


});

//display date
var currentDate = moment().format("MMMM Do YYYY");
$("#currentDay").text(currentDate);

