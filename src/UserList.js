import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

export default function App() {
  const [listOfUSer, setListOfUSer] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setListOfUSer(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="user-list">
      <h1>The users list</h1>

      <div className="users">
        {listOfUSer.map((user) => {
          return (
            <Card
              bg="gold"
              key={user.id}
              style={{ width: "18rem" }}
              className="mb-2 "
            >
              <Card.Header>Name: {user.name}</Card.Header>
              <Card.Body>
                <Card.Title> Username: {user.username} </Card.Title>
                <Card.Text>User Email: {user.email}</Card.Text>

              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
