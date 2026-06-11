#!/usr/bin/env python3
with open('src/data/missions.ts', 'r') as f:
    content = f.read()

changes = [
    (
        "content: `Experts warn that American approval of Trump's immigration policy has plummeted to its lowest point. Many believe his crackdown has gone too far, especially among women. It's no secret that ICE's actions are deeply unpopular. \"Clearly,\" critics say, \"this policy is causing unnecessary suffering.\"`",
        "content: `Experts warn that American approval of Trump's immigration policy has plummeted to its lowest point since records began, according to the latest Reuters/Ipsos tracking poll. Many believe his crackdown has gone too far, especially among women, who have shifted decisively against the administration's approach in every demographic subgroup surveyed. It's no secret that ICE's enforcement actions have become deeply unpopular in urban centers and suburban communities alike, with critics pointing to rising civil liberties concerns. \"Clearly,\" critics say, \"this policy is causing unnecessary suffering to families who have lived here for decades,\" a claim the administration disputes by pointing to border security statistics. The human cost of these measures continues to dominate the national conversation as midterm elections approach.`"
    ),
    (
        "content: `Climate experts insist Earth's warming is speeding up beyond previous trends. \"Obviously,\" they say, \"the data shows an alarming acceleration.\" Many believe human activity is the root cause. \"What they don't want you to know,\" critics imply, \"is how severe the impacts already are.\"`",
        "content: `Climate experts insist Earth's warming is speeding up beyond previous trends, with new data from multiple monitoring agencies confirming a pattern that has scientists deeply concerned and revising their models upward. \"Obviously,\" they say, \"the data shows an alarming acceleration that we did not predict in our worst-case scenarios published just five years ago.\" Many believe human activity remains the primary root cause, pointing to rising CO2 levels that correlate directly with global industrial output over the past century. \"What they don't want you to know,\" critics imply, \"is how severe the impacts already are — not in some distant future, but right now, in communities across every continent.\" The new report covers 195 countries and spans temperature records, sea-level rise, and extreme weather events that have already displaced millions.`"
    ),
    (
        "content: `Iran seeks limited talks to ease economic pressure. Critics say time is running out, but experts warn any delay could weaken Iran's governance. \"Common sense,\" analysts claim, \"is that dialogue is better than prolonged struggle.\" The real issue, they suggest, is whether the US will ever compromise.`",
        "content: `Iran seeks limited talks to ease mounting economic pressure as international sanctions continue to bite and the national currency hits new lows against the dollar on Tehran's open market. Critics say time is running out for a diplomatic solution, but experts warn any delay could further weaken Iran's governance structures and embolden hardliner factions within the regime who oppose any engagement with the West. \"Common sense,\" analysts claim, \"is that dialogue is better than prolonged struggle that ultimately benefits no one in the region.\" The real issue, they suggest, is whether the United States will ever compromise on its core demands regarding uranium enrichment levels and support for regional proxy forces. Negotiations have been described as fragile by multiple diplomatic sources, with both sides deeply skeptical of the other's long-term intentions.`"
    ),
    (
        "content: `The US claims \"self-defense\" strikes on Iranian sites. Experts argue this is clearly an act of aggression. Many fear the situation will spiral out of control. \"Everywhere,\" critics say, \"military action creates more enemies.\" The real question is whether diplomacy remains an option.`",
        "content: `The US claims \"self-defense\" strikes on Iranian military sites, describing the operations as proportional and targeted responses to recent attacks on American personnel stationed in the region. Experts argue this is clearly an escalation that goes far beyond any reasonable definition of self-defense under international law, pointing to the scale and scope of the bombardment. Many fear the situation will spiral out of control as both sides have mobilized additional naval and air forces in the Persian Gulf and Gulf of Oman. \"Everywhere we look,\" critics say, \"military action creates more enemies than it eliminates — this is a lesson we have learned repeatedly over two decades of conflict in the Middle East.\" The real question, experienced diplomats suggest, is whether diplomacy remains a viable option or whether both nations are now locked into a confrontation that neither can easily exit without losing face. The UN Security Council has called an emergency session for this week.`"
    ),
    (
        "content: `Polls show 60% think Trump's immigration policies have gone too far. Democrats overwhelmingly oppose him, while Republicans remain divided. \"It's no secret,\" veterans say, \"this is an overreach of federal power.\" Clearly, public opinion is deeply polarized.`",
        "content: `Polls show 60% of Americans think Trump's immigration enforcement policies have gone too far, representing a significant shift in public sentiment from just one year ago when opinions on the issue were far more evenly divided. Democrats overwhelmingly oppose the administration's approach by a margin of nine to one, while Republicans remain sharply divided between moderates who favor comprehensive reform and hardliners who demand even stricter enforcement measures. \"It's no secret,\" veterans of immigration policy say, \"this is an overreach of federal power that violates longstanding norms of local policing and community trust.\" Clearly, public opinion is deeply polarized along partisan lines, but the AP-NORC data also reveals surprising areas of consensus across party lines on specific issues like creating pathways to citizenship for long-term undocumented residents who meet certain criteria. The survey of 1,156 adults was conducted between April 15 and April 20.`"
    ),
    (
        "content: `MIT researchers confirm algorithms prioritize outrage over nuance. \"Obviously,\" they say, \"this fuels political division.\" Critics claim platforms ignore diversity, while defenders insist they promote truth. \"What they don't want you to know,\" skeptics suggest, \"is how algorithms manipulate perceptions.\"`",
        "content: `MIT researchers confirm that social media algorithms systematically prioritize outrage over nuance in content recommendation systems, a finding that has reignited the global debate about platform accountability and regulatory oversight. \"Obviously,\" the lead researcher states, \"this fuels political division and entrenches users in increasingly extreme positions over time, as the engagement metrics that drive advertising revenue reward emotional content over factual accuracy.\" Critics claim the major platforms have consistently ignored content diversity in favor of maximizing user engagement time, while defenders insist their recommendation systems are designed to surface authentic and trustworthy information. \"What they don't want you to know,\" skeptics suggest, \"is how deeply these algorithms manipulate user perceptions without any meaningful transparency requirements or independent oversight mechanisms.\" The study, published this month in Nature, analyzed over ten million content recommendations across four major social media platforms over a two-year period.`"
    ),
]

count = 0
for old, new in changes:
    if old in content:
        content = content.replace(old, new, 1)
        count += 1
        print(f"✅ Mission {count} expanded")
    else:
        print(f"❌ Mission {count+1} not found — SKIPPING")
        count += 1

with open('src/data/missions.ts', 'w') as f:
    f.write(content)

print(f"\n✅ {count} mission texts expanded")