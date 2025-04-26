export interface Testimonial {
  id: number;
  name: string;
  image: string;
  rating: number;
  review: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jennifer R.",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    review: "I've been coming to Bright Smile Dental for years and have always had a positive experience. Dr. Johnson is thorough, gentle, and truly cares about her patients."
  },
  {
    id: 2,
    name: "Mark T.",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    review: "I was extremely nervous about getting dental implants, but Dr. Martinez made the process so much easier than I expected. The results are amazing!"
  },
  {
    id: 3,
    name: "Sophia L.",
    image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    rating: 4.5,
    review: "My kids used to be afraid of going to the dentist until we found Bright Smile Dental. The staff is so friendly and patient with children. Highly recommend!"
  },
  {
    id: 4,
    name: "Robert K.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    review: "The Invisalign treatment I received from Dr. Chen completely transformed my smile. The entire process was smooth and the staff was incredibly supportive."
  },
  {
    id: 5,
    name: "Emma W.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    review: "I had a dental emergency and they fit me in the same day. The care I received was exceptional, and they made sure I was comfortable throughout the procedure."
  },
  {
    id: 6,
    name: "David H.",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    rating: 4,
    review: "The office is clean and modern, and the staff is always friendly. I appreciate how they explain everything before beginning any procedure."
  }
];
