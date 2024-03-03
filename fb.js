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

    document.getElementById("foodDonorRegistrationForm").addEventListener("submit", submitForm);

    function submitForm(e) {
        e.preventDefault();
        const name = getElementVal("foodDonorName");
        const ownername = getElementVal("ownerName");
        const phonenumber = getElementVal("phoneNumber");
        const email = getElementVal("email");
        const password = getElementVal("foodDonorPassword");
        const confirmpwd = getElementVal("confirmFoodDonorPassword");
        const address = getElementVal("address");
        const aadhaar = getElementVal("proofDocument");

        saveMessages(name, ownername, phonenumber, email, password, confirmpwd, address, aadhaar);
        window.location.assign("donor_login.html");
    }

    const saveMessages = (name, ownername, phonenumber, email, password, confirmpwd, address, aadhaar) => {
        const newref = firebaseObjDB.push();
        newref.set({
            name: name,
            ownername: ownername,
            phonenumber: phonenumber,
            email: email,
            password: password,
            confirmpwd: confirmpwd,
            address: address,
            aadhaar: aadhaar,
        });

        // Clear the form fields
        document.getElementById("foodDonorName").value = "";
        document.getElementById("ownerName").value = "";
        document.getElementById("phoneNumber").value = "";
        document.getElementById("email").value = "";
        document.getElementById("foodDonorPassword").value = "";
        document.getElementById("confirmFoodDonorPassword").value = "";
        document.getElementById("address").value = "";
        document.getElementById("proofDocument").value = "";
    };

    const getElementVal = (id) => {
        return document.getElementById(id).value;
    }

    
});
