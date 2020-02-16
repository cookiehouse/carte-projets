import Project from "../interfaces/project";

class ProjectMarker {
    /**
     * This class represent a project marker element
     * It can be used to generate HTML popup of project as string
     * It accepts an object with project information as input.
    */ 
    project: Project;

    // The init method of the class
    constructor(project: Project) {
        // Does nothing except storing project information
        this.project = project;
    };

    // Render the projet pop up HTML element
    render():string {
        return `<div><h1>${this.project.name}</h1></div>`;
    };

}

export default ProjectMarker;