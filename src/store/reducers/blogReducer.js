const initState = {
  blogs: [
    {
      id: '1',
      title: 'P1',
      body: 'body 1',
      date: 'Thu May 13 2021 09:42:59',
    },
    {
      id: '2',
      title: 'P2',
      body: 'body 2',
      date: 'Thu May 14 2021 09:42:59',
    },

    {
      id: '3',
      title: 'P3',
      body: 'body 3',
      date: 'Thu May 15 2021 09:42:59',
    },
  ],
};

const blogReducer = (state = { blogs: [] }, action) => {
// const blogReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_BLOG':
      console.log('created blog!', action.blog);
      return state;
    case 'CREATE_BLOG_ERROR':
      console.log('create blog error', action.err);
      return state;
    case 'EDIT_BLOG':
      console.log('edited blog!', action.blog);
      return state;
      // return { ...state, blogs: [...state.blogs, action.blog] };
      // return { ...state, blogs: state.blogs.map((blog) => (blog.id === action.payload.id ? action.payload : blog)) };
    case 'EDIT_BLOG_ERROR':
      console.log('edit blog error', action.err);
      return state;
    case 'DELETE_BLOG':
      console.log('deleted blog!', action.id);
      // return state;
      return { ...state, blogs: state.blogs.filter((blog) => blog.id !== action.id) };
    case 'DELETE_BLOG_ERROR':
      console.log('delete blog error', action.err);
      return state;

    default:
      return state;
  }
};

export default blogReducer;
