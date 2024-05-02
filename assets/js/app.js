const projectsList = document.querySelector('#projects .card-container');
const toolsList = document.querySelector('#tools .card-container');
async function fetchURL(url){
    const response = await fetch(url);
    const data = response.json();
    return data;
}

async function listProjects(){
    const data = await fetchURL("assets/data/github-projects.json");
    projectsList.innerHTML = "";
    data.forEach(project => {
        projectsList.innerHTML += 
        `
        <a href="${project.demo_URL}" target="_blank" class="card">
            <img src="${project.thumbnail}" alt="">
            <div class="card-heading">
                <h3 class="project-name">${project.projectName}</h3>
                <span class="color-green">${project.year}</span>
            </div>
            <div class="languages">
                <ul class="languages-list">
                    ${project.technologies.map(tech => `<li>${tech}</li>`).join('')}
                </ul>
            </div>
            <p class="description">
                ${project.description}
            </p>
        </a>
        `
    });
}

async function listWhatILearned(){
    const data = await fetchURL("assets/data/whatILearn.json");
    toolsList.innerHTML = ""
    data.forEach(tool => {
        toolsList.innerHTML += 
        `
        <div class="card tooltip" data-tooltip="${tool.tool}">
            ${tool.logo}
        </div>
        `
    })
}

listWhatILearned();


listProjects();

