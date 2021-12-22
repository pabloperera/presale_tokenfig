import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="entry-footer"></footer>
      {/* .entry-footer */}
      {/* #post-## */}
      {/* #main */}
      {/* #primary */}
      {/* .row end */}
      {/* Container end */}
      {/* Wrapper end */}
      <section className="c-cta dark-ocean">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="w-md-80 w-lg-60 mx-auto">
                <div className="c-cta__items">
                  <h2 className="h3">Crypto payments made easy!</h2>
                  <p className="subtitle">
                    Join the thousands of businesses already using FIG TOKEN.
                  </p>
                  <a href="/pricing" className="btn btn-light btn-lg">
                    Get started
                  </a>{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-fig-negro">
        <div className="container-fluid">
          <div
            className="row"
            style={{ paddingTop: '25px', paddingBottom: '10px' }}
          >
            <div className="col-sm-4"></div>
            <div className="col-sm-4 navbar-dark">
              <p style={{ textAlign: 'center', color: '#888' }}>
                Copyright © 2021 Fig &amp; Grape
              </p>
            </div>
            <div className="col-sm-4" />
          </div>
        </div>
      </footer>
      {/* #page end */}
    </div>
  )
}

export default Footer;
