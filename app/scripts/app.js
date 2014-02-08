var events = [
  {
    name: 'Concert',
    start: 1600,
    end: 2000
  },
  {
    name: 'lunch',
    start: 1200,
    end: 1300
  },
  {
    name: 'breakfast',
    start: 800,
    end: 900

  },
  {
    name: 'phone-call',
    start: 900,
    end: 1000
  },
  {
    name: 'second breakfast',
    start: 930,
    end: 1400
  }

];

// an array, each index is an hour, 24 hours in a day, 24 indices.
var eventsPerHour = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // 

$(document).ready(function () {
  // select day container
  $calender = $('#day-container');

  var getHeight = function (event) {
    return (event.end - event.start) / 2; // arbitrary height can change later

  };

  var getWidth = function (event) {
    // checks how many events occur in hours it occupies
    // finds largest number in eventsPerHour uses that calculate width
    
    var eventStart = timeIntoNum(event.start);
    var hoursBetween = getHoursBetween(event);
    var currentLargest = 0;
    var width;
    // go through and figure
    for (var i=0; i<=hoursBetween; i+=1) {
      // console.log(eventsPerHour[eventStart + i]);
      if (eventsPerHour[eventStart + i] > currentLargest) {
        currentLargest = eventsPerHour[eventStart + i];
      }
    }


    if (currentLargest > 0) {
      // floor for some edge cases
      return Math.floor((100 / currentLargest));
    } else {
      return 100;
    }

  };

  // turns the time from military time into number stripping off last two zeroes
  var timeIntoNum = function (number) {
    strNum = number.toString();
    if (strNum.length > 3) {
      result = strNum.slice(0,2);
    } else if (strNum.length === 3) {
      result =  strNum[0];
    }
    return parseInt(result, 10);
  };

  var getHoursBetween = function (event) {
    return timeIntoNum(event.end) - timeIntoNum(event.start);
  }

  // updates eventsPerHour array
  var updateHours = function (event) {
    // ex. 1600 - 1000 = 600
    // should mark 10,11,12,13,14,15,16
    var eventStart = timeIntoNum(event.start);
    var hoursBetween = getHoursBetween(event);
    
    for (var i=0; i<=hoursBetween; i+=1) {
      eventsPerHour[eventStart + i] += 1;
    }

    return;
  };

// sort the event array by start time
events.sort(function(a,b) {
    return a.start - b.start;
  });

  // go through and count up events per hour add them to array
  for (var j=0;j<events.length;j+=1) {
    
    // for each event
    // events[i].start

    // the hour

    updateHours(events[j]);
  }

  
  
  $(events).each(function(index) {
      var prevItem, prevItemEnd;
      console.log(this.name);
      // throw the text and stuff in the div
    
      if (index > 0) {
        var prevItem = index - 1;
        var prevItemEnd = events[index-1].end
        // console.log('prevItemEnd: ' + prevItemEnd);
        if (this.start > prevItemEnd) {
          // if it doesn't come after the previous one is done, put on new line?

          $calender.append('<br style="clear:both;">');
        }
        // in either case, put the event on the calendar
      }

      // this line needs to be refactored
       $calender.append('<div style="height:' + getHeight(this) + 'px; width:' + getWidth(this) + '%;' + '" class="event">Start:' +this.start +' | ' + this.name + '<br>End: ' + this.end + '</div>');

      previous = this;
      
  });

});