// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function() { 

  // Display current day in the header of the page
  var currentDayEl = $('#currentDay');
  currentDayEl.text(dayjs().format('dddd, MMMM Do'));
  
  // Declare variables for time-block div's and the current hour using dayjs()
  var timeBlockEl = $('.time-block');
  var currentHour = dayjs().hour();
  // console.log(currentHour);
  
  // Checks each of the time-block div's and takes the integer x from the hour-x id to compare it to the current hour declared above, adding the past, present, or future class accordingly.
  $.each(timeBlockEl, function () {
    var timeBlockHour = parseInt($(this).attr('id').match(/\d+/)); // Use parseInt() and match() to isolate and return the integer x from the hour-x id 
    // console.log(timeBlockHour);
    if (timeBlockHour < currentHour) {
      $(this).addClass('past');
    } else if (timeBlockHour === currentHour) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    } 
  })
  
  // Add event listener for save button click, taking the written text under the description and the hour-x id of that time-block and saving them to local storage.
  $('.saveBtn').on('click', function () {
    var text = $(this).siblings('.description').val(); // Use DOM traversal to find the sibling element with class .description and use val() to return the text input entered in the element.
    var hour = $(this).parent().attr('id'); // Use DOM traversal to find the parent element with an id attribute (div elements with hour-x id).
    localStorage.setItem(hour, text);
  })
  
  // Retrieves saved data from local storage to display saved text for each hour-x time-block.
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));

})
