button = document.querySelector('.button');
input = document.querySelector('input');
tasks = document.querySelector('.tasks');
sortbtn = document.querySelector('.sortbtn');
deletebtn = document.querySelector('.delete');

button.onclick = function() {
    if (input.value.length == 0) {
        alert("Saheni bosh qoymayin!")
    } else {
        tasks.innerHTML += `
        <div class="task">
                <span id="taskname">
                    ${input.value}
                </span>
                <img src="/Group 77.svg" class="delete" alt="" onmouseover="this.src='/Group 70.svg';" onmouseout="this.src='/Group 77.svg';">
            </div>
        
        `;
        var current_tasks = document.querySelectorAll(".delete");
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function() {
                this.parentNode.remove();
            }
        }
    }

}

let check = true;

sortbtn.addEventListener('click', (e) => {
    const taskSort = [...document.querySelectorAll('.tasks > .task')].map((task) => task.innerHTML).sort();

    if (check) {
        check = false;

        document.querySelectorAll('.tasks > .task').forEach((item, i) => {

            item.innerHTML = taskSort[i];
            item.innerHTML+='';
            var current_tasks = document.querySelectorAll(".delete");
            for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function() {
                this.parentNode.remove();
            }
        }

        });




    } else {
        taskSort.reverse();
        document.querySelectorAll('.tasks > .task').forEach((item, i) => {

            item.innerHTML = taskSort[i];

        });
        check = true;
        var current_tasks = document.querySelectorAll(".delete");
            for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function() {
                this.parentNode.remove();
            }
        }
        
    }

});
