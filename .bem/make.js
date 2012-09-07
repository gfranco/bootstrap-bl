MAKE.decl('Arch', {

    getLibraries: function() {

        return {
            'bem-bl': {
                type: 'git',
                url: 'git://github.com/bem/bem-bl.git',
                treeish: '0.2'
            }
        };

    }

});

MAKE.decl('BundleNode', {

    getTechs: function() {

        return [
            'bemjson.js',
            'bemdecl.js',
            'deps.js',
            'bemhtml.js',
            'less',
            'less.css',
            'js',
            'html'
        ];
    },

    'create-less.css-node': function(tech, bundleNode, magicNode) {
        return this.setBemCreateNode(
            tech,
            this.level.resolveTech(tech),
            bundleNode,
            magicNode);
    }

});
