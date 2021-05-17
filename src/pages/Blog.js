import BlogList from '../components/BlogList/BlogList';
// import useFetch from '../useFetch';
import { H2 } from '../globalStyles';
import { useDispatch, useSelector } from 'react-redux';
// import { useHistory, useLocation } from 'react-router-dom';
import { useFirestore, useFirestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';
// import PropTypes from 'prop-types';

const Blog = () => {
  // const {
  //   error,
  //   isPending,
  //   data: blogs,
  // } = useFetch(
  //   'https://jsonplaceholder.typicode.com/posts?_sort=date&_order=desc'
  // );

  // const { blogs } = props;
  useFirestoreConnect([{ collection: 'blogs', orderBy: ["date", "desc"] }]);
  const blogs = useSelector((state) => state.firestore.ordered.blogs);
  console.log('Blogs:', blogs);

  return <div className="blog">{blogs && <BlogList blogs={blogs} />}</div>;
};

export default Blog;

