import React, { Fragment } from 'react';

// Import custom components
import Search from "../components/features/Users/Search";
import UserList from '../components/features/Users/UserList';

const Home = ({ searchUsers, clearUsers, showClear, setAlert, loading, users }) => {
  return (
    <Fragment>
      <Search 
        searchUsers={searchUsers} 
        clearUsers={clearUsers} 
        showClear={showClear}
        setAlert={setAlert}
      />
      { users.length > 0 && (
        <UserList 
          loading={loading}
          users={users}
        /> 
      )}
    </Fragment>
  )
}

export default Home