enum ProjectType {
  Gouvernance = 'Appui à la Gouvernance Locale',
  Assistance = 'Assistance Technique',
  Ingenierie = 'Ingénierie Culturelle',
  Formation = 'Formations',
  Information = 'Informations',
  Partenariat = 'Partenariats',
  Rencontre = 'Rencontres',
}

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
  picture?: string;
}

export default Project;

export { ProjectType };
