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
        <div class="card">        
            <a href="${project.demo_URL}" target="_blank" >
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
            <a class="github-link" href="${project.source_code_url}">Github Repository <i class="fa-solid fa-chevron-right"></i></a>
        </div>
        `
    });
    createBackground()
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


function createBackground(){
    const body = document.body;
    const html = document.documentElement;
    const height = Math.max(body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight);
    const backgorund = document.querySelector('section.background');
    backgorund.innerHTML = ""
    for(let i = 0 ; i < Math.ceil(height / 70) ; i++){
        backgorund.innerHTML += 
        `
            <div class="row">
              <div>
                <i class="fa-solid fa-cookie backgroundIcon"></i>
                <i class="fa-solid fa-bug-slash backgroundIcon"></i>
                <i class="fa-solid fa-clapperboard backgroundIcon"></i>
                <i class="fa-solid fa-earth-oceania backgroundIcon"></i>
                <i class="fa-solid fa-panorama backgroundIcon"></i>
                <i class="fa-solid fa-book-atlas backgroundIcon"></i>
                <i class="fa-solid fa-virus-covid-slash backgroundIcon"></i>
                <i class="fa-brands fa-pix backgroundIcon"></i>
                <i class="fa-brands fa-github backgroundIcon"></i>
                <i class="fa-regular fa-heart backgroundIcon"></i>
                <i class="fa-brands fa-apple backgroundIcon"></i>
                <i class="fa-solid fa-clipboard-check backgroundIcon"></i>
                <i class="fa-solid fa-sailboat backgroundIcon"></i>
                <i class="fa-brands fa-bots backgroundIcon"></i>
                <i class="fa-solid fa-bolt backgroundIcon-lightning backgroundIcon"></i>
                <i class="fa-brands fa-padlet backgroundIcon"></i>
                <i class="fa-brands fa-android backgroundIcon"></i>
                <i class="fa-solid fa-battery-full backgroundIcon"></i>
                <i class="fa-brands fa-gitlab backgroundIcon"></i>
                <i class="fa-solid fa-bolt backgroundIcon"></i>
                <i class="fa-solid fa-book-skull backgroundIcon"></i>
                <i class="fa-solid fa-circle-check backgroundIcon"></i>
                <i class="fa-solid fa-cubes backgroundIcon"></i>
                <i class="fa-solid fa-database backgroundIcon"></i>
                <i class="fa-solid fa-diagram-project backgroundIcon"></i>
                <i class="fa-brands fa-docker backgroundIcon"></i>
                <i class="fa-solid fa-ghost backgroundIcon"></i>
                <i class="fa-brands fa-gitkraken backgroundIcon"></i>
              </div>
              <div>
                <i class="fa-solid fa-cookie backgroundIcon"></i>
                <i class="fa-solid fa-bug-slash backgroundIcon"></i>
                <i class="fa-solid fa-clapperboard backgroundIcon"></i>
                <i class="fa-solid fa-earth-oceania backgroundIcon"></i>
                <i class="fa-solid fa-panorama backgroundIcon"></i>
                <i class="fa-solid fa-book-atlas backgroundIcon"></i>
                <i class="fa-solid fa-virus-covid-slash backgroundIcon"></i>
                <i class="fa-brands fa-pix backgroundIcon"></i>
                <i class="fa-brands fa-github backgroundIcon"></i>
                <i class="fa-regular fa-heart backgroundIcon"></i>
                <i class="fa-brands fa-apple backgroundIcon"></i>
                <i class="fa-solid fa-clipboard-check backgroundIcon"></i>
                <i class="fa-solid fa-sailboat backgroundIcon"></i>
                <i class="fa-brands fa-bots backgroundIcon"></i>
                <i class="fa-solid fa-bolt backgroundIcon-lightning backgroundIcon"></i>
                <i class="fa-brands fa-padlet backgroundIcon"></i>
                <i class="fa-brands fa-android backgroundIcon"></i>
                <i class="fa-solid fa-battery-full backgroundIcon"></i>
                <i class="fa-brands fa-gitlab backgroundIcon"></i>
                <i class="fa-solid fa-bolt backgroundIcon"></i>
                <i class="fa-solid fa-book-skull backgroundIcon"></i>
                <i class="fa-solid fa-circle-check backgroundIcon"></i>
                <i class="fa-solid fa-cubes backgroundIcon"></i>
                <i class="fa-solid fa-database backgroundIcon"></i>
                <i class="fa-solid fa-diagram-project backgroundIcon"></i>
                <i class="fa-brands fa-docker backgroundIcon"></i>
                <i class="fa-solid fa-ghost backgroundIcon"></i>
                <i class="fa-brands fa-gitkraken backgroundIcon"></i>
              </div>
            </div>
        `
    }
    
}



listWhatILearned();
listProjects();