import Project from './interfaces/Project';
import ProjectMap from './entities/ProjectMap';

const projects: Project[] = [
  {
    name: 'test',
    country: 'France',
    type: 'Information',
    ref:
      'https://www.culture-developpement.asso.fr/accueil/conference-migration-et-cultures-droit-citoyennete-et-diversite/',
    start: 2017,
    latitude: 48.853958,
    longitude: 2.357206,
  },
  {
    name: 'test2',
    country: 'France',
    type: 'Information',
    ref:
      'https://www.culture-developpement.asso.fr/accueil/conference-migration-et-cultures-droit-citoyennete-et-diversite/',
    start: 2017,
    latitude: 48.453958,
    longitude: 2.557206,
  },
];

const projectMap: ProjectMap = new ProjectMap(projects);

projectMap
  // Init empty map with center, zoom, min zoom and max zoom
  .init()
  // Attach control box with radio buttons on topright
  .attachControl()
  // Add default layer (OpenStreetMap)
  .attachDefaultLayer()
  // Add a TopoMap tile layer
  .addTileLayer(
    'OpenTopoMap',
    'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
  );

export default projectMap;
