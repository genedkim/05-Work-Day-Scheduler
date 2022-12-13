# 05-Work-Day-Scheduler
Repository for UW Bootcamp week 5 challenge to build a scheduler for a 9-5 work day

# Challenge Requirements
## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```md
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

# Installation

In order to implement the above criteria I used my knowledge of jquery, dayjs, DOM traversal, local storage and basic JavaScript & html to create a work day planner that will allow one to schedule their 9AM-5PM workday by the hour. 

First in the .html I copied the existing code for each time-block div and added six more to the existing three for 9AM-11AM to make the time-blocks span the 9AM-5PM work day. I made the id for each time-block unique, naming them hour-9 to hour-17 and removed the existing past, present, future classes from the existing code.

Then began to write my script.js, first adding text to the currentDay element to display today's date in the header using dayjs.

Next declared variables for the time-block elements and the current hour using dayjs().hour(). I looped through each time-block element using $.each. For each time-block I took the hour-x id and isolated the hour number x using match(/\d+/) and parseInt() to return the integer x as variable timeBlockHour. Then using an if statement I would compare timeBlockHour to currentHour. If timeBlockHour was less, the class 'past' would be added to the time-block element. If it was equal, the class 'present' would be added. If it was greater, the class 'future' would be added. This would color code the time-blocks accordingly using .css.

Finally I added an event listener to listen for clicks on the save buttons. For any save button that gets clicked, the corresponding time-block id hour-x and value of input under the text area element would be saved to local storage. Used DOM traversal relative to the saveBtn element to call for each corresponding time-block id and text area input value. Used localStorage.getItem() to retrieve the data saved for each time-block and display any saved text for that time-block upon refreshing the page.

# Usage

[Link to Page](https://genedkim.github.io/05-Work-Day-Scheduler/)

![Function Demonstration](./Images/05-third-party-apis-homework-demo.gif)

The user opens the work day scheduler page. Upon opening the page they should notice today's day of the week and date displayed on the header. Also if the current hour is between 9AM-5PM that corresponding time block should be red with any time blocks before the current time being gray and the ones after showing as green.

The user should then be able to input any scheduled items as text into the desired time block. Once they've filled out their schedule they can click the save buttons for whatever time blocks they have filled out to save their schedule to local storage and pull it up at any time.

![Screenshot of my page](./Images/Screen%20Shot%202022-12-12%20at%2010.47.28%20PM.png)
