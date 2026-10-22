# DTE consolidated category mock-up

Live site: <https://lilmonstersam.github.io/dte-equipment-products/>

Repository: <https://github.com/Lilmonstersam/dte-equipment-products>

The mock-up is a static site with no build step. GitHub Actions deploys the contents of the repository to GitHub Pages whenever `main` changes. To review it locally, open `index.html` in a browser and keep the CSS, JavaScript and assets beside the HTML file.

## Included pages

- Reach & boom mowers: `#reach-mowers`, 12 products
- Hydraulic flail mowers: `#flail-mowers`, 5 products
- Skid steer disc mulchers: `#disc-mulchers`, 1 product
- Skid steer brush cutters & slashers: `#brush-cutters`, 7 products
- Quadsaw tree trimming attachments: `#quadsaws`, 6 products

The Products menu, application menu, category sidebar, related ranges, footer and relevant links within the copy connect these views. Each page also links to its models, comparison table, FAQs and guides. Browser back and forward navigation works.

Model search filters the current category. Product detail pages, articles, quotes and company pages open the published DTE website in a separate tab. Phone links use the published DTE number.

## Styling and content

The template follows `client-mockup/category.html`: charcoal header and hero, warm white catalogue, orange accents, two-column product cards, fine rules and 2 px corners. All five categories use the same template, with a responsive menu and single-column cards on mobile.

General Sans font files are bundled locally from the font URLs supplied in the reference. Futura files were not included in the reference folder, so its declared General Sans fallback is used. Images and the DTE logo are bundled locally. The two Spider images absent from the downloaded category assets use the corresponding 720 and 820 model images supplied in the reference catalogue.

The optimised copy, all 31 product destinations, comparison tables, 15 FAQs and linked published guides are retained from the five optimised category pages. The blanket phrase ‘four-blade Quadsaw range’ has been shortened to ‘Quadsaw range’. No new blade-count claim is made. The source ledger is included in `CONTENT-SOURCES.md`.

The mock-up is marked `noindex,nofollow`. Hash routes serve this review prototype; the existing published category URLs remain the intended production destinations. The `.nojekyll` file ensures GitHub Pages serves the bundled assets without Jekyll processing.

## Verification

Checked all five categories at 1280 px and 390 px, including the mobile Products menu. No horizontal page overflow. Confirmed product counts, active navigation, model search and clearing, comparison jumps, expandable FAQs, links within the copy, and browser back navigation. All local asset paths and internal link destinations resolve. Screenshots and results are in `verification/`.
