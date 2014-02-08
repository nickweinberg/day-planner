/* var events = [
  {
    name: 'Concert',
    time: 16
  },
  {
    name: 'lunch',
    time: 12
  },
  {
    name: 'breakfast',
    time: 8
  },
  {
    name: 'phone-call',
    time: 8
  }

];



$(document).ready(function () {

  // select day container
  $calender = $('#day-table');

  // create a row for each hour
  for (var j=0; j<24; j+=1) {
    console.log(j);
    $('#day-table tbody').append('<tr id="' +  j +'"  ><td>' + j + '00</td></tr>');
  }

  // for each event create a div
  for (var i=0; i<events.length; i+=1) {
    $('#' + events[i].time).append('<td>' + events[i].name + '</td>');
  }

});

*/