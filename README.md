#Actix-Blueprint

## goals
* an app blueprint capable of bootstrapping general-purpose web apps as well as APIs
* lean by design: 
  * no builds and preprocessing where it isn't absolutely necessary
  * keep to web standards as closely as possible and use modern web APIs. 
  * Stick to HTML, Javascript and CSS

## maybe-goals
* integration of mediasoup, e.g. in a dedicated branch

## getting started
* create a self-signed certificate (e.g with mkcert) under `cert/cert.pem` and `cert/key.pem`
* build and run in one step with `cargo run`

## next steps
- [x] readme chapters goals, getting started
- [x] https
- [ ] try a branch with mediasoup echo example