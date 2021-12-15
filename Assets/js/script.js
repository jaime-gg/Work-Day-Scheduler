// to do 
//   1.Set Date and Time  --done
//      1.1. Use moments.js
//   2. Make layout matching the provided mockup. (html based)  --done
//      2.1. Use bootsrap grids. 
//      2.2. Set 9 rows, and 3 columns with current hour, input, and save Icon. --done
//          2.3. use classes and elements included in the styles
//   3. Set the input background color to change depending on the hour of the day. -- done
//          3.1. create function
//              3.1.1. set it so that depending on time of day, add/remove classes linked to css colors 
//   4. The input section allows for actual content. 
//      4.1. The icon can be clicked. 
//      4.2. The click will automatically push the content to local storage for future use. 

// set date and time 
$("#currentDay").text( moment().format('MMMM Do YYYY, h:mm a') );

function timer() {
    // test by changing currentTime and setting it to any work hour!!!!!
    var currentTime = moment().hour();
    console.log(currentTime)

    // loop over the time blocks and compare to currentTime
    $(".time-block").each(function() {
        var timeBlock = parseInt($(this).attr("id").split("hour-")[1]);

        if (timeBlock < currentTime) {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        }
        else if (timeBlock > currentTime) {
            $(this).addClass("future");
            $(this).removeClass("past");
            $(this).removeClass("present");
        }
        else {
            $(this).addClass("present");
            $(this).removeClass("past");
            $(this).removeClass("future");
        }
    })
}

timer ();