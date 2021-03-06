var hotel = {
    // Object properties
    name: 'Shadow of Peace',
    rooms: 110,
    booked: 25,
    breakfast: 'Free Buffet Breakfast',
    gym: '24/7 Gym',
    message: 'Hot stones massage',
    meditation: 'Yoga at sunset',
    pool: 'Pools',
    roomTypes: ['double', 'twin', 'suite', 'king'],
    checkAvailablity: function() {
        return this.rooms - this.booked;
    }
};

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elGym = document.getElementById("gym");
elGym.textContent = hotel.gym;

var elPool = document.getElementById("pool");
elPool.textContent = hotel.pool;

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailablity();

var elBreakfast = document.getElementById("breakfast");
elBreakfast.textContent = hotel.breakfast;

var elRelax = document.getElementById("relax");
elRelax.textContent = hotel.message;

var elActivities = document.getElementById("activities");
elActivities.textContent = hotel.meditation;


elName.style.color = "turquoise"
elNAme.style.font = "italic bold 20px arial,serif"
