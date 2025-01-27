document.addEventListener('DOMContentLoaded', () => {
    document.body.style.backgroundImage = "url('images/background.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.display = "flex";
    document.body.style.flexDirection = "column";
    document.body.style.minHeight = "100vh";
    generateHeader();
    generateContainer();
    createFooter();
    applyResponsiveStyles();
});

function generateContainer() {
    let container = document.createElement('div');
    container.style.display = "flex";
    container.style.flexDirection = "column"; 
    container.style.flex = "1";
    container.style.width = "100%"; 
    container.style.boxSizing = "border-box";
    document.body.appendChild(container);

    let topContainer = document.createElement('div');
    topContainer.style.display = "flex";
    topContainer.style.flex = "1";
    topContainer.style.width = "100%";
    topContainer.style.alignItems = "stretch"; 
    container.appendChild(topContainer);

    generatediv1(topContainer); 
    generatediv2(topContainer);
}

function generatediv1(container) {
    let div1 = document.createElement('div');
    div1.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    div1.style.width = "50%";
    div1.style.height = "100%"; 
    div1.style.padding = "20px";
    div1.style.overflow = "hidden";
    container.appendChild(div1);
    generateimgdiv1(div1);
}

function generatediv2(container) {
    let div2 = document.createElement('div');
    div2.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    div2.style.width = "50%";
    div2.style.height = "100%"; 
    div2.style.padding = "20px";
    generateSkills(div2);
    container.appendChild(div2);
}

function generateHeader() {
    let header = document.createElement('header');
    header.textContent = "Welcome to my Space";
    header.style.color = "#0dcdf3";
    header.style.fontSize = "30px";
    header.style.display = "flex";
    header.style.alignItems = "center";
    header.style.justifyContent = "center";
    header.style.height = "10vh";
    header.style.margin = "0"; 
    document.body.appendChild(header);
}

function generateimgdiv1(div1){
    let img = document.createElement('img');
    let caption = document.createElement('p');
    let h1 = document.createElement('h1');
    h1.style.color = "#0dcdf3";
    h1.textContent = "About Me";
    caption.innerHTML = "Hello, my name is Jordan Kulcsar<br><br>I am 21 and in my third year of Computer Information Systems at Mount Royal University.<br><br> I am passionate about technology and the endless possibilities you can achieve with it.<br><br>"
    + " I created this page to display and practice the skills I have learned throughout my education.<br><br> I am currently seeking a summer internship to further develop my skills and gain experience in the field.<br><br> Feel free to explore the page and learn more about me!";
    caption.style.color = "white";
    img.src = "images/headshot.jpg";
    img.style.width = "30%";
    img.style.height = "40%"; 
    img.style.borderRadius = "50%";
    img.style.border = "2px solid #0dcdf3";
    img.style.margin = "auto";
    div1.appendChild(h1);
    div1.appendChild(img);
    div1.appendChild(caption);
}

function generatePopup(title, message) {
    let overlay = document.createElement('div');
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100vw";
    overlay.style.height = "100vh";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    overlay.style.display = "flex";
    overlay.style.alignItems = "center";
    overlay.style.justifyContent = "center";
    overlay.style.zIndex = "1000";

    let popup = document.createElement('div');
    popup.style.width = "400px";
    popup.style.padding = "50px";
    popup.style.backgroundColor = "lightgray";
    popup.style.borderRadius = "20px";
    popup.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.4)";
    popup.style.textAlign = "center";
    popup.style.position = "relative";

    let popupTitle = document.createElement('h2');
    popupTitle.textContent = title;
    popupTitle.style.marginBottom = "10px";
    popup.appendChild(popupTitle);

    let popupMessage = document.createElement('p');
    popupMessage.textContent = message;
    popupMessage.style.marginBottom = "20px";
    popup.appendChild(popupMessage);

    let closeButton = document.createElement('button');
    closeButton.textContent = "X";
    closeButton.style.padding = "10px 20px";
    closeButton.style.backgroundColor = "#f44336";
    closeButton.style.marginBottom = "2px";  
    closeButton.style.color = "#fff";
    closeButton.style.border = "none";
    closeButton.style.borderRadius = "5px";
    closeButton.style.cursor = "pointer";

    closeButton.addEventListener('click', () => {
        document.body.removeChild(overlay);
    });

    popup.appendChild(closeButton);
    overlay.appendChild(popup);

    document.body.appendChild(overlay);
}

function generateSkills(div2) {   
    let languages = ["HTML", "CSS", "JavaScript", "Linux", "Java", "MySQL", "Python"];
    let skills = ["Leadership", "Teamwork", "Problem Solving", "Communication", "Time Management", "Adaptability"];


    let listsContainer = document.createElement('div');
    listsContainer.style.display = "flex";
    listsContainer.style.width = "100%";
    listsContainer.style.justifyContent = "space-between";
    div2.appendChild(listsContainer);

    let languagesContainer = document.createElement('div');
    languagesContainer.className = 'languages-container';
    languagesContainer.style.flex = "1";
    languagesContainer.style.paddingLeft = "10em";
    listsContainer.appendChild(languagesContainer);

    let languagesHeader = document.createElement('h2');
    languagesHeader.textContent = "Technical Skills";
    languagesHeader.style.color = "#0dcdf3";
    languagesContainer.appendChild(languagesHeader);

    let languagesList = document.createElement('ul');
    languagesList.style.color = "white";
    languagesContainer.appendChild(languagesList);

    languages.forEach((language) => {
        let li = document.createElement('li');
        li.addEventListener('click', () => {
            if (language === "HTML") {
                generatePopup(language, "I have taken two web development courses that have tought me the basics as well as some more advanced features of HTML.");
            } else if (language === "CSS") {
                generatePopup(language, "I have used CSS to style websites in classes as well as personal projects. I have also started to explore frameworks such as Tailwind CSS.");
            } else if (language === "JavaScript") {
                generatePopup(language, "Developed a single-page web application built with HTML, JavaScript, and Tailwind CSS. It consumes data from the provided F1 API and uses the browser's local storage to cache race data for improved performance. User interaction drives dynamic content updates, including sorting and filtering data, without requiring additional API requests.");
            } else if (language === "Linux") {
                generatePopup(language, "Comfortable maneuvering and working in OS environments.");
            } else if (language === "Java") {
                generatePopup(language, "Created a comprehensive text/word analysis system using Java, demonstrating proficiency in leveraging programming for language processing and analysis tasks.");
            } else if (language === "MySQL") {
                generatePopup(language, "Experienced in creating and working with relational databases in MySQL");
            } else if (language === "Python") {
                generatePopup(language, "This is the first language I learned and I have created small software projects using Python.");
            } else {
                generatePopup("Problem");
            }
        });
        li.textContent = language;
        li.style.cursor = "pointer";
        li.onmouseover = () => (li.style.textDecoration = "underline");
        li.onmouseout = () => (li.style.textDecoration = "none");
        li.style.padding = "20px";
        languagesList.appendChild(li);
    });

    let skillsContainer = document.createElement('div');
    skillsContainer.className = 'skills-container';
    skillsContainer.style.flex = "1";
    skillsContainer.style.paddingRight = "10em";
    listsContainer.appendChild(skillsContainer);

    let skillsHeader = document.createElement('h2');
    skillsHeader.textContent = "Soft Skills";
    skillsHeader.style.color = "#0dcdf3";
    skillsContainer.appendChild(skillsHeader);

    let skillsList = document.createElement('ul');
    skillsList.style.color = "white";
    skillsContainer.appendChild(skillsList);

    skills.forEach((skill) => {
        let li = document.createElement('li');
        li.addEventListener('click', () => {
            if (skill === "Leadership") {
                generatePopup(skill, "I have developed my leadership skills through my involvment in team sports as well as my job as a Swing-Sous Chef at Earls which I was offered based on my leadership abilities and quality of work .");
            } else if (skill === "Teamwork") {
                generatePopup(skill, "I am very comfortable working in a team environment and have developed my teamwork skills through career as a soccer player as well as a chef");
            } else if (skill === "Problem Solving") {
                generatePopup(skill, "I have always been the type of person to 'Figure it out' and I have developed my problem solving skills through my education and work experience.");
            } else if (skill === "Communication") {
                generatePopup(skill, "I pride myself on my ability to effectively communicate with others in professional and personal settings.");
            } else if (skill === "Time Management") {
                generatePopup(skill, "Currently working part-time and attending school full-time has taught me how to manage my time effectively and prioritize tasks to ensure they all get completed on time.");
            } else if (skill === "Adaptability") {
                generatePopup(skill, "Through working in a kitchen environment I have learned how to adapt to new situations and environments quickly and effectively.");
            } else {
                generatePopup("Problem");
            }
        });
        li.textContent = skill;
        li.style.cursor = "pointer";
          li.onmouseover = () => (li.style.textDecoration = "underline");
        li.onmouseout = () => (li.style.textDecoration = "none");
        li.style.padding = "20px";
        skillsList.appendChild(li);
    });

    let infoText = document.createElement('p');
    infoText.textContent = "*Click on a skill to learn how I've used it !*";
    infoText.style.textAlign = "center";
    infoText.style.color = "white";
    infoText.style.fontSize = "16px";
    div2.appendChild(infoText);
}

function createFooter() {
    const footer = document.createElement("footer");
    footer.style.cssText = `
        background-color: rgba(0, 0, 0, 0.8);
        color: white;
        text-align: center;
        padding: 20px;
        width: 100%;
        font-size: 14px;
        margin-top: auto;
    `;

    const copyright = document.createElement('p');
    copyright.textContent = "© 2025 Jordan Kulcsar. All rights reserved.";
    footer.appendChild(copyright);

    const linksContainer = document.createElement('div');
    linksContainer.style.marginTop = "10px";

    const links = [
        { href: "https://www.linkedin.com/in/jordan-kulcsar-113266306/", text: "LinkedIn" },
        { href: "https://github.com/JORDANK123", text: "GitHub" },
        { href: "mailto:kulcsarjordan@gmail.com", text: "Email" }
    ];

    links.forEach((link, index) => {
        const anchor = document.createElement('a');
        anchor.href = link.href;
        anchor.textContent = link.text;
        anchor.target = "_blank";
        anchor.style.cssText = `
            color: #0dcdf3;
            text-decoration: none;
            margin: 0 10px;
        `;
        anchor.onmouseover = () => (anchor.style.textDecoration = "underline");
        anchor.onmouseout = () => (anchor.style.textDecoration = "none");

        linksContainer.appendChild(anchor);

        if (index < links.length - 1) {
            const separator = document.createElement('span');
            separator.textContent = " | ";
            separator.className = 'separator';
            linksContainer.appendChild(separator);
        }
    });

    footer.appendChild(linksContainer);
    document.body.appendChild(footer);
}

function applyResponsiveStyles() {
    const updateStyles = () => {
        const width = window.innerWidth;

        const container = document.body.querySelector('div');
        const topContainer = container.children[0];
        const div1 = topContainer.children[0];
        const div2 = topContainer.children[1];
        const header = document.querySelector('header');
        const h1Elements = document.querySelectorAll('h1, h2');
        const ulElements = document.querySelectorAll('ul');
        const footer = document.querySelector('footer');

        if (width <= 768) {
            container.style.flexDirection = "column";
            topContainer.style.flexDirection = "column";

            div1.style.width = "100%";
            div1.style.height = "auto";
            div1.style.padding = "10px";

            div2.style.width = "100%";
            div2.style.height = "auto";
            div2.style.padding = "10px";

            header.style.fontSize = "20px";
            h1Elements.forEach(h1 => h1.style.fontSize = "18px");
            ulElements.forEach(ul => ul.style.paddingLeft = "10px");

            const img = div1.querySelector('img');
            if (img) {
                img.style.width = "50%";
                img.style.height = "auto";
            }

            if (footer) {
                footer.style.fontSize = "12px";
                footer.style.padding = "10px";
                document.querySelectorAll('.separator').forEach(sep => sep.style.display = "none");
                document.querySelectorAll('footer a').forEach(link => {
                    link.style.display = "block";
                    link.style.margin = "5px 0";
                });
            }

            document.querySelectorAll('.languages-container, .skills-container').forEach(container => {
                container.style.padding = "0 1em";
            });

        } else {
            container.style.flexDirection = "column";
            topContainer.style.flexDirection = "row";

            div1.style.width = "50%";
            div1.style.padding = "20px";
            div2.style.width = "50%";
            div2.style.padding = "20px";

            header.style.fontSize = "30px";
            h1Elements.forEach(h1 => h1.style.fontSize = "24px");
            ulElements.forEach(ul => ul.style.padding = "initial");

            if (footer) {
                footer.style.fontSize = "14px";
                footer.style.padding = "20px";
                document.querySelectorAll('.separator').forEach(sep => sep.style.display = "inline");
                document.querySelectorAll('footer a').forEach(link => {
                    link.style.display = "inline";
                    link.style.margin = "0 10px";
                });
            }

            document.querySelectorAll('.languages-container').forEach(container => {
                container.style.paddingLeft = "10em";
            });
            document.querySelectorAll('.skills-container').forEach(container => {
                container.style.paddingRight = "10em";
            });
        }
    };

    updateStyles();
    window.addEventListener('resize', updateStyles);
}