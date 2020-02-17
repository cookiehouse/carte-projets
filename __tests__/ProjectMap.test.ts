/**
 * @jest-environment jsdom
 */
import ProjectMap from '../src/entities/ProjectMap';

const setupHTML = () => {
  const mapElement = document.createElement('div');
  mapElement.setAttribute('id', 'map');
  document.body.appendChild(mapElement);
};

const createTestProjectMap = (): ProjectMap => {
  return new ProjectMap([
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
  ]);
};

describe('ProjectMap tests', () => {
  it('should be able to create an empty ProjectMap', () => {
    const testProjectMap: ProjectMap = new ProjectMap();
    expect(testProjectMap.projects.length).toBe(0);
    expect(Object.keys(testProjectMap.tileLayers).length).toBe(1);
  });

  it('should be able to create a ProjectMap with projects', () => {
    setupHTML();
    const testProjectMap: ProjectMap = createTestProjectMap();
    expect(testProjectMap.projects.length).toBe(2);
    expect(testProjectMap.featureGroups.Information.getLayers().length).toBe(2);
    expect(Object.keys(testProjectMap.tileLayers).length).toBe(1);
  });

  it('should be able to add a new layer to projectMap', () => {
    setupHTML();
    const testProjectMap: ProjectMap = createTestProjectMap();
    testProjectMap.addTileLayer(
      'OpenTopoMap',
      'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
      'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
    );
    expect(Object.keys(testProjectMap.tileLayers).length).toBe(2);
  });

  it('should be able to remove an exisiting layer from projectMap', () => {
    const testProjectMap: ProjectMap = createTestProjectMap();
    testProjectMap.addTileLayer(
      'OpenTopoMap',
      'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
      'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
    );
    testProjectMap.removeTileLayer('OpenTopoMap');
    expect(Object.keys(testProjectMap.tileLayers).length).toBe(1);
  });
});
