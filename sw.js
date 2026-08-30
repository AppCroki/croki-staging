self.addEventListener("fetch", (event) => {
  try {
    const url = new URL(event.request.url);
    if (
      url.hostname.endsWith("supabase.co") ||
      url.port === "54321" ||
      url.pathname.startsWith("/rest/v1/") ||
      url.pathname.startsWith("/auth/v1/") ||
      url.pathname.startsWith("/realtime/v1/") ||
      url.pathname.startsWith("/functions/v1/") ||
      url.hostname.endsWith("stripe.com") ||
      url.hostname.includes("js.stripe.com")
    ) {
      event.stopImmediatePropagation();
    }
  } catch (_error) {}
});
/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-8061e182'], (function (workbox) { 'use strict';

  self.skipWaiting();
  workbox.clientsClaim();
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "sw-push-handlers.js",
    "revision": "78da9be70602844b8f96fcc9a283b1bc"
  }, {
    "url": "support.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "settings.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "reset.html",
    "revision": "628ad8fe8d6d599d5973b0e6ed29f162"
  }, {
    "url": "register.html",
    "revision": "beb870842a55109e5daa60b8f7161a01"
  }, {
    "url": "register-pro.html",
    "revision": "beb870842a55109e5daa60b8f7161a01"
  }, {
    "url": "pwa-capture.js",
    "revision": "c73dab27be2f4e06d425747b390c1ce2"
  }, {
    "url": "profil.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "notifications.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "manifest.webmanifest",
    "revision": "6f05d8d69153b31f78a80b57f17ad096"
  }, {
    "url": "login.html",
    "revision": "beb870842a55109e5daa60b8f7161a01"
  }, {
    "url": "index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "idee.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "home.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "forgot-password.html",
    "revision": "7b7c0ee80f5613679300637ffee5eecc"
  }, {
    "url": "favorites.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "favicon.svg",
    "revision": "950322dba7dd35f7f108e3a0bcb9eed6"
  }, {
    "url": "favicon.png",
    "revision": "2573de6e437feb25b12f991fb3d6b462"
  }, {
    "url": "favicon.ico",
    "revision": "d99da9682e5d9cc7563b3565cbaa3d24"
  }, {
    "url": "explore.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "decouvrir.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "commercants.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "cart.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "callback.html",
    "revision": "3a8107ff1141dfecebc5b5dc37e7ab02"
  }, {
    "url": "account.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "_sitemap.html",
    "revision": "7bbd4d5012d705401917d49b0406bdec"
  }, {
    "url": "404.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "+not-found.html",
    "revision": "1c2267e4e0f7582e60b6b0f3a8502780"
  }, {
    "url": "support/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "settings/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "restaurants/lyon.html",
    "revision": "6115f6cce803db772708c7db9510efdd"
  }, {
    "url": "restaurants/[slug].html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "restaurants/lyon/index.html",
    "revision": "6115f6cce803db772708c7db9510efdd"
  }, {
    "url": "restaurants/[slug]/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "register-pro/index.html",
    "revision": "beb870842a55109e5daa60b8f7161a01"
  }, {
    "url": "register/index.html",
    "revision": "beb870842a55109e5daa60b8f7161a01"
  }, {
    "url": "profil/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "pro/support.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "pro/suggestions.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "pro/settings.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "pro/reviews.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "pro/performance.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "pro/orders.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "pro/onboarding.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "pro/more.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "pro/kitchen.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "pro/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "pro/hours.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "pro/establishment.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "pro/documents.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "pro/catalog.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "pro/support/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "pro/suggestions/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "pro/settings/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "pro/reviews/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "pro/performance/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "pro/payments/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "pro/payments/connect.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "pro/payments/index/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "pro/payments/connect/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "pro/orders/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "pro/orders/[id].html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "pro/orders/[id]/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "pro/onboarding/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "pro/more/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "pro/kitchen/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "pro/index/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "pro/hours/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "pro/establishment/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "pro/documents/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "pro/catalog/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "orders/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "orders/[id].html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "orders/index/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "orders/[id]/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "notifications/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "maplibre/maplibre-gl-worker.mjs",
    "revision": "2facd66a892dd2e63b0c198943486a8c"
  }, {
    "url": "maplibre/maplibre-gl-shared.mjs",
    "revision": "b0f7bba2311a1320147c04e209ca0198"
  }, {
    "url": "login/index.html",
    "revision": "beb870842a55109e5daa60b8f7161a01"
  }, {
    "url": "legal/suppression.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "legal/signalement.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "legal/professionnels.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "legal/mentions.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "legal/marketplace.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "legal/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "legal/droits.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "legal/cookies.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "legal/confidentialite.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "legal/classement.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "legal/cgv.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "legal/cgu.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "legal/avis.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "legal/accessibilite.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "legal/[slug].html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "legal/suppression/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "legal/signalement/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "legal/professionnels/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "legal/mentions/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "legal/marketplace/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "legal/index/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "legal/droits/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "legal/cookies/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "legal/confidentialite/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "legal/classement/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "legal/cgv/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "legal/cgu/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "legal/avis/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "legal/accessibilite/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "legal/[slug]/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "idee/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "icons/icon-512.png",
    "revision": "7cab4ed60315b837123f58b9aa5629ef"
  }, {
    "url": "icons/icon-192.png",
    "revision": "127ca68581abc98e5f858e3440995bff"
  }, {
    "url": "icons/icon-1024.png",
    "revision": "ee09b4a62d8084553049e02c810a2691"
  }, {
    "url": "icons/apple-touch-icon.png",
    "revision": "9d5efe415c91459bbb07a12877e75693"
  }, {
    "url": "home/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "forgot-password/index.html",
    "revision": "7b7c0ee80f5613679300637ffee5eecc"
  }, {
    "url": "foodtrucks/vesoul.html",
    "revision": "00fe1ff1fefea9af0236fa6e8c826f64"
  }, {
    "url": "foodtrucks/paris.html",
    "revision": "aa51be8e6624683c7fa3bf8a21a3d0e2"
  }, {
    "url": "foodtrucks/index.html",
    "revision": "f2e0b06eaa9275dfda448ad22c922d81"
  }, {
    "url": "foodtrucks/haute-saone.html",
    "revision": "a64180b5879b72da91289b8598f4e380"
  }, {
    "url": "foodtrucks/[slug].html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "foodtrucks/vesoul/index.html",
    "revision": "00fe1ff1fefea9af0236fa6e8c826f64"
  }, {
    "url": "foodtrucks/paris/index.html",
    "revision": "aa51be8e6624683c7fa3bf8a21a3d0e2"
  }, {
    "url": "foodtrucks/index/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "foodtrucks/haute-saone/index.html",
    "revision": "a64180b5879b72da91289b8598f4e380"
  }, {
    "url": "foodtrucks/[slug]/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "fonts/Inter-700.woff2",
    "revision": "b5b6e1af95a07412caf886530fe26e1d"
  }, {
    "url": "favorites/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "explore/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "establishment/pause-pain.html",
    "revision": "3e77f136a3cbc9d9b0a8db934657502a"
  }, {
    "url": "establishment/foodtruck-demo-croki.html",
    "revision": "07fc819c98c2b97216cb920666f3aeaf"
  }, {
    "url": "establishment/chez-sable.html",
    "revision": "aaad1cb31012bf6a20e675a44da63b8d"
  }, {
    "url": "establishment/[slug].html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "establishment/pause-pain/index.html",
    "revision": "3e77f136a3cbc9d9b0a8db934657502a"
  }, {
    "url": "establishment/foodtruck-demo-croki/index.html",
    "revision": "07fc819c98c2b97216cb920666f3aeaf"
  }, {
    "url": "establishment/chez-sable/index.html",
    "revision": "aaad1cb31012bf6a20e675a44da63b8d"
  }, {
    "url": "establishment/[slug]/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "decouvrir/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "commercants/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "city/vesoul.html",
    "revision": "96e562be0ca31abfc4fe33be9d105131"
  }, {
    "url": "city/paris.html",
    "revision": "b44d7ed36a54888b33eabd20e07c9961"
  }, {
    "url": "city/lyon.html",
    "revision": "9b2037fa8294760ee44d8415c0a10ceb"
  }, {
    "url": "city/[slug].html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "city/vesoul/index.html",
    "revision": "96e562be0ca31abfc4fe33be9d105131"
  }, {
    "url": "city/paris/index.html",
    "revision": "b44d7ed36a54888b33eabd20e07c9961"
  }, {
    "url": "city/lyon/index.html",
    "revision": "9b2037fa8294760ee44d8415c0a10ceb"
  }, {
    "url": "city/[slug]/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "checkout/pay.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "checkout/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "checkout/pay/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "checkout/index/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "category/sandwich.html",
    "revision": "5e0f78d5b9b5c5a8958ce6319cbe8a8f"
  }, {
    "url": "category/burger.html",
    "revision": "03c9bb545781815f392a61eca058c1ab"
  }, {
    "url": "category/bakery.html",
    "revision": "12a092bcb2de885310590a034c3af1dc"
  }, {
    "url": "category/[slug].html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "category/sandwich/lyon.html",
    "revision": "90395fec3531ea8f9fcacb19e9c748b7"
  }, {
    "url": "category/sandwich/index.html",
    "revision": "5e0f78d5b9b5c5a8958ce6319cbe8a8f"
  }, {
    "url": "category/sandwich/lyon/index.html",
    "revision": "90395fec3531ea8f9fcacb19e9c748b7"
  }, {
    "url": "category/burger/vesoul.html",
    "revision": "b1f017b1e87e8f9425e17c2f8bcfafbb"
  }, {
    "url": "category/burger/index.html",
    "revision": "03c9bb545781815f392a61eca058c1ab"
  }, {
    "url": "category/burger/vesoul/index.html",
    "revision": "b1f017b1e87e8f9425e17c2f8bcfafbb"
  }, {
    "url": "category/bakery/paris.html",
    "revision": "1ae4105fa8f1f95a9a254439aace353f"
  }, {
    "url": "category/bakery/index.html",
    "revision": "12a092bcb2de885310590a034c3af1dc"
  }, {
    "url": "category/bakery/paris/index.html",
    "revision": "1ae4105fa8f1f95a9a254439aace353f"
  }, {
    "url": "category/[slug]/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "category/[slug]/[city].html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "category/[slug]/[city]/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "cart/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "callback/index.html",
    "revision": "3a8107ff1141dfecebc5b5dc37e7ab02"
  }, {
    "url": "assets/node_modules/expo-router/assets/unmatched.20e71bdf79e3a97bf55fd9e164041578.png",
    "revision": "20e71bdf79e3a97bf55fd9e164041578"
  }, {
    "url": "assets/node_modules/expo-router/assets/sitemap.412dd9275b6b48ad28f5e3d81bb1f626.png",
    "revision": "412dd9275b6b48ad28f5e3d81bb1f626"
  }, {
    "url": "assets/node_modules/expo-router/assets/pkg.ab19f4cbc543357183a20571f68380a3.png",
    "revision": "ab19f4cbc543357183a20571f68380a3"
  }, {
    "url": "assets/node_modules/expo-router/assets/forward.d8b800c443b8972542883e0b9de2bdc6.png",
    "revision": "d8b800c443b8972542883e0b9de2bdc6"
  }, {
    "url": "assets/node_modules/expo-router/assets/file.19eeb73b9593a38f8e9f418337fc7d10.png",
    "revision": "19eeb73b9593a38f8e9f418337fc7d10"
  }, {
    "url": "assets/node_modules/expo-router/assets/error.d1ea1496f9057eb392d5bbf3732a61b7.png",
    "revision": "d1ea1496f9057eb392d5bbf3732a61b7"
  }, {
    "url": "assets/node_modules/expo-router/assets/arrow_down.017bc6ba3fc25503e5eb5e53826d48a8.png",
    "revision": "017bc6ba3fc25503e5eb5e53826d48a8"
  }, {
    "url": "assets/node_modules/expo-router/assets/react-navigation/elements/search-icon.286d67d3f74808a60a78d3ebf1a5fb57.png",
    "revision": "286d67d3f74808a60a78d3ebf1a5fb57"
  }, {
    "url": "assets/node_modules/expo-router/assets/react-navigation/elements/close-icon.808e1b1b9b53114ec2838071a7e6daa7@4x.png",
    "revision": "0747a1317bbe9c6fc340b889ef8ab3ae"
  }, {
    "url": "assets/node_modules/expo-router/assets/react-navigation/elements/close-icon.808e1b1b9b53114ec2838071a7e6daa7@3x.png",
    "revision": "78c625386b4d0690b421eb0fc78f7b9c"
  }, {
    "url": "assets/node_modules/expo-router/assets/react-navigation/elements/close-icon.808e1b1b9b53114ec2838071a7e6daa7@2x.png",
    "revision": "1190ab078c57159f4245a328118fcd9a"
  }, {
    "url": "assets/node_modules/expo-router/assets/react-navigation/elements/close-icon.808e1b1b9b53114ec2838071a7e6daa7.png",
    "revision": "d84e297c3b3e49a614248143d53e40ca"
  }, {
    "url": "assets/node_modules/expo-router/assets/react-navigation/elements/clear-icon.c94f6478e7ae0cdd9f15de1fcb9e5e55@4x.png",
    "revision": "3cd68ccdb8938e3711da2e8831b85493"
  }, {
    "url": "assets/node_modules/expo-router/assets/react-navigation/elements/clear-icon.c94f6478e7ae0cdd9f15de1fcb9e5e55@3x.png",
    "revision": "d8e7601e3df962f83c62371ac14964d8"
  }, {
    "url": "assets/node_modules/expo-router/assets/react-navigation/elements/clear-icon.c94f6478e7ae0cdd9f15de1fcb9e5e55@2x.png",
    "revision": "aff2c65b39a296d4f7e96d0f58169170"
  }, {
    "url": "assets/node_modules/expo-router/assets/react-navigation/elements/clear-icon.c94f6478e7ae0cdd9f15de1fcb9e5e55.png",
    "revision": "61ca7e64b7d605716c57706cef640b9a"
  }, {
    "url": "assets/node_modules/expo-router/assets/react-navigation/elements/back-icon.35ba0eaec5a4f5ed12ca16fabeae451d.png",
    "revision": "35ba0eaec5a4f5ed12ca16fabeae451d"
  }, {
    "url": "assets/node_modules/expo-router/assets/react-navigation/elements/back-icon-mask.0a328cd9c1afd0afe8e3b1ec5165b1b4.png",
    "revision": "0a328cd9c1afd0afe8e3b1ec5165b1b4"
  }, {
    "url": "assets/assets/icons/icon.ee09b4a62d8084553049e02c810a2691.png",
    "revision": "ee09b4a62d8084553049e02c810a2691"
  }, {
    "url": "assets/assets/branding/official/croki-noir-variants.3e1a1906c2537eac019a28acad1d3aaa.png",
    "revision": "3e1a1906c2537eac019a28acad1d3aaa"
  }, {
    "url": "assets/assets/branding/official/transparent/croki-green.5f3e804bbf272a925e6e35955d7ed424.png",
    "revision": "5f3e804bbf272a925e6e35955d7ed424"
  }, {
    "url": "assets/assets/branding/official/transparent/croki-beige.960c92762f1cc46995c0aec803e469cf.png",
    "revision": "960c92762f1cc46995c0aec803e469cf"
  }, {
    "url": "admin/support.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "admin/suggestions.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "admin/settings.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "admin/reviews.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "admin/orders.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "admin/news.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "admin/more.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "admin/merchants.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "admin/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "admin/exports.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "admin/compliance.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "admin/accounts.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "admin/support/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "admin/suggestions/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "admin/settings/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "admin/reviews/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "admin/orders/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "admin/news/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "admin/more/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "admin/merchants/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "admin/index/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "admin/exports/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "admin/compliance/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "admin/accounts/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "account/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "_sitemap/index.html",
    "revision": "7bbd4d5012d705401917d49b0406bdec"
  }, {
    "url": "_expo/static/js/web/thumbhash-a0b00fc137223b82dfac117446d9f36b.js",
    "revision": "a0b00fc137223b82dfac117446d9f36b"
  }, {
    "url": "_expo/static/js/web/maplibre-gl-4d00cd98320e3427b23b0d66529bccf2.js",
    "revision": "4d00cd98320e3427b23b0d66529bccf2"
  }, {
    "url": "_expo/static/js/web/index-4cb695bae0ccbe890fc98564e8968d91.js",
    "revision": "4cb695bae0ccbe890fc98564e8968d91"
  }, {
    "url": "_expo/static/js/web/index-46547c4398939ca22ad932e34f299386.js",
    "revision": "46547c4398939ca22ad932e34f299386"
  }, {
    "url": "_expo/static/js/web/__expo-metro-runtime-1f8f5d3ca6b7f58204d51e14506d73fb.js",
    "revision": "1f8f5d3ca6b7f58204d51e14506d73fb"
  }, {
    "url": "_expo/static/js/web/__common-7b1758d3487209b6a24274ea7bb9a978.js",
    "revision": "7b1758d3487209b6a24274ea7bb9a978"
  }, {
    "url": "_expo/static/js/web/WebBrowser-ddf8173bf71fff98c6c0ff30d36908f3.js",
    "revision": "ddf8173bf71fff98c6c0ff30d36908f3"
  }, {
    "url": "_expo/static/js/web/SecureStore-cc2a9da509220bba746f6b95b442a0f0.js",
    "revision": "cc2a9da509220bba746f6b95b442a0f0"
  }, {
    "url": "_expo/static/js/web/ProDashboardPreview-bf83637e4a2117b4105d69e84b099dff.js",
    "revision": "bf83637e4a2117b4105d69e84b099dff"
  }, {
    "url": "_expo/static/js/web/Network-f9a06ca53823250cfd493c35a4193615.js",
    "revision": "f9a06ca53823250cfd493c35a4193615"
  }, {
    "url": "_expo/static/js/web/LocalAuthentication-7d72dda5c839a2366ca8d075b7d2c679.js",
    "revision": "7d72dda5c839a2366ca8d075b7d2c679"
  }, {
    "url": "_expo/static/js/web/DiscoverProductPreview-e41b1b4bff7f39f728833c97f9f4f16b.js",
    "revision": "e41b1b4bff7f39f728833c97f9f4f16b"
  }, {
    "url": "_expo/static/js/web/ConnectEmbeddedOnboarding-94943d7905fa71b655c6d9b0d6ef2c67.js",
    "revision": "94943d7905fa71b655c6d9b0d6ef2c67"
  }, {
    "url": "_expo/static/js/web/ConnectEmbeddedLive-ab27d4157ba098f8e27ccb75e4c9e4b2.js",
    "revision": "ab27d4157ba098f8e27ccb75e4c9e4b2"
  }, {
    "url": "_expo/static/js/web/ConnectEmbeddedDashboard-44bd2521992bb56fb73907ca6746f5c4.js",
    "revision": "a5ec9c012c6979c7feb6af91c13467bd"
  }, {
    "url": "_expo/static/js/web/Clipboard-30df4ce7825af12b02a247ab04d2c19b.js",
    "revision": "30df4ce7825af12b02a247ab04d2c19b"
  }, {
    "url": "_expo/static/css/maplibre-gl-9ee142d85ebe8fc90c36b0bed2634e4f.css",
    "revision": "9ee142d85ebe8fc90c36b0bed2634e4f"
  }, {
    "url": "+not-found/index.html",
    "revision": "1c2267e4e0f7582e60b6b0f3a8502780"
  }, {
    "url": "(public)/settings.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/profil.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/idee.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/explore.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/decouvrir.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/commercants.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/cart.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/account.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/settings/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/restaurants/lyon.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/restaurants/[slug].html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/restaurants/lyon/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/restaurants/[slug]/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/profil/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/legal/suppression.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/legal/signalement.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/legal/professionnels.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/legal/mentions.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/legal/marketplace.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/legal/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/legal/droits.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/legal/cookies.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/legal/confidentialite.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/legal/classement.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/legal/cgv.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/legal/cgu.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/legal/avis.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/legal/accessibilite.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/legal/[slug].html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/legal/suppression/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/legal/signalement/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/legal/professionnels/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/legal/mentions/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/legal/marketplace/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/legal/index/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/legal/droits/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/legal/cookies/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/legal/confidentialite/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/legal/classement/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/legal/cgv/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/legal/cgu/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/legal/avis/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/legal/accessibilite/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/legal/[slug]/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/index/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/idee/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/foodtrucks/vesoul.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/foodtrucks/paris.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/foodtrucks/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/foodtrucks/haute-saone.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/foodtrucks/[slug].html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/foodtrucks/vesoul/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/foodtrucks/paris/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/foodtrucks/index/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/foodtrucks/haute-saone/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/foodtrucks/[slug]/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/explore/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/establishment/pause-pain.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/establishment/foodtruck-demo-croki.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/establishment/chez-sable.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/establishment/[slug].html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/establishment/pause-pain/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/establishment/foodtruck-demo-croki/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/establishment/chez-sable/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/establishment/[slug]/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/decouvrir/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/commercants/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/city/vesoul.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/city/paris.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/city/lyon.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/city/[slug].html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/city/vesoul/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/city/paris/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/city/lyon/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/city/[slug]/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/category/sandwich.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/category/burger.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/category/bakery.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/category/[slug].html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/category/sandwich/lyon.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/category/sandwich/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/category/sandwich/lyon/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/category/burger/vesoul.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/category/burger/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/category/burger/vesoul/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/category/bakery/paris.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/category/bakery/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/category/bakery/paris/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/category/[slug]/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/category/[slug]/[city].html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/category/[slug]/[city]/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/cart/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(public)/account/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(client)/support.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(client)/notifications.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(client)/home.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(client)/favorites.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(client)/support/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(client)/orders/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(client)/orders/[id].html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(client)/orders/index/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(client)/orders/[id]/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(client)/notifications/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(client)/home/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(client)/favorites/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(client)/checkout/pay.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(client)/checkout/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(client)/checkout/pay/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(client)/checkout/index/index.html",
    "revision": "a91756603e4989cd29579b5b05874a4a"
  }, {
    "url": "(auth)/register.html",
    "revision": "beb870842a55109e5daa60b8f7161a01"
  }, {
    "url": "(auth)/register-pro.html",
    "revision": "beb870842a55109e5daa60b8f7161a01"
  }, {
    "url": "(auth)/login.html",
    "revision": "beb870842a55109e5daa60b8f7161a01"
  }, {
    "url": "(auth)/forgot-password.html",
    "revision": "7b7c0ee80f5613679300637ffee5eecc"
  }, {
    "url": "(auth)/callback.html",
    "revision": "3a8107ff1141dfecebc5b5dc37e7ab02"
  }, {
    "url": "(auth)/register-pro/index.html",
    "revision": "beb870842a55109e5daa60b8f7161a01"
  }, {
    "url": "(auth)/register/index.html",
    "revision": "beb870842a55109e5daa60b8f7161a01"
  }, {
    "url": "(auth)/login/index.html",
    "revision": "beb870842a55109e5daa60b8f7161a01"
  }, {
    "url": "(auth)/forgot-password/index.html",
    "revision": "7b7c0ee80f5613679300637ffee5eecc"
  }, {
    "url": "(auth)/callback/index.html",
    "revision": "3a8107ff1141dfecebc5b5dc37e7ab02"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("/index.html"), {
    denylist: [/^\/(?:auth|login|register|register-pro|forgot-password|pro|admin|checkout|orders|cart|account|profile|favorites|settings|support|reviews|notifications)(?:\/|$)/, /\/reset\.html(?:\?|$)/]
  }));
  workbox.registerRoute(({
    url
  }) => url.hostname.endsWith("supabase.co") || url.hostname.endsWith("stripe.com") || url.hostname.includes("js.stripe.com") || url.hostname.endsWith("openfreemap.org") || url.pathname.startsWith("/maplibre/"), new workbox.NetworkOnly(), 'GET');
  workbox.registerRoute(({
    request,
    url
  }) => request.method !== "GET" || isSensitivePathname(url.pathname), new workbox.NetworkOnly(), 'GET');
  workbox.registerRoute(({
    request
  }) => request.destination === "script" || request.destination === "style", new workbox.CacheFirst({
    "cacheName": "croki-shell",
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 48,
      maxAgeSeconds: 2592000
    })]
  }), 'GET');
  workbox.registerRoute(({
    request
  }) => request.destination === "font" || request.destination === "manifest", new workbox.CacheFirst({
    "cacheName": "croki-fonts",
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 16,
      maxAgeSeconds: 2592000
    })]
  }), 'GET');
  workbox.registerRoute(({
    request,
    url
  }) => url.origin === self.location.origin && (request.destination === "image" || url.pathname.startsWith("/icons/")), new workbox.CacheFirst({
    "cacheName": "croki-images",
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 64,
      maxAgeSeconds: 1209600
    })]
  }), 'GET');
  workbox.registerRoute(({
    request
  }) => request.mode === "navigate", new workbox.NetworkFirst({
    "cacheName": "croki-pages-v3",
    "networkTimeoutSeconds": 8,
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 64,
      maxAgeSeconds: 60
    }), new workbox.CacheableResponsePlugin({
      statuses: [200]
    })]
  }), 'GET');

}));
//# sourceMappingURL=sw.js.map
//# sourceMappingURL=sw.js.map

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter(
            (key) =>
              key === "croki-pages" ||
              key === "croki-pages-v2" ||
              key === "croki-shell" ||
              key === "croki-fonts" ||
              key === "croki-images",
          )
          .map((key) => caches.delete(key)),
      ),
    ),
  );
});
/* Push Web Croki — importé par sw.js (dev) et append Workbox (prod). */
"use strict";

function crokiPushPayload(event) {
  try {
    return event.data ? event.data.json() : {};
  } catch (_e) {
    return {};
  }
}

self.addEventListener("push", function (event) {
  var data = crokiPushPayload(event);
  var title = data.title || "Croki";
  var body = data.body || "Nouvelle notification";
  var href = data.href || "/";
  event.waitUntil(
    self.registration.showNotification(title, {
      body: body,
      icon: "/icons/icon-192.png",
      badge: "/icons/icon-192.png",
      tag: data.event || data.tag || "croki",
      renotify: true,
      data: {
        href: href,
        order_id: data.order_id || "",
        event: data.event || "",
        audience: data.audience || "",
        source: "web-push",
      },
    }),
  );
});

self.addEventListener("notificationclick", function (event) {
  event.notification.close();
  var href = (event.notification.data && event.notification.data.href) || "/";
  var target = new URL(href, self.location.origin).href;
  event.waitUntil(
    self.clients.matchAll({ type: "window", includeUncontrolled: true }).then(function (list) {
      for (var i = 0; i < list.length; i += 1) {
        var client = list[i];
        if (!client.url.startsWith(self.location.origin)) {
          continue;
        }
        client.postMessage({ type: "croki-push-open", href: href });
        if ("focus" in client) {
          return client.focus();
        }
      }
      if (self.clients.openWindow) {
        return self.clients.openWindow(target);
      }
      return undefined;
    }),
  );
});

