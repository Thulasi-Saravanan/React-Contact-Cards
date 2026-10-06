import { useState } from "react";
import ContactForm from "./components/ContactForm";
import UserList from "./components/UserList";
import "./App.css";

function App() {
    const [users, setUsers] = useState([]);

    const addUser = (newUser) => {
        setUsers((previousUsers) => [...previousUsers, newUser]);
    };

    return (
        <div className="app">
            <h1>Contact Cards</h1>

            <ContactForm onAddUser={addUser} />

            <UserList users={users} />
        </div>
    );
}

export default App;
