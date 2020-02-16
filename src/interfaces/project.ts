interface Project {
    name: string;
    country: string;
    // FIXME: Maybe use an enumeration?
    type: string;
    // FIXME: Maybe look into URL type?
    ref: string;
    start: number;
    end?: number;
    summary?: string;
    location?: string;
    latitude?: number;
    longitude?: number;
}

export default Project;