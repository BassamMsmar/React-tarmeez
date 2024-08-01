function Content() {
  // تعريف البيانات كمصفوفة من المنشورات
  const posts = [
    { title: "Post 1", content: "This is the content for post 1." },
    { title: "Post 2", content: "This is the content for post 2." },
    { title: "Post 3", content: "This is the content for post 3." },
    { title: "Post 4", content: "This is the content for post 4." },
    { title: "Post 5", content: "This is the content for post 5." },
    { title: "Post 6", content: "This is the content for post 6." },
    { title: "Post 7", content: "This is the content for post 7." },
    { title: "Post 8", content: "This is the content for post 8." }
  ];

  return (
    <div>
      {posts.map((post, index) => (
        <div key={index} className="card my-2">
          <h3 className="card-title text-center mt-3">{post.title}</h3>
          <hr className="mx-4" />
          <p className="card-text text-center my-3">{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Content;
