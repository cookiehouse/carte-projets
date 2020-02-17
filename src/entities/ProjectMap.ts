import Project from '../interfaces/Project';
import ProjectMarker from '../entities/ProjectMarker';
import objectMap from '../utils/objectMap';
import L from '../utils/L';

class ProjectMap {
  map!: L.Map;
  projects: Project[];
  defaultLayer: L.TileLayer;
  featureGroups: { [key: string]: L.FeatureGroup };
  tileLayers: { [key: string]: L.TileLayer };
  controlLayers: L.Control.Layers;

  constructor(
    projects: Project[] = [],
    public el: string = 'map',
    public center: L.LatLng = L.latLng(45.1885, 5.7245),
    public zoom: number = 7,
    public maxZoom: number = 19,
    public minZoom: number = 3,
    public defaultTileName: string = 'OpenStreetMap',
    public defaultTile: string = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
    public defaultAttribution: string = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
  ) {
    // Copy projects
    this.projects = [...projects];
    // Create a group variable that will accept any project type as key and array of leaflet markers as value
    const groups: { [key: string]: L.Marker[] } = {};
    // Iterate over projects
    this.projects.forEach((project: Project): void => {
      // For each project create a project marker
      const projectMarker = new ProjectMarker(project);
      // If the project type has not been seen in the loop before
      if (typeof groups[project.type] === 'undefined') {
        // Create an empty list of markers for the project type
        groups[project.type] = [];
      }
      // For each projet, add the marker to its group
      groups[project.type].push(projectMarker.marker);
    });
    // Create a new object that will have project type as key and leaflet LayerGroup as value
    this.featureGroups = objectMap(groups, (markers: L.Marker[]) =>
      L.featureGroup(markers),
    );
    // Create default Layer
    this.defaultLayer = L.tileLayer(this.defaultTile, {
      attribution: this.defaultAttribution,
    });
    // Initialize tile layers object
    this.tileLayers = {};
    this.tileLayers[this.defaultTileName] = this.defaultLayer;
    // Create controle layer
    this.controlLayers = L.control.layers(this.tileLayers, this.featureGroups);
  }

  init(): ProjectMap {
    // Create the map
    this.map = L.map(this.el, {
      center: this.center,
      zoom: this.zoom,
      maxZoom: this.maxZoom,
      minZoom: this.minZoom,
    });
    return this;
  }

  attachControl(): ProjectMap {
    // Add the control layer to the map
    this.controlLayers.addTo(this.map);
    // Add each feature group to the map by default
    Object.keys(this.featureGroups).forEach(key => {
      this.featureGroups[key].addTo(this.map);
    });
    return this;
  }

  attachDefaultLayer(): ProjectMap {
    this.defaultLayer.addTo(this.map);
    return this;
  }

  addTileLayer(name: string, tiles: string, attribution: string): ProjectMap {
    // Add a new named tile layer with control (radio button) to the map
    const layer = L.tileLayer(tiles, { attribution });
    this.tileLayers[name] = layer;
    this.controlLayers.addBaseLayer(layer, name);
    return this;
  }

  removeTileLayer(name: string): ProjectMap {
    // Remove a Tile layer from the map by its given name during creation
    this.controlLayers.removeLayer(this.tileLayers[name]);
    delete this.tileLayers[name];
    return this;
  }
}
export default ProjectMap;
