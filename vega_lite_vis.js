var vg_1 = "top_solar_producers.vg.json";
var vg_2 = "production2.vg.json";
var vg_3 = "solarconsumption2.vg.json";

vegaEmbed("#multi_view", vg_1).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#chloropleth_production", vg_2).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#chloropleth_consumption", vg_3).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
