/**
 * Created by jsx on 13/7/14.
 */

var router = {
    request: {},
    response: {},
    path: '',
    init: function (request, response) {
        this.request = request;
        this.response = response;
        this.method = this.request.method.toLowerCase();
        this.path = this.request.url;
    },
    route: function (method, path, handler) {
        if (this.path === path && this.method === method) {
            handler(this.request, this.response);
        }
    },
    render: function () {}
};

exports.init = router.init;
exports.render = router.render;
exports.route = router.route;
