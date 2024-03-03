document.addEventListener("DOMContentLoaded", function() {
    const firebaseConfig = {
        apiKey: "AIzaSyCFEUKoHlUesWMTMGbIQW5txGqm9_kh8bo",
        authDomain: "receiver-b453d.firebaseapp.com",
        databaseURL: "https://receiver-b453d-default-rtdb.firebaseio.com",
        projectId: "receiver-b453d",
        storageBucket: "receiver-b453d.appspot.com",
        messagingSenderId: "123728773549",
        appId: "1:123728773549:web:2b214ce9af86a58b032124"
      };

    firebase.initializeApp(firebaseConfig);
    const firebasereceiver = firebase.database().ref("receiver");





document.getElementById("loginForm").addEventListener("submit", submitLoginForm);
    console.log("login success")

    function submitLoginForm(e) {
        // Prevent form submission
        e.preventDefault();

        // Get phone number and password from the form
        const phoneNumber = document.getElementById("PhoneNumber").value;
        const password = document.getElementById("loginPassword").value;


        // Query the Firebase database for the provided phone number
        firebasereceiver.orderByChild("phnnumber").equalTo(phoneNumber).once("value", function(snapshot) {
           if (snapshot.exists()) { // If a record with the provided phone number exists
                snapshot.forEach(function(data) {
                   const donorData = data.val();
                    const storedPassword = donorData.pwd;

                    // Compare the provided password with the password stored in the database
                    if (password == storedPassword) {
                        // Passwords match, allow login
                        //alert("Login successful!");
                        // Redirect to the donor dashboard page (dpage.html)
                        window.location.assign("r_page.html");
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