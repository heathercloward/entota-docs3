/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
//const users = [
//  {
//    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
//    image: '/img/docusaurus.svg',
//    infoLink: 'https://www.facebook.com',
//    pinned: true,
//  },
//];

const siteConfig = {
  title: 'Entota™ Help', // Title for your website.
  //tagline: 'A website for Enota Help',
  url: 'https://heathercl.github.io', // Your website URL
  baseUrl: '/entota-docs3/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'entota-docs3',
  organizationName: 'heathercloward',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'Getting_Started_with_Entota', label: 'Docs'},
    {doc: 'Welcome', label: 'Help'},
    {doc: 'EntotaReleases', label: "Release Notes"},
    {blog: false},
  ],

  // If you have users set above, you add it here:
  //users,

  /* path to images for header/footer */
  headerIcon: 'img/E_NavyBackground.svg',
  footerIcon: 'img/E_NavyBackground.svg',
  favicon: 'img/favicon.ico',

  /* Colors for website */
  colors: {
    primaryColor: '#008fb4',
    secondaryColor: '#d42b1f',
  },

  /* Custom fonts for website */
  
fonts: {
  myFont: [
    "Roboto",
    "sans-serif"
  ],
  myOtherFont: [
    "Helvetica",
    "Arial"
  ]
},

stylesheets: [
  {
    href: 'https://fonts.googleapis.com/css?family=Roboto',
    type: 'text/css',
  },
],
  

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Access to pages and visibility of fields may be restricted based on the security settings of the current user.       
              Copyright © ${new Date().getFullYear()} BackOffice Associates, LLC and/or its affiliates. All rights reserved. 
              The DSP logo is a registered trademark of BackOffice Associates®. Other names appearing on the Site may be trademarks of their respective owners.`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  scrollToTop: true,
  
  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  //ogImage: 'img/docusaurus.png',
  //twitterImage: 'img/docusaurus.png',

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
   enableUpdateTime: true,

   disableTitleTagline: true,

   docsSideNavCollapsible: true,

  editUrl: ''

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
