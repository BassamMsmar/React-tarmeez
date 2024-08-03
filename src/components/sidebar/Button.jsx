function Button({ src, title, descriptions }) {
  return (
    console.log(src),
    
    <div className="col">
    <div className="card bg-light text-center my-2">
      <img src={src} className="card-img-top w-50 mx-auto d-block my-2" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{descriptions}</p>
      </div>
    </div>
  </div>

  );
}
export default Button;
