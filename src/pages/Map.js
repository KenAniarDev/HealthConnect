import React, { useEffect } from "react";
import MarkersOnMap from "markers-on-map";

export const Map = () => {
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
    {
      lat: 9.74186,
      long: 118.73797,
      type: "Clinic",
      name: "Padre Pio Medical",
    },
    {
      lat: 9.74698,
      long: 118.74248,
      type: "Clinic",
      name: "Palawan Medical Plaza",
    },
    {
      lat: 9.75201,
      long: 118.7479,
      type: "Clinic",
      name: "Palawan Eye Center",
    },
    {
      lat: 9.75436,
      long: 118.7471,
      type: "Clinic",
      name: "Palawan Medical City",
    },
    { lat: 9.74786, long: 118.74341, type: "Clinic", name: "Reyes Clinic" },
  ];

  useEffect(() => {
    const newdata = data.map((item) => {
      switch (item.type) {
        case "Hospital":
          item.marker =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALMSURBVHgB1Vg9bhNBFP5m7AJoWBqSIIrNCcgRzAmAE2DH9CQ9UsYnAPfYLCeAG+AbYE6QRUIKocFlJNgZ5q03IrLnzc+uKfgaWzt/3/t/MwIdMLxQuf0ZSGEyGJFBmJWuRAmJZXGgSrSEQCKG5yqTd8RLAXMCg8wzdWkMpvMDVeBfkjq+nJxFkNlEaclNUshFkSIz9QU+GOAILWGEUPO9s0nM3CApItQT+GT/5ugKgWK2p0ahaTI0YWeECAZDcoHQNC+pZoMcobMEVta0JSIgjFEvLtTAN6fPDZDZaAN4DwD5yGK2rxbX3+hAS5KEGXDrmvEFuy83ML5U70jdzk2tVrTEs+K+WnLrLTnVHO4+2ODx24O/wtwEbz7DS6rthj5CBHugajTpRGXwlBtzkhp+UxT6uXOFjaDYbE3EOF+TEk+QQspGXM4tqH5hihQYvGdGcqoOiCVlJJMkbZQVD/1m21qiwc7vZf27iCXFwmCFRFjfKbkxcfX70PXdTcpWe/f3pJq3Ro9fY271zxFLSlD74dwFWSjxbXGSeM6Nze69+opYUpXk/cCXezZR91t8allw65ykKOQ9ZWMw/jFhpb8Jq6XXYFKL1viCFFI1+FCm7Fn4CiuF+vG6IrAJ0mgU3Jjwbdy7jZ/wo27g9FqrJTSOZF88CjWCZIX5vjpMJkUYf1fUtgywY1hBRr5O1JunfLWrNSHSUqA19pJqqvgCu0SEoMGMvkttxWiJECRVa8sXiSmIFDCq9lWAomKMbvgYe82KIlUn08p0MqMtzKexc6O7hPmDyRu0dHryy5RrfFLrYqUdpZqRnJs60JQ1SaRSzUhXL+rnkYi0Jg+NGWOjUeO0zetLMilCdYWT4OVTt3txISQ/BV2jfmOQ+OwqvKGCG0IrTRFq/9LbYV5fVFv40U5IEcg8m2Wovjl3eMXrTIrQhPuUIk3alBG6Of+3+AMKsCeEAKw6NQAAAABJRU5ErkJggg==";
          break;
        case "Clinic":
          item.marker =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAlCAYAAAAqXEs9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALRSURBVHgB3VjBQRsxEJzVkT9UEFNByD/BdyVQARDnD1QAVBB4J8BRQaCCOyf8IRXgElwA0mZ1hjyI9iSd/WI+tk970mh2tbsyYSDKvWb9CdgiYEQGI/+MHWYMzO7qqsVAEDLxaa8pi6I4luW35Oe6YjaXqW/I2tO2rmbIQDIhUWTERXElREpkgeocYkmEtid3uwR7Bl2RGGZk3E77vXqIGUYJbU9+HxDcGZbHXEhVMVK9hBbxYhqsDnOy7mOf+4w24E+RkLlCCphnYB/IUawv4lCHSsiZtQP5GEElIXHB7kh2vDG9LDenl+MN+b4pz/b9GPQXy89fmj1tVHXZeDJ91AhJTF3D4lCkD6qyOJHmp3zdCs9O7fRiuwrPHZpQdsCkuYtlsrJCBN7lbMy9rDAKLkwS4D/+T6BBlzEVYyggy/tIgFdPTpVqa11YPSWGWJGa25zM+6xA0K2G6EPwOYLrhhMgM0+RCXbuVhkaIZkQDc7IS0NTaK48zyZKpnifY68oRDNl8qDf+xGOR3b8B6mE2NmgsU9q5demRCLKRQIMqmoID8mETIEbKGA2Vz7xIUbGJ0cy31QDhxaphPqOq8Bn4aaPlC/KvCjKSszp6WMNCpjdOZE5hk7qcTz5VTtrb630O0428E6EMUWxG2viiPlaHdMGnuvRI1YNKbxSiDe1YbXaLySlFiuGlJPrvnHT+zLZU6wSvi15Qo2hhHxwM/p3lAOvTqwW9hLqDCxOgKRusB+ijmzwJGYWJeR35E8cloQ0dUnuT76XSQd5D7UDjIFraeqS+qioQi+QDu8IQ+B7b8vJhyOZ0HOAZ7vOuyqnqcu+2+e5Lt1VL0hW6AVy1dlByqnLdNVgQl5+fx+L2ZGTW0XmPx+DCHWkLqu6L578ARhCpnsXS0CqffO6sksQn7cX1SEGYpBC/xa3dufVtflhGTJLE+ougxIrHakuiLuAf1v4C5PrPycJrFS3AAAAAElFTkSuQmCC";
          break;
        case "Drugstore":
          item.marker =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAlCAYAAAAqXEs9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALfSURBVHgBzVfdcdpAEN7j5McY6ABXEFKBhZGfY3cAFdjuwFQQ3IFTge1nC6wOolQQpQJkkjckXXYJTDzM7WlPSmbyzTBitCfpu91vf05BC/w8Px9WAENjzGB3K+8ApEVRpP0kyaEBFHjiRxSFePloACZ47TmWJlBVn4+Xy3v4F4RWYdjTWn8CpSbgA6WycrMZoccyyfKOZBGSGeqjoy/eZAgYTh0E316j6FqyvNZDWzJB8ALu8IiAH7t9F8ezmjVOMgP0zAv8EW1rlACjfhwnnN0Zsq1mBGQwy3L6gQAa4IH0CL6E1mdnE9TMBbhIAMzKojjpLhZ9+uH/PmbWFG0Z8Oh1goDVExuydRSRbkIrGaw1VVFcujLndTyeK6WuGHNOG7HVKquHSDssGdx9HRkCeuwaFz8yZvLSxGawEtKdTggMlDEzaU0py3IKjLbwPe9BSsgoNQQ7cp/Kuw2JUqnVyGzaSghjb2WPSMETqLcnu8GevaJK/eYlGXgCN+fVZO0hM+a79T4fShaGr2O5mBC3GGvEwFXUmGdOGVMqJqRodLDDWdQO4SwfSn0FKSFM1wQYINmrFQ5mUE+mt+2D3HuqKgEpoV0FtT6A6FE/Wo/HFw4yg4AmBId+jhcLa9EMgIMxd5giIWMboO0B28sj9q6njtap3mzyjdZDzKpTmiaNa1zhK7h7/EAvrPDDreegQ+z6WGazOesQCu8O/j4SV+txEsImOgfhnCNFqdSNy+4kROLGwuYcOb1gzH3/+TltTIjQXS7npkHLsAHLSe3mRL2sUmoKLUHTpWRsEZ/LaiZANxn0MA5sJ5K14m5fleVtU4H7eFhMiASOGXIJnqDS4Tr2HML7bO8TOp9Q7eE3oMHv0EmzDteOwBPehCh02w/V6Amz6kZ6GGhFaEcqK41hKy7pphvHc2gAbw29hU1PdIhEMh+gIRp5aI/Dw+D+EAkt0IoQgQ6D5BU665O2mujmv8YvyYxo5MGuWNwAAAAASUVORK5CYII=";
          break;
        default:
          item.marker =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAlCAYAAAAqXEs9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALfSURBVHgBzVfdcdpAEN7j5McY6ABXEFKBhZGfY3cAFdjuwFQQ3IFTge1nC6wOolQQpQJkkjckXXYJTDzM7WlPSmbyzTBitCfpu91vf05BC/w8Px9WAENjzGB3K+8ApEVRpP0kyaEBFHjiRxSFePloACZ47TmWJlBVn4+Xy3v4F4RWYdjTWn8CpSbgA6WycrMZoccyyfKOZBGSGeqjoy/eZAgYTh0E316j6FqyvNZDWzJB8ALu8IiAH7t9F8ezmjVOMgP0zAv8EW1rlACjfhwnnN0Zsq1mBGQwy3L6gQAa4IH0CL6E1mdnE9TMBbhIAMzKojjpLhZ9+uH/PmbWFG0Z8Oh1goDVExuydRSRbkIrGaw1VVFcujLndTyeK6WuGHNOG7HVKquHSDssGdx9HRkCeuwaFz8yZvLSxGawEtKdTggMlDEzaU0py3IKjLbwPe9BSsgoNQQ7cp/Kuw2JUqnVyGzaSghjb2WPSMETqLcnu8GevaJK/eYlGXgCN+fVZO0hM+a79T4fShaGr2O5mBC3GGvEwFXUmGdOGVMqJqRodLDDWdQO4SwfSn0FKSFM1wQYINmrFQ5mUE+mt+2D3HuqKgEpoV0FtT6A6FE/Wo/HFw4yg4AmBId+jhcLa9EMgIMxd5giIWMboO0B28sj9q6njtap3mzyjdZDzKpTmiaNa1zhK7h7/EAvrPDDreegQ+z6WGazOesQCu8O/j4SV+txEsImOgfhnCNFqdSNy+4kROLGwuYcOb1gzH3/+TltTIjQXS7npkHLsAHLSe3mRL2sUmoKLUHTpWRsEZ/LaiZANxn0MA5sJ5K14m5fleVtU4H7eFhMiASOGXIJnqDS4Tr2HML7bO8TOp9Q7eE3oMHv0EmzDteOwBPehCh02w/V6Amz6kZ6GGhFaEcqK41hKy7pphvHc2gAbw29hU1PdIhEMh+gIRp5aI/Dw+D+EAkt0IoQgQ6D5BU665O2mujmv8YvyYxo5MGuWNwAAAAASUVORK5CYII=";
      }
      return {
        markerLat: item.lat,
        markerLong: item.long,
        markerUrl: item.marker,
        markerTitle: "This marker has it's own custom content",
        markerContent: `<h3 style="text-align:center;margin:0 0 10px;">${item.name}</h3><p style="text-align:center; margin:0 0 10px;">Custom Marker Description</p><button onclick="Notiflix.Notify.Success(\'Custom Button Action\')" style="display:table;margin:auto;padding:8px 12px;border-radius:20px;font-weight:700;background:#502974;color:#fff;cursor:pointer;">Get Direction</button>`,
      };
    });
    MarkersOnMap.Init({
      googleApiKey: "AIzaSyDCfF1rF5H6sK_X4Ymgmol-J2RJi3DvvcA",

      markerObjects: newdata,
    });

    /*
     * @param1 {string}: Required, Select the element (ID or Class)
     * @param2 {function}: Optional, A callback function after the map has been created.
     */
    MarkersOnMap.Run("div#GoogleMaps");

    // e.g. With a Callback function (v1.4.0 and the next versions)
    MarkersOnMap.Run("div#GoogleMaps", function () {
      // codes here...
    });
  });
  return (
    <div className="container">
      <section className="map">
        <h4>Legends</h4>
        <div className="controls">
          <div className="left">
            <div className="markers">
              <a href="">
                <i className="fas fa-male"></i>
                Your Location
              </a>
              <a href="">
                <i className="fas fa-map-marker-alt"></i>
                Hospital
              </a>
              <a href="">
                <i className="fas fa-map-marker-alt"></i>
                Pharmacy
              </a>
              <a href="">
                <i className="fas fa-map-marker-alt"></i>
                Clinic
              </a>
            </div>
          </div>
          <div className="right">
            <a href="">Help</a>
            <a href="">Settings</a>
          </div>
        </div>
        <div className="mapDiv">
          <div id="Wrapper">
            <div class="map-wrapper">
              <div id="GoogleMaps"></div>
            </div>
          </div>
          <div className="map-controls">
            <div className="left">
              <p>From</p>
              <div className="dropdown">
                <button>
                  <i className="fas fa-male"></i>
                  3600 MP, Road LAGUNA
                </button>
              </div>
            </div>
            <div className="right">
              <p>To</p>
              <div className="dropdown">
                <button>
                  Select Location
                  <i className="fas fa-map-marker-alt"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Map;
