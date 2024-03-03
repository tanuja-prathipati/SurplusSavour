document.addEventListener("DOMContentLoaded", function() {
    const firebaseConfig = {
        apiKey: "AIzaSyB8l7iDRkWAKGWAaAv_IdtEf1mWJKXZPpE",
        authDomain: "dpage-fb17a.firebaseapp.com",
        databaseURL: "https://dpage-fb17a-default-rtdb.firebaseio.com",
        projectId: "dpage-fb17a",
        storageBucket: "dpage-fb17a.appspot.com",
        messagingSenderId: "337462984494",
        appId: "1:337462984494:web:c322bd9db9f1156ee3c4bf"
      };

    firebase.initializeApp(firebaseConfig);
    const firebasedstore = firebase.database().ref("dpage");
    
    document.getElementById("loginForm").addEventListener("submit", submitForm);

    function submitForm(e) {
        e.preventDefault();
        const phonenum = getElementVal("phonenum");
        const type = getElementVal("available-food");
        const quantity = getElementVal("quantity");
        const pickuptime = getElementVal("pickuptime");

        saveMessages(phonenum, type, quantity, pickuptime);
    }

    const saveMessages = (phonenum, type, quantity, pickuptime) => {
        const newdstore = firebasedstore.push();
        newdstore.set({
            phonenum: phonenum,
            type: type,
            quantity: quantity,
            pickuptime: pickuptime,
        });

        // Clear the form fields
        document.getElementById("phonenum").value = "";
        document.getElementById("available-food").value = "";
        document.getElementById("quantity").value = "";
        document.getElementById("pickuptime").value = "";
    };

    const getElementVal = (id) => {
        return document.getElementById(id).value;
    }

    
});
