/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Get in Touch</h5>
            <a href="https://support.boaweb.com/access/unauthenticated?return_to=https%3A%2F%2Fbackofficeassociates.zendesk.com%2Fagent%2Fdashboard">
              Contact Support
            </a>
            <a href={this.docUrl('Ideas_Portal.html', this.props.language)}>
              Access to Product Ideas Portal
            </a>
            <a href="http://www.boaweb.com/customers/product-training/">
              Request Product Training
            </a>
          </div>
          <div>
            <h5>Legal</h5>
            <a href="http://www.boaweb.com/privacy-policy/">
              Privacy Policy
            </a>
            <a
              href="http://www.boaweb.com/trademarks/"
              target="_blank"
              rel="noreferrer noopener">
              Trademarks
            </a>
            <a
              href="http://www.boaweb.com/terms-of-use/"
              target="_blank"
              rel="noreferrer noopener">
              Terms of Use
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a href="http://support.boaweb.com/hc/en-us">Knowldege Base</a>
            <a href={this.docUrl('Data_Insiders_Community.html', this.props.language)}>
              Data Insiders Community
            </a>
          </div>
        </section>

        <a
          href="https://www.boaweb.com"
          target="_blank"
          rel="noreferrer noopener"
          className="fbOpenSource">
          <img
            src={`${this.props.config.baseUrl}img/LOGIN_~1.svg`}
            alt="BackOffice Associates"
            width="170"
            height="45"
          />
        </a>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
