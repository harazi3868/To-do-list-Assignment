const fs = require('fs');

let todoList = require('./todolist.json')

function display() {
    todoList.forEach((task) => {
        console.log(`${task.id}. ${task.task}`);
    });
}

function add(task) {
    const id = Math.floor(Math.random() * 100);
    todoList.push({ id, task });
    saveToFile();
}

function update(id, newTask) {
    id = Number(id);
    const task = todoList.find(task => task.id === id);
    if (!task) {
        console.log('Invalid id');
        return;
    }
    todoList = todoList.map(task => task.id === id ? {id, task: newTask} : task);
    saveToFile();
}

function deleteTask(id) {
    id = Number(id);
    const task = todoList.find(task => task.id === id);
    if (!task) {
        console.log('Invalid id');
        return;
    }
    todoList = todoList.filter(task => task.id !== id);
    saveToFile();
}

function saveToFile() {
    fs.writeFileSync('./todolist.json', JSON.stringify(todoList, null, 2));
    console.log('The file has been saved!');
}

function validateId(id) {
    id = Number(id);
    const task = todoList.find(task => task.id === id);
    return !!task;
}

module.exports = {
    display,
    add,
    update,
    deleteTask,
    saveToFile,
    validateId
}