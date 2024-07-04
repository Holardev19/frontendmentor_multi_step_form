
let stepOne = document.getElementById("step-one");
let stepTwo = document.getElementById("step-two");
let stepThree = document.getElementById("step-three");
let goToStepTwo = document.getElementById("go-to-step-two");
let goToStepThree = document.getElementById("go-to-step-three");
// let goToStepFour = document.getElementById("go-to-step-four");


let name = document.getElementById("name");
let phoneNumber = document.getElementById("number");
const phoneNumberPattern = /^[\d\s\+\-\(\)]+$/;
let blankPhoneError = document.getElementById("blank-phone");
let blankNameError = document.getElementById("blank-name");
let email = document.getElementById("email");
let blankEmailError = document.getElementById("blank-email");


let firstPage = document.getElementById("first-step");
let secondPage = document.getElementById("second-step");
let thirdPage = document.getElementById("third-step");

let box1 = document.getElementsByClassName("box")[0];
let box2 = document.getElementsByClassName("box")[1];
let box3 = document.getElementsByClassName("box")[2];

let service = document.getElementById("service");
let storage = document.getElementById("storage");
let profile = document.getElementById("profile");

let checkService = document.getElementById("checkbox-service");
let checkStorage = document.getElementById("checkbox-storage");
let checkProfile = document.getElementById("checkbox-profile");

let imgService = document.createElement("img");
imgService.src = "./assets/images/icon-checkmark.svg";
imgService.style.backgroundColor = "hsl(243, 100%, 62%)";
imgService.style.width = "1.1rem";
imgService.style.height = "1.1rem";
imgService.style.padding = "0.2rem";
imgService.style.borderRadius = "3px";


let imgStorage = document.createElement("img");
imgStorage.src = "./assets/images/icon-checkmark.svg";
imgStorage.style.backgroundColor = "hsl(243, 100%, 62%)";
imgStorage.style.width = "1.1rem";
imgStorage.style.height = "1.1rem";
imgStorage.style.padding = "0.2rem";
imgStorage.style.borderRadius = "3px";



let imgProfile = document.createElement("img");
imgProfile.src = "./assets/images/icon-checkmark.svg";
imgProfile.style.backgroundColor = "hsl(243, 100%, 62%)";
imgProfile.style.width = "1.1rem";
imgProfile.style.height = "1.1rem";
imgProfile.style.padding = "0.2rem";
imgProfile.style.borderRadius = "3px";

let timeOption = document.getElementsByClassName("time-option");
let yearOption = document.getElementById("year-option");

const yearCostDisplay = document.getElementsByClassName("yearly-cost");
const freeDisplay = document.getElementsByClassName("free");
const monthCostDisplay = document.getElementsByClassName("monthly-cost");
let freeMonths = document.getElementById("freeTwoMonths");

let selectedService = document.getElementById("selected-service");
selectedService.style.display = "none";


let selectedStorage = document.getElementById("selected-storage");
selectedStorage.style.display = "none";

let selectedProfile = document.getElementById("selected-profile");
selectedProfile.style.display = "none";




const costArcadeMonth = 9;
const costAdvancedMonth = 12;
const costProMonth = 15;
const costArcadeYear = 90;
const costAdvancedYear = 120;
const costProYear = 150;

const costService = 1;
const costServiceYear = 10;

const costStorage = 2;
const costStorageYear = 20;

const costProfile = 2;
const costProfileYear = 20;

const arcadeMonth = `$${costArcadeMonth}/mo`;
const advancedMonth = `$${costAdvancedMonth}/mo`;
const proMonth = `$${costProMonth}/mo`;

const arcadeYear = `$${costArcadeYear}/yr`;
const advancedYear = `$${costAdvancedYear}/yr`;
const proYear = `$${costProYear}/yr`;

let totalSum = [];
// let sum = totalSum.reduce(calculateSum, 0);
let planCost;

function calculateSum() {

    return totalSum.reduce((accumulator, element) => accumulator + element, 0);
}

function updateTotalCost() {
    let sum = calculateSum();
    console.log(sum);
    let result = sum + planCost;

    if (isYear) {
        document.getElementById("total-cost").textContent = `$${result}/yr`;
        document.getElementById("total").textContent = "Total (per year)";
    } else {
        document.getElementById("total-cost").textContent = `$${result}/mo`;
        document.getElementById("total").textContent = "Total (per month)";
    }
}




document.addEventListener("DOMContentLoaded", () => {

    // First page form validation
    function activateError(element) {
        element.classList.remove("normal");
        element.classList.add("error");
    }

    function deactivateError(element) {
        element.classList.remove("error");
        element.classList.add("normal");
    }

    // Go to step two button
    if (goToStepTwo) {
        goToStepTwo.addEventListener("click", checkError)
    }

    function checkError(event) {

        event.preventDefault();

        let isValid = true;

        if (name.value.trim() === "") {
            activateError(name);
            blankNameError.style.display = "block";
            isValid = false;
        } else {
            blankNameError.style.display = "none";
            deactivateError(name);
        }

        if (!email.checkValidity() || email.value.trim() === "") {
            activateError(email);
            blankEmailError.style.display = "block";
            isValid = false;
        } else {
            blankEmailError.style.display = "none";
            deactivateError(email);
        }

        if (!phoneNumberPattern.test(phoneNumber.value) || phoneNumber.value.length < 11) {
            activateError(phoneNumber);
            blankPhoneError.style.display = "block";
            isValid = false;
        } else {
            blankPhoneError.style.display = "none";
            deactivateError(phoneNumber);
        }

        if (isValid) {
            stepOne.classList.remove("active");
            stepOne.classList.add("inactive");
            stepTwo.classList.remove("inactive");
            stepTwo.classList.add("active");
            firstPage.style.display = "none";
            secondPage.style.display = "block";
        }

    }

});

// Selecting the add-ons option

let selectedAdd = null;

function selectOption(optionNumber) {
    // Remove 'active' class from all options
    console.log("Option clicked: " + optionNumber); // Debugging statement

    document.querySelectorAll(".option").forEach(option => {
        option.classList.remove("selected");
    });

    // Add 'active' class to the clicked option
    document.getElementById("option" + optionNumber).classList.add("selected");
    selectedAdd = optionNumber;
    console.log(selectedAdd);




    if (isYear) {
        console.log("isYear is true");
        if (selectedAdd === 1) {
            document.getElementById("payment-plan").textContent = "Arcade (Yearly)";
            document.getElementById("plan-cost").textContent = arcadeYear;

            planCost = 90;

        } else if (selectedAdd === 2) {
            document.getElementById("payment-plan").textContent = "Advanced (Yearly)";
            document.getElementById("plan-cost").textContent = advancedYear;
            planCost = 120;
            console.log(planCost);


        } else if (selectedAdd === 3) {
            document.getElementById("payment-plan").textContent = "Pro (Yearly)";
            document.getElementById("plan-cost").textContent = proYear;
            planCost = 150;
            console.log(planCost);

        }

    } else {
        console.log("isYear is not true");
        if (selectedAdd === 1) {
            document.getElementById("payment-plan").textContent = "Arcade (Monthly)";
            document.getElementById("plan-cost").textContent = arcadeMonth;
            planCost = 9;
            console.log(planCost);

        }
        else if (selectedAdd === 2) {
            document.getElementById("payment-plan").textContent = "Advanced (Monthly)";
            document.getElementById("plan-cost").textContent = advancedMonth;
            planCost = 12;
            console.log(planCost);

        }
        else if (selectedAdd === 3) {
            document.getElementById("payment-plan").textContent = "Pro (Monthly)";
            document.getElementById("plan-cost").textContent = proMonth;
            planCost = 15;
            console.log(planCost);

        }


    }
    updateTotalCost();
}



// Switching from month to year
let isYear = false;

document.getElementById("background").addEventListener("click", changeToYear);

function changeToYear() {



    let toggle = document.getElementById("toggle");

    if (isYear) {
        toggle.style.transform = "translateX(0)";
        for (let i = 0; i < monthCostDisplay.length; i++) {
            monthCostDisplay[i].style.display = "block";
        }
        for (let i = 0; i < yearCostDisplay.length; i++) {
            yearCostDisplay[i].style.display = "none";
        }
        for (let i = 0; i < freeDisplay.length; i++) {
            freeDisplay[i].style.display = "none";
        }

        document.getElementById("year").style.color = "hsl(231, 11%, 63%)";
        document.getElementById("month").style.color = "hsl(213, 96%, 18%)";
        document.getElementById("service-price").textContent = "+$1/mo";
        document.getElementById("storage-price").textContent = "+$2/mo";
        document.getElementById("profile-price").textContent = "+$2/mo";


        isYear = false;
    } else {
        toggle.style.transform = "translateX(25px)";
        for (let i = 0; i < monthCostDisplay.length; i++) {
            monthCostDisplay[i].style.display = "none";
        }
        for (let i = 0; i < yearCostDisplay.length; i++) {
            yearCostDisplay[i].style.display = "block";
        }
        for (let i = 0; i < freeDisplay.length; i++) {
            freeDisplay[i].style.display = "block";
        }

        document.getElementById("year").style.color = "hsl(213, 96%, 18%)";
        document.getElementById("month").style.color = "hsl(231, 11%, 63%)";
        isYear = true;
        document.getElementById("service-price").textContent = "+$10/yr";
        document.getElementById("storage-price").textContent = "+$20/yr";
        document.getElementById("profile-price").textContent = "+$20/yr";
        document.getElementById("service-cost").textContent = "+$10/yr";
        document.getElementById("storage-cost").textContent = "+$20/yr";
        document.getElementById("profile-cost").textContent = "+$20/yr";
    }

    // updatePaymentPlan();
}

// Go back to one button

function goToOne() {

    console.log("What's happening")
    firstPage.style.display = "block";
    secondPage.style.display = "none";
    stepOne.classList.remove("inactive");
    stepOne.classList.add("active");
    stepTwo.classList.remove("active");
    stepTwo.classList.add("inactive");
}

// Go to step three button

if (goToStepThree) {
    goToStepThree.addEventListener("click", activateStepThree)
}


function activateStepThree(event) {

    event.preventDefault();

    if (selectedAdd === null) {
        alert("Please select an option before proceeding.");
    } else {
        stepTwo.classList.remove("active");
        stepTwo.classList.add("inactive");
        stepThree.classList.add("active");
        stepThree.classList.remove("inactive");
        secondPage.style.display = "none";
        thirdPage.style.display = "block";
    }


}

// Selecting the add-ons in step three

if (service) {
    service.addEventListener("click", serviceCheck);
}

if (storage) {
    storage.addEventListener("click", storageCheck);
}

if (profile) {
    profile.addEventListener("click", profileCheck)
}


let isSelected1 = false;
let isSelected2 = false;
let isSelected3 = false;

function serviceCheck() {

    if (isSelected1) {
        imgService.remove();
        box1.insertBefore(checkService, box1.firstChild);
        service.style.backgroundColor = "hsl(0, 0%, 100%)";
        service.style.borderColor = "hsl(229, 24%, 87%)";
        document.getElementsByClassName("cost")[0].style.color = "hsl(231, 11%, 63%)";
        isSelected1 = false;

        if (isYear) {
            totalSum = totalSum.filter(item => item !== costServiceYear);
        } else {
            totalSum = totalSum.filter(item => item !== costService);
        }
        // Remove cost when deselected
        console.log(totalSum);

    } else {
        checkService.remove();
        box1.insertBefore(imgService, box1.firstChild);
        service.style.borderColor = "hsl(243, 100%, 62%)";
        service.style.backgroundColor = "hsl(217, 100%, 97%)";
        document.getElementsByClassName("cost")[0].style.color = "hsl(243, 100%, 62%)";
        isSelected1 = true;

        if (isYear) {
            totalSum.push(costServiceYear);
        } else {
            totalSum.push(costService);
        }
        // Add cost when selected
        console.log(totalSum);

    }

    if (isSelected1) {
        console.log("This has been selected");
        selectedService.style.display = "flex";
        document.getElementById("add-on-service").textContent = "Online Service";
        // totalSum.push(costService);
    } else {
        selectedService.style.display = "none";
    }

    updateTotalCost();  // Update total cost


}



function storageCheck() {

    if (isSelected2) {
        imgStorage.remove();
        box2.insertBefore(checkStorage, box2.firstChild);
        storage.style.backgroundColor = "hsl(0, 0%, 100%)";
        storage.style.borderColor = "hsl(229, 24%, 87%)";
        document.getElementsByClassName("cost")[1].style.color = "hsl(231, 11%, 63%)";
        isSelected2 = false;

        if (isYear) {
            totalSum = totalSum.filter(item => item !== costStorageYear);
        } else {
            totalSum = totalSum.filter(item => item !== costStorage);
        }
        // Remove cost when deselected
        console.log(totalSum);

    } else {
        checkStorage.remove();
        box2.insertBefore(imgStorage, box2.firstChild);
        storage.style.borderColor = "hsl(243, 100%, 62%)";
        storage.style.backgroundColor = "hsl(217, 100%, 97%)";
        document.getElementsByClassName("cost")[1].style.color = "hsl(243, 100%, 62%)";
        isSelected2 = true;

        if (isYear) {
            totalSum.push(costStorageYear);
        } else {
            totalSum.push(costStorage);
        }

        console.log(totalSum);
    }

    if (isSelected2) {
        console.log("This has been selected");
        selectedStorage.style.display = "flex";
        document.getElementById("add-on-storage").textContent = "Larger Storage";
        // totalSum.push(costStorage);

    } else {
        selectedStorage.style.display = "none";
    }
    updateTotalCost(); // Update total cost


}

function profileCheck() {

    if (isSelected3) {
        imgProfile.remove();
        box3.insertBefore(checkProfile, box3.firstChild);
        profile.style.backgroundColor = "hsl(0, 0%, 100%)";
        profile.style.borderColor = "hsl(229, 24%, 87%)";
        document.getElementsByClassName("cost")[2].style.color = "hsl(231, 11%, 63%)";
        isSelected3 = false;

        if (isYear) {
            totalSum = totalSum.filter(item => item !== costProfileYear);

        } else {
            totalSum = totalSum.filter(item => item !== costProfile);

        }
        // Remove cost when deselected
        console.log(totalSum);


    } else {
        checkProfile.remove();
        box3.insertBefore(imgProfile, box3.firstChild);
        profile.style.borderColor = "hsl(243, 100%, 62%)";
        profile.style.backgroundColor = "hsl(217, 100%, 97%)";
        document.getElementsByClassName("cost")[2].style.color = "hsl(243, 100%, 62%)";
        isSelected3 = true;

        if (isYear) {
            totalSum.push(costProfileYear);
        } else {
            totalSum.push(costProfile);
        }

        console.log(totalSum);


    }

    if (isSelected3) {
        console.log("This has been selected");
        selectedProfile.style.display = "flex";
        document.getElementById("add-on-profile").textContent = "Customizable profile";
        // totalSum.push(costProfile);

    } else {
        selectedProfile.style.display = "none";
    }

    updateTotalCost(); // Update total cost

}

// updateTotalCost();



// Go back to step 2

document.getElementById("go-back-to-two").addEventListener("click", function (event) {
    goBackStepTwo(event);
});

function goBackStepTwo(event) {

    event.preventDefault();

    stepThree.classList.remove("active");
    stepThree.classList.add("inactive");
    stepTwo.classList.remove("inactive");
    stepTwo.classList.add("active");
    thirdPage.style.display = "none";
    secondPage.style.display = "block";
}


// Go to step four button
// I'm joining getElementById with addEventlistener here 

document.getElementById("go-to-step-four").addEventListener("click", function (event) {
    activateStepFour(event);
});

function activateStepFour(event) {

    event.preventDefault();

    document.getElementById("step-four").classList.remove("inactive");
    document.getElementById("step-four").classList.add("active");
    stepThree.classList.remove("active");
    stepThree.classList.add("inactive");
    thirdPage.style.display = "none";
    document.getElementById("fourth-step").style.display = "block";

}

// Go back to step three button (for convenience)

document.getElementById("go-back-to-three").addEventListener("click", function (event) {
    goBackStepThree(event);
});

function goBackStepThree(event) {

    event.preventDefault();

    let userConfirmed = confirm("Are you sure you want to go back? Your information will be cleared.");

    if (userConfirmed) {
        location.reload();
    }

}

document.getElementById("confirm").addEventListener("click", function (event) {
    goTofifthpage(event);
});

function goTofifthpage(event) {
    event.preventDefault();

    document.getElementById("fourth-step").style.display = "none";
    document.getElementById("fifth-step").style.display = "flex";

}

document.getElementById("change").addEventListener("click", function (event) {
    changeYourPlan(event);
});

function changeYourPlan(event) {
    event.preventDefault();

    document.getElementById("step-four").classList.remove("active");
    document.getElementById("step-four").classList.add("inactive");
    stepTwo.classList.remove("inactive");
    stepTwo.classList.add("active");
    document.getElementById("fourth-step").style.display = "none";
    secondPage.style.display = "block";

}






