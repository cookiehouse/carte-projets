// import * as L from 'leaflet';
import L from '../utils/L';
import Project from '../interfaces/Project';

class ProjectMarker {
  /**
   * This class represent a project marker element
   * It can be used to generate HTML popup of project as string
   * It accepts an object with project information as input.
   */

  project: Project;
  marker: L.Marker;

  // The init method of the class
  constructor(project: Project) {
    // Does nothing except storing project information
    this.project = project;
    this.marker = this.create();
  }

  // Render the projet pop up HTML element
  render(): string {
    return `<div><h1>${this.project.name}</h1></div>`;
  }

  // Create a leaflet marker object
  create(): L.Marker {
    return L.marker([this.project.latitude, this.project.longitude]).bindPopup(
      this.render(),
    );
  }
}

export default ProjectMarker;
