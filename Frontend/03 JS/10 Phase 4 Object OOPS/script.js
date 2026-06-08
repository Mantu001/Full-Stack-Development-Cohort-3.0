// Revise previous class
const hero = {
    fname: 'Mantu',
    lname: 'Tiwari',
    user: function () {
        console.log('this is hero.user (Method)');
        const sayMyName = () => {
            console.log(this.fname, this.lname);
        }
        sayMyName()
    }
}
hero.user()
// Another example
let place = {
    placeName: 'Office',
    behaviour: 'Professional',
    sayHello: function (){ // function 1
        const insidePlace = {
            placeName: 'Meeting Room',
            behaviour: 'Roasting',
            frontOfFriends: function(){ // function 2 (normal)
                console.log(this.placeName,this.behaviour);
            },
            frontOfClient: () => { // function 2.1 (arrow)
                console.log(this.placeName, this.behaviour);
            },
        }
        // insidePlace.frontOfFriends()
        insidePlace.frontOfClient()
    }
}
place.sayHello()
