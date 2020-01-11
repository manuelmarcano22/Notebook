(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };var element = document.getElementById("45145e88-9174-40ef-b648-1152dc264898");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '45145e88-9174-40ef-b648-1152dc264898' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.2.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.2.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.2.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.2.0.min.js"];
      var css_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.2.0.min.css", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.2.0.min.css", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.2.0.min.css"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"f2216c09-741e-4308-8639-7a98062f083d":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1609","type":"Circle"},{"attributes":{},"id":"1620","type":"Selection"},{"attributes":{},"id":"1599","type":"HelpTool"},{"attributes":{"callback":null},"id":"1576","type":"DataRange1d"},{"attributes":{"formatter":{"id":"1614","type":"BasicTickFormatter"},"ticker":{"id":"1590","type":"BasicTicker"}},"id":"1589","type":"LinearAxis"},{"attributes":{"below":[{"id":"1584","type":"LinearAxis"}],"center":[{"id":"1588","type":"Grid"},{"id":"1593","type":"Grid"}],"left":[{"id":"1589","type":"LinearAxis"}],"renderers":[{"id":"1610","type":"GlyphRenderer"}],"title":{"id":"1613","type":"Title"},"toolbar":{"id":"1600","type":"Toolbar"},"x_range":{"id":"1576","type":"DataRange1d"},"x_scale":{"id":"1580","type":"LinearScale"},"y_range":{"id":"1578","type":"DataRange1d"},"y_scale":{"id":"1582","type":"LinearScale"}},"id":"1575","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"1616","type":"BasicTickFormatter"},"ticker":{"id":"1585","type":"BasicTicker"}},"id":"1584","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"x":[1,2],"y":[3,4]},"selected":{"id":"1620","type":"Selection"},"selection_policy":{"id":"1619","type":"UnionRenderers"}},"id":"1607","type":"ColumnDataSource"},{"attributes":{"source":{"id":"1607","type":"ColumnDataSource"}},"id":"1611","type":"CDSView"},{"attributes":{},"id":"1614","type":"BasicTickFormatter"},{"attributes":{},"id":"1619","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"1618","type":"BoxAnnotation"}},"id":"1596","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"1578","type":"DataRange1d"},{"attributes":{},"id":"1598","type":"ResetTool"},{"attributes":{},"id":"1595","type":"WheelZoomTool"},{"attributes":{"text":""},"id":"1613","type":"Title"},{"attributes":{},"id":"1616","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1608","type":"Circle"},{"attributes":{},"id":"1597","type":"SaveTool"},{"attributes":{},"id":"1585","type":"BasicTicker"},{"attributes":{},"id":"1594","type":"PanTool"},{"attributes":{"dimension":1,"ticker":{"id":"1590","type":"BasicTicker"}},"id":"1593","type":"Grid"},{"attributes":{"data_source":{"id":"1607","type":"ColumnDataSource"},"glyph":{"id":"1608","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1609","type":"Circle"},"selection_glyph":null,"view":{"id":"1611","type":"CDSView"}},"id":"1610","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1594","type":"PanTool"},{"id":"1595","type":"WheelZoomTool"},{"id":"1596","type":"BoxZoomTool"},{"id":"1597","type":"SaveTool"},{"id":"1598","type":"ResetTool"},{"id":"1599","type":"HelpTool"}]},"id":"1600","type":"Toolbar"},{"attributes":{"ticker":{"id":"1585","type":"BasicTicker"}},"id":"1588","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1618","type":"BoxAnnotation"},{"attributes":{},"id":"1582","type":"LinearScale"},{"attributes":{},"id":"1590","type":"BasicTicker"},{"attributes":{},"id":"1580","type":"LinearScale"}],"root_ids":["1575"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"f2216c09-741e-4308-8639-7a98062f083d","roots":{"1575":"45145e88-9174-40ef-b648-1152dc264898"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {} // ensure no trailing comma for IE
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();