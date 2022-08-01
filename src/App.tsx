import React, {  useEffect, useState } from 'react';
import './App.css';
import {UsersClient } from './generated/proto/UsersServiceClientPb'
import { User, UserRequest } from './generated/proto/users_pb';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';


function App() {

   useEffect(() => {
    getUser();
  }, []);

  const [user, setUser] = useState<User |null >(null);
  const [users, setUsers] = useState<User[] >([]);
  
async function getUser() {
  const client = new UsersClient("https://localhost:7140");
     const request = new UserRequest();
      request.setId(1);
 
let usersList:User[]=[];
 let response= await client.getUser(request, null);
 
setUser(response);
const empty = new Empty();
let stream= client.getUsers(empty);
console.log(stream);
 
stream.on('data', function(userModel) {
  usersList.push(userModel);
  
});
stream.on('status', function(status) {
  console.log(status.code);
  console.log(status.details);
  console.log(status.metadata);
});
stream.on('end', function() {
 setUsers(usersList);
});

// to close the stream
//stream.cancel()

}

  return (
    <div className="App">
      <header className="App-header">
        
        <p>
       {user?.getName()}
        </p>

        
    <ul>
      {users.map((userItem, index) =>
        <li key={index}>
          {userItem.getName()}
        </li>
      )}
    </ul>
  


      </header>
    </div>
  );
}

export default App;
