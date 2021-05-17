export const createBlog = (blog) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection('blogs')
      .add({
        ...blog,
        // author: 'Sarah',
        // authorId: 12345,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: 'CREATE_BLOG', blog });
      })
      .catch((err) => {
        dispatch({ type: 'CREATE_BLOG_ERROR', err });
      });

  };
};

export const editBlog = (blog, id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
      const docRef = firestore.collection('blogs').doc(id);
     docRef.update({
          ...blog,
          // updatedAt: firestore.FieldValue.serverTimestamp()
        })
        .then(() => {
          dispatch({ type: 'EDIT_BLOG', blog });
        })
        .catch((err) => {
          dispatch({ type: 'EDIT_BLOG_ERROR', err });
        });

  };
  };

  export const deleteBlog =  (id) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
      const firestore = getFirestore();
   firestore.collection('blogs').doc(id).delete()
 
   .then(() => {
    dispatch({ type: 'DELETE_BLOG', id });
  })
  .catch((err) => {
    dispatch({ type: 'DELETE_BLOG_ERROR', err });
  });
    
  };
  };
