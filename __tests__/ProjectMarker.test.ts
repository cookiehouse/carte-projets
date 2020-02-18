/**
 * @jest-environment jsdom
 */
import ProjectMarker from '../src/entities/ProjectMarker';

describe('ProjectMarker test', () => {
  // This function test that a project marker can be instantiated with required arguments
  it('should be able to create a ProjectMarker', () => {
    const testProjectMarker: ProjectMarker = new ProjectMarker({
      name: 'test',
      country: 'France',
      type: 'Information',
      ref:
        'https://www.culture-developpement.asso.fr/accueil/conference-migration-et-cultures-droit-citoyennete-et-diversite/',
      start: 2017,
      latitude: 48.853958,
      longitude: 2.357206,
    });
    expect(testProjectMarker.project.name).toBe('test');
  });
  // This function calls the render method of a test projectMarker and check the result
  it('should be able to render an HTML element', () => {
    const testProjectMarker = new ProjectMarker({
      name: 'test',
      country: 'France',
      type: 'Information',
      ref:
        'https://www.culture-developpement.asso.fr/accueil/conference-migration-et-cultures-droit-citoyennete-et-diversite/',
      start: 2017,
      latitude: 48.853958,
      longitude: 2.357206,
    });
    expect(testProjectMarker.render()).toBe(`
    <div class="title">test</div>
    <div class="coords">48.853958</div>
    `);
  });
});
