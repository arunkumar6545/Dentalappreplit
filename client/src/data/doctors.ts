export interface Doctor {
  id: number;
  name: string;
  title: string;
  description: string;
  image: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

export const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Emily Johnson",
    title: "General Dentist",
    description: "Dr. Johnson has over 15 years of experience in general dentistry and is passionate about preventive care.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      email: "#"
    }
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    title: "Orthodontist",
    description: "Dr. Chen specializes in orthodontic treatments and is dedicated to creating beautiful, healthy smiles.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      email: "#"
    }
  },
  {
    id: 3,
    name: "Dr. Sarah Martinez",
    title: "Cosmetic Dentist",
    description: "Dr. Martinez focuses on cosmetic procedures and has helped thousands of patients achieve their dream smiles.",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      email: "#"
    }
  }
];
