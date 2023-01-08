const Box = (props) => {
  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img
              src={props.image}
              alt="Image"
            />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{props.name} </strong>
              <small>{props.age}</small>
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Box;