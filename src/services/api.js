import axios from "axios";

const apiUrl = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL
})

export const addTask = async (task) => {
    return await apiUrl.post('/tasks', task);
}

export const getTasks = async () => {
   return await apiUrl.get('/tasks');
}

export const getTaskById = async (id) => {
    return await apiUrl.get(`/tasks/${id}`);
}

export const deleteTaskById = async (id) => {
    return await apiUrl.delete(`/tasks/${id}`);
}

export const updateTaskById = async (id, updatedTask) => {
    return await apiUrl.patch(`/tasks/${id}`, updatedTask);
}