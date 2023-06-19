export interface Contact {
  id: number;
  name: string;
  icon: string;
  url: string;
}

export interface Experience {
  id: number;
  company: {
    name: string;
    position: string;
  };
  description: string;
}

export interface Skill {
  id: number;
  name: string;
  // icon?: string;
}
