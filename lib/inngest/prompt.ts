export const PERSONALIZED_WELCOME_EMAIL_PROMPT = `Generate highly personalized HTML content that will be inserted into an email template at
 the {{intro}} placeholder.

User profile data:
{{userProfile}}

PERSONALIZATION REQUIREMENTS:
You MUST create content that is obviously tailored to THIS specific user by:

IMPORTANT: Do NOT start the personalized content with "Welcome" since the email header already says "Welcome aboard {{name}}". Use alternative openings like "Thanks for joining", "Great to have you", "You're all set", "Perfect timing", etc.

1. **Direct Reference to User Details**: Extract and use specific information from their profile:
   - Their exact investment goals or objectives
   - Their stated risk tolerance level
   - Their preferred sectors/industries mentioned
   - Their experience level or background
   - Any specific stocks/companies they're interested in
   - Their investment timeline (short-term, long-term, retirement)

2. **Contextual Messaging**: Create content that shows you understand their situation:
   - New investors → Reference learning/starting their journey
   - Experienced traders → Reference advanced tools/strategy enhancement  
   - Retirement planning → Reference building wealth over time
   - Specific sectors → Reference those exact industries by name
   - Conservative approach → Reference safety and informed decisions
   - Aggressive approach → Reference opportunities and growth potential

3. **Personal Touch**: Make it feel like it was written specifically for them:
   - Use their goals in your messaging
   - Reference their interests directly
   - Connect features to their specific needs
   - Make them feel understood and seen

CRITICAL FORMATTING REQUIREMENTS:
- Return ONLY clean HTML content with NO markdown, NO code blocks, NO backticks
- Use SINGLE paragraph only: <p class="mobile-text" style="margin: 0 0 30px 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">content</p>
- Write exactly TWO sentences
- Keep total content between 35-50 words for readability
- Use <strong> for key personalized elements (their goals, sectors, etc.)
- DO NOT include "Here's what you can do right now:" as this is already in the template
- Make every word count toward personalization
- Second sentence should add helpful context or reinforce the personalization

Example personalized outputs (showing obvious customization with TWO sentences):

<p class="mobile-text" style="margin: 0 0 30px 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">Thanks for joining Stocks Gravity! Since your goal is <strong>long-term wealth building</strong>, we’ll help you track strong companies and market trends that matter over time. Our insights are designed to match your risk comfort while keeping decisions simple and clear.</p>

<p class="mobile-text" style="margin: 0 0 30px 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">Great to have you here! With your interest in the <strong>banking and financial sector</strong>, you’ll receive focused updates on stocks that impact this space the most. We’ll help you stay informed without overwhelming you with unnecessary noise.</p>

<p class="mobile-text" style="margin: 0 0 30px 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">You're all set! As someone new to investing with a <strong>moderate risk approach</strong>, we’ve built tools that help you learn while staying protected. Stocks Gravity makes it easier to understand the market and grow confidence step by step.</p>`;


export const NEWS_SUMMARY_EMAIL_PROMPT = `Generate HTML content for a market news summary email that will be inserted into the NEWS_SUMMARY_EMAIL_TEMPLATE at the {{newsContent}} placeholder.

News data to summarize:
{{newsData}}

CRITICAL FORMATTING REQUIREMENTS:
- Return ONLY clean HTML content with NO markdown, NO code blocks, NO backticks
- Structure content with clear sections using proper HTML headings and paragraphs
- Use these specific CSS classes and styles to match the email template:

SECTION HEADINGS:
<h3 class="mobile-news-title dark-text" style="margin: 30px 0 15px 0; font-size: 18px; font-weight: 600; color: #f8f9fa; line-height: 1.3;">Section Title</h3>

PARAGRAPHS:
<p class="mobile-text dark-text-secondary" style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">Content goes here</p>

STOCK / COMPANY MENTIONS:
<strong style="color: #FDD458;">Stock Symbol</strong>
<strong style="color: #CCDADC;">Company Name</strong>

PERFORMANCE INDICATORS:
📈 positive movement, 📉 negative movement, 📊 mixed or neutral

NEWS ARTICLE STRUCTURE:
- Headline
- 3 simple bullet insights
- Clear explanation of impact
- Read-more link
- Visual separation

ARTICLE CONTAINER:
<div class="dark-info-box" style="background-color: #212328; padding: 24px; margin: 20px 0; border-radius: 8px;">

ARTICLE TITLE:
<h4 class="dark-text" style="margin: 0 0 16px 0; font-size: 18px; font-weight: 600; color: #FFFFFF; line-height: 1.4;">
Headline Here
</h4>

BULLET POINTS:
<ul style="margin: 16px 0 20px 0; padding-left: 0; list-style: none;">
<li class="dark-text-secondary" style="margin: 0 0 16px 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">
<span style="color: #FDD458; font-weight: bold; font-size: 20px; margin-right: 8px;">•</span>Short, clear explanation anyone can understand.
</li>
<li class="dark-text-secondary" style="margin: 0 0 16px 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">
<span style="color: #FDD458; font-weight: bold; font-size: 20px; margin-right: 8px;">•</span>Key number with a simple meaning explained.
</li>
<li class="dark-text-secondary" style="margin: 0 0 16px 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">
<span style="color: #FDD458; font-weight: bold; font-size: 20px; margin-right: 8px;">•</span>What this means for an everyday investor.
</li>
</ul>

INSIGHT SECTION:
<div style="background-color: #141414; border: 1px solid #374151; padding: 15px; border-radius: 6px; margin: 16px 0;">
<p class="dark-text-secondary" style="margin: 0; font-size: 14px; color: #CCDADC; line-height: 1.4;">
💡 <strong style="color: #FDD458;">Bottom Line:</strong> Simple explanation of how this news may affect your investment decisions.
</p>
</div>

READ MORE LINK:
<a href="ARTICLE_URL" style="color: #FDD458; text-decoration: none; font-weight: 500; font-size: 14px;" target="_blank" rel="noopener noreferrer">
Read Full Story →
</a>

CONTENT GUIDELINES:
- Use clear section categories (Market Overview, Stocks in Focus, Earnings, Economy, etc.)
- Never repeat section titles
- Keep language beginner-friendly
- Avoid complex financial jargon
- Explain why the news matters to personal investments
- Focus on clarity, not volume
- Make content easy to scan and understand quickly
`;
