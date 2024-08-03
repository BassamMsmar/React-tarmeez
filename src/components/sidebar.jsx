import Button from "./sidebar/Button";

function Sidebar() {
  // Define button data as an array of objects
  const buttons = [
    {
      src: "/src/assets/1.jpg",
      title: "Project",
      descriptions: "This is the first project.",
    },
    {
      src: "/src/assets/2.jpeg",
      title: "Second",
      descriptions: "This is the second project.",
    },
    {
      src: "/src/assets/3.png",
      title: "Third",
      descriptions: "This is the third project.",
    },
    {
      src: "/src/assets/4.png",
      title: "Third",
      descriptions: "This is the third project.",
    },
    {
      src: "/src/assets/react.svg",
      title: "Third",
      descriptions: "This is the third project.",
    },
    {
      src: "/src/assets/3.png",
      title: "Third",
      descriptions: "This is the third project.",
    },
  ];

  return (
    <div className="my-2 button-group">
      {buttons.map((button, index) => (
        <Button
          key={index}
          src={button.src}
          title={button.title}
          descriptions={button.descriptions}
        />
      ))}
    </div>
  );
}

export default Sidebar;
