const BASE_URL = "assets/data/github-projects.json";

async function fetchURL(){
    const response = await fetch(BASE_URL);
    const data = response.json();
    return data;
}

async function listData(){
    const data = await fetchURL();
    data.forEach(project => {
        console.log(project);
    });
}

listData();