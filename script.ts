document.getElementById('Resumeform')?.addEventListener('submit', (event: Event) => {
    console.log('Form submission triggered');
    event.preventDefault();
    const profilePictureInput = document.getElementById("profilePicture") as HTMLInputElement | null;
    const nameElement = document.getElementById('name') as HTMLInputElement | null;
    const emailElement = document.getElementById('email') as HTMLInputElement | null;
    const phoneElement = document.getElementById('phone') as HTMLInputElement | null;
    const educationElement = document.getElementById('education') as HTMLTextAreaElement | null;
    const experienceElement = document.getElementById('experience') as HTMLTextAreaElement | null;
    const skillsElement = document.getElementById('skills') as HTMLTextAreaElement | null;

//** 
const usernameElement = document.getElementById(
    "username"
)as HTMLInputElement | null;





    if ( profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement &&

//**
      usernameElement



    ) {
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;
//** 
const username = usernameElement.value;
const uniquePath = `resumes/${username.replace(/\s+/g, ' ')}_cv.html`


        const profilePictureFile = profilePictureInput.files?.[0]
        const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";        

        const resumeOutput = `
            <h2>Resume</h2>
            ${profilePictureURL ?   `<img src = "${profilePictureURL} alt="Profile Picture" class="profilePicture">` : "" } 
            <p><strong>Name:</strong> <span id="edit-name" class="editable"> ${name}</span></p>
            <p><strong>Email:</strong> <span id="edit-email" class="editable"> ${email}</span></p>
            <p><strong>Phone:</strong> <span id="edit-phone" class="editable"> ${phone}</span></p>
            
            <h3>Education</h3>
            <p id="edit-education" class="editable">${education}</p>

            <h3>Experience</h3>
            <p id="edit-experience" class="editable">${experience}</p>

            <h3>Skills</h3>
            <p id="edit-skills" class="editable">${skills}</p>
        `;

//**
const downloadLink = document.createElement('a')
downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput) 
downloadLink.download = uniquePath
downloadLink.textContent = 'Download Your 2024 Resume';


        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;

//**
resumeOutputElement.appendChild(downloadLink)

        makeEditable();

        }
    } else {
        console.error('One or more form elements are missing');
    }
});

function makeEditable(){
    const editableElements = document.querySelectorAll(".editable");
    editableElements.forEach(Element => {
        Element.addEventListener('click' , function(){
            const currentElement = Element as HTMLElement;
            const currentValue = currentElement.textContent || "" ;

         if (currentElement.tagName === "P" || currentElement.tagName === "SPAN") {
            const input = document.createElement('input')
            input.type = "text"
            input.value = currentValue
            input.classList.add('editing-input')

            currentElement.style.display = "none"
            currentElement.parentNode?.insertBefore(input, currentElement)
            input.focus()
         }
        })
    })
}