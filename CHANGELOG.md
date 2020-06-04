# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/@google-cloud/datalabeling?activeTab=versions

## [2.0.0](https://www.github.com/googleapis/nodejs-datalabeling/compare/v1.6.0...v2.0.0) (2020-06-04)


### ⚠ BREAKING CHANGES

* The library now supports Node.js v10+. The last version to support Node.js v8 is tagged legacy-8 on NPM.

### Features

* check status of long running operation by its name ([#180](https://www.github.com/googleapis/nodejs-datalabeling/issues/180)) ([914f99c](https://www.github.com/googleapis/nodejs-datalabeling/commit/914f99c2bbd4870ffbd7e4085dcd1e2d1284d77a))
* drop node8 support, support for async iterators ([#161](https://www.github.com/googleapis/nodejs-datalabeling/issues/161)) ([8f6cfa8](https://www.github.com/googleapis/nodejs-datalabeling/commit/8f6cfa8bef7ac591d3432d5a6480305524bf96c9))


### Bug Fixes

* export explicit version from protos.js ([#166](https://www.github.com/googleapis/nodejs-datalabeling/issues/166)) ([7096188](https://www.github.com/googleapis/nodejs-datalabeling/commit/709618898603d50c8c92b01e8bb26a866ed47e3e))
* remove eslint, update gax, fix generated protos, run the generator ([#170](https://www.github.com/googleapis/nodejs-datalabeling/issues/170)) ([35d38b2](https://www.github.com/googleapis/nodejs-datalabeling/commit/35d38b2cde5d19b4c00c88a4a3907e81997f6e35))
* remove unused files from package ([#173](https://www.github.com/googleapis/nodejs-datalabeling/issues/173)) ([7d43739](https://www.github.com/googleapis/nodejs-datalabeling/commit/7d437395f993774eaab20bff1d58cda025e20a54))
* synth.py clean up for multiple version ([#182](https://www.github.com/googleapis/nodejs-datalabeling/issues/182)) ([67f56a1](https://www.github.com/googleapis/nodejs-datalabeling/commit/67f56a18588c3e12615b6ad630b906d745ae6093))

## [1.6.0](https://www.github.com/googleapis/nodejs-datalabeling/compare/v1.5.0...v1.6.0) (2020-03-06)


### Features

* deferred client initialization ([#146](https://www.github.com/googleapis/nodejs-datalabeling/issues/146)) ([cbd8224](https://www.github.com/googleapis/nodejs-datalabeling/commit/cbd82248f93360815e17dbf50098ad3a3ec6360a))

## [1.5.0](https://www.github.com/googleapis/nodejs-datalabeling/compare/v1.4.2...v1.5.0) (2020-02-29)


### Features

* export protos in src/index.ts ([42812db](https://www.github.com/googleapis/nodejs-datalabeling/commit/42812db5f9c56b744c32314aaf4e7c48c13a62b1))

### [1.4.2](https://www.github.com/googleapis/nodejs-datalabeling/compare/v1.4.1...v1.4.2) (2020-02-10)


### Bug Fixes

* pass x-goog-request-params header for streaming calls ([e4e78e6](https://www.github.com/googleapis/nodejs-datalabeling/commit/e4e78e69090103a81bea41d6a48040e1803bd924))

### [1.4.1](https://www.github.com/googleapis/nodejs-datalabeling/compare/v1.4.0...v1.4.1) (2020-01-31)


### Bug Fixes

* resource names helper functions; enum, bytes, and Long types now accept strings ([#117](https://www.github.com/googleapis/nodejs-datalabeling/issues/117)) ([e9793d6](https://www.github.com/googleapis/nodejs-datalabeling/commit/e9793d67bc76e781e8f52f700cf20915bac4c3b4))
* update proto files ([3e53076](https://www.github.com/googleapis/nodejs-datalabeling/commit/3e530762affd4896b65921fe7a13717cb0fdcb0d))
* updated proto files ([cc8f27d](https://www.github.com/googleapis/nodejs-datalabeling/commit/cc8f27d05c58a4cba2f5544fad07752f49ca56da))

## [1.4.0](https://www.github.com/googleapis/nodejs-datalabeling/compare/v1.3.4...v1.4.0) (2020-01-17)


### Features

* move to typescript code generation ([#109](https://www.github.com/googleapis/nodejs-datalabeling/issues/109)) ([381b1eb](https://www.github.com/googleapis/nodejs-datalabeling/commit/381b1eb70eef00ffd4292fbffbddf36d4e13bdec))

### [1.3.4](https://www.github.com/googleapis/nodejs-datalabeling/compare/v1.3.3...v1.3.4) (2019-12-05)


### Bug Fixes

* import long type into proto ts declaration file ([#93](https://www.github.com/googleapis/nodejs-datalabeling/issues/93)) ([7b16da1](https://www.github.com/googleapis/nodejs-datalabeling/commit/7b16da1bc47cc0b235c7a6293ff393d9db2b7538))
* **deps:** pin TypeScript below 3.7.0 ([6b91e93](https://www.github.com/googleapis/nodejs-datalabeling/commit/6b91e93e9c56697c07001323a84733f17992c3c5))

### [1.3.3](https://www.github.com/googleapis/nodejs-datalabeling/compare/v1.3.2...v1.3.3) (2019-11-15)


### Bug Fixes

* **docs:** bump release level to beta ([#89](https://www.github.com/googleapis/nodejs-datalabeling/issues/89)) ([b3467e6](https://www.github.com/googleapis/nodejs-datalabeling/commit/b3467e656733702012348d2819c7ca6829bdc492))

### [1.3.2](https://www.github.com/googleapis/nodejs-datalabeling/compare/v1.3.1...v1.3.2) (2019-11-14)


### Bug Fixes

* **docs:** snippets are now replaced in jsdoc comments ([#85](https://www.github.com/googleapis/nodejs-datalabeling/issues/85)) ([d1ebe18](https://www.github.com/googleapis/nodejs-datalabeling/commit/d1ebe186ae05e0d47d7cc78b095996dad1d4d506))

### [1.3.1](https://www.github.com/googleapis/nodejs-datalabeling/compare/v1.3.0...v1.3.1) (2019-10-22)


### Bug Fixes

* **deps:** bump google-gax to 1.7.5 ([#80](https://www.github.com/googleapis/nodejs-datalabeling/issues/80)) ([32a1f60](https://www.github.com/googleapis/nodejs-datalabeling/commit/32a1f608198e0992c206c135784692810155eee6))

## [1.3.0](https://www.github.com/googleapis/nodejs-datalabeling/compare/v1.2.0...v1.3.0) (2019-10-09)


### Bug Fixes

* use compatible version of google-gax ([716b9f6](https://www.github.com/googleapis/nodejs-datalabeling/commit/716b9f6))


### Features

* .d.ts for protos ([#72](https://www.github.com/googleapis/nodejs-datalabeling/issues/72)) ([f6b4d28](https://www.github.com/googleapis/nodejs-datalabeling/commit/f6b4d28))

## [1.2.0](https://www.github.com/googleapis/nodejs-datalabeling/compare/v1.1.3...v1.2.0) (2019-09-16)


### Bug Fixes

* set proper version # for x-goog-api-client ([aeb0de9](https://www.github.com/googleapis/nodejs-datalabeling/commit/aeb0de9))


### Features

* load protos from JSON, grpc-fallback support ([3bc5d92](https://www.github.com/googleapis/nodejs-datalabeling/commit/3bc5d92))

### [1.1.3](https://www.github.com/googleapis/nodejs-datalabeling/compare/v1.1.2...v1.1.3) (2019-08-02)


### Bug Fixes

* allow calls with no request, add JSON proto ([ed3743f](https://www.github.com/googleapis/nodejs-datalabeling/commit/ed3743f))

### [1.1.2](https://www.github.com/googleapis/nodejs-datalabeling/compare/v1.1.1...v1.1.2) (2019-06-26)


### Bug Fixes

* **docs:** link to reference docs section on googleapis.dev ([#51](https://www.github.com/googleapis/nodejs-datalabeling/issues/51)) ([8976320](https://www.github.com/googleapis/nodejs-datalabeling/commit/8976320))

### [1.1.1](https://www.github.com/googleapis/nodejs-datalabeling/compare/v1.1.0...v1.1.1) (2019-06-14)


### Bug Fixes

* **docs:** move to new client docs URL ([#46](https://www.github.com/googleapis/nodejs-datalabeling/issues/46)) ([d670a96](https://www.github.com/googleapis/nodejs-datalabeling/commit/d670a96))

## [1.1.0](https://www.github.com/googleapis/nodejs-datalabeling/compare/v1.0.0...v1.1.0) (2019-06-06)


### Features

* support apiEndpoint override in client constructor ([#41](https://www.github.com/googleapis/nodejs-datalabeling/issues/41)) ([7989746](https://www.github.com/googleapis/nodejs-datalabeling/commit/7989746))
* support apiEndpoint override in client constructor ([#43](https://www.github.com/googleapis/nodejs-datalabeling/issues/43)) ([0bfe818](https://www.github.com/googleapis/nodejs-datalabeling/commit/0bfe818))

## [1.0.0](https://www.github.com/googleapis/nodejs-datalabeling/compare/v0.1.0...v1.0.0) (2019-05-20)


### ⚠ BREAKING CHANGES

* upgrade engines field to >=8.10.0 (#18)

### Bug Fixes

* **deps:** update dependency google-gax to ^0.26.0 ([#16](https://www.github.com/googleapis/nodejs-datalabeling/issues/16)) ([2783120](https://www.github.com/googleapis/nodejs-datalabeling/commit/2783120))
* DEADLINE_EXCEEDED is no longer retried ([5cedb2d](https://www.github.com/googleapis/nodejs-datalabeling/commit/5cedb2d))
* DEADLINE_EXCEEDED retry code is idempotent ([#27](https://www.github.com/googleapis/nodejs-datalabeling/issues/27)) ([00a9c2e](https://www.github.com/googleapis/nodejs-datalabeling/commit/00a9c2e))
* **deps:** update dependency google-gax to v1 ([#26](https://www.github.com/googleapis/nodejs-datalabeling/issues/26)) ([482dab5](https://www.github.com/googleapis/nodejs-datalabeling/commit/482dab5))


### Build System

* upgrade engines field to >=8.10.0 ([#18](https://www.github.com/googleapis/nodejs-datalabeling/issues/18)) ([5affe85](https://www.github.com/googleapis/nodejs-datalabeling/commit/5affe85))

## v0.1.0

04-05-2019 14:33 PDT

This is the initial release of the Node.js Data Labeling API client library.
