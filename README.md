# 05 Third-Party APIs: Work Day Scheduler

I was given the task of developing a simple work day scheduler using HTML, CSS, and Javascript. Within that, I was prompted to use Bootstrap and jQuery, as well as implement Moments.js. With these given guidelines, I set out to recreate the application shown in the given Mock-Up. It was made all the easier thanks to the code that was provided to me at the beginning of this challenge. A particularly helpful thing was that the CSS file came nearly fully in-tact, including things such as the 'classes' and elements I should include in my HTML and JS.
Using this information, I was able to come up with the appropriate layout for the HTML using bootstrap grids. The rows and columns were established first, and then I linked it to my Javascript file. The first thing I did was to utilize moments.js to display the current time and date at the top of the page. Once I familiarized myself with using moments.js, I used it further in a function that sifted through the rows and added/removed classes depending on the time of day. It was this way that I completed the objective of labeling the rows as "past", "present", and "future".
Finally, I used the jQuery selector in combination with the '.on' event listener to save user input to the local storage, which would be pulled back to the appropriate location upon refreshing the page. Through these steps I was able to meet the acceptance criteria placed before me.


## Given: User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Given: Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

The following animation demonstrates the application functionality:

![Work Day Scheduler app with color-coded time slots shows a new event being typed in the 5PM slot.](./Assets/05-third-party-apis-homework-demo.gif)

## Review
This application was developed with a combination of HTML, CSS, and Javascript, with focus placed on third party API's such as jQuery. 

The "Save" Icon was provided by fontawesome.com

I was also required to submit the following for review:

* The URL of the deployed application.
    * https://jaime-gg.github.io/Work-Day-Scheduler/ 

* The URL of the GitHub repository.
    * https://github.com/jaime-gg/Work-Day-Scheduler

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
