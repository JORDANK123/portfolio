document.addEventListener('DOMContentLoaded', () => {
    document.body.style.backgroundColor = "#1E1E1E";
    document.body.style.margin = "100px";   
    generateHeader();
    generateContainer();
})

function generateContainer() {
    let container = document.createElement('div');
    container.style.display = "flex";
    container.style.width = "90vw";
    container.style.height = "90vh";
    container.style.overflow = "hidden";
    document.body.appendChild(container);
    generatediv1(container);
    generatediv2(container);
}

function generatediv1(container) {
    let div1 = document.createElement('div');
    div1.style.backgroundColor = "black";
    div1.style.width = "40%";
    div1.style.height = "100%"; 
    div1.style.padding = "50px";
    container.appendChild(div1);
     generateimgdiv1(div1);
}

function generatediv2(container) {
    let div2 = document.createElement('div');
    div2.style.backgroundColor = "black";
    div2.style.width = "60%";
    div2.style.height = "100%";
    generateSkills(div2);
    container.appendChild(div2);
}
function generateHeader() {
    let header = document.createElement('header');
    header.textContent = "Welcome !";
    header.style.color = "#0dcdf3"
    header.style.fontSize = "30px";
    header.style.display = "flex";
    header.style.alignItems = "center";
    header.style.justifyContent = "center";
    header.style.height = "10vh";
    document.body.appendChild(header);
}

function generateimgdiv1(div1){
    let img = document.createElement('img');
    let caption = document.createElement('p');
    caption.innerHTML = "Hello, I am Jordan Kulcsar<br>I am a Computer Information Systems student at Mount Royal University. I am passionate about technology and the endless possibilities you can achieve with it.";
    caption.style.color = "white";
    img.src = "images/headshot.jpg";
    img.style.width = "40%";
    img.style.height = "40%";
    img.style.borderRadius = "50%";
    img.style.border = "2px solid #0dcdf3";
    img.style.margin = "auto";
    div1.appendChild(img);
    div1.appendChild(caption);
}



function generateSkills(div2) {
    let languages = ["HTML", "CSS", "JavaScript", "PHP", "Java", "MySQL", "Python"];
    let skills = ["Leadership", "Teamwork", "Problem Solving", "Communication", "Time Management", "Adaptability"];
    let aboutMe = document.createElement("h1");
    aboutMe.textContent = "About Me";
    aboutMe.style.color = "#0dcdf3";
    aboutMe.style.textAlign = "center";
    let listsContainer = document.createElement('div');
    listsContainer.style.display = "flex";
    listsContainer.style.width = "100%";
    listsContainer.style.padding = "10em";
    div2.appendChild(aboutMe);
    div2.appendChild(listsContainer);

    let languagesContainer = document.createElement('div');
    languagesContainer.style.flex = "1";
    listsContainer.appendChild(languagesContainer);

    let languagesHeader = document.createElement('h2');
    languagesHeader.textContent = "Languages";
    languagesHeader.style.color = "#0dcdf3";
    languagesContainer.appendChild(languagesHeader);

    let languagesList = document.createElement('ul');
    languagesList.style.color = "white";
    languagesList.style.listStyleType = "none";
    languagesContainer.appendChild(languagesList);

    languages.forEach((language) => {
        let li = document.createElement('li');
        li.textContent = language;
        li.style.margin = "10px";
        languagesList.appendChild(li);
    });

    let skillsContainer = document.createElement('div');
    skillsContainer.style.flex = "1";
    listsContainer.appendChild(skillsContainer);

    let skillsHeader = document.createElement('h2');
    skillsHeader.textContent = "Skills";
    skillsHeader.style.color = "#0dcdf3";
    skillsContainer.appendChild(skillsHeader);

    let skillsList = document.createElement('ul');
    skillsList.style.color = "white";
    skillsList.style.listStyleType = "none";
    skillsContainer.appendChild(skillsList);

    skills.forEach((skill) => {
        let li = document.createElement('li');
        li.textContent = skill;
        li.style.margin = "10px";
        skillsList.appendChild(li);
    });
}

/**
 * Next steps: ADD CSS to make it look better, 
 * Add event listeners to the skills and languages to make them clickable and pop up an alert with more information on the language or skill.
 * Add a footer with contact information
 * 
 */