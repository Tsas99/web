const SingleList = async ({ params }) => {
    const { id } = params;
    const result = await fetch(`https://dev.to/api/articles${id}`);
  
    const onePost = await result.json();
  
    return (
      <>
        <div>{onePost.title}</div>
      </>
    );
  };
  
  export default SingleList;
  