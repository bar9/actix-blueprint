use std::io;
use actix_web::{App, HttpServer, middleware, cookie::Key};
use actix_files::{Files};
use actix_session::SessionMiddleware;
use actix_session::storage::CookieSessionStore;

#[actix_web::main]
async fn main() ->io::Result<()> {
    env_logger::init_from_env(env_logger::Env::new().default_filter_or("info"));
    HttpServer::new(|| {
        App::new()
            .wrap(middleware::Compress::default())
            .wrap(SessionMiddleware::new(CookieSessionStore::default(), Key::generate()))
            .wrap(middleware::Logger::default())
            .service(Files::new("/", "static").index_file("index.html"))
    })
    .bind(("127.0.0.1", 8080))?
    .workers(2)
    .run()
    .await
}
