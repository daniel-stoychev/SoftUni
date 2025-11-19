import CurrentlyMarketItem from "./CurrentlyMarketItem.jsx";

export default function CurrentlyMarket() {
  const items = [
    {
      title: "Music Art Super Item",
      artistName: "Liberty Artist",
      artistLink: "@libertyart",
      eth: "2.03",
      price: 8240.5,
      endsIn: "4D 08H 15M 42S",
      date: "July 24th, 2022",
    },
    {
      title: "Digital Crypto Artwork",
      artistName: "Liberty Artist",
      artistLink: "@libertyart",
      eth: "2.03",
      price: 7200.5,
      endsIn: "2D 06H 30M 25S",
      date: "July 26th, 2022",
    },
    {
      title: "Blockchain Item One",
      artistName: "Liberty Artist",
      artistLink: "@libertyart",
      eth: "3.64",
      price: 6600.0,
      endsIn: "6D 05H 40M 50S",
      date: "July 28th, 2022",
    },
    {
      title: "Virtual Currency Art",
      artistName: "Liberty Artist",
      artistLink: "@libertyart",
      eth: "2.44",
      price: 8800.5,
      endsIn: "3D 05H 20M 58S",
      date: "July 14th, 2022",
    },
    {
      title: "Digital Art Item",
      artistName: "Liberty Artist",
      artistLink: "@libertyart",
      eth: "2.50",
      price: 8400.5,
      endsIn: "4D 08H 32M 18S",
      date: "July 16th, 2022",
    },
    {
      title: "Blockchain Music Design",
      artistName: "Liberty Artist",
      artistLink: "@libertyart",
      eth: "2.44",
      price: 8200.5,
      endsIn: "5D 10H 22M 24S",
      date: "July 18th, 2022",
    },
  ];
  return (
    <div className="currently-market">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-heading">
              <div className="line-dec" />
              <h2>
                <em>Items</em> Currently In The Market.
              </h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="filters">
              <ul>
                <li data-filter="*" className="active">
                  All Items
                </li>
                <li data-filter=".msc">Music Art</li>
                <li data-filter=".dig">Digital Art</li>
                <li data-filter=".blc">Blockchain</li>
                <li data-filter=".vtr">Virtual</li>
              </ul>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="row grid">
              {items.map((item) => (
                <CurrentlyMarketItem
                  title={item.title}
                  artistName={item.artistName}
                  artistLink={item.artistLink}
                  eth={item.eth}
                  price={item.price}
                  endsIn={item.endsIn}
                  date={item.date}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
