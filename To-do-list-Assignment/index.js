const readline = require('readline');
const todoList = require('./todolist');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What do you want to do? (display(1)/add(2)/update(3)/delete(4) ', (action) => {
    switch (action) {
        case 'display':
        case '1':
            todoList.display();
            break;
        case 'add':
        case '2':
            rl.question('What do you want to add? ', (task) => {
                todoList.add(task);
            });
            break;
        case 'update':
        case '3':
            rl.question('Enter the id of the task you want to update: ', (id) => {
                if (!todoList.validateId(id)) {
                    console.log('Invalid id');
                }else {
                    rl.question('Enter the new task: ', (task) => {
                        todoList.update(id, task);
                    });
                }
                
            });
            break;
        case 'delete':
        case '4':
            rl.question('Enter the id of the task you want to delete: ', (id) => {
                if (!todoList.validateId(id)) {
                    console.log('Invalid id');
                }else{
                    todoList.deleteTask(id);
                }
            });
            break;
        default:
            console.log('Invalid action please enter a valid action');
            break;
    }
});