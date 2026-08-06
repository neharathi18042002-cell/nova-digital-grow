import cafe from "@/assets/p-cafe.jpg";
import gym from "@/assets/p-gym.jpg";
import dental from "@/assets/p-dental.jpg";
import salon from "@/assets/p-salon.jpg";
import hotel from "@/assets/p-hotel.jpg";
import school from "@/assets/p-school.jpg";
import restaurant from "@/assets/p-restaurant.jpg";
import realestate from "@/assets/p-realestate.jpg";

export type Category = {
  slug: string;
  emoji: string;
  title: string;
  description: string;
  image: string;
};

export const categories: Category[] = [
  { slug: "cafe", emoji: "☕", title: "Cafe", description: "Warm menu pages, gallery and table enquiries.", image: cafe },
  { slug: "gym", emoji: "🏋", title: "Gym", description: "Memberships, trainers and BMI calculator.", image: gym },
  { slug: "dental", emoji: "🦷", title: "Dental Clinic", description: "Treatments, doctors and appointment booking.", image: dental },
  { slug: "salon", emoji: "💇", title: "Salon", description: "Service menu, lookbook and instant booking.", image: salon },
  { slug: "hotel", emoji: "🏨", title: "Hotel", description: "Rooms, amenities and direct enquiry flow.", image: hotel },
  { slug: "school", emoji: "🏫", title: "School", description: "Admissions, campus tour and notice board.", image: school },
  { slug: "restaurant", emoji: "🍽", title: "Restaurant", description: "Digital menu, gallery and reservations.", image: restaurant },
  { slug: "real-estate", emoji: "🏠", title: "Real Estate", description: "Property listings, maps and lead capture.", image: realestate },
];
