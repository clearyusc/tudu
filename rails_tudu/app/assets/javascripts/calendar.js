$(function() {

var date = new Date();
var d = date.getDate();
var m = date.getMonth();
var y = date.getFullYear();

  $('#calendar').fullCalendar({
    header: 
    {
      left: 'today',
      center: 'prev," ",title," ",next',
      right: 'month,agendaWeek,agendaDay'
    },
    editable: true,
    events: [
      {
        title: 'All Day Event',
        start: new Date(y, m, 1)
      },
      {
        title: 'Hate Life During Finals',
        start: new Date(y, m, 11),
        end: new Date(y, m, 18)
      },
      {
      id: 999,
        title: 'Party',
        start: new Date(y, m, d-3, 22, 0),
        allDay: false
      },
      {
        id: 999,
        title: 'Party',
        start: new Date(y, m, d+4, 22, 0),
        allDay: false
      },
      {
        title: 'Work Out',
        start: new Date(y, m, 4, 18, 00),
        end: new Date(y, m, 4, 19, 00),
        allDay: false
      },
      {
        title: 'Present',
        start: new Date(y, m, 4, 17, 00),
        end: new Date(y, m, 4, 18, 30),
        allDay: false
      },
      {
        title: 'Birthday Party',
        start: new Date(y, m, 4, 20, 00),
        end: new Date(y, m, 4, 24, 00),
        allDay: false
      },
      {
        title: 'Snpw Globe',
        start: new Date(y, m, 29),
        end: new Date(y, m, 31),
        url: 'http://www.snowglobemusicfestival.com/'
      }
    ],
  });
});