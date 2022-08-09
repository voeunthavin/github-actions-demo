const dayOfTheWeek = (date = new Date()) => {
  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  return days[date.getDay()];
};

try {
  document.getElementById('day').innerText = dayOfTheWeek();
} catch (err) {}

exports.dayOfTheWeek = dayOfTheWeek;
