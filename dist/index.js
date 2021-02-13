document
    .getElementById("location-search-btn")
    .addEventListener("click", (e) => {
    runSearch();
});
function runSearch() {
    let location = (document.getElementById("location-input")).value;
    let checkin = (document.getElementById("checkin-input")).value;
    let checkout = (document.getElementById("checkout-input")).value;
    let adults = document.getElementById("adults-input")
        .value;
    let children = (document.getElementById("children-input")).value;
    let searchQuery = {
        location: location,
        checkin: checkin,
        checkout: checkout,
        adults: adults,
        children: children,
    };
    if (location == "" || checkin == "" || checkout == "") {
        alert(`Please fill out all fields`);
        return;
    }
    let currentDate = new Date();
    let checkinDate = parseDate(checkin);
    if (currentDate > checkinDate) {
        alert(`Please choose a future date to check in`);
        return;
    }
    if (checkinDate > parseDate(checkout)) {
        alert(`Please choose a checkout date after your checkin date`);
        return;
    }
    //TODO Restyle confirm box using JS
    if (confirm(`You're looking to travel to ${location} on ${checkin} eh? `)) {
        alert(`Great, we've got you booked`);
    }
    else {
        alert(`You have not been charged`);
    }
    // alert(`Are you sure you want to travel to ${location} at this time of year? `); // lulz
    // EVIDENCE I'M GRABBING THE DATA. NOTE TO REVIEWER, THE CONSOLE CLEARS QUICKLY AS IT TRIES TO NAVIGATE TO LOCAL PATH. NOT SURE WHAT THAT MEANS, BUT CLICK CONSOLE SETTINGS> PRESERVE LOG AND YOU'LL SEE OBJECT.
    console.log(searchQuery);
}
function parseDate(s) {
    var b = s.split(/\D/);
    return new Date(b[0], --b[1], b[2]);
}
