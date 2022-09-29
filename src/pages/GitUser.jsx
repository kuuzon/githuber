import React, { Fragment, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { RiAddCircleFill, RiErrorWarningFill } from "react-icons/ri";

import Spinner from '../components/common/Spinner';

const GitUser = ({ getUser, userDetails, clearUsers, loading }) => {
  // RRD: Obtain ID from URL params
  const params = useParams();
  const id = params.login;

  // HOOK: useEffect to call API to obtain specific user information
  useEffect(() => {
    console.log(`User Profile: ${id}`);
    getUser(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  // Destructure the user details object returned from API
  const {avatar_url, hirable, name, location, bio, login, company, html_url} = userDetails;

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
    <Fragment>
      {/* 1. HEADER SECTION */}
      <div className="vertical-align">
        <Link to="/" className="btn btn-light" onClick={clearUsers}>Back to Search</Link>   
        <span>Hireable:&nbsp;</span>
        { hirable ? <RiAddCircleFill className="text-success"/> : <RiErrorWarningFill className="text-danger" /> }
      </div>

      {/* 2. USER CARD */}
      <div className="card grid-2">     

        {/* LEFT COLUMN: User Details  */}
        <div className="all-center">
          <img src={avatar_url} className="round-img" style={{width: '150px'}} alt="" />
          <h1>{name}</h1>
          <p><strong>Location: </strong>{location}</p>
        </div>
                    
        {/* RIGHT COLUMN: */}
        <div className="all-center">
        {bio &&(
          <div>
              <h3>Bio</h3>
              <p>{bio}</p>
          </div>
        )}
        <a href={html_url} className="btn btn-dark btn-sm my-1" target="_blank" rel="noreferrer">Visit Github Profile</a>
        <ul>
          <li>
            {login && (
              <div>
                <strong>Username: </strong>{login}
              </div>
            )}
          </li>
          <li>
            {company && (
              <div>
                <strong>Company: </strong>{company}
              </div>
            )}
          </li>
          <li>
            {html_url && (
              <div>
                <strong>Website: </strong>{html_url}
              </div>
            )}
          </li>
            </ul>
        </div>
      </div>
    </Fragment>
  )
}

export default GitUser