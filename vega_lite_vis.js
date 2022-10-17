var vg_1 = "top_solar_producers.vg.json";
var vg_2 = "production2.vg.json";
var vg_3 = "solarconsumtions2.vg.json";
var vg_4 = "choropleth_time_slider.vg.json";
var vg_5 = "bar_chart.vg.json";
var vg_6 = "linechar.vg.json"

vegaEmbed("#multi_view", vg_1).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#chloropleth_production", vg_2).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#chloropleth_consumption", vg_3).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#chloropleth_time_slider", vg_4).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#bar_chart", vg_5).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#line_chart", vg_6).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
