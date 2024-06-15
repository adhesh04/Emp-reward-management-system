// script.js

const header = document.querySelector("header");
      const hamburgerBtn = document.querySelector("#hamburger-btn");
      const closeMenuBtn = document.querySelector("#close-menu-btn");

      // Toggle mobile menu on hamburger button click
      hamburgerBtn.addEventListener("click", () => header.classList.toggle("show-mobile-menu"));

      // Close mobile menu on close button click
      closeMenuBtn.addEventListener("click", () => hamburgerBtn.click());
// function redirectToLoginPage() {
    // window.location.href = "/login.html"; 
//   }
  
//   document.getElementById("loginBtn").addEventListener("click", redirectToLoginPage);

//   document.addEventListener("DOMContentLoaded", function() {
//     const loginForm = document.getElementById("loginForm"); // Assuming your form has an ID of "loginForm"
//     if (loginForm) { // Check if the form exists on the page
//         loginForm.addEventListener("submit", function(event) {
//             event.preventDefault(); // Prevent the default form submission
            
//             // Get the form data
//             const formData = new FormData(loginForm);
//             const username = formData.get("username");
//             const password = formData.get("password");
            
//             // Perform AJAX request to send the form data to the server
//             fetch("/login", {
//                 method: "POST",
//                 body: JSON.stringify({ username, password }),
//                 headers: {
//                     "Content-Type": "application/json"
//                 }
//             })
//             .then(response => {
//                 if (response.ok) {
//                     // Redirect to main.html if login is successful
//                     window.location.href = "/main";
//                 } else {
//                     // Handle invalid credentials or other errors
//                     alert("Invalid credentials. Please try again.");
//                 }
//             })
//             .catch(error => {
//                 console.error("Error:", error);
//                 alert("An error occurred. Please try again later.");
//             });
//         });
//     }
// });
 document.addEventListener("DOMContentLoaded", function() {
     const loginBtn = document.getElementById("loginBtn");
    loginBtn.addEventListener("click", function() {
         window.location.href = "login.html"; // Redirect to login route
    });
 });
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm"); // Assuming your form has an ID of "loginForm"
    if (loginForm) { // Check if the form exists on the page
        loginForm.addEventListener("submit", function(event) {
             event.preventDefault(); // Prevent the default form submission
            
            // // Get the form data
             const formData = new FormData(loginForm);
            const username = formData.get("username");
            const password = formData.get("password");
            
            // Perform AJAX request to send the form data to the server
            fetch("/login", {
                method: "POST",
                body: JSON.stringify({ username, password }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(response => {
                // Redirect to main.html regardless of login success or failure
                window.location.href = "main.html";
            })
            .catch(error => {
                console.error("Error:", error);
                alert("An error occurred. Please try again later.");
            });
        });
    }
});

