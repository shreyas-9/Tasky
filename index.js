const taskContainer = document.querySelector(".task_container")
let globalTaskData=[];

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