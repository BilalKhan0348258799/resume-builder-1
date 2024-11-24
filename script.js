var _a;
(_a = document.getElementById("generateBtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var _a, _b;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value.trim();
    var education = document.getElementById("education").value;
    var workExperience = document.getElementById("workExperience").value;
    var skills = document.getElementById("skills").value.split(",");
    if (!name || !email || !username || !education || !workExperience || skills.length === 0) {
        alert("Please fill in all fields.");
        return;
    }
    // Generate Resume
    var resumeDiv = document.getElementById("resume");
    if (resumeDiv) {
        resumeDiv.innerHTML = "\n        <h2>".concat(name, "</h2>\n        <p>Email: ").concat(email, "</p>\n        <p>Username: ").concat(username, "</p>\n        <div>\n          <h3>Education</h3>\n          <p>").concat(education, "</p>\n        </div>\n        <div>\n          <h3>Work Experience</h3>\n          <p>").concat(workExperience, "</p>\n        </div>\n        <div>\n          <h3>Skills</h3>\n          <ul>").concat(skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(""), "</ul>\n        </div>\n        <button id=\"editResume\">Edit</button>\n        <button id=\"downloadPDF\">Download as PDF</button>\n      ");
        // Add Editing Functionality
        (_a = document.getElementById("editResume")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
            document.getElementById("resumeForm").style.display = "block";
        });
        // Add PDF Download Functionality
        (_b = document.getElementById("downloadPDF")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
            var jsPDF = window.jspdf.jsPDF;
            var pdf = new jsPDF();
            pdf.html(resumeDiv, {
                callback: function (pdf) {
                    pdf.save("".concat(username, "_resume.pdf"));
                },
                x: 10,
                y: 10,
            });
        });
        // Hide Form
        document.getElementById("resumeForm").style.display = "none";
        // Generate Unique URL
        var baseURL = window.location.origin;
        var uniqueURL = "".concat(baseURL, "/resume?username=").concat(encodeURIComponent(username));
        resumeDiv.insertAdjacentHTML("beforeend", "<div>\n          <h3>Share Your Resume</h3>\n          <p>URL: <a href=\"".concat(uniqueURL, "\" target=\"_blank\">").concat(uniqueURL, "</a></p>\n        </div>"));
        window.history.pushState({}, "", "/resume?username=".concat(encodeURIComponent(username)));
    }
});
window.addEventListener("DOMContentLoaded", function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get("username");
    if (username) {
        document.getElementById("username").value = username;
        alert("Welcome back, ".concat(username, "! Fill in the form to generate or update your resume."));
    }
});
