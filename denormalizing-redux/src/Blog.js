import React from 'react';
import { connect } from 'react-redux'

function Blog(props) {
  const { blog } = props;
  console.log(blog)
  const { name, id } = blog;
  return (
      <li style={{float: "left", marginLeft: "30px", listStylePosition: "inside" ,border: "2px solid black", padding: "10px"}}>
          <p>Blog id: {id}</p>
          <p>Name: {name}</p>
      </li>
  )
}

const mapStateToProps = (state, ownProps) => ({
  blog: state.app.blogs.byId[ownProps.id]
})

export default connect(
  mapStateToProps,
  null
)(Blog)