import React from 'react';
import { connect } from 'react-redux'
import User from "./User";
function App(props) {
  const { usersById } = props;

  return (
    <div>
      {usersById.map(id => {
        return <>
                  <User key={id} id={id}/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <hr/>
                </>
      })}
    </div>
  )
}

const mapStateToProps = state => ({
  usersById: state.app.users.allIds
})

export default connect(
  mapStateToProps,
  null
)(App)