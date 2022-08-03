import React, {  useEffect, useState } from 'react';
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import './App.css';
import { PageLayout } from './PageLayout';
import { loginRequest } from "./authConfig";
import {UsersClient } from './generated/proto/UsersServiceClientPb'
import { User, UserRequest } from './generated/proto/users_pb';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import {Metadata} from 'grpc-web'

import Button from "react-bootstrap/Button";


const ProfileContent = () => {
    const { instance, accounts } = useMsal();
  const [user, setUser] = useState<User |null >(null);
  const [users, setUsers] = useState<User[] >([]);

   async function  RequestProfileData() {
        
     let response= await  instance.acquireTokenSilent({
            ...loginRequest,
            account: accounts[0]
        });
         
        let client = new UsersClient("https://localhost:7140",null );
           let userRequest = new UserRequest();
           userRequest.setId(1);
          let metadata:Metadata =  {};
        metadata["Authorization"] = "Bearer "+  response.accessToken;
         
          let user= await client.getUser(userRequest, metadata);
          setUser(user);
          let userList:User[] = [];
            let emptyRequest = new Empty();
            let stream= client.getUsers(emptyRequest, metadata);

            stream.on('data', function(userModel){

userList.push(userModel);
            });
          stream.on('end', function(){

setUsers(userList);
            });
        
    };

    return (
        <>
            <h5 className="card-title">Welcome {accounts[0].name}</h5>
            {user && users ? 
                (<>{user.getName()}  <ul>
        {users.map((userItem, index) => (
          <li key={index}>{userItem.getName()}</li>
        ))}
      </ul></>)
                :
                <Button variant="secondary" onClick={RequestProfileData}>Request Data</Button>
            }
        </>
    );
};


function App() {
  return (
   <PageLayout>
            <MainContent />
        </PageLayout>
  );
}


const MainContent = () => {    
    return (
        <div className="App">
            <AuthenticatedTemplate>
                <ProfileContent />
            </AuthenticatedTemplate>

            <UnauthenticatedTemplate>
                <h5 className="card-title">Please sign-in to see information.</h5>
            </UnauthenticatedTemplate>
        </div>
    );
};


export default App;
