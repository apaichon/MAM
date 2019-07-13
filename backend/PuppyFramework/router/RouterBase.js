
class RouterBase {

    constructor (config) {
        this.RouteUrl = config.routeUrl;
        this.Router = require('express').Router();
        this.BizObject = config.bizObject;
        this.Init();
    }

    async Execute (method, data, res) {
        try{
            let result = await this.BizObject[method](data);
            res.send(result);
        } 
        catch(err) {
            res.send(err)
        }
    }

    Init () {
        this.Router.post(this.RouteUrl.ADD_URL, (req, res) => this.Execute('Add', req.body, res));
        this.Router.put(this.RouteUrl.EDIT_URL, (req, res) => this.Execute('Edit', req.body, res));
        this.Router.delete(this.RouteUrl.DELETE_URL, (req, res) => this.Execute('Remove', req.body, res));
        this.Router.get(this.RouteUrl.GET_URL, (req, res) => this.Execute('Find', req.query, res));
    }
}

module.exports = RouterBase;
