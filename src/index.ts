import Project from './interfaces/Project';
import ProjectMap from './entities/ProjectMap';

const projects: Project[] = [
  {
    name: 'Programme Territoires Associés',
    country: 'France',
    type: 'Assistance',
    ref:
      'https://www.culture-developpement.asso.fr/accueil/conference-migration-et-cultures-droit-citoyennete-et-diversite/',
    start: 2017,
    // end: 2018,
    picture: 'https://wallpaperaccess.com/full/783262.jpg',
    location: 'Paris',
    latitude: 48.853958,
    longitude: 2.357206,
    summary: `Ce projet sert a nous donner une idée de comment fonctionne la zone synthese de la pop-up.
    Je rajoute des mots qui ne servent à rien. voila ca commence à faire un petite paragraphe ighdopgkjhd.
    hds hqioh sdhbuzphnd hqoihdsen zeub  sqhuhsde uhsohnzs uhgsonns, sgsqoiujbz sbos.`,
  },
  {
    name:
      'PROGRAMME FRANCOPHONIE EN ACTIONS : La Culture, un capital à valoriser pour les régions et les villes de Côte d’Ivoire » 2018-2020',
    country: 'France',
    type: 'Information',
    ref:
      'https://www.culture-developpement.asso.fr/accueil/conference-migration-et-cultures-droit-citoyennete-et-diversite/',
    start: 2017,
    end: 2019,
    picture:
      'https://www.culture-developpement.asso.fr/wp-content/uploads/2018/05/rapport-unesco-232x300.png',
    location: 'Paris',
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
  )
  .selectLayer('OpenStreetMap');

export default projectMap;
