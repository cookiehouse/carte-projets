import Project from './interfaces/Project';
import ProjectMap from './entities/ProjectMap';

const testProjects: Project[] = [
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
];

const testProjectMap: ProjectMap = new ProjectMap(testProjects);

testProjectMap
  // Init empty map with center, zoom, min zoom and max zoom
  .init()
  // Attach control box with radio buttons on topright
  .attachControl()
  // Add default layer (OpenStreetMap)
  .attachDefaultLayer();

export default testProjectMap;
