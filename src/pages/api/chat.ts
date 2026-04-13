import type { APIContext } from 'astro'
import { SITE, LISTINGS, NEIGHBORHOODS, STATS, TESTIMONIALS } from '../../lib/config'

const SYSTEM_PROMPT = `You are the AI assistant for ${SITE.name}, a real estate group in Greenville, SC.

IMPORTANT: This is a fictional demo business created by Upstate Web Co to showcase what a modern real estate website can do. If asked, clarify this is a portfolio demonstration — not a real realty group. All listings, names, addresses, and statistics are fictional.

=== SAMPLE LISTINGS ===
${LISTINGS.map(l => `- ${l.address}: ${l.price}, ${l.beds} bed / ${l.baths} bath, ${l.sqft} sqft (${l.status} listing)`).join('\n')}
Note: These are example listings to demonstrate the website. Actual listings change regularly.

=== NEIGHBORHOOD GUIDE ===
${NEIGHBORHOODS.map(n => `- ${n.name} (${n.vibe}): ${n.description}`).join('\n')}

=== TEAM STATS ===
${STATS.map(s => `- ${s.label}: ${s.value}`).join('\n')}
- Licensed in South Carolina
- Based at ${SITE.address}

=== BUYING PROCESS ===
1. Free consultation — discuss your goals, budget, timeline, and preferred neighborhoods.
2. Pre-approval — we connect you with trusted local lenders if needed.
3. Home search — we send curated listings and schedule tours based on your criteria.
4. Offer & negotiation — we handle the offer strategy, inspections, and negotiations.
5. Closing — we coordinate with lenders, attorneys, and inspectors to get you to closing day.
- First-time buyers welcome — we answer every question and guide you step by step.
- Average time from first tour to closing: 30-60 days.

=== SELLING PROCESS ===
1. Free market analysis — we evaluate your home's value based on comparable sales and condition.
2. Preparation — we advise on staging, repairs, and photography to maximize your sale price.
3. Listing & marketing — professional photos, online listings, social media, and our buyer network.
4. Showings & offers — we manage showings and negotiate the best terms.
5. Closing — we coordinate everything through a smooth closing process.
- Average days on market: 18.
- No obligation on the initial market analysis.

=== WHAT CLIENTS SAY ===
${TESTIMONIALS.map(t => `"${t.quote}" — ${t.author} (${t.context})`).join('\n')}

=== PRICING & MARKET OVERVIEW ===
- Greenville overall median: approximately $350-400K.
- Downtown area: around $450K median. Best for young professionals and empty nesters.
- Historic District: around $550K median. Top-rated schools, established homes.
- North End: around $320K median. Trail access, small-town charm, great value.
- Southside: around $350K median. Newer builds, great school district, lower price per sqft.
- Market conditions: Greenville is a growing market with strong demand.

=== CONTACT & NEXT STEPS ===
- Phone: ${SITE.phone}
- Email: ${SITE.email}
- Office: ${SITE.address}
- Best way to start: Fill out the contact form on the website for a free consultation.
- Response time: Within 24 hours.

=== WHAT YOU CAN DO ===
- Answer questions about Greenville neighborhoods, market trends, and the buying/selling process.
- Help visitors understand which neighborhood might be the best fit for their lifestyle and budget.
- Describe the team's experience and approach.
- Explain what to expect from a consultation or market analysis.

=== WHAT YOU CANNOT DO ===
- Provide exact home valuations or appraisals.
- Make predictions about market direction or guarantee sale prices.
- Access or show actual MLS listings — the listings shown are examples only.
- Schedule tours or book consultations directly.
- Provide legal or financial advice.
- Process offers or transactions.

TONE: Be knowledgeable, friendly, and confident. Give neighborhood insights when relevant. Keep answers to 2-3 sentences. For specific pricing, availability, or personalized advice, suggest scheduling a free consultation.`

export async function POST({ request, locals }: APIContext) {
  try {
    const { message } = await request.json()
    if (!message) return Response.json({ reply: 'What would you like to know about the Greenville real estate market? Ask about neighborhoods, buying, selling, or market trends!' })
    const env = (locals as Record<string, any>).runtime?.env
    const apiKey = env?.ANTHROPIC_API_KEY
    if (!apiKey) {
      const lower = message.toLowerCase()
      if (lower.includes('downtown') || lower.includes('main st') || lower.includes('walkable') || lower.includes('urban'))
        return Response.json({ reply: `The Downtown area is popular — walkable, vibrant, close to Falls Park and great restaurants. Median home price around $450K. Best for young professionals and empty nesters who want to be in the middle of everything.` })
      if (lower.includes('historic') || lower.includes('school') || lower.includes('classic') || lower.includes('tree'))
        return Response.json({ reply: `The Historic District has top-rated schools, tree-lined streets, and beautifully established homes. Median around $550K. It's a classic family neighborhood — homes don't last long there, so reach out early if you're interested.` })
      if (lower.includes('north') || lower.includes('trail') || lower.includes('outdoor') || lower.includes('nature'))
        return Response.json({ reply: `The North End is about 15 minutes out — small-town charm, trail access, and an amazing growing food scene. Median around $320K. Great value compared to downtown, especially popular with outdoor lovers and remote workers.` })
      if (lower.includes('south') || lower.includes('suburb') || lower.includes('new build') || lower.includes('newer') || lower.includes('grow'))
        return Response.json({ reply: `Southside is suburban with newer builds, a great school district, and lower price per sqft. Median around $350K. It's the top choice for growing families who want space and good schools without the premium of the Historic District.` })
      if (lower.includes('buy') || lower.includes('first time') || lower.includes('looking') || lower.includes('purchas') || lower.includes('house hunt'))
        return Response.json({ reply: `Great! The best first step is a free consultation to understand your budget, preferred neighborhoods, and timeline. We welcome first-time buyers — we answer every question and guide you step by step. Fill out the contact form and our team will be in touch within 24 hours!` })
      if (lower.includes('sell') || lower.includes('list') || lower.includes('market my') || lower.includes('worth') || lower.includes('valuation'))
        return Response.json({ reply: `Great time to sell in Greenville — our average is just 18 days on market. We start with a free, no-obligation market analysis of your home to determine what it's worth, what prep to do, and what to expect. Fill out the contact form to get started!` })
      if (lower.includes('price') || lower.includes('cost') || lower.includes('how much') || lower.includes('median') || lower.includes('afford') || lower.includes('budget'))
        return Response.json({ reply: `Greenville's overall median is around $350-400K. Downtown runs about $450K, Historic District around $550K, North End around $320K, and Southside around $350K. Want help finding the right neighborhood for your budget? Let's schedule a free consultation.` })
      if (lower.includes('agent') || lower.includes('team') || lower.includes('experience') || lower.includes('who') || lower.includes('about'))
        return Response.json({ reply: `Trailmark Realty Group has 12 years of experience in the Greenville market — 120+ homes sold with an average of just 18 days on market and a 4.9/5 client satisfaction rating. We're licensed in South Carolina and based right here at ${SITE.address}.` })
      if (lower.includes('how long') || lower.includes('timeline') || lower.includes('fast') || lower.includes('process'))
        return Response.json({ reply: `For buyers, the typical timeline from first tour to closing is 30-60 days. For sellers, our average is 18 days on market. The first step for either is a free consultation — no obligation. Fill out the contact form to get started!` })
      if (lower.includes('lend') || lower.includes('mortgage') || lower.includes('financ') || lower.includes('pre-approv') || lower.includes('loan'))
        return Response.json({ reply: `We work with trusted local lenders and can connect you with the right one for your situation. Getting pre-approved is a great first step — it tells you your budget and makes your offer stronger. We'll guide you through it during our initial consultation.` })
      if (lower.includes('invest') || lower.includes('rental') || lower.includes('income'))
        return Response.json({ reply: `Greenville has a strong rental market thanks to growing demand. The North End and Southside offer good value for investment properties. Schedule a consultation and we can discuss specific investment strategies and neighborhoods that fit your goals.` })
      if (lower.includes('inspect') || lower.includes('closing') || lower.includes('offer') || lower.includes('negotiat'))
        return Response.json({ reply: `We handle the full process — offer strategy, inspections, negotiations, and closing coordination. We work with trusted local inspectors and attorneys to make sure everything goes smoothly. You'll never feel out of the loop.` })
      if (lower.includes('demo') || lower.includes('real') || lower.includes('fake') || lower.includes('portfolio') || lower.includes('upstate'))
        return Response.json({ reply: `Great question! This is a fictional demo business created by Upstate Web Co to showcase what a modern real estate website can do. All listings, names, and statistics are illustrative — but the website technology is very real!` })
      if (lower.includes('contact') || lower.includes('reach') || lower.includes('phone') || lower.includes('email'))
        return Response.json({ reply: `You can reach us at ${SITE.phone} or ${SITE.email}. Our office is at ${SITE.address}. Fill out the contact form on the website and we'll get back to you within 24 hours!` })
      return Response.json({ reply: `I can help with neighborhood info, market trends, the buying or selling process, pricing, or our team's experience. What's on your mind?` })
    }
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST', headers: { 'Content-Type': 'application/json', 'x-api-key': apiKey, 'anthropic-version': '2023-06-01' },
      body: JSON.stringify({ model: 'claude-haiku-4-5-20251001', max_tokens: 256, system: SYSTEM_PROMPT, messages: [{ role: 'user', content: message }] }),
    })
    const data = await response.json() as { content?: { text: string }[] }
    return Response.json({ reply: data.content?.[0]?.text || 'Not sure about that — give us a call at ' + SITE.phone + ' and we\'ll help!' })
  } catch { return Response.json({ reply: 'Something went wrong. Call us at ' + SITE.phone }) }
}
