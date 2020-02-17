/**
 * @jest-environment jsdom
 */
const mapElement = document.createElement('div');
mapElement.setAttribute('id', 'map');
document.body.appendChild(mapElement);

import projectMap from '../src/index';

describe('ProjectMap tests', () => {
  it('should be able to create a ProjectMap', () => {
    expect(projectMap.projects.length).toBe(2);
    expect(projectMap.featureGroups.Information.getLayers().length).toBe(2);
    expect(Object.keys(projectMap.tileLayers).length).toBe(2);
  });
});
