export const SITE = {
  name: 'Ryan Cole Real Estate',
  tagline: 'Your Greenville home expert',
  url: 'https://ryancolerealtor.com',
  email: 'ryan@ryancolerealtor.com',
  phone: '(864) 555-7482',
  license: 'SC License #R-48291',
} as const

export const LISTINGS = [
  { address: '412 Augusta St, Greenville', price: '$485,000', beds: 3, baths: 2, sqft: '1,850', status: 'Active', image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&q=80' },
  { address: '28 Pelham Rd, Greenville', price: '$625,000', beds: 4, baths: 3, sqft: '2,400', status: 'Active', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&q=80' },
  { address: '105 Stone Ave, Greenville', price: '$340,000', beds: 2, baths: 2, sqft: '1,200', status: 'Under Contract', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&q=80' },
  { address: '7 Crescent Ave, Greenville', price: '$890,000', beds: 5, baths: 4, sqft: '3,200', status: 'Active', image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=500&q=80' },
]

export const NEIGHBORHOODS = [
  { name: 'Downtown Greenville', description: 'Walkable, vibrant, close to Falls Park and Main Street. Median: $450K. Best for young professionals and empty nesters.', vibe: 'Urban', image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&q=80' },
  { name: 'Augusta Road', description: 'Tree-lined streets, established homes, top-rated schools. Median: $550K. Best for families and long-term homeowners.', vibe: 'Classic', image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=500&q=80' },
  { name: 'Travelers Rest', description: '15 minutes north, Swamp Rabbit Trail access, small-town charm with growing food scene. Median: $320K. Best for outdoor lovers.', vibe: 'Scenic', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&q=80' },
  { name: 'Simpsonville', description: 'Suburban, newer builds, great school district, lower price per sqft. Median: $350K. Best for growing families.', vibe: 'Suburban', image: 'https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=500&q=80' },
]

export const STATS = [
  { label: 'Homes Sold', value: '120+' },
  { label: 'Years in Greenville', value: '12' },
  { label: 'Avg Days on Market', value: '18' },
  { label: 'Client Satisfaction', value: '4.9/5' },
]

export const TESTIMONIALS = [
  { quote: 'Ryan knew the Augusta Road area better than anyone we talked to. He found us a home that wasn\'t even listed yet.', author: 'The Martinez Family', context: 'Buyers, Augusta Road' },
  { quote: 'He sold our house in 11 days, $15K over asking. No drama, no stress. Best experience we\'ve had with a realtor.', author: 'Dave & Michelle K.', context: 'Sellers, Simpsonville' },
  { quote: 'As a first-time buyer, I had a million questions. Ryan answered every one without making me feel dumb. Found my condo in 3 weeks.', author: 'Alyssa T.', context: 'First-time buyer, Downtown' },
]
