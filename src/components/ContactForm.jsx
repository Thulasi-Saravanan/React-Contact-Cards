import { useState } from "react";

function ContactForm({ onAddUser }) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();

        const newUser = {
            id: Date.now(),
            name: name,
            email: email,
            phone: phone
        };

        onAddUser(newUser);

        setName("");
        setEmail("");
        setPhone("");
    };

    return (
        <form onSubmit={handleSubmit} className="contact-form">

            <h2>Add Contact</h2>

            <input
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />

            <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />

            <input
                type="tel"
                placeholder="Enter Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
            />

            <button type="submit">
                Add User
            </button>

        </form>
    );
}

export default ContactForm;