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

  getEnd(): string {
    return this.project.end ? this.project.end.toString() : '...';
  }
  // Render the project pop up HTML element
  render(): string {
    return `
    <div class="base-wrapper ${this.project.type.toLowerCase()}-wrapper">
    <div class="project-title">${this.project.name}</div>
    <div class="project-type">${this.project.type}</div>
    <div class="project-infos">
      <div class="project-details">
        <div class="project-country project-info">${this.project.country}</div>
        <div class="project-location project-info">${
          this.project.location
        }</div>
        <div class="project-startend project-info">${
          this.project.start
        } - ${this.getEnd()}</div>
      </div>
      <img class="project-picture" src="${this.project.picture}">
    </div>
    </div>
    `;
  }

  // Create a leaflet marker object
  create(): L.Marker {
    return L.marker([this.project.latitude, this.project.longitude]).bindPopup(
      this.render(),
    );
  }
}

export default ProjectMarker;
