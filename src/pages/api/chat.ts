import type { APIContext } from 'astro'
import { SITE, LISTINGS, NEIGHBORHOODS } from '../../lib/config'

const SYSTEM_PROMPT = `You are the AI assistant for ${SITE.name}, a real estate group in Greenville, SC.

NOTE: This is a portfolio demo site. All listings, names, and addresses are fictional. If asked, clarify this is a demo.

SAMPLE LISTINGS:
${LISTINGS.map(l => `- ${l.address}: ${l.price}, ${l.beds}bed/${l.baths}bath, ${l.sqft}sqft`).join('\n')}

NEIGHBORHOODS:
${NEIGHBORHOODS.map(n => `- ${n.name} (${n.vibe}): ${n.description}`).join('\n')}

ABOUT: ${SITE.name} has 12 years of experience in the Greenville market. 120+ homes sold. Average 18 days on market. Licensed in South Carolina.

CONTACT: ${SITE.phone}, ${SITE.email}

RULES: Be knowledgeable, friendly, confident. Give neighborhood insights. 2-3 sentences. For specific pricing or availability, suggest scheduling a consultation. Never make up listing data not in the list. Remember this is a demo site with fictional data.`

export async function POST({ request, locals }: APIContext) {
  try {
    const { message } = await request.json()
    if (!message) return Response.json({ reply: 'What would you like to know about the Greenville real estate market?' })
    const env = (locals as Record<string, any>).runtime?.env
    const apiKey = env?.ANTHROPIC_API_KEY
    if (!apiKey) {
      const lower = message.toLowerCase()
      if (lower.includes('downtown') || lower.includes('main st')) return Response.json({ reply: `The Downtown area is popular — walkable, vibrant, close to parks and restaurants. Median home price around $450K. Great for young professionals and empty nesters.` })
      if (lower.includes('historic') || lower.includes('family') || lower.includes('school')) return Response.json({ reply: `The Historic District has top-rated schools, tree-lined streets, and established homes. Median around $550K. It's a classic family neighborhood — homes don't last long there.` })
      if (lower.includes('north') || lower.includes('trail')) return Response.json({ reply: `The North End is about 15 minutes out — small-town charm, trail access, amazing food scene. Median around $320K. Great value compared to downtown, especially for outdoor lovers.` })
      if (lower.includes('buy') || lower.includes('first time') || lower.includes('looking')) return Response.json({ reply: `Happy to help! The best first step is a quick call to understand what you're looking for — budget, neighborhoods, timeline. Fill out the contact form below and our team will be in touch!` })
      if (lower.includes('sell') || lower.includes('list') || lower.includes('market')) return Response.json({ reply: `Great time to sell in Greenville. Our average is 18 days on market. We'll do a free market analysis of your home — what it's worth, what needs to be done, and what to expect. No obligation.` })
      if (lower.includes('price') || lower.includes('cost') || lower.includes('how much') || lower.includes('median')) return Response.json({ reply: `Greenville median is around $350-400K right now. Downtown/Historic District runs $450-600K+. Southside is more affordable at $300-380K. Want specifics for your budget? Let's talk.` })
      return Response.json({ reply: `We can help with neighborhood info, sample listings, market trends, or buying/selling questions. What's on your mind?` })
    }
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST', headers: { 'Content-Type': 'application/json', 'x-api-key': apiKey, 'anthropic-version': '2023-06-01' },
      body: JSON.stringify({ model: 'claude-haiku-4-5-20251001', max_tokens: 256, system: SYSTEM_PROMPT, messages: [{ role: 'user', content: message }] }),
    })
    const data = await response.json() as { content?: { text: string }[] }
    return Response.json({ reply: data.content?.[0]?.text || 'Not sure — give us a call at ' + SITE.phone })
  } catch { return Response.json({ reply: 'Something went wrong. Call us at ' + SITE.phone }) }
}
