let tasks=[]; /*arreglo para almacenar tareas*/

//funcion para agregar tareas
function addTask(title, description){
    
    const task= {
        id: Date.now(), //id unico para cada tarea
        title,
        description
    };
    tasks.push(task);

    renderTasks();
}

//Funcion que renderiza las tareas (dibuje las tareas en html)

function renderTasks(){
    const taskList=document.getElementById('taskList');
    taskList.innerHTML="";//limpia la lista de tareas

    tasks.forEach(task => {
        const listItem= document.createElement('li')
        listItem.className= "list-group-item d-flex justify-content-between align-items-center";

        listItem.innerHTML=`
            <div>
                <h5>${task.title}</h5>
                <p class="mb-1">${task.description}</p>
            </div>
            <button class="btn btn-danger" onclick="deleteTask(${task.id})">Eliminar</button>
            `;

        taskList.appendChild(listItem);
    });

    console.log(tasks);
}
//tarea crear una funcion que borre una tarea
function deleteTask(id){
   for (let i = 0; i < tasks.length; i++) {
       if(tasks[i].id===id){
           tasks.splice(i ,1);
           renderTasks();
       }
   } 
}

//manejo d-el formulario
document.getElementById('taskForm').addEventListener("submit", function(event){
    event.preventDefault();//previene el envio del formulario
    const title=document.getElementById('taskTitle').value;
    const description=document.getElementById('taskDescription').value;
    addTask(title,description);

    event.target.reset();
});

