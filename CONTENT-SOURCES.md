# DTE category page optimisation

Updated 22 October 2026. The five downloaded HTML files were edited in place. These are local drafts for review and implementation.

## Shared layout

The original site header, banner, category sidebar, product grid, product order, product URLs and footer are retained. Every page now follows the same structure inside the original right-hand content column:

1. Category introduction, quote link and comparison jump link.
2. Original product grid with shorter descriptions and expandable text.
3. Model or specification comparison table.
4. Three expandable FAQs.
5. Links to relevant published guides, product pages or customer stories.
6. Enquiry prompt requesting the information needed to match the attachment.

Updated page titles, meta descriptions, Open Graph/Twitter metadata, visible H1s, breadcrumbs and CollectionPage metadata. Added an ItemList containing only the products already present in each downloaded grid, with no invented prices, ratings or availability.

The shared files are `category-optimisation.css` and `category-optimisation.js`. Downloaded browser-extension toolbar markup was removed. Existing DTE typography is preserved with local copies of the same Plus Jakarta Sans font. Saved image files whose extensions did not match their WebP content are referenced through correctly named local copies. Product image alt text now uses the published model names.

## Keyword and SERP decisions

Rank Tracker project: [DTE, 8832897](https://app.ahrefs.com/rank-tracker/overview/8832897). The reviewed Australian SERPs were checked on 19 October 2026. These are national keyword volumes, repeated across the tracked locations; they must not be summed across cities.

| Page | Primary intent | Copy decision |
| --- | --- | --- |
| Reach mowers | Reach mower, reach mower for sale, boom mower | Commercial range comparison, arm reach, carrier/mounting selection and a quote route. |
| Flail mowers | Flail mower; secondary verge mower | Clearly describes hydraulic heads, compares actual FR widths and explains the conveyor-belt model. |
| Disc mulchers | Disc mulcher, skid steer disc mulcher, disc mulcher skid steer | Specification and machine fit first; distinguishes cutting capacity from mulching capacity and links to the drum alternative. |
| Brush cutters/slashers | Skid steer brush cutter and skid steer slasher | Uses both names, with a model-by-model capacity/deck comparison and operating requirements. |
| Quadsaws | Quadsaw and qualified tree-trimming attachment searches | Hydraulic, vehicle-mounted equipment; compares branch capacity and working width and includes attributed customer experience. |

The commercial results for reach mowers, flail mowers, disc mulchers and skid steer brush cutters include product and category listings. The category format is retained rather than turning these pages into long editorial articles. Tractor saw has mixed log-saw and tree-trimming intent, so it has not been forced into the Quadsaw title. Consumer pole-saw/pruner terms such as tree cutter, tree trimmer and tree trimming saw are not used as the page's primary target.

## Published sources and claim checks

Published DTE content was checked using the supplied saved pages, Ahrefs Site Audit page-content snapshots and selected web checks. Ahrefs' latest completed crawl was 16 October 2026. Links below identify the exact published sources used; no competitor claims were imported into DTE copy.

### Reach and boom mowers

- [DTE GreenTec range guide](https://www.dte-equipment.com.au/outreach-your-competition-with-world-class-reach-mowers/): Scorpion 4 reach of 3.3–4.3 m; Scorpion 6/8 reach up to 8.3 m; Spider reach of 5.2–8.2 m; applications and dual-side operation.
- [Spider series article](https://www.dte-equipment.com.au/greentec-spider-series-reach-mower-mow-on-both-side-of-the-tractor/): side-shift frame and arm/head positioning.
- The published product excerpts in the downloaded category establish the exact machine-weight figures in each model card. Model names, order and product links are unchanged.
- No single minimum tractor weight or mounting arrangement has been applied to the whole range. The Spider 720 mounting configuration is not repeated in the new summary because the product and range articles differ.

### Flail mowers

- [FR 92 / FR 112](https://www.dte-equipment.com.au/product/flail-mower-fr-92-112/): 0.9/1.1 m working widths, 40 L/min at 210 bar, 4 cm branch thickness and grass/verge use.
- [FR 122 / FR 162](https://www.dte-equipment.com.au/product/flail-mower-fr-122-162/): 1.2/1.6 m working widths, 4 cm branch thickness, hydraulic operation and mounting on compatible Scorpion arms or excavators.
- [FR 122 VB](https://www.dte-equipment.com.au/product/flail-mower-fr-122-vb/): 1.2 m width, 4 cm branch thickness, reversible hydraulic conveyor and use beside waterways.
- The new copy identifies these as hydraulic cutting heads. It does not imply that every head fits every tractor or that the entire range consists of PTO linkage decks. Published FR 122/162 pressure tables contain more than one pressure entry, so those figures were omitted from the new comparison.

### Skid steer disc mulcher

- [V70 Tree Disc Mulcher product](https://www.dte-equipment.com.au/product/virnig-v70-tree-disc-mulcher/): 60-inch disc, 6–8-inch tree mulching, cutting up to 14 inches, 30–50 GPM hydraulic flow, 4,200 PSI maximum, chute options and shatterproof-cab requirement.
- [Drum versus disc guide](https://www.dte-equipment.com.au/drum-mulcher-vs-disc-mulcher-which-forestry-mulcher-to-buy/): site conditions, debris behaviour, finish and the distinction around below-grade stump work.
- [V70 skid steer sizing guide](https://www.dte-equipment.com.au/what-size-skid-steer-do-i-need-for-a-v70-drum-or-disc-mulcher/): carrier selection and approximately 114–189 L/min high-flow guidance. Its broader pressure figures differ from the V70 product page, so the new category uses the product-specific 4,200 PSI maximum and asks DTE to confirm fit.
- [V70 performance article](https://www.dte-equipment.com.au/virnig-v70-disc-mulcher-performance/): linked for published component information. Its percentage productivity, competitor and universal superiority claims were not repeated.

### Skid steer brush cutters and slashers

Each capacity and configuration was cross-checked against its published product page:

- [V40 Closed Front](https://www.dte-equipment.com.au/product/virnig-v40-closed-front-rotary-brush-cutter/): up to 3-inch trees.
- [V40 Open Front](https://www.dte-equipment.com.au/product/virnig-v40-open-front-rotary-brush-cutter/): up to 3-inch trees and exposed front blades.
- [V50 Closed Front](https://www.dte-equipment.com.au/product/virnig-v50-closed-front-rotary-brush-cutter/): up to 4-inch trees, chain curtain and replaceable front skid shoes.
- [V50 Floating Deck](https://www.dte-equipment.com.au/product/virnig-v50-floating-deck-rotary-brush-cutter/): up to 4-inch trees and a deck following ground contours.
- [V50 Open Front](https://www.dte-equipment.com.au/product/virnig-v50-open-front-rotary-brush-cutter/): up to 6-inch trees, rounded flywheel and three double-sided blades.
- [V60 Open Front](https://www.dte-equipment.com.au/product/virnig-v60-open-front-rotary-brush-cutter/): up to 8-inch trees, four double-sided blades and AR400 front skid shoes.
- [V70 Open Front](https://www.dte-equipment.com.au/product/virnig-v70-open-front-rotary-brush-cutter/): up to 8-inch trees, bent-axis motor, relief valves, no hydraulic braking and a flywheel that may take minutes to stop.
- The published shatterproof-cab requirement is retained in the FAQ. The V70 mulcher's high-flow requirement has not been applied to the separate brush-cutter range.

### Quadsaw tree-trimming attachments

- [LRS 1402](https://www.dte-equipment.com.au/product/quadsaw-lrs-1402/): 1.4 m working width, 10 cm branch thickness and 48 kg head weight.
- [LRS 1602](https://www.dte-equipment.com.au/product/quadsaw-lrs-1602/): 1.6 m width and 12 cm branch thickness.
- [LRS 2002](https://www.dte-equipment.com.au/product/quadsaw-lrs-2002/): 2.0 m width and 16 cm branch thickness.
- [LRS 2402](https://www.dte-equipment.com.au/product/quadsaw-lrs-2402/): 2.4 m width and 21 cm branch thickness.
- [Tractor/Multi Carrier guide](https://www.dte-equipment.com.au/what-size-tractor-do-i-need-for-my-quadsaw-multi-carrier/) and [telehandler guide](https://www.dte-equipment.com.au/what-size-telehandler-do-i-need-for-a-greentec-quadsaw-multi-carrier/): linked for matching the complete configuration. The category avoids repeating exact carrier model pairings and large-model oil-flow figures because current guides and product pages differ.
- [Howard Meltzer / Yellingbo Olive Grove](https://www.dte-equipment.com.au/saves-time-money-and-physical-strain-howard-meltzer-mechanizes-orchard-hedging/): approximately 2,000 trees, an LRS 1602 system and pruning in approximately 10 days.
- [Pinecliffe / Freedman Racing](https://www.dte-equipment.com.au/jack-evans-hedging-at-pinecliff-freedman-racing/): one operator doing work previously requiring two or three. Both customer examples are explicitly attributed, with no general productivity guarantee.
- The two existing Twinsaw products remain in the grid. The Quadsaw comparison table is labelled specifically for the four Quadsaw models.

## Implementation boundary

The files preserve the published canonical category URLs. Reach-mower menu links within these drafts now point directly at the canonical `/product-category/greentec/reach-mowers/` address. Live redirects, WordPress/Yoast fields and sitewide navigation changes require implementation on the site; editing the downloaded HTML does not publish them.

Keep the associated `_files` folders, `assets` folder, shared CSS and shared JavaScript beside these HTML files for local preview. `original-html-backup.zip` contains the five unedited HTML files.

## Verification

- All five pages checked at 1280 px desktop width and 390 px mobile width. No page-level horizontal overflow; the comparison tables scroll within their own mobile containers.
- Original product IDs, product order, product URLs and canonical category URLs match the downloads: 12 reach mowers, 5 flail mowers, 1 disc mulcher, 7 brush cutters and 6 Quadsaw/Twinsaw entries, 31 in total.
- Exactly one H1 and one meta description per page; all JSON-LD parses; new fragment links resolve; local product image paths exist.
- Comparison jump link, FAQ disclosure, customer-story attribution and product-description expansion checked in the browser. The existing full-card link overlay was adjusted so it does not intercept the description controls.
- Enquiry links point to DTE's existing contact page. No enquiries were submitted.
- Evidence: [structural checks](verification/structural-checks.json), [browser checks](verification/browser-checks.json) and desktop/mobile screenshots in `verification/`.
