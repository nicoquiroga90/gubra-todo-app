const API_URL = 'http://127.0.0.1:8000/todos';

const getToken = () => localStorage.getItem('access_token');

export async function getTodos() {
    const response = await fetch(API_URL, {
        headers: {
            'Authorization': `Bearer ${getToken()}`,
        },
    });
    if (!response.ok) throw new Error('Error fetching todos');
    return await response.json();
}

export async function createTodo(newTodo) {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken()}`,
        },
        body: JSON.stringify(newTodo),
    });
    if (!response.ok) throw new Error('Error creating todo');
    return await response.json();
}

export async function updateTodoDone(id, doneStatus) {
    const response = await fetch(`${API_URL}/${id}?done=${doneStatus}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken()}`,
        },
    });

    if (!response.ok) {
        const errorData = await response.json();
        console.error('Error updating todo:', errorData);
        throw new Error('Error updating todo');
    }

    return await response.json();
}
