import car from "../images/rental/car.jpg";
import mountainbike from "../images/rental/mountainbike.webp";
import citybus from "../images/rental/citybus.webp";
import truck from "../images/rental/truck.jpg";
import minivan from "../images/rental/minivan.webp";
import tractor from "../images/rental/tractor.jpg";
import autoriksaw from "../images/rental/autoriksaw.png";
import jeep from "../images/rental/jeep.jpg";
import bicycle from "../images/rental/bicycle.webp";

export const vehicles = [
  {
    id: 1,
    name: "Economy Car",
    type: "car",
    image: car,
    price: 35,
    features: ["4 Seats", "Automatic", "AC", "Bluetooth"],
    description:
      "Compact and fuel-efficient car, perfect for city driving and short trips.",
  },
  {
    id: 2,
    name: "Mountain Bike",
    type: "bike",
    image: mountainbike,
    price: 15,
    features: [
      "21 Speed",
      "Front Suspension",
      "Disc Brakes",
      "Helmet Included",
    ],
    description:
      "High-performance mountain bike for off-road adventures and trail riding.",
  },
  {
    id: 3,
    name: "City Bus",
    type: "bus",
    image: citybus,
    price: 200,
    features: ["40 Seats", "AC", "Wheelchair Accessible", "GPS Tracking"],
    description:
      "Large capacity bus for group travel or city tours. Comfortable and spacious.",
  },
  {
    id: 4,
    name: "Moving Truck",
    type: "truck",
    image: truck,
    price: 85,
    features: [
      "16 ft Box",
      "Hydraulic Lift",
      "Dolly & Pads Included",
      "Easy to Drive",
    ],
    description:
      "Spacious moving truck with features to make your move easier and more efficient.",
  },
  {
    id: 5,
    name: "Minivan",
    type: "van",
    image: minivan,
    price: 65,
    features: [
      "7 Seats",
      "Sliding Doors",
      "Ample Cargo Space",
      "Cruise Control",
    ],
    description:
      "Family-friendly minivan with plenty of space for passengers and luggage.",
  },
  {
    id: 6,
    name: "Farm Tractor",
    type: "tractor",
    image: tractor,
    price: 120,
    features: ["4WD", "PTO", "70 HP", "Attachments Available"],
    description:
      "Powerful farm tractor for agricultural work and heavy-duty tasks.",
  },
  {
    id: 7,
    name: "Auto-Rickshaw",
    type: "auto-rickshaw",
    image: autoriksaw,
    price: 25,
    features: ["3 Seats", "Fuel Efficient", "Compact", "Easy Maneuverability"],
    description:
      "Iconic three-wheeled vehicle, perfect for navigating busy city streets.",
  },
  {
    id: 8,
    name: "Off-Road Jeep",
    type: "jeep",
    image: jeep,
    price: 90,
    features: ["4WD", "High Ground Clearance", "Removable Top", "Rugged Tires"],
    description:
      "Adventure-ready jeep for off-road exploration and challenging terrains.",
  },
  {
    id: 9,
    name: "City Bicycle",
    type: "cycle",
    image: bicycle,
    price: 10,
    features: ["7 Speed", "Comfortable Seat", "Front Basket", "LED Lights"],
    description:
      "Comfortable and stylish bicycle for leisurely rides and city commuting.",
  },
];
