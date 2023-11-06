const tasks = [];
let ascendingSort = true;
let taskInput = document.getElementById('task');
let addTaskButton = document.getElementById("addTask");
let taskListContainer = document.querySelector('.task-list-container')
let imageDelete = document.querySelector('.delete-li');
let imageSort = document.querySelector('.sortImage');
let appInput = document.querySelector('.app__input');
imageSort.addEventListener("mouseover", event => {
    event.target.src = "./Images/down.svg"
})
imageSort.addEventListener("mouseleave", event => {
    event.target.src = "./Images/downCL.svg"
})
imageDelete.addEventListener("mouseover", event => {
    event.target.src = "./Images/x.svg"
})
imageDelete.addEventListener("mouseleave", event => {
    event.target.src = "./Images/xCL.svg"
})
imageDelete.addEventListener('click', () => {
    taskInput.value = '';
});

let flag = true;
imageSort.addEventListener('click', (e) => {
    if (flag == true) {
        imageSort.src = "./Images/top.svg";
        imageSort.addEventListener("mouseleave", event => {
            event.target.src = "./Images/topCL.svg"
        })
        imageSort.addEventListener("mouseover", event => {
            event.target.src = "./Images/top.svg"
        })
        flag = !flag
    } else {
        imageSort.src = "./Images/down.svg";
        imageSort.addEventListener("mouseleave", event => {
            event.target.src = "./Images/downCL.svg"
        })
        imageSort.addEventListener("mouseover", event => {
            event.target.src = "./Images/down.svg"
        })
        flag = !flag
    }
});


let flag2 = true;
addTaskButton.addEventListener('click', () => {
    let checkValue = taskInput.value
    if (checkValue.trim() !== "") {
        if (flag2) {
            const taskText = taskInput.value.trim();
            tasks.push(taskText);
            taskInput.value = '';
            displayTasks();
            appInput.style.display = 'none';
            flag2 = !flag2;
        }
    } else {
        appInput.style.display = 'block';
        flag2 = !flag2
    }

    if (tasks.length == 0) {
        taskListContainer.style.display = 'none';
    } else {
        taskListContainer.style.display = 'block';

    }

});


function displayTasks() {
    const tasksList = document.getElementById('tasks');

    tasksList.innerHTML = '';
    let say = 1;
    for (const task of tasks) {
        const li = document.createElement('li');
        let photo = document.createElement('img');
        photo.alt = 'delete button'
        photo.src = "./Images/xCL.svg";

        if (tasksList.childElementCount !== 0) {
            li.style.marginTop = '20px';
        }

        photo.classList.add('delete-image');
        li.classList.add('scroll')
        li.innerHTML = `${say}.${task}`;

        say++
        photo.addEventListener("mouseover", event => {
            event.target.src = "./Images/x.svg"
        })
        photo.addEventListener("mouseleave", event => {
            event.target.src = "./Images/xCL.svg"
        })
        photo.addEventListener('click', () => {
            removeTask(task);
        }
        )
        tasksList.appendChild(li);
        li.append(photo);
    }

    if (tasksList.childElementCount == 0) {
        taskListContainer.style.display = 'none';

    }
}

taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        let check = taskInput.value
        if (check.trim() !== "") {
            if (flag2) {
                const taskText = taskInput.value.trim();
                tasks.push(taskText);
                taskInput.value = '';
                displayTasks();
                appInput.style.display = 'none';
                flag2 = !flag2;
            }
        } else {
            appInput.style.display = 'block';
            flag2 = !flag2
        }
        if (tasks.length == 0) {
            taskListContainer.style.display = 'none';
        } else {
            taskListContainer.style.display = 'block';

        }
    }
});

function removeTask(task) {
    const taskIndex = tasks.indexOf(task);
    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);

        displayTasks();
    }

}

function toggleSortOrder() {
    if (ascendingSort) {
              tasks.sort(); 
   
    } else {
         tasks.sort().reverse();
     
    }
    ascendingSort = !ascendingSort;
    displayTasks();
}

displayTasks();

