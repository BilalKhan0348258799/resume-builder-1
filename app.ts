import { jsPDF } from "jspdf";

// Listen for the button click to generate resume
document.getElementById("generateBtn")?.addEventListener("click", () => {
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const username = (document.getElementById("username") as HTMLInputElement).value.trim();
  const education = (document.getElementById("education") as HTMLTextAreaElement).value;
  const workExperience = (document.getElementById("workExperience") as HTMLTextAreaElement).value;
  const skills = (document.getElementById("skills") as HTMLTextAreaElement).value.split(",");

  // Form validation to ensure all fields are filled
  if (!name || !email || !username || !education || !workExperience || skills.length === 0) {
    alert("Please fill in all fields.");
    return;
  }

  // Generate Resume Content
  const resumeDiv = document.getElementById("resume");
  if (resumeDiv) {
    resumeDiv.innerHTML = `
      <h2>${name}</h2>
      <p>Email: ${email}</p>
      <p>Username: ${username}</p>
      <div>
        <h3>Education</h3>
        <p>${education}</p>
      </div>
      <div>
        <h3>Work Experience</h3>
        <p>${workExperience}</p>
      </div>
      <div>
        <h3>Skills</h3>
        <ul>${skills.map(skill => `<li>${skill.trim()}</li>`).join("")}</ul>
      </div>
      <button id="editResume">Edit</button>
      <button id="downloadPDF">Download as PDF</button>
      <p><strong>Your resume is ready! Share it with this link: </strong><a href="https://yourdomain.com/${username}" target="_blank">Resume Link</a></p>
    `;

    // Download PDF functionality
    document.getElementById("downloadPDF")?.addEventListener("click", () => {
      const pdf = new jsPDF();

      // Using html to PDF conversion provided by jsPDF
      pdf.html(resumeDiv as HTMLElement, {
        callback: (pdf) => {
          pdf.save(`${username}_resume.pdf`); // Saving the file with the username
        },
        x: 10,
        y: 10,
      });
    });

    // Edit Resume functionality
    document.getElementById("editResume")?.addEventListener("click", () => {
      // Show the form again
      (document.getElementById("resumeForm") as HTMLFormElement).style.display = "block";
    });

    // Hide the form after generating the resume
    (document.getElementById("resumeForm") as HTMLFormElement).style.display = "none";
  }
});
