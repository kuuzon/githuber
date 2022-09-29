// React & packages
import React, { Fragment } from 'react';
import styled from "styled-components";

// Import custom component
import UserItem from "./UserItem";
import Spinner from "../../common/Spinner";

const UsersComponent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`;

const UserList = ({ loading, users }) => {
  // CONDITIONAL LOAD: LOADING
  if (loading) {
    return (
      <Fragment>
        <Spinner />
      </Fragment>
    )
  }

  // DEFAULT LOAD: LIST OF USERS in CARDS
  return (
    <UsersComponent>
      {users.map( user => (
        <UserItem 
          key={user.id} 
          user={user} 
        />
      ))}
    </UsersComponent>
  )
}

export default UserList