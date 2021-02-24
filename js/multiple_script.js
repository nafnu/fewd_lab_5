// Define a constructor function template for hotels
function Hotel(name, rooms, booked) {
    // Object properties
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailablity = function() {
        return this.rooms - this.booked;
    };
}

// Define to instances of the hotel and their arguments
var purpleHotel = new Hotel('Purple', 68, 3);
var rainHotel = new Hotel('Rain', 56, 15);

// Declare a variable to hold the name of the hotel and room availability 
var details1 = purpleHotel.name + ' rooms: ';
    // add content to an existing variable----
    details1 += purpleHotel.checkAvailablity();
// Get the hotel1 div
var elHotel1 = document.getElementById('hotel1');
// Add the variables created onto the empty div
elHotel1.textContent = details1;

var details2 = rainHotel.name + ' rooms: ';
    details2 += rainHotel.checkAvailablity();
var elHotel2 = document.getElementById('hotel2');
elHotel2.textContent = details2;

