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

  document.getElementById("foodReceiverRegistrationForm").addEventListener("submit", submitForm);

    function submitForm(e) {
        e.preventDefault();
        const receivername = getElementVal("foodReceiverName");
        const contactname = getElementVal("contactPerson");
        const phnnumber = getElementVal("foodReceiverPhoneNumber");
        const emailid = getElementVal("foodReceiverEmail");
        const pwd = getElementVal("foodReceiverPassword");
        const confirmpassword = getElementVal("confirmFoodReceiverPassword");
        const rec_address = getElementVal("foodReceiverAddress");
        const aadhaarnum = getElementVal("proofDocument");

        saveMessages(receivername, contactname, phnnumber, emailid, pwd, confirmpassword, rec_address, aadhaarnum);
        window.location.assign("receiver_login.html");
    }

    const saveMessages = (receivername, contactname, phnnumber, emailid, pwd, confirmpassword, rec_address, aadhaarnum) => {
        const newrec = firebasereceiver.push();
        newrec.set({
            receivername: receivername,
            contactname: contactname,
            phnnumber: phnnumber,
            emailid: emailid,
            pwd: pwd,
            confirmpassword: confirmpassword,
            rec_address: rec_address,
            aadhaarnum: aadhaarnum,
        });

        // Clear the form fields
        document.getElementById("foodReceiverName").value = "";
        document.getElementById("contactPerson").value = "";
        document.getElementById("foodReceiverPhoneNumber").value = "";
        document.getElementById("foodReceiverEmail").value = "";
        document.getElementById("foodReceiverPassword").value = "";
        document.getElementById("confirmFoodReceiverPassword").value = "";
        document.getElementById("foodReceiverAddress").value = "";
        document.getElementById("proofDocument").value = "";
    };

    const getElementVal = (id) => {
        return document.getElementById(id).value;
    }

    
});