import ContactCard from "./ContactCard";

function UserList({ users }) {

    return (
        <div className="user-list">

            <h2>User Contacts</h2>

            {users.length === 0 ? (

                <p>No users added yet.</p>

            ) : (

                users.map((user) => (
                    <ContactCard
                        key={user.id}
                        user={user}
                    />
                ))

            )}

        </div>
    );
}

export default UserList;