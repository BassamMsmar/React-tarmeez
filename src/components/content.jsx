function Content() {
  // Define data as an array of posts with fake user information
  const posts = [
    {
      id: 1,
      title: "Introduction to React",
      body: "React is a JavaScript library for building user interfaces. It allows developers to create single-page applications with a component-based architecture. Learn how to get started with React, its core concepts, and best practices.",
      user: {
        name: "Alice Johnson",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg"
      },
      date: "1-4-2022"
    },
    {
      id: 2,
      title: "Understanding Angular",
      body: "Angular is a platform for building mobile and desktop web applications. It provides a comprehensive solution including a framework, libraries, and tools for building dynamic and robust applications. Explore Angular’s features, architecture, and how it compares to other frameworks.",
      user: {
        name: "Bob Smith",
        avatar: "https://randomuser.me/api/portraits/men/2.jpg"
      },
      date: "1-4-2022"
    },
    {
      id: 3,
      title: "Exploring Vue.js",
      body: "Vue.js is a progressive JavaScript framework used for building user interfaces. It is known for its simplicity and ease of integration with other projects and libraries. Discover how Vue.js works, its reactive data-binding, and component-based architecture.",
      user: {
        name: "Charlie Davis",
        avatar: "https://randomuser.me/api/portraits/men/3.jpg"
      },
      date: "1-4-2022"
    },
    {
      id: 4,
      title: "Getting Started with Svelte",
      body: "Svelte is a modern JavaScript framework that shifts the work from the browser to the build step, producing highly optimized vanilla JavaScript at compile time. Learn about Svelte’s unique approach, its features, and how to build performant applications with it.",
      user: {
        name: "Dana Lee",
        avatar: "https://randomuser.me/api/portraits/men/4.jpg"
      },
      date: "1-4-2022"
    },
    {
      id: 5,
      title: "Introduction to Ember.js",
      body: "Ember.js is an opinionated framework for building ambitious web applications. It provides a strong convention-over-configuration approach and comes with built-in tools for routing, data management, and testing. Dive into Ember.js and see how it can help you build scalable and maintainable apps.",
      user: {
        name: "Eve Adams",
        avatar: "https://randomuser.me/api/portraits/men/5.jpg"
      },
      date: "1-4-2022"
    },
    {
      id: 6,
      title: "Understanding Node.js",
      body: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It is designed to build scalable network applications. Learn about Node.js’s event-driven architecture, non-blocking I/O, and its role in server-side development.",
      user: {
        name: "Frank White",
        avatar: "https://randomuser.me/api/portraits/men/6.jpg"
      },
      date: "1-4-2022"
    }
  ];

  const listPost = posts.map((post) => (
    <div key={post.id} className="card my-3 shadow-sm">
      <div className="card-body">
        <div className="d-flex align-items-center mb-3">
          <img
            src={post.user.avatar}
            alt={post.user.name}
            className="rounded-circle me-3"
            style={{ width: '50px', height: '50px' }}
          />
          <h5 className="card-title mb-0">{post.user.name}</h5>
        </div>
        <h4 className="card-title mb-3">{post.title}</h4>
        <p className="card-text mb-3">{post.body}</p>
      </div>
      <div className="card-footer text-muted text-center">
        <small>Posted on {post.date}</small>
      </div>
    </div>
  ));

  return <div className="container">{listPost}</div>;
}

export default Content;
