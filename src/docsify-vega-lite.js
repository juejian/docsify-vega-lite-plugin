(function () {

    "use strict";

    var debugFlag = false;

    function debug(msg) {
        if (debugFlag)
            console.log(msg)

    }

    function debug2(msg) {
        if (debugFlag)
            console.log('---\n\n' + msg + '\n\n');
    }

    function n(hook) {

        var t = "docsify-vegalte-container",
            d = window.Docsify.dom,
            r = [];

        hook.beforeEach(function (content) {
            r.length = 0, window.docsifyVegaLiteEvents = {};
            var e = /^```vega-lite((.*\r?\n)+?)?```$/gim,
                i = content.match(e);

            // debug('---\n\n before parse md,content:\n\n' + content + '\n');

            content = content.replace(e, '<div class="' + t + '"></div>'),
                i && i.length && i.map(function (cur, k) {
                    var t = "";
                    try {
                        t = cur.replace(/(^```vega-lite|```$)/gim, "");
                    } catch (cur) {
                        console.warn("vega-lite parse error.")
                    }

                    r.push({
                        d: t,
                        __id: k
                    });

                }), content;

            // debug('---\nafter vegalite replace,content:\n\n' + content);
            return content;
        });

        hook.doneEach(function () {

            if (!(r && r.length)) return;

/*             debug2("match array len:" + r.length);
            r.map((e) => {
                debug(e)
            });
 */
            var p = "vegaliteContainers";

            var o = document.createElement("script");
            o.textContent = r.map(function (n) {
                var e = n.__id;
                var id = p + e;

                var rs = '\n\n(function(){\n var vlSpec =' + n.d + ';\n var vegaEm' + e +
                    ' = document.querySelectorAll(".' + t + '")[' + e + '];\n vegaEm' + e +
                    '.setAttribute("id","' + id + '");\n vegaEmbed("#' + id + '",vlSpec);\n })();\n';
                return rs;

            }).join(""), d.appendTo(d.body, o)
        });
    }

    window.$docsify && (window.$docsify.plugins = [].concat(n, $docsify.plugins))

})();