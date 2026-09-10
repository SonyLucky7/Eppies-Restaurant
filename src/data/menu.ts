export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  calories?: string;
  badge?: string;
  dietary?: string[];
  popular?: boolean;
  preparation?: string;
  ingredients?: string[];
  portion?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  tagline: string;
  description: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'breakfast-classics',
    name: 'Breakfast Classics',
    tagline: 'Morning Favorites',
    description: 'Served piping hot with farm-fresh eggs, golden hash browns, and your choice of warm buttered toast or buttermilk pancakes.',
    items: [
      {
        id: 'country-breakfast',
        name: 'The 40-Year Eppies Breakfast Platter',
        description: 'Two farm-fresh eggs any style, thick-cut applewood smoked bacon, country sausage patties, golden crispy hash browns, and buttermilk pancakes.',
        price: '$14.99',
        category: 'breakfast-classics',
        image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80',
        calories: '890 cal',
        badge: 'House Legend',
        popular: true,
        dietary: ['Hearty Portion', 'Local Favorite'],
        preparation: 'Cooked to order on our seasoned flat-top grill',
        ingredients: ['Grade-A Farm Eggs', 'Applewood Bacon', 'Pork Sausage', 'Idaho Russet Potatoes', 'Buttermilk Hotcakes'],
        portion: 'Full Breakfast Feast'
      },
      {
        id: 'buttermilk-pancake-stack',
        name: 'Golden Buttermilk Pancakes',
        description: 'Stack of three oversized, fluffy buttermilk pancakes topped with whipped butter and served with warm 100% maple syrup.',
        price: '$9.99',
        category: 'breakfast-classics',
        image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800&q=80',
        calories: '650 cal',
        badge: 'Family Favorite',
        popular: true,
        dietary: ['Vegetarian', 'Sweet Tooth'],
        preparation: 'Whipped fresh batter grilled golden brown',
        ingredients: ['Cultured Buttermilk', 'Creamery Butter', 'Pure Vanilla', 'Warm Maple Syrup'],
        portion: '3 Giant Hotcakes'
      },
      {
        id: 'brioche-french-toast',
        name: 'Cinnamon Brioche French Toast',
        description: 'Thick-sliced golden brioche dipped in rich vanilla-cinnamon egg custard, griddled golden and dusted with powdered sugar.',
        price: '$11.49',
        category: 'breakfast-classics',
        image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=800&q=80',
        calories: '720 cal',
        badge: 'Chef Choice',
        popular: true,
        dietary: ['Vegetarian'],
        preparation: 'Hand-dipped brioche finished with Saigon cinnamon',
        ingredients: ['Artisan Brioche', 'Fresh Cream', 'Cinnamon Custard', 'Powdered Sugar', 'Fresh Berries'],
        portion: '3 Thick Cut Slices'
      },
      {
        id: 'eggs-benedict-classic',
        name: 'Classic California Benedict',
        description: 'Toasted English muffin halves layered with grilled Canadian bacon, poached eggs, fresh California avocado, and velvety hollandaise.',
        price: '$13.99',
        category: 'breakfast-classics',
        image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80',
        calories: '780 cal',
        badge: 'Weekend Favorite',
        popular: true,
        dietary: ['Hearty Platter', 'Weekend Favorite'],
        preparation: 'Soft poached eggs draped in scratch-made hollandaise',
        ingredients: ['English Muffin', 'Canadian Bacon', 'Hass Avocado', 'Scratch Hollandaise', 'Chives'],
        portion: '2 Open-Faced Halves'
      }
    ]
  },
  {
    id: 'omelettes-scrambles',
    name: 'Omelettes & Scrambles',
    tagline: 'Farm Fresh 3-Egg Creations',
    description: 'Folded fluffy three-egg omelettes stuffed to the brim with premium meats, vegetables, and melted cheeses.',
    items: [
      {
        id: 'western-omelette',
        name: 'Classic Western Denver Omelette',
        description: 'Loaded with diced smoked ham, crisp bell peppers, sweet yellow onions, and melted sharp cheddar cheese.',
        price: '$12.99',
        category: 'omelettes-scrambles',
        image: 'https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=800&q=80',
        calories: '680 cal',
        badge: 'Top Rated',
        popular: true,
        dietary: ['Hearty Platter', 'High Protein'],
        preparation: 'Hand-whipped 3 eggs folded with sauteed vegetables',
        ingredients: ['Farm Eggs', 'Honey Ham', 'Sweet Bell Peppers', 'Yellow Onions', 'Wisconsin Cheddar'],
        portion: '3 Extra Large Eggs'
      },
      {
        id: 'california-veggie-scramble',
        name: 'Sacramento Valley Veggie Scramble',
        description: 'Baby spinach, sauteed cremini mushrooms, diced Roma tomatoes, sweet onions, and Monterey Jack cheese, topped with sliced Haas avocado.',
        price: '$12.49',
        category: 'omelettes-scrambles',
        image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80',
        calories: '540 cal',
        badge: 'Vegetarian',
        popular: true,
        dietary: ['Vegetarian', 'Fresh & Healthy'],
        preparation: 'Tossed with local garden herbs and light olive oil',
        ingredients: ['Baby Spinach', 'Cremini Mushrooms', 'Roma Tomatoes', 'Jack Cheese', 'Fresh Avocado'],
        portion: 'Large Plate with Toast & Potatoes'
      },
      {
        id: 'country-fried-steak-eggs',
        name: 'Country Fried Steak & Eggs',
        description: 'Tender cube steak in crunchy country breading, smothered in scratch sausage country gravy, served with two eggs and crispy potatoes.',
        price: '$15.99',
        category: 'omelettes-scrambles',
        image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80',
        calories: '1,050 cal',
        badge: 'Crowd Favorite',
        popular: true,
        dietary: ['Hearty Platter', 'Crowd Favorite'],
        preparation: 'Golden breaded cube steak with peppered cream gravy',
        ingredients: ['Black Angus Beef', 'Cracked Pepper Batter', 'Sage Sausage Gravy', 'Crisp Hash Browns'],
        portion: 'Giant 8oz Steak Cut'
      }
    ]
  },
  {
    id: 'burgers-sandwiches',
    name: 'Burgers & Handcrafted Sandwiches',
    tagline: '100% Angus Beef & Deli Cut Classics',
    description: 'Served with seasoned crinkle fries, thick-cut beer battered onion rings, or house creamy potato salad.',
    items: [
      {
        id: 'eppies-deluxe-burger',
        name: 'The Eppies Deluxe Bacon Cheeseburger',
        description: 'Half-pound fresh Angus beef patty, crisp smoked bacon, melted aged cheddar, crisp leaf lettuce, ripe tomato, pickles, and signature house sauce on a toasted brioche bun.',
        price: '$14.99',
        category: 'burgers-sandwiches',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
        calories: '920 cal',
        badge: '#1 Best Seller',
        popular: true,
        dietary: ['Hearty Platter', '100% Fresh Angus Beef'],
        preparation: 'Seared to juicy perfection on high heat',
        ingredients: ['8oz Angus Beef', 'Thick Bacon', 'Wisconsin Cheddar', 'Heirloom Tomato', 'Secret Eppies Sauce'],
        portion: 'Half-Pound Burger with Fries'
      },
      {
        id: 'triple-decker-club',
        name: 'West Sac Triple Decker Club',
        description: 'Stacked high with slow-roasted turkey breast, honey cured ham, applewood smoked bacon, Swiss cheese, crisp lettuce, tomato, and mayo on toasted sourdough.',
        price: '$13.99',
        category: 'burgers-sandwiches',
        image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80',
        calories: '760 cal',
        badge: 'Lunch Legend',
        popular: true,
        dietary: ['Hearty Platter', 'House Roasted Meats'],
        preparation: 'Triple layered on grilled artisan sourdough bread',
        ingredients: ['Oven-Roasted Turkey', 'Deli Ham', 'Bacon', 'Swiss Cheese', 'San Francisco Sourdough'],
        portion: '3-Layer Cut Quartered'
      },
      {
        id: 'french-dip-au-jus',
        name: 'Hot Open-Faced Roast Beef & Gravy',
        description: 'Thinly shaved tender roast beef piled on thick Texas toast, smothered in rich savory brown beef gravy, served with garlic mashed potatoes.',
        price: '$14.99',
        category: 'burgers-sandwiches',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
        calories: '840 cal',
        badge: 'Comfort Food',
        popular: true,
        dietary: ['Hearty Platter', 'Homestyle Classic'],
        preparation: 'Slow-braised roast beef with simmered au jus gravy',
        ingredients: ['Slow Roasted Chuck', 'Texas Toast', 'Rich Pan Gravy', 'Yukon Gold Mash'],
        portion: 'Hearty Open Face Platter'
      },
      {
        id: 'crispy-zucchini-onion-rings',
        name: 'Crispy Beer-Battered Onion Rings & Zucchini',
        description: 'Thick cut colossal sweet onions and garden zucchini in golden beer batter, served with house garlic buttermilk ranch.',
        price: '$8.99',
        category: 'burgers-sandwiches',
        image: 'https://images.unsplash.com/photo-1639024471287-032f66e061e5?auto=format&fit=crop&w=800&q=80',
        calories: '490 cal',
        badge: 'Shareable Starter',
        popular: true,
        dietary: ['Vegetarian', 'Great to Share'],
        preparation: 'Fried in fresh clean oil until shatteringly crisp',
        ingredients: ['Colossal Walla Walla Onions', 'Crisp Zucchini', 'House Ranch Dip'],
        portion: 'Basket for 2-3'
      }
    ]
  },
  {
    id: 'weekly-specials',
    name: 'Weekly Chef Specials',
    tagline: 'Tradition You Can Taste',
    description: 'The meals West Sacramento looks forward to every single week. Prepared fresh in limited batches.',
    items: [
      {
        id: 'wednesday-meatloaf',
        name: 'Wednesday Signature Glazed Meatloaf',
        description: 'Our 40-year family recipe of seasoned ground beef and pork, slow-baked with a sweet and tangy tomato brown sugar glaze. Served with creamy mashed potatoes and buttered sweet corn.',
        price: '$15.99',
        category: 'weekly-specials',
        image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?auto=format&fit=crop&w=800&q=80',
        calories: '780 cal',
        badge: 'Wednesdays Only',
        popular: true,
        dietary: ['Hearty Platter', '40-Year Secret Recipe'],
        preparation: 'Baked fresh every Wednesday morning',
        ingredients: ['Angus Beef & Pork', 'Sweet Tomato Glaze', 'Idaho Potatoes', 'Sweet Cream Butter'],
        portion: 'Two Generous Slices'
      },
      {
        id: 'thursday-bbq-ribs',
        name: 'Thursday Fall-Off-The-Bone Smoked Ribs',
        description: 'St. Louis style pork ribs slow-cooked for 6 hours until fork-tender, brushed with tangy hickory BBQ sauce and caramelized on the broiler. Served with seasoned fries and coleslaw.',
        price: '$18.99',
        category: 'weekly-specials',
        image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80',
        calories: '960 cal',
        badge: 'Thursdays Only',
        popular: true,
        dietary: ['Hearty Platter', 'Hickory Smoked'],
        preparation: '6-hour hickory smoke finished with BBQ char',
        ingredients: ['St. Louis Cut Ribs', 'House Hickory Rub', 'Smoked Honey BBQ Sauce', 'Crisp Slaw'],
        portion: 'Half Rack or Full Rack Option'
      },
      {
        id: 'friday-prime-rib',
        name: 'Friday Slow-Roasted Herb-Crusted Prime Rib',
        description: 'Our crown jewel: USDA Choice prime rib seasoned with rosemary, garlic, and sea salt, slow roasted all day. Served with savory rosemary au jus, creamy prepared horseradish, and baked potato.',
        price: '$23.99',
        category: 'weekly-specials',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
        calories: '1,020 cal',
        badge: 'Friday Night King',
        popular: true,
        dietary: ['Hearty Platter', 'USDA Choice Beef'],
        preparation: 'Slow roasted at low temperature for 8 hours',
        ingredients: ['USDA Choice Ribeye Roast', 'Fresh Rosemary & Thyme', 'Simmered Au Jus', 'Horseradish Cream'],
        portion: 'Thick Hand-Carved 12oz Cut'
      }
    ]
  },
  {
    id: 'steaks-seafood',
    name: 'Steaks, Seafood & Dinner Classics',
    tagline: 'Hearty Evening Entrees',
    description: 'Served with dinner roll, cup of house soup or garden salad, and choice of potato.',
    items: [
      {
        id: 'grilled-pacific-salmon',
        name: 'Pacific Herb-Butter Grilled Salmon',
        description: 'Wild-caught Pacific salmon fillet grilled over open flame with lemon herb garlic butter, served with wild rice pilaf and steamed broccoli.',
        price: '$18.99',
        category: 'steaks-seafood',
        image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80',
        calories: '620 cal',
        badge: 'Seafood Choice',
        popular: true,
        dietary: ['Hearty Platter', 'Heart Healthy', 'Omega-3 Rich'],
        preparation: 'Flame grilled with fresh lemon and dill butter',
        ingredients: ['Pacific Salmon Fillet', 'Lemon Herb Butter', 'Wild Rice', 'Garden Vegetables'],
        portion: '8oz Fresh Fillet'
      },
      {
        id: 'beer-battered-fish-chips',
        name: 'Golden Beer-Battered Fish & Chips',
        description: 'Crispy Atlantic cod hand-dipped in golden pale ale batter, fried to a light crunch. Served with seasoned fries, coleslaw, and house caper tartar sauce.',
        price: '$16.99',
        category: 'steaks-seafood',
        image: 'https://images.unsplash.com/photo-1579208030886-b937da0925dc?auto=format&fit=crop&w=800&q=80',
        calories: '880 cal',
        badge: 'Guest Favorite',
        popular: true,
        dietary: ['Hearty Platter', 'Crisp Batter'],
        preparation: 'Hand dipped to order for maximum crunch',
        ingredients: ['Atlantic Cod Loins', 'Pale Ale Batter', 'House Tartar Sauce', 'Malt Vinegar'],
        portion: '3 Jumbo Fillets with Fries'
      },
      {
        id: 'new-york-strip',
        name: '10oz Charbroiled New York Strip Steak',
        description: 'USDA Choice center-cut strip steak charbroiled to your preferred temperature, topped with garlic herb butter and served with a loaded baked potato.',
        price: '$22.99',
        category: 'steaks-seafood',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
        calories: '890 cal',
        badge: 'Steakhouse Cut',
        popular: true,
        dietary: ['Hearty Platter', '100% USDA Choice', 'High Protein'],
        preparation: 'Flame broiled on cast iron grates',
        ingredients: ['10oz Strip Loin', 'Compound Garlic Butter', 'Baked Russet Potato', 'Sour Cream & Chives'],
        portion: '10oz Steak'
      }
    ]
  },
  {
    id: 'desserts-beverages',
    name: 'Fresh Bakery, Desserts & Drinks',
    tagline: 'Sweet Treats & Warm Brews',
    description: 'Baked fresh in-house or crafted to order. The perfect sweet ending to your meal.',
    items: [
      {
        id: 'eppies-homemade-pie',
        name: 'Warm Homestyle Dutch Apple Pie',
        description: 'Flaky buttery crust filled with spiced Granny Smith apples, covered in buttery brown sugar crumble, served warm with vanilla bean ice cream.',
        price: '$6.49',
        category: 'desserts-beverages',
        image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80',
        calories: '510 cal',
        badge: 'Baked Daily',
        popular: true,
        dietary: ['Vegetarian', 'Served Warm A La Mode'],
        preparation: 'Baked every morning from fresh fruit',
        ingredients: ['Granny Smith Apples', 'Cinnamon Crumble', 'Butter Crust', 'French Vanilla Ice Cream'],
        portion: 'Generous Thick Slice'
      },
      {
        id: 'new-york-cheesecake',
        name: 'Classic New York Strawberry Cheesecake',
        description: 'Creamy, velvety Philadelphia cream cheese cake on a honey graham cracker crust, drizzled with sweet strawberry compote.',
        price: '$6.99',
        category: 'desserts-beverages',
        image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80',
        calories: '580 cal',
        badge: 'Rich & Creamy',
        dietary: ['Vegetarian'],
        preparation: 'Chilled cream cheese custard with scratch fruit glaze',
        ingredients: ['Cream Cheese', 'Graham Crust', 'Fresh Strawberry Puree', 'Whipped Cream'],
        portion: 'Large Slice'
      },
      {
        id: 'diner-roast-coffee',
        name: 'Fresh Brewed Bottomless Colombian Coffee',
        description: 'Our proprietary medium-dark Colombian roast brewed constantly throughout the day for rich aroma and smooth flavor. Free refills at your table.',
        price: '$2.99',
        category: 'desserts-beverages',
        image: 'https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=800&q=80',
        calories: '5 cal',
        badge: 'Free Refills',
        popular: true,
        dietary: ['Vegetarian', 'Freshly Ground', 'Decaf Available'],
        preparation: 'Brewed every 30 minutes',
        ingredients: ['100% Arabica Colombian Beans', 'Filtered Mountain Water'],
        portion: 'Endless Mug'
      }
    ]
  }
];
