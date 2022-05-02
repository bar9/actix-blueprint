use std::io;
use actix_web::{App, HttpServer, middleware, cookie::Key};
use actix_files::{Files};
use actix_session::SessionMiddleware;
use actix_session::storage::CookieSessionStore;
use openssl::ssl::{SslAcceptor, SslFiletype, SslMethod};

#[actix_web::main]
async fn main() ->io::Result<()> {
    let mut builder = SslAcceptor::mozilla_intermediate(
        SslMethod::tls()
    ).unwrap();
    builder.set_private_key_file("cert/key.pem", SslFiletype::PEM).unwrap();
    builder.set_certificate_chain_file("cert/cert.pem").unwrap();
    env_logger::init_from_env(env_logger::Env::new().default_filter_or("info"));
    HttpServer::new(|| {
        App::new()
            .wrap(middleware::Compress::default())
            .wrap(SessionMiddleware::new(CookieSessionStore::default(), Key::generate()))
            .wrap(middleware::Logger::default())
            .service(Files::new("/", "static").index_file("index.html"))
    })
    .bind_openssl("127.0.0.1:8080", builder)?
    .workers(2)
    .run()
    .await
}
