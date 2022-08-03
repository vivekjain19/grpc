import React, { useState } from "react";

/**
 * Renders information about the user obtained from MS Graph
 * @param props
 */
export const ProfileData = (props) => {
  return (
    <header className="App-header">
      <p>{props.user?.getName()}</p>

      <ul>
        {props.users.map((userItem, index) => (
          <li key={index}>{userItem.getName()}</li>
        ))}
      </ul>
    </header>
  );
};
