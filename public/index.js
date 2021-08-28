/*!
 * Markers On Map ('https://github.com/furcan/Markers-On-Map')
 * Version: 1.4.0
 * Author: Furkan MT ('https://github.com/furcan')
 * Copyright 2020 Markers On Map, MIT Licence ('https://opensource.org/licenses/MIT')*
 */

// DEMO: Markers On Map - Init and Run on
const data = [
  {
    lat: 9.7482,
    long: 118.74405,
    type: "Hospital",
    name: "Hospital ng Palawan",
  },
  { lat: 9.74995, long: 118.74557, type: "Clinic", name: "Lazo Clinic" },
  {
    lat: 9.74222,
    long: 118.73703,
    type: "Drugstore",
    name: "Mercury Drug Malvar St",
  },
  { lat: 9.74186, long: 118.73797, type: "Clinic", name: "Padre Pio Medical" },
  {
    lat: 9.74698,
    long: 118.74248,
    type: "Clinic",
    name: "Palawan Medical Plaza",
  },
  { lat: 9.75201, long: 118.7479, type: "Clinic", name: "Palawan Eye Center" },
  {
    lat: 9.75436,
    long: 118.7471,
    type: "Clinic",
    name: "Palawan Medical City",
  },
  { lat: 9.74786, long: 118.74341, type: "Clinic", name: "Reyes Clinic" },
];

const newdata = data.map((item) => {
  return {
    markerLat: item.lat,
    markerLong: item.long,
    markerTitle: "This marker has it's own custom content",
    markerContent: `<h3 style="text-align:center;margin:0 0 10px;">${item.name}</h3><p style="text-align:center; margin:0 0 10px;">Custom Marker Description</p><button onclick="Notiflix.Notify.Success(\'Custom Button Action\')" style="display:table;margin:auto;padding:8px 12px;border-radius:20px;font-weight:700;background:#502974;color:#fff;cursor:pointer;">Get Direction</button>`,
    // markerContentFromGoogleQuery: 'Ataturk Culture Center',
    markerCallback: function () {
      Notiflix.Notify.Success(
        "This is a marker click callback. (Custom Content)",
      );
    },
    closeCallback: function () {
      Notiflix.Notify.Info("This is a close button callback. (Custom Content)");
    },
  };
});

MarkersOnMap.Init({
  googleApiKey: "AIzaSyDCfF1rF5H6sK_X4Ymgmol-J2RJi3DvvcA", // this key restricted except this project
  googlePlacesApiEnabled: true,
  mapTypeId: "terrain",
  mapHeight: "500px",
  mapScrollWheel: false,
  markerObjects: newdata,
});
MarkersOnMap.Run("div#GoogleMaps", function cllbck() {
  Notiflix.Notify.Success("The map created successfully.");
});
// DEMO: Markers On Map - Init and Run off

// DEMO: Tooltip on
function furcanTooltip(tooltip) {
  $("body > .tooltip").remove();
  $(tooltip).tooltip({
    trigger: "hover",
    container: "body",
  });
}
furcanTooltip('[data-toggle="tooltip"]');

$(document).on("click", function () {
  if ($("body > .tooltip").length > 0) {
    $("body > .tooltip").remove();
  }
});
// DEMO: Tooltip off

// DEMO: Map Markers Title Tooltip on
$(window).on("load", function () {
  var tooltipTimeout = setTimeout(function () {
    $(document).on("mouseenter", "div#GoogleMaps", function () {
      furcanTooltip($("div#GoogleMaps *[title]"));
      clearTimeout(tooltipTimeout);
    });
  }, 1000);
});
// DEMO: Map Markers Title Tooltip off

// DEMO: Notiflix on
Notiflix.Notify.Init({
  position: "right-bottom",
  cssAnimationStyle: "from-bottom",
});
// DEMO: Notiflix off
