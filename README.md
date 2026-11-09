# DTE consolidated category mock-up

Live site: <https://lilmonstersam.github.io/dte-equipment-products/>

Repository: <https://github.com/Lilmonstersam/dte-equipment-products>

The mock-up is a static site with no build step. GitHub Actions deploys the contents of the repository to GitHub Pages whenever `main` changes. To review it locally, open `index.html` in a browser and keep the CSS, JavaScript and assets beside the HTML file.

## Site structure

Each page has its own path. Category pages no longer use hash routes.

| Page | Path |
|---|---|
| Reach & boom mowers (12 products) | `/reach-mowers/` |
| Hydraulic flail mowers (5) | `/flail-mowers/` |
| Skid steer mulchers, parent of drum and disc (2) | `/skid-steer-mulchers/` |
| Skid steer drum mulchers (1) | `/drum-mulchers/` |
| Skid steer disc mulchers (1) | `/disc-mulchers/` |
| Skid steer brush cutters & slashers (7) | `/brush-cutters/` |
| Quadsaw tree trimming attachments (6) | `/quadsaws/` |
| Orchard hedging & mulching | `/applications/orchard/` |
| Roadside vegetation management | `/applications/roadside/` |
| Land clearing & mulching | `/applications/land-clearing/` |
| Leucaena management | `/applications/leucaena/` |

The root `index.html` lists every page and redirects to `/reach-mowers/`. Old hash links such as `#flail-mowers/faq` redirect to `/flail-mowers/#flail-mowers-faq`. Page sections use fragment IDs: `#<slug>-products`, `#<slug>-selection`, `#<slug>-faq` and `#<slug>-resources`.

The Products menu, category sidebar, related ranges, footer and links within the copy connect the category pages. The Applications menu links to the four application pages. Model search filters the current category. Product detail pages, articles, quotes and company pages open the published DTE website in a separate tab. Phone links use the published DTE number.

### Application pages

The application pages are the Claude Design exports from `client-mockup/` (`Orchard.dc.html`, `Roadside.dc.html`, `LandClearing.dc.html`, `Leucaena.dc.html`), each with its assets in `files/`. Their links to the design prototype host were remapped: application and category links stay within this mock-up, and product, news and company links go to the published DTE pages. Embedded videos load from youtube-nocookie.com instead of saved player copies. Multi Carrier PUMA links point to the matching live HXF product pages. Barrier mower and RX 133 links point to their live category pages because the live product URLs are ambiguous. The Land Clearing and Leucaena exports keep their "Assets to collect before this page goes live" sections. Images the exports referenced from the design project's `uploads/` folder were copied from the other client-mockup exports. The B-roll video `260407_vg_group_mildura_broll_2_v1 (2160p).mp4` used on the Roadside, Land Clearing and Leucaena pages was not in any export, so it does not play yet. The React runtime loads from each page's `files/` folder rather than unpkg.

## Styling and content

The template follows `client-mockup/category.html`: charcoal header and hero, warm white catalogue, orange accents, two-column product cards, fine rules and 2 px corners. All five categories use the same template, with a responsive menu and single-column cards on mobile.

General Sans font files are bundled locally from the font URLs supplied in the reference. Futura files were not included in the reference folder, so its declared General Sans fallback is used. Images and the DTE logo are bundled locally. The two Spider images absent from the downloaded category assets use the corresponding 720 and 820 model images supplied in the reference catalogue.

The optimised copy, all 31 product destinations, comparison tables, 15 FAQs and linked published guides are retained from the five optimised category pages. The blanket phrase ‘four-blade Quadsaw range’ has been shortened to ‘Quadsaw range’. No new blade-count claim is made. The source ledger is included in `CONTENT-SOURCES.md`.

Folder links work over GitHub Pages and when the files are opened directly from disk: on `file://` a small script sends folder links to their `index.html`. Every page is marked `noindex,nofollow`. The existing published category URLs remain the intended production destinations. The `.nojekyll` file ensures GitHub Pages serves the bundled assets without Jekyll processing.

## Verification

Checked all five categories at 1280 px and 390 px, including the mobile Products menu. No horizontal page overflow. Confirmed product counts, active navigation, model search and clearing, comparison jumps, expandable FAQs, links within the copy, and browser back navigation. All local asset paths and internal link destinations resolve. Screenshots and results are in `verification/`.
