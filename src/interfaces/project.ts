interface Project {
  name: string;
  country: string;
  // FIXME: Maybe use an enumeration?
  type: string;
  // FIXME: Maybe look into URL type?
  ref: string;
  latitude: number;
  longitude: number;
  start: number;
  end?: number;
  summary?: string;
  location?: string;
}

export default Project;
