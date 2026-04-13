import type { APIContext } from 'astro'
import { SITE, LISTINGS, NEIGHBORHOODS } from '../../lib/config'

const SYSTEM_PROMPT = `You are the AI assistant for ${SITE.name}, a real estate agent in Greenville, SC.

CURRENT LISTINGS:
${LISTINGS.map(l => `- ${l.address}: ${l.price}, ${l.beds}bed/${l.baths}bath, ${l.sqft}sqft, ${l.status}`).join('\n')}

NEIGHBORHOODS:
${NEIGHBORHOODS.map(n => `- ${n.name} (${n.vibe}): ${n.description}`).join('\n')}

ABOUT RYAN: 12 years in Greenville market. 120+ homes sold. Average 18 days on market. Solo agent (not a team). Specializes in Downtown, Augusta Road, Travelers Rest, Simpsonville.

CONTACT: ${SITE.phone}, ${SITE.email}

RULES: Be knowledgeable, friendly, confident. Give real neighborhood insights. 2-3 sentences. For specific pricing or availability, suggest scheduling a consultation. Never make up listing data not in the list.`

export async function POST({ request, locals }: APIContext) {
  try {
    const { message } = await request.json()
    if (!message) return Response.json({ reply: 'What would you like to know about the Greenville real estate market?' })
    const env = (locals as Record<string, any>).runtime?.env
    const apiKey = env?.ANTHROPIC_API_KEY
    if (!apiKey) {
      const lower = message.toLowerCase()
      if (lower.includes('downtown') || lower.includes('main st')) return Response.json({ reply: `Downtown Greenville is hot — walkable, vibrant, close to Falls Park. Median home price around $450K. Great for young professionals and empty nesters. I have a listing on Stone Ave right now.` })
      if (lower.includes('augusta') || lower.includes('family') || lower.includes('school')) return Response.json({ reply: `Augusta Road area has the best schools in Greenville, tree-lined streets, and established homes. Median around $550K. It's the classic family neighborhood — homes don't last long there.` })
      if (lower.includes('travelers rest') || lower.includes('tr ')) return Response.json({ reply: `Travelers Rest is 15 minutes north — small-town charm, Swamp Rabbit Trail access, amazing food scene. Median around $320K. Great value compared to downtown, especially for outdoor lovers.` })
      if (lower.includes('buy') || lower.includes('first time') || lower.includes('looking')) return Response.json({ reply: `Happy to help! The best first step is a quick call to understand what you're looking for — budget, neighborhoods, timeline. I'll send you listings before they hit the public market. Fill out the contact form below!` })
      if (lower.includes('sell') || lower.includes('list') || lower.includes('market')) return Response.json({ reply: `Great time to sell in Greenville. My average is 18 days on market. I'll do a free market analysis of your home — what it's worth, what needs to be done, and what to expect. No obligation.` })
      if (lower.includes('price') || lower.includes('cost') || lower.includes('how much') || lower.includes('median')) return Response.json({ reply: `Greenville median is around $350-400K right now. Downtown/Augusta Road runs $450-600K+. Simpsonville/Mauldin is more affordable at $300-380K. Want specifics for your budget? Let's talk.` })
      return Response.json({ reply: `I can help with neighborhood info, current listings, market trends, or buying/selling questions. What's on your mind?` })
    }
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST', headers: { 'Content-Type': 'application/json', 'x-api-key': apiKey, 'anthropic-version': '2023-06-01' },
      body: JSON.stringify({ model: 'claude-haiku-4-5-20251001', max_tokens: 256, system: SYSTEM_PROMPT, messages: [{ role: 'user', content: message }] }),
    })
    const data = await response.json() as { content?: { text: string }[] }
    return Response.json({ reply: data.content?.[0]?.text || 'Not sure — give me a call at ' + SITE.phone })
  } catch { return Response.json({ reply: 'Something went wrong. Call me at ' + SITE.phone }) }
}
