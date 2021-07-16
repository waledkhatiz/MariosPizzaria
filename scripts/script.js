let ourFoodButton = document.querySelector(".screen1 header nav ul li:nth-child(1)");
let aboutUsButton = document.querySelector(".screen1 header nav ul li:nth-child(2)");
let ourLocationsButton = document.querySelector(".screen1 header nav ul li:nth-child(3)");

let viewMenuButton = document.querySelector(".title_card .menu_button");
let orderOnlineButton = document.querySelector(".title_card .order_online");

let reservationCard = document.querySelector(".reservation_card");
let nameField = document.querySelector(".reservation_form .name");
let guestField = document.querySelector(".reservation_form .guest_num");
let timeField = document.querySelector(".reservation_form .time_date");
let formElement = document.querySelector(".reservation_form");

let ourFood = document.querySelector(".screen2");
let carousel = document.querySelector(".photo_carousel");
let prevButton = document.querySelector(".photo_carousel .previous");
let nextButton = document.querySelector(".photo_carousel .next");

let aboutUs = document.querySelector(".screen3");

ourFoodButton.addEventListener("click", () => {
    ourFood.scrollIntoView(true);
});

aboutUsButton.addEventListener("click", () => {
    aboutUs.scrollIntoView(true);
});

ourLocationsButton.addEventListener("click", () => {
    window.alert("The 'Our Location' section hasn't been added yet.");
});

viewMenuButton.addEventListener("click", () => {
    window.location.replace("menu.html");
});

formElement.addEventListener("submit", (e) => {
    sessionStorage.setItem("customer-name", nameField.value);
    sessionStorage.setItem("guest-num", guestField.value);
    sessionStorage.setItem("date-time", timeField.value);

    window.open("order.html");
});

prevButton.addEventListener("click", () => {
    let foodImgs = document.querySelectorAll(".photo_carousel img");
    let currentImg = foodImgs[0].getAttribute("src");
    let nextImg;
    for(img = 0; img < 5; img++){
        nextImg = foodImgs[(img+1) % 5].getAttribute("src");
        foodImgs[(img+1) % 5].setAttribute("src", currentImg);
        currentImg = nextImg;
    } 
})

nextButton.addEventListener("click", () => {
    let foodImgs = document.querySelectorAll(".photo_carousel img");
    let currentImg = foodImgs[4].getAttribute("src");
    let nextImg;
    for(img = 0; img < 5; img++){
        // [4-((img+1)%5)] means it starts from the end, descends down the list, then loops back to the end
        nextImg = foodImgs[4-((img+1) % 5)].getAttribute("src");
        foodImgs[4-((img+1) %5)].setAttribute("src", currentImg);
        currentImg = nextImg;
    } 
})



