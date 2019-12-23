import React from 'react';
import { connect } from 'react-redux'
import Blog from "./Blog";
import { getUser } from "./reducer";

function User(props) {
  const { user} = props;
  const {userId, name, email, blogs} = user;
  return (
      <div>
          <h1>User id: {userId}</h1>
          <p>name: {name}</p>
          <p>email: {email}</p>
          <h4>Blogs:</h4>
          <ul style={{listStyleType: "none"}}>
            {blogs.map(blogId => {
              return <Blog key={blogId} id={blogId}/>
            })}
          </ul>
      </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  user: state.app.users.byId[ownProps.id]
  //or user: getUser(state.app, ownProps.id);
})

export default connect(
  mapStateToProps,
  null
)(User)