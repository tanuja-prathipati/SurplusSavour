document.addEventListener("DOMContentLoaded", function() {
    const firebaseConfig = {
        apiKey: "AIzaSyB1ncqm3pReYC25I9fM5kOIPh690h2e9GU",
        authDomain: "surplussavour.firebaseapp.com",
        databaseURL: "https://surplussavour-default-rtdb.firebaseio.com",
        projectId: "surplussavour",
        storageBucket: "surplussavour.appspot.com",
        messagingSenderId: "784177864304",
        appId: "1:784177864304:web:3e49bb2b0dfef1b51b1eb5"
    };

    firebase.initializeApp(firebaseConfig);
    const firebaseObjDB = firebase.database().ref("SurplusSavour");





document.getElementById("loginForm").addEventListener("submit", submitLoginForm);
    console.log("login sucess")

    function submitLoginForm(e) {
        // Prevent form submission
        e.preventDefault();

        // Get phone number and password from the form
        const phoneNumber = document.getElementById("phoneNumber").value;
        const password = document.getElementById("loginPassword").value;


        // Query the Firebase database for the provided phone number
        firebaseObjDB.orderByChild("phonenumber").equalTo(phoneNumber).once("value", function(snapshot) {
           if (snapshot.exists()) { // If a record with the provided phone number exists
                snapshot.forEach(function(data) {
                   const donorData = data.val();
                    const storedPassword = donorData.password;

                    // Compare the provided password with the password stored in the database
                    if (password == storedPassword) {
                        // Passwords match, allow login
                        //alert("Login successful!");
                        // Redirect to the donor dashboard page (dpage.html)
                        window.location.assign("d_page.html");
                    } else {
                        // Passwords don't match, show error message
                        //alert("Incorrect password. Please try again.");
                    }
                });
           } else {
                // No record with the provided phone number found, show error message
                //alert("No user found with this phone number. Please register first.");
            }
        });
    }
})