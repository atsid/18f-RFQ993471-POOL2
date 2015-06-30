"use strict";

let request = require("superagent-bluebird-promise");

class ManufacturerStore {

    list(opts={}) {
        let req = request.get("/api/manufacturers");
        req.query({limit: opts.limit || 100});
        req.query({skip: opts.skip || 0});
        if (opts.search) {
            req.query({search: opts.search});
        }
        if (opts.fields) {
            req.query({fields: opts.fields});
        }
        return req.promise();
    }

    get(name) {
        return request.get("/api/manufacturers/by-name")
            .query({"name": encodeURIComponent(name)})
            .promise().then((res) => res.body);
    }

    /**
     * Returns a list of matching drugs by the given name
     */
    listByName(name) {
        let qs = `name:${name}`;
        return this.list({search: qs, limit: 100}).then((res) => {
            let data = res.body.data;
            return { data: data, total: data.length };
        }, (err) => {
            if (err && err.name !== "CancellationError") {
                return { data: null };
            }
        });
    }
}

module.exports = ManufacturerStore;