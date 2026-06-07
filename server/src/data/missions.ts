// ── MISSIONS DATA — embedded directly for zero-fs-dependency builds ──
// These are the 11 real articles from Reuters, AP, PBS, BBC

export interface HighlightRule {
  words: string[]
  explanation: string
}

export interface MissionPost {
  id: number
  title: string
  source: string
  url: string
  scientist: string
  color: string
  content: string
  highlightRules: Record<string, HighlightRule[]>
  standardViolations?: { rule: string; text: string }[]
}

export const MISSIONS: MissionPost[] = [
  {
    "id": 1,
    "title": "Trump's immigration approval drops to record low, poll shows",
    "source": "Reuters/Ipsos",
    "url": "https://www.reuters.com/world/us/trumps-immigration-approval-drops-record-low-reutersipsos-poll-finds-2026-01-26",
    "scientist": "haidt",
    "color": "#ec4899",
    "content": "American approval of President Donald Trump's immigration policy fell to its lowest level since his return to the White House in a Reuters/Ipsos poll, with a majority of Americans saying his crackdown has gone too far. Among women, Trump's support on immigration has fallen from around 40% throughout most of 2025 to 35% in the latest survey. Only 39% approve of Trump's immigration crackdown, down from 41% in early January. 53% disapprove, up from 41%. \"The ICE crackdown has gone too far,\" said 58% of poll respondents in January 2026.",
    "highlightRules": {
      "bad-arguments": [],
      "feelings-check": [{"words": ["too far", "down", "crackdown", "frustration"], "explanation": "Emotional framing without quantitative context"}],
      "brain-check": [{"words": ["record low", "lowest level", "40%", "35%"], "explanation": "Percentages without margin of error or trend context"}],
      "hidden-story": [],
      "us-vs-them": [],
      "value-check": [],
      "fake-check": [],
      "source-check": [],
      "echo-chamber": [],
      "agenda-setting": [],
      "red-herring": [],
      "false-appeal": []
    },
    "standardViolations": [
      {"rule": "SOURCE_CHECK", "text": "No named poll methodology — just \"Reuters/Ipsos poll\""},
      {"rule": "FAIRNESS", "text": "Ignores Republican counter-arguments in poll results"}
    ]
  },
  {
    "id": 2,
    "title": "Scientists warn of accelerating climate shift",
    "source": "PBS NewsHour",
    "url": "https://www.pbs.org/newshour/science/scientists-say-another-hot-year-is-a-warning-shot-of-a-shifting-dangerous-climate",
    "scientist": "foucault",
    "color": "#eab308",
    "content": "Earth's average temperature last year hovered among one of the three hottest on record, while the past three years indicate that warming could be speeding up, scientists say. \"The last three years are indicative of an acceleration in the warming. They're not consistent with the linear trend we've been observing for the 50 years before that,\" said Robert Rohde of Berkeley Earth. \"Climate change is happening. It's here. It's impacting everyone all around the world and it's our fault,\" said Samantha Burgess of Copernicus Climate Service. \"When we have severe storms or flooding events, the rain is more intense,\" she added.",
    "highlightRules": {
      "bad-arguments": [{"words": ["speeding up", "not consistent with", "indicative"], "explanation": "Assumes causation without statistical significance testing"}],
      "feelings-check": [{"words": ["warning shot", "our fault", "impact", "everyone"], "explanation": "Emotive framing with moral urgency"}],
      "brain-check": [{"words": ["three hottest", "linear trend", "50 years"], "explanation": "Oversimplifies climate trends into binary narrative"}],
      "hidden-story": [{"words": ["it's here", "impact everyone", "our fault"], "explanation": "Universalizes impact without regional variation"}],
      "us-vs-them": [],
      "value-check": [],
      "fake-check": [],
      "source-check": [],
      "echo-chamber": [],
      "agenda-setting": [],
      "red-herring": [],
      "false-appeal": []
    },
    "standardViolations": [
      {"rule": "SOURCE_CHECK", "text": "No direct quotes from original studies — mediated through journalists"},
      {"rule": "BALANCED_REPORTING", "text": "No climate change skeptics' perspectives represented"}
    ]
  },
  {
    "id": 3,
    "title": "Iran eyes limited US deal to relieve economic strain",
    "source": "Reuters",
    "url": "https://www.reuters.com/world/middle-east/iran-eyes-limited-us-deal-relieve-economic-strain-buy-time-2026-06-01",
    "scientist": "kahneman",
    "color": "#06b6d4",
    "content": "Iran is pushing for a limited interim agreement with the United States in a bid to ease mounting economic pressure and stabilise the situation at home, while avoiding major concessions on its nuclear programme. \"Iranian leaders understand that time is not necessarily on their side... their calculation appears to be that dialogue, even limited dialogue, is preferable to entering an open-ended period of economic attrition and uncertainty that could gradually weaken its ability to govern at home and project influence abroad,\" said Alex Vatanka of the Middle East Institute. \"With the start of the war, Trump gave Iran the gift of control over the Strait,\" said an Iranian source.",
    "highlightRules": {
      "bad-arguments": [{"words": ["gift of control", "open-ended period", "gradually weaken"], "explanation": "Personification and metaphor replacing empirical analysis"}],
      "feelings-check": [{"words": ["mounting pressure", "uncertainty", "economy"], "explanation": "Emotional framing of complex geopolitical situation"}],
      "brain-check": [],
      "hidden-story": [{"words": ["gift of control", "gift", "economic attrition"], "explanation": "Framing geopolitical strategy in terms of personal benefit"}],
      "us-vs-them": [],
      "value-check": [],
      "fake-check": [],
      "source-check": [],
      "echo-chamber": [],
      "agenda-setting": [],
      "red-herring": [],
      "false-appeal": []
    },
    "standardViolations": [
      {"rule": "SOURCE_CHECK", "text": "Iranian source — anonymous, unverifiable source"},
      {"rule": "NEUTRALITY", "text": "Uses emotionally charged metaphor \"gift of control\""}
    ]
  },
  {
    "id": 4,
    "title": "US strikes Iranian military sites as tensions escalate",
    "source": "Reuters",
    "url": "https://www.reuters.com/world/middle-east/us-struck-iranian-drone-command-sites-over-weekend-military-says-2026-06-01",
    "scientist": "barthes",
    "color": "#f97316",
    "content": "The US said on Sunday it conducted \"self-defense strikes\" on Iranian radar and drone control sites in Goruk and Qeshm Island. In response, Iran launched an attack on an air base, according to Iranian state media. The US strikes come after Iranian-backed militias increased attacks on US forces in the region. \"This is a clear act of aggression that we must respond to decisively,\" said a US military spokesperson.",
    "highlightRules": {
      "bad-arguments": [{"words": ["clear act", "self-defense", "decisively"], "explanation": "Assumes justification without evidence chain"}],
      "feelings-check": [{"words": ["escalate", "aggression", "respond", "attacks"], "explanation": "Builds tension narrative without de-escalation context"}],
      "brain-check": [],
      "hidden-story": [{"words": ["self-defense", "act of aggression", "decisively"], "explanation": "Moral framing of military action"}],
      "us-vs-them": [{"words": ["Iranian-backed", "they", "we"], "explanation": "In-group/out-group framing in military context"}],
      "value-check": [],
      "fake-check": [],
      "source-check": [{"words": ["according to Iranian state media", "a US military spokesperson"], "explanation": "Anonymous sources with potential propaganda risk"}],
      "echo-chamber": [],
      "agenda-setting": [],
      "red-herring": [],
      "false-appeal": []
    },
    "standardViolations": [
      {"rule": "VERIFICATION", "text": "Relies on \"state media\" and anonymous military source without cross-checking"},
      {"rule": "CONTEXT", "text": "No prior escalation history before the strikes mentioned"}
    ]
  },
  {
    "id": 5,
    "title": "AP-NORC Poll: Public opinion on immigration enforcement",
    "source": "AP News",
    "url": "https://apnews.com/article/trump-immigration-ice-minneapolis-deportation-42aff472ccf1ecd7b92ba0c90469c9e7",
    "scientist": "schopenhauer",
    "color": "#ec4899",
    "content": "60% of U.S. adults believe Trump has \"gone too far\" in sending federal agents into cities for immigration enforcement. Only 40% approve of Trump's immigration tactics. The partisan divide is stark: 90% of Democrats, 60% of independents, and 25% of Republicans say Trump has overstepped. \"You don't go yanking people out of cars. You don't go shooting people,\" said Rick Kinnett, a Navy veteran from Indiana. Only 30% of U.S. adults have a favorable view of ICE. ICE favorability: Democrats (10%), Independents (20%), Republicans (70%).",
    "highlightRules": {
      "bad-arguments": [{"words": ["stark", "only 40%", "90% of Democrats", "25% of Republicans"], "explanation": "Polarization framing without methodological context"}],
      "feelings-check": [{"words": ["yanking people", "shooting", "overstepped", "too far"], "explanation": "Emotive language replacing factual description"}],
      "brain-check": [],
      "hidden-story": [],
      "us-vs-them": [{"words": ["Democrats", "Republicans", "independents"], "explanation": "Partisan framing without cross-group analysis"}],
      "value-check": [{"words": ["favorable view", "U.S. adults"], "explanation": "Vague \"public opinion\" framing without sampling details"}],
      "fake-check": [],
      "source-check": [{"words": ["60% of U.S. adults", "Only 40%"], "explanation": "Percentages without margin of error or sampling method"}],
      "echo-chamber": [],
      "agenda-setting": [],
      "red-herring": [],
      "false-appeal": []
    },
    "standardViolations": [
      {"rule": "SOURCE_CHECK", "text": "No link to original AP-NORC poll methodology or questionnaire"},
      {"rule": "QUOTATION_CONTEXT", "text": "Quotes out of original conversation context"}
    ]
  },
  {
    "id": 7,
    "title": "Trump administration complies with court order on $1.8B fund",
    "source": "PBS NewsHour",
    "url": "https://www.pbs.org/newshour/arts/trump-administration-says-it-will-comply-with-court-order-that-temporarily-paused-1-8-billion-compensation-fund",
    "scientist": "sunstein",
    "color": "#eab308",
    "content": "The Trump administration said Monday it will comply with a court ruling temporarily blocking a nearly $1.8 billion fund meant to compensate allies of the president. The Justice Department said in a statement that it \"disagrees strongly\" with the ruling but would abide by it. The fund was established to resolve Trump's lawsuit against the IRS over the leak of his tax returns, framed as reparations for alleged \"weaponized law enforcement\" during the Biden administration.",
    "highlightRules": {
      "bad-arguments": [{"words": ["compensate allies", "weaponized law enforcement"], "explanation": "Assumes justice without due process"}],
      "feelings-check": [{"words": ["strongly", "compensate", "resolve"], "explanation": "Emotive framing of legal compliance"}],
      "brain-check": [],
      "hidden-story": [{"words": ["weaponized", "alleged", "framed"], "explanation": "Legal framing without presumption of innocence"}],
      "us-vs-them": [],
      "value-check": [{"words": ["alleged", "weaponized", "allies"], "explanation": "Moral value framing in legal context"}],
      "fake-check": [],
      "source-check": [],
      "echo-chamber": [],
      "agenda-setting": [],
      "red-herring": [],
      "false-appeal": []
    },
    "standardViolations": [
      {"rule": "PRECISION", "text": "Round number \"$1.8 billion\" without specific figure"},
      {"rule": "CONTEXT", "text": "No explanation of why Trump is suing IRS over tax returns"}
    ]
  },
  {
    "id": 8,
    "title": "Climate change is here, scientists say",
    "source": "BBC",
    "url": "https://www.bbc.com/news/articles/c3ew90vj8vyo",
    "scientist": "tajfel",
    "color": "#a78bfa",
    "content": "Scientists in Reading for workshops say climate change is here. \"We have experienced an incredibly wet period and seen a lot of flooding. It is part of a pattern, it's a long-term pattern,\" said Professor Rowan Sutton, Director of the Met Office Hadley Centre. \"We are seeing wetter winters, wetter autumns in the UK—entirely consistent with how greenhouse gases are changing our climate,\" he added. \"These workshops will provide critical guidance for our leadership,\" said Professor Sir Jim Skea, Chair of the IPCC.",
    "highlightRules": {
      "bad-arguments": [{"words": ["entirely consistent", "critical guidance", "long-term pattern"], "explanation": "Overstated certainty in complex systems"}],
      "feelings-check": [],
      "brain-check": [{"words": ["critical guidance", "scientists say"], "explanation": "Appeal to authority without statistical evidence"}],
      "hidden-story": [],
      "us-vs-them": [],
      "value-check": [],
      "fake-check": [],
      "source-check": [],
      "echo-chamber": [],
      "agenda-setting": [],
      "red-herring": [],
      "false-appeal": [{"words": ["these workshops will provide", "critical guidance"], "explanation": "Assumes value of institutional activity without independent verification"}]
    },
    "standardViolations": [
      {"rule": "SCIENTIFIC_HUMILITY", "text": "Uses \"entirely consistent\" for complex climate models"},
      {"rule": "BALANCED_REPORTING", "text": "No alternative scientific perspectives represented"}
    ]
  },
  {
    "id": 9,
    "title": "Iran war hands Syria a windfall",
    "source": "Reuters",
    "url": "https://www.reuters.com/world/middle-east/iran-war-hands-syria-windfall-airlines-reroute-over-its-airspace-2026-06-01",
    "scientist": "mccombs-shaw",
    "color": "#14b8a6",
    "content": "The Iran war has handed Syria a windfall as airlines reroute over its airspace. Syria gains revenue but risks further destabilization. \"Any peace deal must offer clear rules for vessels to resume normal business via Hormuz,\" said shipping executives at the World Economic Forum. China could survive without Hormuz but would face higher costs and logistical challenges.",
    "highlightRules": {
      "bad-arguments": [{"words": ["windfall", "clear rules", "higher costs"], "explanation": "Personification and vague economic claims"}],
      "feelings-check": [],
      "brain-check": [{"words": ["higher costs", "logistical challenges"], "explanation": "Vague reference without data sources"}],
      "hidden-story": [],
      "us-vs-them": [],
      "value-check": [],
      "fake-check": [],
      "source-check": [],
      "echo-chamber": [],
      "agenda-setting": [],
      "red-herring": [],
      "false-appeal": []
    },
    "standardViolations": [
      {"rule": "ECONOMIC_PRECISION", "text": "\"Higher costs\" without specific industry-sector breakdown"},
      {"rule": "CAUSALITY", "text": "Attributes Syria revenue to \"Iran war\" without controlling for other factors"}
    ]
  },
  {
    "id": 10,
    "title": "Trump administration faces Republican pushback",
    "source": "Reuters",
    "url": "https://www.reuters.com/world/us/trumps-deportation-push-could-cost-republicans-midterm-elections-reutersipsos-2026-04-22",
    "scientist": "kahneman",
    "color": "#eab308",
    "content": "Only 40% of respondents now approve of Trump's performance on immigration, down from 50% in early 2025. Americans generally support policies that stop people from entering the country illegally, with 84% saying it's at least somewhat important to have secure borders and 87% saying it's important to enforce immigration laws. But 76% of respondents said unauthorized migrants who have jobs and no criminal record should have a way to gain legal status. Only 25% of respondents said current deportation efforts are less aggressive than a month ago, but 70% said a less aggressive approach would be a positive change.",
    "highlightRules": {
      "bad-arguments": [{"words": ["generally support", "but 76%", "Only 25%"], "explanation": "Inconsistent framing without statistical significance"}],
      "feelings-check": [],
      "brain-check": [{"words": ["generally support", "generally", "down from"], "explanation": "Vague quantification without precision"}],
      "hidden-story": [],
      "us-vs-them": [],
      "value-check": [],
      "fake-check": [],
      "source-check": [{"words": ["Only 25%", "70%"], "explanation": "Percentages without margin of error or sampling method"}],
      "echo-chamber": [],
      "agenda-setting": [],
      "red-herring": [],
      "false-appeal": []
    },
    "standardViolations": [
      {"rule": "SOURCE_CHECK", "text": "No link to Reuters/Ipsos poll methodology"},
      {"rule": "CHRONOLOGY", "text": "No timeline for when \"down from 50%\" occurred"}
    ]
  },
  {
    "id": 11,
    "title": "Climate change framing shapes policy priorities",
    "source": "Reuters",
    "url": "https://www.reuters.com/sustainability/climate-change",
    "scientist": "baudrillard",
    "color": "#6366f1",
    "content": "Countries raised $107 billion last year by charging firms for emitting carbon dioxide, up 2% from 2024, the World Bank said in a report on Wednesday. The rise in carbon pricing comes as global temperatures continue to increase. Experts say climate change action must focus on preventing suffering rather than limiting emissions, particularly for those in the toughest conditions in the world's poorest countries. \"Climate change is not something that only impacts others—just as we all experience the weather,\" said Sherilee Harper, Vice-Chair of IPCC Working Group.",
    "highlightRules": {
      "bad-arguments": [{"words": ["toughest conditions", "experts say", "continue to increase"], "explanation": "Vague descriptors replacing quantifiable metrics"}],
      "feelings-check": [],
      "brain-check": [{"words": ["experts say", "toughest conditions"], "explanation": "Anonymous authority without attribution"}],
      "hidden-story": [{"words": ["only impacts others", "we all experience"], "explanation": "Universalizes impact without regional variation"}],
      "us-vs-them": [],
      "value-check": [{"words": ["prevent suffering", "poorest countries"], "explanation": "Moral framing without policy trade-offs discussion"}],
      "fake-check": [],
      "source-check": [],
      "echo-chamber": [],
      "agenda-setting": [],
      "red-herring": [],
      "false-appeal": []
    },
    "standardViolations": [
      {"rule": "SOURCE_CHECK", "text": "\"Experts say\" without attribution to specific study or researcher"},
      {"rule": "BALANCE", "text": "No counter-arguments about economic impact of carbon pricing"}
    ]
  },
  {
    "id": 12,
    "title": "Trump's immigration approval hits new low",
    "source": "AP News",
    "url": "https://apnews.com/hub/public-opinion",
    "scientist": "cialdini",
    "color": "#ec4899",
    "content": "Hispanic adults who helped re-elect President Donald Trump in 2024 are now deeply unhappy with his performance, according to a new AP-NORC poll. Hispanic adults who helped re-elect President Donald Trump in 2024 are now deeply unhappy with his performance, according to a new AP-NORC poll. How Trump's immigration crackdown is affecting everyday Americans, according to a new AP-NORC poll. Trump's approval on economy falls during Iran war, new AP-NORC poll shows. AP-NORC poll: Hispanic adults who helped re-elect President Donald Trump in 2024 are now deeply unhappy with his performance.",
    "highlightRules": {
      "bad-arguments": [{"words": ["deeply unhappy", "according to", "falls during"], "explanation": "Repetition for emphasis without new data"}],
      "feelings-check": [{"words": ["deeply unhappy", "impeachment", "criticism"], "explanation": "Emotive language replacing quantitative polling"}],
      "brain-check": [],
      "hidden-story": [],
      "us-vs-them": [],
      "value-check": [],
      "fake-check": [],
      "source-check": [],
      "echo-chamber": [{"words": ["new AP-NORC poll", "according to a new AP-NORC poll", "new AP-NORC poll shows"], "explanation": "Repetition without new information — creates illusion of consensus"}],
      "agenda-setting": [],
      "red-herring": [],
      "false-appeal": []
    },
    "standardViolations": [
      {"rule": "POLLING_TRANSPARENCY", "text": "No methodology details, only repeated \"AP-NORC poll\""},
      {"rule": "CONTEXT", "text": "No prior approval ratings for comparison in initial statement"}
    ]
  }
]
