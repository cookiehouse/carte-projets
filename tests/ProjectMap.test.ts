/**
 * @jest-environment jsdom
 */
const mapElement = document.createElement('div')
mapElement.setAttribute('id', 'map')
document.body.appendChild(mapElement)

import testProjectMap from "../src/index";

describe('ProjectMap tests', () => {
    it('should be able to create a ProjectMap', () => {
        expect(testProjectMap.projects.length).toBe(1);
        expect(testProjectMap.featureGroups.Information.getLayers().length).toBe(1);
    });
});
