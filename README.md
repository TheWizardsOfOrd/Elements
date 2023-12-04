# Introduction

_Faster, simpler, easier, cheaper_

**The Wizards of Ord: Elements** are a collection of open source libraries inscribed on Bitcoin through **Ordinals Protocol's built-in brotli compression** method. This relies on HTTP `content-encoding` headers for automatically compressing and decompressing data in the browser, resulting in a more efficient use of the expensive Bitcoin blockspace, ease of use, better performance and **significant cost savings**.

Inscriptions can now use these libraries directly inside their code, without having to explicitly fiddle with compression.

## Inscribed Libraries

At the moment, the following libraries are inscribed:

**p5.js 1.9.0** [*Released Nov 30, 2023*]

[b6a50f5ba932b0ea7f652d9d28e59eced47bc6f8376c25e02d8b3457bb60ac8fi0](https://ordinals.com/inscription/b6a50f5ba932b0ea7f652d9d28e59eced47bc6f8376c25e02d8b3457bb60ac8fi0)

## How to use

> [!CAUTION]
> Always test before you inscribe

1. Copy code from [Boilerplate](#boilerplate-code). Check [examples](#examples) to see it in action.
2. Add your generative art code
3. [Preview](#preview-before-inscribe) your work
4. Inscribe using your favorite method, preferrably with compression enabled.

## Examples

These example inscriptions serve dual purpose: demonstrate the power of Elements and serve as examples of how to use the inscribed libraries. They use p5.js to apply mempool-like block effect to existing image inscriptions.

### Collection

- **Inscriptions:** https://www.ord.io/bc1px5lcxfdcv3a4sr5vl9g9js5fmxzfw0ls4cgdcm6lwn78aa4dqegq7ufsqk?max=-1
- **Source** https://github.com/TheWizardsOfOrd/Elements/tree/main/examples/p5js/collection

### Standalone

- **Inscription:** https://www.ord.io/45907974
- **Source:** https://github.com/TheWizardsOfOrd/Elements/blob/main/examples/p5js/standalone/example.html

## Boilerplate Code

Elements provide boilerplate code for creating standalone generative art and collections. Their purpose is to serve as a good starting point for anyone looking to inscribe generative art using Ordinals on Bitcoin.

### p5.js

- [Generative Art Collection](https://github.com/TheWizardsOfOrd/Elements/tree/main/boilerplate/p5js/collection)
- [Standalone Generative Art](https://github.com/TheWizardsOfOrd/Elements/blob/main/boilerplate/p5js/standalone/inscription.html)

## Preview before inscribe

It's always a good idea to preview generative art code before inscribing. The following tool should be useful.

- [On-chain HTML Inscription Preview Tool](https://ordin-delta.vercel.app/content/84c6c14df816032d0cd4ade05674bae4c652b98920108149e2129eea644b6fcbi0)

## Inscription Structure

Elements rely on Ordinals parent/child provenance for structuring the inscribed libraries. Relevant library information such as name, version and website is included as part of inscription metadata.

```
root
└── p5.js container
    └── p5.js 1.9.0
```

[Inscription 45218127](https://ordinals.com/inscription/45f24b70a8052a677b6b406436ca081d6efbdf6afba25d2d0e4eaa5680ba7e17i0), inscribed on an **Uncommon** sat, sits at the root of Elements.

Containers for each library are inscribed as children of this root inscription on **Block 9 450x** sats. Respective libraries are then inscribed as children of these container inscriptions.

- p5.js container - https://ordinals.com/inscription/957926b4567402e25398cfd765068a7a9584cd9b7496c58c19e6434d3e71486fi0
- p5.js library - https://ordinals.com/inscription/b6a50f5ba932b0ea7f652d9d28e59eced47bc6f8376c25e02d8b3457bb60ac8fi0.

## Need Help?

Feel free to reach out to **@lifofifo**.

- [The Wizards of Ord Discord](https://discord.com/invite/TheWizardsOfOrd)
- [Twitter](https://twitter.com/lifofifo)
