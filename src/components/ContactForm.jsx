import { useState } from "react";

function ContactForm({ onAddUser }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newUser = {
            id: Date.now(),
            name,
            email,
            phone
        };

        onAddUser(newUser);

        setName("");
        setEmail("");
        setPhone("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                maxWidth: "500px",
                margin: "0 auto 40px",
                padding: "25px",
                background: "#ffffff",
                borderRadius: "12px",
                boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
                boxSizing: "border-box"
            }}
        >
            <h2 style={{ margin: "0 0 20px 0", color: "#222" }}>
                Add Contact
            </h2>

            <input
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={{
                    width: "100%",
                    height: "45px",
                    padding: "12px",
                    marginBottom: "15px",
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    fontSize: "16px",
                    boxSizing: "border-box"
                }}
            />

            <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                    width: "100%",
                    height: "45px",
                    padding: "12px",
                    marginBottom: "15px",
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    fontSize: "16px",
                    boxSizing: "border-box"
                }}
            />

            <input
                type="tel"
                placeholder="Enter Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                style={{
                    width: "100%",
                    height: "45px",
                    padding: "12px",
                    marginBottom: "15px",
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    fontSize: "16px",
                    boxSizing: "border-box"
                }}
            />

            <button
                type="submit"
                style={{
                    width: "100%",
                    height: "45px",
                    border: "none",
                    borderRadius: "8px",
                    background: "#222",
                    color: "#fff",
                    fontSize: "16px",
                    cursor: "pointer"
                }}
            >
                Add User
            </button>
        </form>
    );
}

export default ContactForm;
