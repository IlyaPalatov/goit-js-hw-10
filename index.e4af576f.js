!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequireabb0;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequireabb0=i),i.register("bOlkj",(function(t,n){function r(){var e="https://api.thecatapi.com/v1/breeds?api_key=".concat("live_Cg5x1xE9Wu0Ss9tK2xDXTBHstn7wll5lstSstJEczpvMVPxz3Jhq9fSejqi42qsk");return fetch(e).then((function(e){return e.json()})).then((function(e){return e.map((function(e){return{id:e.id,name:e.name}}))}))}function i(e){var t="https://api.thecatapi.com/v1/images/search?breed_ids=".concat(e,"&api_key=").concat("live_Cg5x1xE9Wu0Ss9tK2xDXTBHstn7wll5lstSstJEczpvMVPxz3Jhq9fSejqi42qsk");return fetch(t).then((function(e){return e.json()})).then((function(e){var t=e[0];return{image:t.url,breed:t.breeds[0].name,description:t.breeds[0].description,temperament:t.breeds[0].temperament}}))}e(t.exports,"fetchBreeds",(function(){return r})),e(t.exports,"fetchCatByBreed",(function(){return i}))})),i("bOlkj")}();
//# sourceMappingURL=index.e4af576f.js.map
