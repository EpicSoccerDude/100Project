     var days = new Array()
     days[0] = "SAD SUNDAY";
     days[1] = "MEATLOAF MONDAY";
     days[2] = "TUESDAY TOONS";
     days[3] = "WEIRD WEDNESDAY";
     days[4] = "TROUBLED THURSDAY";
     days[5] = "FRENCH FRIE FRIDAY!";
     days[6] = "STINKY SATURDAY";
     var daytoday = new Date()
     var today = daytoday.getDay()
     document.write(days[today] + "!")
