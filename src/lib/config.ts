export const SITE = {
  name: 'Trailmark Realty Group',
  tagline: 'Your Greenville home experts',
  url: 'https://trailmarkrealty.com',
  email: 'hello@trailmarkrealty.com',
  phone: '(864) 555-7482',
  address: '100 Market Square, Greenville, SC 29601',
} as const

export const LISTINGS = [
  { address: '142 Magnolia Lane, Greenville', price: '$485,000', beds: 3, baths: 2, sqft: '1,850', status: 'Example', image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&q=80', neighborhood: 'Downtown Area', yearBuilt: 2019, features: ['Open floor plan', 'Quartz countertops', 'Hardwood floors', 'Fenced backyard', 'Walk to Falls Park'], description: 'A beautifully maintained craftsman in the heart of downtown. Walking distance to restaurants, parks, and the Swamp Rabbit Trail.' },
  { address: '88 Oakwood Drive, Greenville', price: '$625,000', beds: 4, baths: 3, sqft: '2,400', status: 'Example', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&q=80', neighborhood: 'Historic District', yearBuilt: 2005, features: ['Top-rated school district', 'Two-car garage', 'Screened porch', 'Updated kitchen', 'Mature landscaping'], description: 'Classic brick home on a tree-lined street. Renovated kitchen, spacious rooms, and a backyard made for entertaining.' },
  { address: '215 Creekside Court, Greenville', price: '$340,000', beds: 2, baths: 2, sqft: '1,200', status: 'Example', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&q=80', neighborhood: 'North End', yearBuilt: 2021, features: ['Trail access', 'Modern finishes', 'Energy-efficient', 'Open kitchen', 'Community pool'], description: 'A low-maintenance modern condo near the trails. Great for first-time buyers or remote workers who love the outdoors.' },
  { address: '7 Ridgeline Way, Greenville', price: '$890,000', beds: 5, baths: 4, sqft: '3,200', status: 'Example', image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=500&q=80', neighborhood: 'Southside', yearBuilt: 2022, features: ['New construction', 'Chef\'s kitchen', 'Home office', 'Three-car garage', 'Smart home system'], description: 'Stunning new build with premium finishes throughout. Perfect for a growing family that wants space, storage, and modern amenities.' },
]

export const NEIGHBORHOODS = [
  { name: 'Downtown Area', description: 'Walkable and vibrant, close to parks and restaurants. Median: $450K. Best for young professionals and empty nesters.', vibe: 'Urban' },
  { name: 'Historic District', description: 'Tree-lined streets, established homes, top-rated schools. Median: $550K. Best for families and long-term homeowners.', vibe: 'Classic' },
  { name: 'North End', description: '15 minutes north, trail access, small-town charm with growing food scene. Median: $320K. Best for outdoor lovers.', vibe: 'Scenic' },
  { name: 'Southside', description: 'Suburban, newer builds, great school district, lower price per sqft. Median: $350K. Best for growing families.', vibe: 'Suburban' },
]

export const STATS = [
  { label: 'Homes Sold', value: '120+' },
  { label: 'Years Experience', value: '12' },
  { label: 'Avg Days on Market', value: '18' },
  { label: 'Client Satisfaction', value: '4.9/5' },
]

export const TESTIMONIALS = [
  { quote: 'The Trailmark team knew the Historic District better than anyone we talked to. They found us a home that wasn\'t even listed yet.', author: 'The Martinez Family', context: 'Buyers, Historic District' },
  { quote: 'They sold our house in 11 days, over asking. No drama, no stress. Best experience we\'ve had with a realty group.', author: 'Dave & Michelle K.', context: 'Sellers, Southside' },
  { quote: 'As a first-time buyer, I had a million questions. The team answered every one without making me feel dumb. Found my condo in 3 weeks.', author: 'Alyssa T.', context: 'First-time buyer, Downtown' },
]
