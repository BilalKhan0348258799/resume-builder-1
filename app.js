"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var jspdf_1 = require("jspdf");
// Listen for the button click to generate resume
(_a = document.getElementById("generateBtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var _a, _b;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value.trim();
    var education = document.getElementById("education").value;
    var workExperience = document.getElementById("workExperience").value;
    var skills = document.getElementById("skills").value.split(",");
    // Form validation to ensure all fields are filled
    if (!name || !email || !username || !education || !workExperience || skills.length === 0) {
        alert("Please fill in all fields.");
        return;
    }
    // Generate Resume Content
    var resumeDiv = document.getElementById("resume");
    if (resumeDiv) {
        resumeDiv.innerHTML = "\n      <h2>".concat(name, "</h2>\n      <p>Email: ").concat(email, "</p>\n      <p>Username: ").concat(username, "</p>\n      <div>\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n      </div>\n      <div>\n        <h3>Work Experience</h3>\n        <p>").concat(workExperience, "</p>\n      </div>\n      <div>\n        <h3>Skills</h3>\n        <ul>").concat(skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(""), "</ul>\n      </div>\n      <button id=\"editResume\">Edit</button>\n      <button id=\"downloadPDF\">Download as PDF</button>\n      <p><strong>Your resume is ready! Share it with this link: </strong><a href=\"https://yourdomain.com/").concat(username, "\" target=\"_blank\">Resume Link</a></p>\n    ");
        // Download PDF functionality
        (_a = document.getElementById("downloadPDF")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
            var pdf = new jspdf_1.jsPDF();
            // Using html to PDF conversion provided by jsPDF
            pdf.html(resumeDiv, {
                callback: function (pdf) {
                    pdf.save("".concat(username, "_resume.pdf")); // Saving the file with the username
                },
                x: 10,
                y: 10,
            });
        });
        // Edit Resume functionality
        (_b = document.getElementById("editResume")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
            // Show the form again
            document.getElementById("resumeForm").style.display = "block";
        });
        // Hide the form after generating the resume
        document.getElementById("resumeForm").style.display = "none";
    }
});
