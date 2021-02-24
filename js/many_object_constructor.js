function Hotel(name, rooms, booked){
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailablity = function(){
        return this.rooms - this.booked;
    };
}

var purpleHotel = new Hotel('Purple ', 76, 14 )
var rainHotel = new Hotel('Rain ', 128, 25)

console.log(purpleHotel, rainHotel);