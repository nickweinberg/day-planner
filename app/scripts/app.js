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
    end: 1400
  },
  {
    name: 'second breakfast',
    start: 930,
    end: 1100
  }

];




$(document).ready(function () {
  // select day container
  $calender = $('#day-container');
    
  var getHeight = function (event) {
    return (event.end - event.start) / 2;

  };


// sort the event array by start time
events.sort(function(a,b) {
    return a.start - b.start;
  });

  
  $(events).each(function(index) {
      var prevItem, prevItemEnd;
      
      // throw the text and stuff in the div
    
      if (index > 0) {
        var prevItem = index - 1;
        var prevItemEnd = events[index-1].end
        console.log('prevItemEnd: ' + prevItemEnd);
        if (this.start > prevItemEnd) {
          // if it doesn't come after the previous one is done, put on new line?

          $calender.append('<br style="clear:both;">');
        }
        // in either case, put the event on the calendar
        $calender.append('<div style="height:' + getHeight(this) + 'px;" class="event">' +this.start +' | ' + this.name + '</div>');
      }

      previous = this;
      
  });

});