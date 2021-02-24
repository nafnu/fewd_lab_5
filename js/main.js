var hotel = {
  name : 'Purple Rain',
  rooms : 120,
  booked : 77
};

hotel.gym = true;
hotel.pool = false;
hotel.freeBreakFast = true;
delete hotel.booked;

var elName = document.getElementById('hotelName'); 
elName.textContent = hotel.name;                   

var elPool = document.getElementById('pool');      
elPool.className = hotel.pool;                     

var elfreeBreakFast = document.getElementById('freeBreakFast');
elfreeBreakFast.className = hotel.freeBreakFast;

var elGym = document.getElementById('gym');        
elGym.className = hotel.gym;                      
