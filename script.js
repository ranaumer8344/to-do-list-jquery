// Adding Tasks

function addToTask(){

    if(document.querySelector('.input-add-data input').value == 0){
        alert('Please enter a value!');
    } else{
        document.querySelector('.tasks').innerHTML += `
        <div class="task">
            <div class="display-flex">
                <span class="taskname">
                    ${document.querySelector('.input-add-data input').value}
                </span>
                <div class="actions">
                    <button class="delete" onclick="removeTask()">
                        Del
                    </button>
                    <button class="complete" onclick="completeTask()">
                        Done
                    </button>
                </div>
            </div>
        </div>
    `;
        document.querySelector('.input-add-data input').value = '';
    }
    
}

function removeTask(){
    var el = document.querySelector('.task');
    el.remove();
}

function completeTask(){
    document.querySelector('.task').classList.add("done");
}