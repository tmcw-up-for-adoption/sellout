var commonFields = ['name', 'description', 'version', 'license', 'keywords'];

function common(p, npmPackage) {
    commonFields.forEach(function(prop) {
        p[prop] = npmPackage[prop] || (prop === 'keywords' ? [] : '');
    });
    return p;
}

module.exports.bower = function(npmPackage, bowerPackage) {
    common(bowerPackage, npmPackage);
    bowerPackage.main = npmPackage.main;
    bowerPackage.private = npmPackage.private;
    bowerPackage.authors = npmPackage.contributors;
    return bowerPackage;
};

module.exports.component = function(npmPackage, componentPackage) {
    common(componentPackage, npmPackage);
    componentPackage.scripts = [npmPackage.main];
    componentPackage['.private'] = npmPackage.private;
    return componentPackage
};
