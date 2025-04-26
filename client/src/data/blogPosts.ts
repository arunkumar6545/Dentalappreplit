export interface BlogPost {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "10 Simple Tips for Maintaining Healthy Teeth",
    description: "Learn effective daily habits that can help keep your teeth and gums healthy for years to come.",
    image: "https://images.unsplash.com/photo-1563699182-58700c4286e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    category: "Oral Hygiene",
    date: "June 15, 2023"
  },
  {
    id: 2,
    title: "Overcoming Dental Anxiety: A Patient's Guide",
    description: "Practical strategies to help you feel more comfortable and relaxed during dental visits.",
    image: "https://images.unsplash.com/photo-1581585070044-9315d0661156?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    category: "Patient Care",
    date: "May 28, 2023"
  },
  {
    id: 3,
    title: "How to Choose the Right Toothbrush for Your Needs",
    description: "A comprehensive guide to selecting the best toothbrush based on your specific dental requirements.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    category: "Products",
    date: "April 12, 2023"
  }
];
