const taskContainer = document.querySelector(".task_container")
let globalTaskData=[];

//generating a card
const generateHTML = (taskData) => {
    return `<div id=${taskData.id} class="col-4">
    <div class="card">
        <div class="card-header d-flex justify-content-end gap-2">
          <button type="button" id=${taskData.id} class="btn btn-outline-success">
            <i class="fa fa-pencil" aria-hidden="true"></i>
          </button>

          <button type="button" id=${taskData.id} class="btn btn-outline-danger">
            <i class="fa fa-trash" aria-hidden="true"></i>
          </button>
        </div>
        <div class="card-body">
            <img src=${taskData.image}
             alt="klaus"
             class="card-img-top"
             >
          <h5 class="card-title mt-4 fw-bolder" id="title-color">${taskData.title}</h5>
          <p class="card-text">${taskData.description}</p>
          <a href="#" class="btn btn-primary">${taskData.type}</a>
        </div>
      </div>
  </div> `
};
//stringify -> which convert json objects into string
let saveToLocalStorage = () => {
    localStorage.setItem("taskyProject",JSON.stringify({card: globalTaskData}));
}

let insertToDOM = (content) => {
    taskContainer.insertAdjacentHTML("beforeend",content)
}
//adding a new card
const addNewCard = () => {
    //get task data
    let taskData = {
        id: `${Date.now()}`,
        title: document.getElementById(`taskTitle`).value,
        image: document.getElementById(`imageURL`).value,
        type: document.getElementById(`taskType`).value,
        description: document.getElementById(`taskDescription`).value,
    }

    globalTaskData.push(taskData);
    saveToLocalStorage();

    let newCard = generateHTML(taskData);
    insertToDOM(newCard);

    //clear the entire form
    document.getElementById("taskTitle").value="";
    document.getElementById("imageURL").value="";
    document.getElementById("taskType").value="";
    document.getElementById("taskDescription").value="";

    return;
}

const loadExistingCards = () => {
    let getData = localStorage.getItem("taskyProject")
    if(!getData) return;
//parse -> strings into JSON

    let taskCards = JSON.parse(getData);

    globalTaskData = taskCards.card;
    globalTaskData.map((taskData) => {
        let newCard = generateHTML(taskData);
        insertToDOM(newCard);
    });
    return;
}