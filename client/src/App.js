// client/src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');

    useEffect(() => {
        fetch('/api/users')
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(err => console.error('Error fetching users:', err));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = { name, email, role };

        fetch('/api/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser),
        })
            .then(res => res.json())
            .then(data => {
                setUsers([...users, data]);
                setName('');
                setEmail('');
                setRole('');
            })
            .catch(err => console.error('Error adding user:', err));
    };

    return (
        <div className="app">
            <h1>User Management App</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
                <select value={role} onChange={e => setRole(e.target.value)}>
                    <option value="">Select role</option>
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                </select>
                <button type="submit">Add User</button>
            </form>

            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name} ({user.email}) - {user.role}
                        {/* Optional buttons for edit/delete can be added here */}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;

