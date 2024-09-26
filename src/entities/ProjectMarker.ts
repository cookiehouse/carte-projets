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
    return `<div class="base-wrapper ${this.project.type.toLowerCase()}-wrapper">
      <div class="project-title">${this.project.name}</div>
      <div class = project-head-center >
        <div class="project-type ${this.project.type.toLowerCase()}-wrapper">
          ${this.project.type}
        </div>
      </div>
      <div class="project-infos">
        <div class="project-details">
          <div class="project-info">${this.project.country}</div>
          <div class="project-info">${this.project.location}</div>
          <div class="project-info">
            ${this.project.start} - ${this.getEnd()}
          </div>
        </div>
          <a class="project-picture-wrapper ${this.project.type.toLowerCase()}-wrapper" href="${
      this.project.ref
    }">
            <img class="project-picture" src="${this.project.picture}">
          </a>
      </div>
      <div class="project-summary  ${this.project.type.toLowerCase()}-wrapper">
        ${this.project.summary}
      </div>
      <div class="project-footer-center" >
        <a class="project-ref" href="${this.project.ref}">En savoir plus</a>
      </div>
    </div>`;
  }

  // Create a leaflet marker object
  create(): L.Marker {
    return L.marker([this.project.latitude, this.project.longitude]).bindPopup(
      this.render(),
    );
  }
}

export default ProjectMarker;
