package org.hiko.spider.router;

import io.vertx.core.Handler;
import io.vertx.core.http.HttpServerRequest;
import io.vertx.ext.web.Router;

public class SpiderRouter {

    public Router GetRouters(Router router) {
        router.post("/hiko/admin/spider/StartSpider").blockingHandler(ctx->{

        });
        return router;
    }
}
