export const restaurant = {
  name: 'Eppies Restaurant',
  tagline: "West Sacramento's favorite family restaurant",
  phone: '916-371-7767',
  phoneFormatted: '(916) 371-7767',
  address: {
    street: '4025 Lake Road',
    city: 'West Sacramento',
    state: 'CA',
    full: '4025 Lake Road, West Sacramento, CA',
  },
  hours: {
    open: '7:00 AM',
    close: '8:30 PM',
    label: 'Open Daily',
    display: '7:00 AM \u2014 8:30 PM',
  },
  features: [
    'Indoor Dining',
    'Takeout',
    'ADA Accessible',
    'Free Parking',
  ],
  meals: ['Breakfast', 'Lunch', 'Dinner'],
  story: {
    yearsServing: '40+',
    foundedDecade: '1980s',
    description: 'Family-owned, welcoming, and made for the people who call West Sacramento home.',
    values: ['Great Service', 'Broad Menu', 'Family Owned', 'Community Focused'],
  },
  specials: [
    { day: 'Wednesday', item: 'Meatloaf', description: 'Homestyle comfort, served every Wednesday.' },
    { day: 'Thursday', item: 'Ribs', description: 'Slow-cooked and falling off the bone, every Thursday.' },
    { day: 'Friday', item: 'Prime Rib', description: 'Our signature cut, prepared fresh every Friday.' },
  ],
  recognition: [
    { year: '2022', title: 'Restaurant Guru Winner' },
    { year: '2023', title: 'Recognized for Excellent Service' },
    { year: '2024', title: 'Restaurant Guru Recommended' },
  ],
  mapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=4025+Lake+Road+West+Sacramento+CA',
  mapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3118.5!2d-121.537!3d38.5804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDM0JzQ5LjQiTiAxMjHCsDMyJzEzLjIiVw!5e0!3m2!1sen!2sus!4v1',
} as const;

export type Restaurant = typeof restaurant;
