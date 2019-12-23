import { combineReducers } from 'redux';


const initState = {
  users: {
    byId: {
      1 : {
        userId: 1,
        name: "Callum",
        email: "someEmail@gmail.com",
        blogs: [12, 15] //Arr of blogs associated to this user
      },
      2 : {
        userId: 2,
        name: "SOMEONE",
        email: "someONE@gmail.com",
        blogs: [12]
      },
    },
    allIds: [1, 2], //Arr of unique IDs to indicate order.
  },
  blogs: {
    byId: {
      12: {
        id: 12,
        name: "Penguin Blog",
      },
      15: {
        id: 15,
        name: "Cat Blog",
      }
    },
    allIds: [12, 15]
  },
  isFetching: false,
  lastUpdated: 1439478405434,
};

const appReducer = (state = initState, action) => {
    switch (action.type) {
      default:
        return state
    }
  }


const getUser = (state, id) => state.users.byId[id];

const getBlogs = (state, id) => state.blogs.byId[id];


export default combineReducers({
  app: appReducer
})