import CreateNftItem from "./CreateNftItem.jsx";

export default function CreateNft() {
  return (
    <div className="create-nft">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="section-heading">
              <div className="line-dec" />
              <h2>Create Your NFT &amp; Put It On The Market.</h2>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="main-button">
              <a href="create.html">Create Your NFT Now</a>
            </div>
          </div>

          <CreateNftItem
            image="assets/images/icon-02.png"
            hasFirstItem
            number1
            title="Set Up Your Wallet"
            content="NFT means Non-Fungible Token that are used in digital cryptocurrency markets. There are many different kinds of NFTs in the industry."
          />

          <CreateNftItem
            image="assets/images/icon-04.png"
            hasSecondItem
            number2
            title="Add Your Digital NFT"
            content={
              <div>
                There are 5 different HTML pages included in this NFT{" "}
                <a
                  href="https://templatemo.com/page/1"
                  target="_blank"
                  rel="nofollow"
                >
                  website template
                </a>
                . You can edit or modify any section on any page as you
                required.
              </div>
            }
          />

          <CreateNftItem
            image="assets/images/icon-04.png"
            title="Sell Your NFT &amp; Make Profit"
            content={
              <div>
                If you would like to support our TemplateMo website, please
                visit{" "}
                <a
                  rel="nofollow"
                  href="https://templatemo.com/contact"
                  target="_parent"
                >
                  our contact page
                </a>{" "}
                to make a PayPal contribution. Thank you.
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}
