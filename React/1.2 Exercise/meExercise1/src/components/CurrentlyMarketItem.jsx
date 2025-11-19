export default function CurrentlyMarketItem({
  title,
  artistName,
  artistLink,
  eth,
  price,
  endsIn,
  date,
}) {
  return (
    <div className="col-lg-6 currently-market-item all msc">
      <div className="item">
        <div className="left-image">
          <img
            src="assets/images/market-01.jpg"
            alt=""
            style={{ borderRadius: 20, minWidth: 195 }}
          />
        </div>
        <div className="right-content">
          <h4>{title}</h4>
          <span className="author">
            <img
              src="assets/images/author.jpg"
              alt=""
              style={{ maxWidth: 50, borderRadius: "50%" }}
            />
            <h6>
              {artistName}
              <br />
              <a href={artistLink}>@libertyart</a>
            </h6>
          </span>
          <div className="line-dec" />
          <span className="bid">
            Current Bid
            <br />
            <strong>{eth} ETH</strong>
            <br />
            <em>(${price.toFixed(2)})</em>
          </span>
          <span className="ends">
            Ends In
            <br />
            <strong>{endsIn}</strong>
            <br />
            <em>({date})</em>
          </span>
          <div className="text-button">
            <a href="details.html">View Item Details</a>
          </div>
        </div>
      </div>
    </div>
  );
}
