import React from 'react'
import rwdsaleicon from "C:/Users/BZI/Desktop/Academind/Pre-Sale/presale_tokenfig/2ndReactApp/presale-react-wallets/src/components/images/fig-coin-color-sombra.png";

function Home() {
  return (
    <div>
      <div className="site" id="page">
        <div
          id="wrapper-navbar"
          className="fixed-top is-white-color drop-shadow-is-true"
        >
          <a className="skip-link" href="#content">
            Skip to content
          </a>
          <nav className="navbar navbar-expand-lg navbar-right navbar-dark bg-fig-negro">
            <div className="container-fluid">
              <a href="./" className="navbar-brand custom-logo-link" rel="home">
                <img
                  width={850}
                  height={114}
                  src="./static/img/figandgrape-logo.png"
                  className="custom-logo"
                  alt="Fig & Grape"
                  srcSet="./static/img/figandgrape-logo.png 850w, ./wp-content/uploads/2021/03/logo-black1-300x40.png 300w, ./wp-content/uploads/2021/03/logo-black1-768x103.png 768w, ./wp-content/uploads/2021/03/logo-black1-600x80.png 600w"
                  sizes="(max-width: 8500px) 1000vw, 8500px"
                />
              </a>
              <button
                className="navbar-toggler hamburger hamburger--spring"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="hamburger-box">
                  <span className="hamburger-inner" />
                </span>
              </button>
              <div id="navbarNavDropdown" className="collapse navbar-collapse">
                <ul
                  id="main-menu"
                  className="navbar-nav navbar-nav-scroll"
                  role="menu"
                >
                  <li
                    id="menu-item-318"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-318 nav-item"
                  >
                    <a
                      title="Features"
                      href="#"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      className
                      id="menu-item-dropdown-318"
                    />
                  </li>
                  <li
                    id="menu-item-3061"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3061 nav-item"
                  >
                    <a
                      title="Home"
                      href="https://figandgrape.io/landing/"
                      className="nav-link"
                    >
                      HOME
                    </a>
                  </li>
                  <li
                    id="menu-item-913"
                    className="menu-item menu-item-type-post_type menu-item-object-doc menu-item-913 nav-item"
                  >
                    <a
                      title="Whitepaper"
                      href="https://figandgrape.io/landing/wp-content/uploads/Fig-Grape-whitepaper-en.pdf"
                      target="_blank"
                      className="nav-link"
                    >
                      WHITEPAPER
                    </a>
                  </li>
                  <li
                    id="menu-item-3061"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3061 nav-item"
                  >
                    <a
                      title="NFT MARKETPLACE"
                      href="https://nft.figandgrape.io"
                      className="nav-link"
                    >
                      NFT MARKETPLACE
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div
          className="wrapper content-wrapper bg-fig-wrapper"
          id="full-width-page-wrapper"
        >
          <div className="container-fluid" id="content">
            <div className="row">
              <div className="col-md-12 content-area" id="primary">
                <main className="site-main" id="main" role="main">
                  <article
                    className="post-4155 page type-page status-publish hentry"
                    id="post-4155"
                  >
                    {/* Title */}
                    <div className="row">
                      <div className="col-12">
                        <header className="entry-header">
                          <img
                            className="rwd-sale-icon"
                            src={{ rwdsaleicon }}/>
                          <h1 className="entry-title">FIG Token Presale</h1>
                          <h4 id="fig_token_value_top">Token Price: $0</h4>
                        </header>
                        {/* .entry-header */}
                      </div>
                    </div>
                    {/* Sale details */}
                    <div className="row cmcc-rwd-sale">
                      <div className="col-12 col-lg-8 cmcc-rwd-sale__col">
                        <div className="cmcc-rwd-sale__inner h-100">
                          <div className="tab-content" id="myTabContent">
                            {/* BNB sale details */}
                            <div
                              className="tab-pane fade show active"
                              id="bnb"
                              role="tabpanel"
                              aria-labelledby="bnb-tab"
                            >
                              {/*<h2 class="espacio-dwn-fig">Binance Smart Chain</h2>*/}
                              <ul
                                className="nav nav-pills"
                                id="myTab"
                                role="tablist"
                              >
                                <li className="nav-item">
                                  <button
                                    className="nav-link active"
                                    id="bnb-tab"
                                    data-toggle="tab"
                                    data-type="bnb"
                                    onclick=" window.open('https://bscscan.com/token/0xA49CB9C82542C850d768887a37415f077f2248f3', '_blank'); return false;"
                                    role="tab"
                                    aria-controls="bnb"
                                    aria-selected="false"
                                  >
                                    FIG TOKEN CONTRACT
                                  </button>
                                </li>
                                <li className="nav-item ml-2">
                                  <button
                                    className="nav-link active"
                                    id="bnb-tab"
                                    data-toggle="tab"
                                    data-type="bnb"
                                    onclick=" window.open('how-to-buy-fig.html', '_blank'); return false;"
                                    role="tab"
                                    aria-controls="bnb"
                                    aria-selected="false"
                                  >
                                    HOW TO BUY FIG TOKEN
                                  </button>
                                </li>
                              </ul>
                              <br />
                              <hr />
                              <h2 className="espacio-dwn-fig espacio-top-fig">
                                You can get your FIG Tokens here:
                              </h2>
                              <form>
                                <div className="form-group">
                                  <label htmlFor="bnbContractAddy">
                                    FIG Token Address (BEP20)
                                  </label>
                                  <input
                                    className="form-control"
                                    type="text"
                                    id="bnbContractAddy"
                                    defaultValue="0xa49cb9c82542c850d768887a37415f077f2248f3"
                                    readOnly
                                  />
                                  {/* Trigger */}
                                  <button
                                    className="btn cmcc-rwd-sale__copy"
                                    type="button"
                                    data-clipboard-target="#bnbContractAddy"
                                  >
                                    <img
                                      src="./wp-content/themes/mcc/images/clippy.svg"
                                      alt="Copy to clipboard"
                                    />
                                  </button>
                                </div>
                                <div className="form-group d-none show_if_metamask">
                                  <label htmlFor="bnbContractAmount">
                                    Enter BNB amount
                                  </label>
                                  <input
                                    className="form-control"
                                    type="number"
                                    id="bnbContractAmount"
                                  />
                                  <button
                                    className="btn cmcc-rwd-sale__copy"
                                    type="button"
                                    data-clipboard-target="#bnbContractAmount"
                                  >
                                    <img
                                      src="./wp-content/themes/mcc/images/clippy.svg"
                                      alt="Copy to clipboard"
                                    />
                                  </button>
                                  <div className="cmcc-valid-feedback d-none">
                                    Please enter an amount first
                                  </div>
                                </div>
                                <div className="form-group d-none show_if_not_metamask espacio-dwn-fig">
                                  <h3 className="espacio-top-fig">
                                    How to purchase FIG Token?
                                  </h3>
                                  <p className="espacio-dwn-fig">
                                    If you need help to buy FIG Token, see our
                                    purchase guide step by step.
                                  </p>
                                  <a
                                    href="how-to-buy-fig.html"
                                    className="btn btn-outline-light cmcc-nav__wc"
                                  >
                                    PURCHASE GUIDE
                                  </a>
                                </div>
                              </form>
                            </div>
                            <h3 className="h5">
                              <i
                                className="fa fa-exclamation-triangle"
                                style={{ color: '#fff' }}
                              />
                              &nbsp; Important information
                            </h3>
                            <ul className="mb-5">
                              <li>
                                <strong>
                                  You must only use BNB (from BSC) to buy FIG
                                  Token.
                                </strong>
                              </li>
                              <li>
                                In order to complete your transaction, Metamask
                                will add the gas fee to your transaction
                                automatically.
                              </li>
                              <li>Minimum gas fee required: 0,0004 BNB</li>
                              <li>
                                <strong>
                                  DO NOT USE EXCHANGE ADDRESSES (Kraken,
                                  Coinbase, Binance, etc).
                                </strong>
                              </li>
                            </ul>
                          </div>
                          <hr />
                          <div>
                            <h4
                              className="progress-fig"
                              id="fig_token_available_top"
                            >
                              PRESALE TOKENS SOLD
                              <br />0
                            </h4>
                          </div>
                          <div className="wallet-display-rwd links-fig">
                            <small>
                              Don't see FIG after purchase?{' '}
                              <a
                                data-toggle="collapse"
                                href="#walletDisplayRwd"
                                role="button"
                                aria-expanded="false"
                                aria-controls="walletDisplayRwd"
                              >
                                Learn how to display custom tokens in your
                                wallet.
                              </a>
                            </small>
                            <div className="collapse" id="walletDisplayRwd">
                              <div className="card card-body card-fig">
                                <h5>
                                  How to display custom tokens in your wallet
                                </h5>
                                <p>
                                  In order to see the tokens after purchase you
                                  may need to add the FIG token to your wallet
                                  interface. Don't worry, it's easy!.
                                </p>
                                <h6>How to add a custom token:</h6>
                                <ul className="espacio-dwn-fig">
                                  <li>
                                    <a href="https://metamask.zendesk.com/hc/en-us/articles/360015489031-How-to-view-see-your-tokens-custom-tokens-in-Metamask">
                                      Metamask
                                    </a>
                                  </li>
                                </ul>
                                <p>FIG BEP20 token address:</p>{' '}
                                <pre style={{ color: '#fff' }}>
                                  0xa49cb9c82542c850d768887a37415f077f2248f3
                                </pre>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Sale calculator */}
                      <div className="col-12 col-lg-4 cmcc-rwd-sale__calc-col">
                        <div className="cmcc-rwd-sale__calc-inner h-100">
                          <h2 className="espacio-dwn-fig">Calculator</h2>
                          {/* ETH calculator */}
                          <form id="cmcc-rwd-sale__eth-calc" data-type="eth">
                            <div className="form-group">
                              <label htmlFor="ethContractDollars">
                                Enter Amount in US Dollars ($)
                              </label>
                              <input
                                className="form-control quantity"
                                min={0}
                                type="number"
                                id="ethContractDollars"
                                name="quantity"
                                step={1}
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="ethContractETH">BNB Amount</label>
                              <input
                                className="form-control crypto_amount"
                                type="text"
                                id="ethContractETH"
                                defaultValue="0xxxxxxxx"
                                readOnly
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="ethContractEstimate">
                                Estimated FIG tokens
                              </label>
                              <input
                                className="form-control rwd_tokens"
                                type="text"
                                id="ethContractEstimate"
                                defaultValue="0xxxxxxxx"
                                readOnly
                              />
                            </div>
                          </form>
                          {/* BNB calculator */}
                          <form id="cmcc-rwd-sale__bnb-calc" data-type="bnb">
                            <div className="form-group">
                              <label htmlFor="bnbContractDollars">
                                Enter Amount in US Dollars ($)
                              </label>
                              <input
                                className="form-control quantity"
                                min={0}
                                type="number"
                                id="bnbContractDollars"
                                name="quantity"
                                step={1}
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="bnbContractBNB">BNB Amount</label>
                              <input
                                className="form-control crypto_amount"
                                type="text"
                                id="bnbContractBNB"
                                defaultValue="0xxxxxxxx"
                                readOnly
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="bnbContractEstimate">
                                Estimated FIG tokens
                              </label>
                              <input
                                className="form-control rwd_tokens"
                                type="text"
                                id="bnbContractEstimate"
                                defaultValue="0xxxxxxxx"
                                readOnly
                              />
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    {/* Sale details secondary */}
                    <div className="row cmcc-rwd-sale__secondary">
                      <div className="col-12 col-lg-8 cmcc-rwd-sale__table-col">
                        <div className="cmcc-rwd-sale__table-inner h-100">
                          <h2 className="espacio-dwn-fig">Presale Details</h2>
                          <div className="table-responsive">
                            <table className="table table-striped">
                              <tbody>
                                <tr>
                                  <th scope="row">Start date</th>
                                  <td>Dec 1 2021</td>
                                </tr>
                                <tr>
                                  <th scope="row">Total Supply Presale</th>
                                  <td>50,000,000,000</td>
                                </tr>
                                <tr>
                                  <th scope="row">Token name</th>
                                  <td>FIG TOKEN (FIG)</td>
                                </tr>
                                <tr>
                                  <th scope="row">Presale token price</th>
                                  <td id="fig_token_value">0</td>
                                </tr>
                                <tr>
                                  <th scope="row">Presale tokens available</th>
                                  <td id="fig_token_available">
                                    Announce soon..
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">Minimum buy amount</th>
                                  <td>0.001 BNB</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      {/* Sale support */}
                      <div className="col-12 col-lg-4 cmcc-rwd-sale__support-col">
                        <div className="cmcc-rwd-sale__support-inner h-100">
                          <h2 className="espacio-dwn-fig">Need help?</h2>
                          <p>
                            If you have questions or need support regarding the
                            presale, please contact us:
                          </p>
                          <div className="btn-help-fig">
                            <a
                              className="social-fig"
                              href="https://discord.gg/yypTqyrqaN"
                              target="_blank"
                            >
                              <img src="/static/img/rrss-discord.png" />
                            </a>
                            <a
                              className="social-fig"
                              href="https://telegram.me/figandgrapeio"
                              target="_blank"
                            >
                              <img src="/static/img/rrss-telegram.png" />
                            </a>
                            <a
                              className="social-fig"
                              href="mailto:support@figandgrape.io?Subject=Contact%20from%20presale"
                              target="_blank"
                            >
                              <img src="/static/img/rrss-email.png" />
                            </a>
                            <hr />
                            <br />
                            <p>
                              If you'd like to invest with us, please contact
                              us:
                            </p>
                            <a
                              className="social-fig"
                              href="mailto:support@figandgrape.io?Subject=Contact%20from%20Whale"
                              target="_blank"
                            >
                              <img src="/static/img/rrss-email.png" />
                            </a>
                          </div>
                          <hr />
                          <div className="btn-social-fig">
                            <h5 className="espacio-top-fig">Follow us</h5>
                            <a
                              href="https://www.instagram.com/figandgrape.io/"
                              target="_blank"
                            >
                              <i style={{ fontSize: '24px' }} className="fa">
                                
                              </i>
                            </a>
                            <a
                              href="https://twitter.com/figandgrapeio"
                              target="_blank"
                            >
                              <i style={{ fontSize: '24px' }} className="fa">
                                
                              </i>
                            </a>
                            <a
                              href="https://www.facebook.com/FigandGrape.io"
                              target="_blank"
                            >
                              <i style={{ fontSize: '24px' }} className="fa">
                                
                              </i>
                            </a>
                            <a
                              href="https://www.linkedin.com/company/fig-and-grape"
                              target="_blank"
                            >
                              <i style={{ fontSize: '24px' }} className="fa">
                                
                              </i>
                            </a>
                            <a
                              href="https://www.youtube.com/channel/UCM5yb6lCTRCwaY3DOUElTSw"
                              target="_blank"
                            >
                              <i style={{ fontSize: '24px' }} className="fa">
                                
                              </i>
                            </a>
                          </div>
                          <br />
                        </div>
                      </div>
                    </div>
                  </article>
                </main>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
