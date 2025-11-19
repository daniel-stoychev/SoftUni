export default function CreateNftItem({
  image,
  title,
  content,
  hasFirstItem,
  hasSecondItem,
  number1,
  number2,
}) {
  let className = "item";
  if (hasFirstItem) {
    className += " first-item";
  } else if (hasSecondItem) {
    className += " second-item";
  }

  let number = "";
  if (number1) {
    number = 1;
  } else if (number2) {
    number = 2;
  }

  return (
    <div className="col-lg-4">
      <div className={className}>
        <div className="number">
          <h6>{number}</h6>
        </div>
        <div className="icon">
          <img src={image} alt="" />
        </div>
        <h4>{title}</h4>
        <p>{content}</p>
      </div>
    </div>
  );
}
