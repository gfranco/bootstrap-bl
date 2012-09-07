var q = require('q'),
    fs = require('fs'),
    bem = require('bem'),
    less = require('less'),
    Path = require('path')

exports.techMixin = {

    getCreateResult: function(path, suffix, vars) {

        // return bem.util.readFile(this.getContext().getLevel().getPath(vars.Prefix, 'less')).then(q.nbind(less.render, less))

        var deferred = q.defer()
        fs.readFile(this.getContext().getLevel().getPath(vars.Prefix, 'less'), 'utf8', function(err, data) {
            if(err) return deferred.reject(err)
            less.render(data, { paths: [Path.dirname(path)] },function(err, css) {
                if(err) return deferred.reject(err)
                deferred.resolve(css)
            })
        })

        return deferred.promise

    },

    getDependencies: function() {
        return ['less']
    },

    getCreateSuffixes: function() {
        return ['css']
    },

    storeCreateResult: function(path, suffix, res, force) {
        return this.__base(path, suffix, res, true)
    }

};
