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
//   4. The input section allows for actual content. -- done
//      4.1. The icon can be clicked. --done
//      4.2. The click will automatically push the content to local storage for future use. --done
//   5. refreshing will pull from local storage -- done

// set date and time 
$("#currentDay").text( moment().format('MMMM Do YYYY, h:mm a') );

function timer() {
    // test by changing currentTime and setting it to any work hour!!!!!
    var currentTime = moment().hour();
    console.log(currentTime)

    // loop over the time blocks and compare to currentTime
    $(".time-block").each(function() {
        var timeBlock = parseInt($(this).attr("id").split("hour-")[1]);

        // add and remove classes depending on time of day, these change the colors of the background
        // classes given in the provided css 
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

// save data to local storage by clicking the 'save' icon
$(".saveBtn").on("click", function() {
    var input = $(this).parent().children(".col-md-10").val();
    var timeRow = $(this).parent().attr("id");
    // console.log(timeRow, input)
    localStorage.setItem(timeRow, input);
})

// pull from local storage when loading the page. 
$("#hour-9 .col-md-10").val(localStorage.getItem("hour-9"));
$("#hour-10 .col-md-10").val(localStorage.getItem("hour-10"));
$("#hour-11 .col-md-10").val(localStorage.getItem("hour-11"));
$("#hour-12 .col-md-10").val(localStorage.getItem("hour-12"));
$("#hour-13 .col-md-10").val(localStorage.getItem("hour-13"));
$("#hour-14 .col-md-10").val(localStorage.getItem("hour-14"));
$("#hour-15 .col-md-10").val(localStorage.getItem("hour-15"));
$("#hour-16 .col-md-10").val(localStorage.getItem("hour-16"));
$("#hour-17 .col-md-10").val(localStorage.getItem("hour-17"));
$("#hour-18 .col-md-10").val(localStorage.getItem("hour-18"));


timer ();