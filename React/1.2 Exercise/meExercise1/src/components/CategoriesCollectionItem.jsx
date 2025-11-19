export default function CategoriesCollectionItem(props) {
  return (
    <div className="col-lg-2 col-sm-6">
      <div className="item">
        <div className="icon">
          <img src={props.image} alt="" />
        </div>
        <h4>{props.title}</h4>
        <div className="icon-button">
          <a href="#">
            <i className="fa fa-angle-right" />
          </a>
        </div>
      </div>
    </div>
  );
}
