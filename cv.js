const skills = [{
    name: "HTML",
    level: 90,
}, {
    name: "CSS",
    level: 90,
}, {
    name: "JavaScript",
    level: 70,
}, {
    name: "React.js",
    level: 70,
}, {
    name: "Next.js",
    level: 70,
}, {
    name: "Django Rest Framework",
    level: 60,
}, {
  name: "JAVA",
  level: 75,
},{
    name: "SQL",
    level: 90,
}, {name: "Python",
    level: 85,
}, {
    name: "Git",
    level: 85,
},  {
    name: "AWS cloud services",
    level: 65,
},{name: "Shell Scripting",  level: 70,}, 
];


const skillContainer = document.querySelector("#skillList");
skills.forEach((skill, index) => {
    const item = document.createElement("div");
    item.className = "skillContainer";
    item.innerHTML = `<div class="skillName">${skill.name}</div>
    <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: ${skill.level}%">${skill.level}%</div>
</div>`;
skillContainer.appendChild(item);
});

const experiences = [
  {
    title: "Full Stack Developer",
    company: "SpotifyDash",
    startDate: "4/2025",
    endDate: "5/2025",
    description: "Developed and maintained a web application using Flask.",
    link:"https://github.com/ErikaKK/SpotifyDash"
},
    {
        title: "Backend Developer",
        company: "Coders for Causes",
        startDate: "11/2024",
        endDate: "2/2025",
        description: "Developed and maintained web applications using React.js and Next.js.",
        link: "https://github.com/codersforcauses/wajo"
    },
    {
        title: "Frontend Developer",
        company: "Coders for Causes",
        startDate: "6/2024",
        endDate: "7/2024",
        description: "Developed and maintained RESTful APIs using Django Rest Framework.",
        link: "https://github.com/codersforcauses/penni"
    },
   
];


const experienceList = document.querySelector('#experienceList');
experiences.forEach((experience, index) => {
    const item = document.createElement('div');
    item.className = "experienceContainer";
    if(index % 2 === 0){
        
        item.innerHTML = ` 
      <div class="dotIcon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-circle-fill"
          viewBox="0 0 16 16"
        >
          <circle cx="8" cy="8" r="8" />
        </svg>
      </div>
      <div class="portfolio-item">
        <div></div>
        <div class="portfolio-right">
        <div>
        <h3>${experience.title}</h3>
        <div class="experienceCompanyAndDate">
        <h5>${experience.company}</h5>
        <div>${experience.startDate} - ${experience.endDate}</div>
        </div>
        <div >${experience.description}</div>
        </div>
        <button type="button" class="btn-download"><a href=${experience.link} target="_blank">GITHUB REPO</a></button>
        </div>
      </div>`;
    }else{
        item.innerHTML = ` 
        <div class="dotIcon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-circle-fill"
          viewBox="0 0 16 16"
        >
          <circle cx="8" cy="8" r="8" />
        </svg>
      </div>
      <div class="portfolio-item">
        <div class="portfolio-left">
        <div>
        <h3>${experience.title}</h3>
        <div class="experienceCompanyAndDate">
        <h5>${experience.company}</h5>
        <div>${experience.startDate} - ${experience.endDate}</div>
        </div>
        <div>${experience.description}</div>
        </div>
          <button type="button" class="btn-download"><a href=${experience.link} target="_blank">GITHUB REPO</a></button>
        </div>
        <div></div>
      </div>`;
    };
    experienceList.appendChild(item);
});


const screenWidth = window.innerWidth;
const initialHeight = window.innerHeight;
if (screenWidth >= 992){
document.querySelectorAll(".cv-section").forEach((section,index)=>{
  if(section.offsetHeight< initialHeight){
  section.style.minHeight = `${initialHeight}px`;}
});};


const cvPopover = document.querySelector(".cv-popover");
const resume = document.getElementById("resume");
const close = document.querySelector(".close");

resume.addEventListener("click",function(){
  cvPopover.classList.toggle("show");
  document.body.classList.toggle("no-scroll")
})
close.addEventListener("click",function(){
  cvPopover.classList.remove("show");
  document.body.classList.remove("no-scroll")
})