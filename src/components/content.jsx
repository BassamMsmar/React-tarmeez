function Content({title, content}) {
  // تعريف البيانات كمصفوفة من المنشورات

  return (
    <div>
        <div  className="card my-2">
          <h3 className="card-title text-center my-3">{title}</h3>
          <hr className="mx-4" />
          <p className="card-text text-center my-3">{content}</p>
        </div>
    </div>
  );
}

export default Content;
