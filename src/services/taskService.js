import * as taskRepository from '../repositories/taskRepo.js';

export async function getAllTasks() {
  return taskRepository.findAll();
}

export async function createTask(newTask) {
  return taskRepository.create(newTask);
}

export async function getTaskById(id) {
  
  const result = await taskRepository.getById(id);
  if (result) return result;
  else {
    const error = new Error(`Cannot find task with id ${id}`);
    error.status = 404;
    throw error;
  }
}