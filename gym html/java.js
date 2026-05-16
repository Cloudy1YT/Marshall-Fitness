//Java file - Brandon Marshall

const workouts = [
    "Marshall's Car-Lifting - 4 sets of car lifting.",
    "Chris's Cardio Fire Blast - 5 rounds sprinting across the world",
    "Daunte's Iron Mastery - Bench press 2 buildings. 2 sets",
    "Mimose's Tranquil flow - 3 sets of light jogging,  1 min water break between sets"
];

//Variables + Arrays use
const gymClasses = [
    {name: "Marshall's Car-Lifting Basics", time: "8:30 AM - 11:00 AM", trainer: "Coach Marshall" },
    {name: "Chris's Carido Fire Training", time: "11:30 AM - 2:00 PM", trainer: "Instructor Chris"},
    {name: "Daunte's Iron Mastery Class", time: "2:30 PM - 6:00 PM", trainer: "Instructor Daunte"},
    {name: "Mimose's Tranquil Evening Flow Session", time: "6:30 PM - 8:00 PM", trainer: "Intructor Mimose"}
];

//Membership form logic
const membershipForm = document.getElementById('membership-form');
if (membershipForm) { 
    membershipForm.addEventListener('submit', validateForm);
}

const loadButton = document.getElementById('load-classes-button');
if (loadButton) {
    loadButton.addEventListener('click', displayClasses);
}

 const workButton = document.getElementById('workout-button');
        if (workButton) {
        workButton.addEventListener('click', generateWorkout);
    }

//Form validation 
function validateForm(event) {
    event.preventDefault(); //stops form from refreshing the page

    //DOM access, getting values from registration form
    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const age = document.getElementById('age').value;
    const  phone = document.getElementById('phone').value;
    const goals = document.getElementById('fitness-goals').value;
    const history = document.getElementById('fitness-history').value;
    const feedback = document.getElementById('error');
   

    feedback.innerHTML = ""; //clear error readings
    feedback.style.color = "red"; // red = nono 

    //validate the text inputs 
    if (firstName == "" || lastName== "" || email == "" || goals == "" || phone == "") {
        feedback.innerHTML = "Error: THEY THERE, you need to fill out the following areas: First Name, Last Name, Email, Phone Number, and Fitness Goals!";
        return;
    }

    if (!email.includes("@")) { //validates the email address with "@", since all emails have it
        feedback.innerHTML = "Error: HEY THERE, we need a valid email from you!"
        return;
    }

    const phonePattern = /^\d{10}$/; // Checks for exactly 10 digits
if (!phonePattern.test(phone.replace(/[-()\s]/g, ""))) { 
    feedback.innerHTML = "Error: Please enter a valid 10-digit phone number!";
    return;
}

    if (age < 13) { //validates age input
        feedback.innerHTML = "Error: We appreicate the enthusiasm but you're too young to register!"
        return;
    }
    if (age > 100) {
        feedback.innerHTML = "Error: What are you, a fossile?? Your too old for this!"
        return;
    }
//confirmation popup after validation checks
    feedback.style.color = "green";
    feedback.innerHTML = "Registration Successful! Welcome to Marshall Fitness!";
}

function displayClasses() {
    const container = document.getElementById('schedule-container');

//resets info, making sure it only displays once
    container.innerHTML = "";

    for (let i = 0; i < gymClasses.length; i++){

        const classCard = document.createElement('div');
        classCard.className = 'program-card';

       let instructorStyle = "";
       if (gymClasses[i].trainer == "Coach Marshall") {
            instructorStyle = "style='color: #0b2545; font-weight: bold;'";
        }

        classCard.innerHTML = `
            <h3 ${instructorStyle}>${gymClasses[i].name}</h3>
            <p><strong>Time:</strong> ${gymClasses[i].time}</p>
            <p><strong>Trainer:</strong> ${gymClasses[i].trainer}</p> `;
//resetting page
        container.appendChild(classCard);
    }

}

function generateWorkout() {
    const display = document.getElementById('work-display');
    
    const randomIndex = Math.floor(Math.random() * workouts.length);
    display.innerHTML = `<strong>Today's Workout:</strong> ${workouts[randomIndex]}`;
    display.style.color = "#0b2545";
    display.style.fontWeight = "bold";
}