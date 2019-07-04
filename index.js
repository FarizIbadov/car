let start = false
var car = {
make: "Honda",
model: "Fit",
color: "Blue Raspberry",
mileage: 3000,
isWorking: true,

driveToWork: function() {
    alert("Old Mileage: " + this.mileage);

    this.mileage = this.mileage + 8;

    alert("New mileage: " + this.mileage);
},

driveAroundWorld: function() {
    alert("Old Mileage: " + this.mileage);

    this.mileage = this.mileage + 24000;

    alert("New Mileage: " + this.mileage);
    alert("Car needs a tuneup!");

    this.isWorking = false;
},

getTuneUp: function() {
    alert("Car is ready to go!");
    this.isWorking = true;
},

honk: function() {
    alert("Honk! Honk!");
}

};

function reWriteStats() {
    console.log("Make: " + car.make);
    console.log("Model: " + car.model);
    console.log("Color:" + car.color);
    console.log("Mileage: " + car.mileage);
    console.log("Is Working: " + car.isWorking);
    console.log("------------------------------");
}

document.onkeyup = function(e){

    let a = e.key
    KEY = ['h','d','w','t','s','i']
    
    a = a.toLowerCase()

    if( KEY.indexOf(a) !== -1) {           
        if(a === KEY[0] && car.isWorking === true && start === false){
            car.honk()
            start = true
            reWriteStats()
        } 

        else if(a === KEY[0] && car.isWorking === true && start === true){
            alert("THE CAR IS TURNED ON")
        } 

        else if(a === KEY[1] && car.isWorking === true && start === true){
            car.driveToWork()
            reWriteStats()

        }

        else if(a === KEY[2] && car.isWorking === true && start === true){
            car.driveAroundWorld()
            start = false
            reWriteStats()
        }

        else if(a !== KEY[3] && car.isWorking === false){
            alert("REPEAR YOUR CAR!")
        }

        else if(a === KEY[3] && car.isWorking === false){
            car.getTuneUp()
            reWriteStats()
        }

        else if(a === KEY[3] && car.isWorking === true){
            alert("CAR IS ALREADY FIXED")
        }

        else if(a !== KEY[4] && start === false){
            alert("TURN ON YOUR CAR!!")
            
        }

        else if(a === KEY[4] && start === true){
            alert("THE CAR IS TURNED OFF")
            start = false
            
        }

        else if(a === KEY[4] && start === false){
            alert("You don't even turn on the car")
            
        }

        else if(a === KEY[5]){
            reWriteStats()
        }
    }
}