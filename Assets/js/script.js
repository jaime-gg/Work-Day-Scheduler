// to do 
//   1.Set Date and Time  --done
//      1.1. Use moments.js
//   2. Make layout matching the provided mockup. (html based)  --done
//      2.1. Use bootsrap grids. 
//      2.2. Set 9 rows, and 3 columns with current hour, input, and save Icon. 
//          2.3. use classes and elements included in the styles
//   3. Set the input background color to change depending on the hour of the day.
//          create function
//              set 
//   4. The input section allows for actual content. 
//      4.1. The icon can be clicked. 
//      4.2. The click will automatically push the content to local storage for future use. 

// set date and time 
$("#currentDay").text( moment().format('MMMM Do YYYY, h:mm a') );

function timer() {
    var currentTime = moment().hour();

    // loop over the time blocks
    $(".time-blocks").each(function() {
        var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

        if (timeBlock < currentTime) {
            $(this).addClass("past");

        }
    })
}