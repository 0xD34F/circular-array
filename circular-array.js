(function(factory) {
    if (typeof window === 'undefined') {
        module.exports = factory();
    } else {
        window.CircularArray = factory();
    }
}(function() {
    function isIndex(value) {
        return (+value) === parseInt(value, 10);
    }

    function transformPropName(target, prop) {
        if (isIndex(prop)) {
            let len = target.length || 1;
            prop = (prop | 0) % len;
            if (prop < 0) {
                prop += len;
            }
        }

        return prop;
    }

    let proxyHandler = {
        get(target, prop) {
            if (prop === 'push') {
                return (...args) => target.push(...args);
            }

            return target[transformPropName(target, prop)];
        },
        set(target, prop, value) {
            target[transformPropName(target, prop)] = value;
            return true;
        }
    };

    return function(...args) {
        return new Proxy(new Array(...args), proxyHandler);
    };
}));
