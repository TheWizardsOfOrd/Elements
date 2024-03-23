# Introduction

![The Wizards of Ord](https://ordinals.com/content/45f24b70a8052a677b6b406436ca081d6efbdf6afba25d2d0e4eaa5680ba7e17i0)

_Faster, simpler, cheaper_

> [!WARNING]
> *These inscriptions rely on Ordinals protocol's built-in Brotli compression. This is a very recent protocol upgrade in v0.12.0, and may not be widely supported just yet.*

**The Wizards of Ord: Elements** are a collection of open source libraries inscribed on Bitcoin through **Ordinals Protocol's built-in brotli compression** method. This relies on HTTP `content-encoding` headers for automatically compressing and decompressing data in the browser, resulting in a more efficient use of the expensive Bitcoin blockspace, ease of use, better performance and **significant cost savings**.

Inscriptions can now use these libraries directly inside their code, without having to explicitly fiddle with compression. As if loading them from a CDN.

## Mission

We want to make it easy for anyone and everyone to create art on Ordinals. Are you new to Ordinals? We're here to help. Need to inscribe a library? We'll be happy to inscribe it for you. Have any questions? Hit us up in [The Wizards of Ord Discord](https://discord.com/invite/TheWizardsOfOrd).

## Inscribed libraries

_**All inscribed libraries are compressed with Ordinals protocol's built-in Brotli compression.**_

| Library | Version | Release Date | Inscription ID | Source | 
| --- | --- | --- | --- | --- |
| [p5.js](https://ordinals.com/inscription/7e37766541506810ba6399c4b2735121f508bd9209df43dd200bf2316b014594i0) | 1.9.2 | Mar 19, 2024 | 7e37766541506810ba6399c4b2735121f508bd9209df43dd200bf2316b014594i0 | [GitHub](https://github.com/processing/p5.js/releases/download/v1.9.2/p5.min.js)
| [three.js](https://ordinals.com/inscription/8f968eb8ada1bf6275e6f8a27361a6b462a951b0102951e0fe7d30dec1d07dd4i0) | r159 | Nov 30, 2023 | 8f968eb8ada1bf6275e6f8a27361a6b462a951b0102951e0fe7d30dec1d07dd4i0 | [unpkg](https://unpkg.com/three@0.159.0/build/three.module.min.js)
| [Degenerate](https://ordinals.com/sat/45018381985) | Custom | Jan 12, 2024 | Multiple inscriptions on SAT 45018381985 | [degenerate](https://github.com/TheWizardsOfOrd/degenerate/tree/inscribe)

## How to use

> [!CAUTION]
> Always test before you inscribe

1. Copy code from [Boilerplate](#boilerplate-code). Check [examples](#examples) to see it in action.
2. Add your generative art code.
3. [Preview](#preview-before-inscribe) your work.
4. Inscribe using your favorite method, preferrably with compression enabled.

## Examples

### p5.js

These example inscriptions serve a dual purpose: demonstrate the power of Elements and serve as examples of how to use the inscribed libraries. They use p5.js to apply mempool-like block effect to existing image inscriptions.

- Collection
  - **Inscriptions:** https://www.ord.io/bc1px5lcxfdcv3a4sr5vl9g9js5fmxzfw0ls4cgdcm6lwn78aa4dqegq7ufsqk?max=-1
  - **Source** https://github.com/TheWizardsOfOrd/Elements/tree/main/examples/p5js/collection

- Standalone
  - **Inscription:** https://www.ord.io/45907974
  - **Source:** https://github.com/TheWizardsOfOrd/Elements/blob/main/examples/p5js/standalone/example.html

### three.js

- Standalone

  - **Inscription:** https://www.ord.io/46802198
  - **Source:** https://github.com/TheWizardsOfOrd/Elements/blob/main/examples/threejs/standalone/example.html

### Degenerate

- Standalone

  - **Inscription:** https://ordin-delta.vercel.app/content/68589e36d708c4777e5833d8d45d350929af85ca50372f4ec1ebd7125b3cc57ai0
  - **Source:** https://github.com/TheWizardsOfOrd/Elements/blob/main/examples/degenerate/standalone/example.html

## Boilerplate code

Elements provide boilerplate code for creating standalone generative art and collections. Their purpose is to serve as a good starting point for anyone looking to inscribe generative art using Ordinals on Bitcoin.

### p5.js

- [Generative Art Collection](https://github.com/TheWizardsOfOrd/Elements/tree/main/boilerplate/p5js/collection)
- [Standalone Generative Art](https://github.com/TheWizardsOfOrd/Elements/blob/main/boilerplate/p5js/standalone/inscription.html)

### three.js

- [Standalone Generative Art](https://github.com/TheWizardsOfOrd/Elements/blob/main/boilerplate/threejs/standalone/inscription.html)

### Degenerate

> [!CAUTION]
> Degenerate relies on WebAssembly workers. Due to CSP/iframe [issues](https://github.com/ordinals/ord/issues/3014), they may not show well in preview.

- [Standalone Generative Art](https://github.com/TheWizardsOfOrd/Elements/blob/main/boilerplate/degenerate/standalone/inscription.html)

## Preview before inscribe

It's always a good idea to preview generative art code before inscribing. The following tool should be useful.

- [On-chain HTML Inscription Preview Tool](https://ordin-delta.vercel.app/content/c24b53e7733d72a8662676bd2067fa7e715fa5c2ea614b7727da9787def47aeai0)

To populate the preview tool with a basic "Hello World" p5.js inscription, click the following link that pre-populates the code:

- [Hello World p5.js Preview](https://ordin-delta.vercel.app/content/c24b53e7733d72a8662676bd2067fa7e715fa5c2ea614b7727da9787def47aeai0?code=PCFET0NUWVBFIGh0bWw%2BCjxodG1sIGxhbmc9ImVuIj4KICA8aGVhZD4KICAgIDxzY3JpcHQgc3JjPSIvY29udGVudC9iNmE1MGY1YmE5MzJiMGVhN2Y2NTJkOWQyOGU1OWVjZWQ0N2JjNmY4Mzc2YzI1ZTAyZDhiMzQ1N2JiNjBhYzhmaTAiPjwvc2NyaXB0PgogICAgPHN0eWxlPgogICAgICBodG1sLCBib2R5IHsgbWFyZ2luOiAwOyBwYWRkaW5nOiAwOyB9CiAgICAgIGNhbnZhcyB7IHBvc2l0aW9uOiBmaXhlZDsgdG9wOiA1MCU7IGxlZnQ6IDUwJTsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7IH0KICAgIDwvc3R5bGU%2BCiAgICA8bWV0YSBjaGFyc2V0PSJ1dGYtOCIgLz4KICA8L2hlYWQ%2BCiAgPGJvZHk%2BCiAgICA8c2NyaXB0PgogICAgICBmdW5jdGlvbiBzZXR1cCgpIHsKICAgICAgICBjcmVhdGVDYW52YXMoNDAwLCA0MDApOwogICAgICB9CgogICAgICBmdW5jdGlvbiBkcmF3KCkgewogICAgICAgIHRleHRTaXplKDMyKTsKICAgICAgICBmaWxsKDApOwogICAgICAgIHRleHQoIlRoZSBXaXphcmRzIG9mIE9yZCIsIDEwMCwgMjAwKTsKICAgICAgfQogICAgPC9zY3JpcHQ%2BCiAgPC9ib2R5Pgo8L2h0bWw%2B)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="/content/7e37766541506810ba6399c4b2735121f508bd9209df43dd200bf2316b014594i0"></script>
    <style>
      html, body { margin: 0; padding: 0; }
      canvas { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); }
    </style>
    <meta charset="utf-8" />
  </head>
  <body>
    <script>
      function setup() {
        createCanvas(400, 400);
      }

      function draw() {
        textSize(32);
        fill(0);
        text("The Wizards of Ord", 100, 200);
      }
    </script>
  </body>
</html>
```

## Verify authenticity

You can compare the SHA checksum of the inscribed library and the official library, and verify that they're identical.

```
$ curl -s https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.2/p5.min.js | shasum
52cc687d6d49e6a5ac135245d3232836233c113b  -

$ curl -s https://ordin-delta.vercel.app/content/7e37766541506810ba6399c4b2735121f508bd9209df43dd200bf2316b014594i0 | shasum
52cc687d6d49e6a5ac135245d3232836233c113b  -
```
## Why Elements over OCM Dimensions?

[OCM Dimensions](https://github.com/metagood/OCM-Dimensions) has been incredibly useful in creating genereative art inscriptions on Bitcoin.

However, it predates Ordinals protocols' built-in compression and instead relies on uncompressing on the client side with javascript. This results in larger inscription file sizes and a performance penalty, over Ordinals' built-in compression.

With Dimensions, there's also some additional overhead involved in explicitly compressing the files prior to inscribing. Relying on Ordinals protocols built-in compression avoids that, while making it cheaper to inscribe and have improved performance when loading art inscriptions in the browser.

Moreover, Elements include a more recent version of the inscribed libraries. For example, the inscribed p5.js as a part of Elements is v1.9.0 compared to v1.6.0 with OCM Dimensions.

Downside of Elements? Ordinal's built-in compression is a brand new feature. It might not be widely supported just yet.

## Need help?

Join us in [The Wizards of Ord Discord](https://discord.com/invite/TheWizardsOfOrd) and we'll figure it out. Alternatively, tweet [@lifofifo](https://twitter.com/lifofifo) on X.
