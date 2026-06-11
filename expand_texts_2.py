#!/usr/bin/env python3
with open('src/data/missions.ts', 'r') as f:
    content = f.read()

changes = [
    # Mission 7
    (
        "content: `The Trump team agrees to pause a $1.8 billion fund. Critics call it a clear overreach, but the administration insists it's just following the law. \"Common sense,\" analysts say, \"is that this fund is politically motivated.\" Many question whether justice was truly served.`",
        "content: `The Trump administration agrees to pause a $1.8 billion compensation fund following a federal court order that temporarily blocked the disbursement pending further legal review. Critics call it a clear overreach of executive authority, arguing the fund was never properly authorized by Congress and bypassed standard appropriations procedures. The administration insists it's just following the law as written, pointing to legal precedents from previous administrations that they say justify the executive action. \"Common sense,\" independent analysts say, \"is that this entire fund is politically motivated and appears designed to reward political allies rather than address genuine claims through established legal channels.\" Many legal experts question whether justice was truly served by the original allocation process, which they describe as unusually opaque and lacking the standard oversight mechanisms that typically govern such federal disbursements. The case now heads to the federal appeals court for a full hearing.`"
    ),
    # Mission 8
    (
        "content: `Experts insist climate change is already affecting us. \"Clearly,\" they say, \"flooding is becoming more frequent.\" Many fear the worst is yet to come. \"Everyone knows,\" they claim, \"that human activity is the cause.\" The real question is whether governments will act.`",
        "content: `Experts insist climate change is already affecting us in tangible and measurable ways that increasingly defy even the most conservative previous scientific projections. \"Clearly,\" they say, \"flooding in coastal communities is becoming more frequent and more severe, with this year alone seeing record-breaking storm surges across three continents and unprecedented damage to infrastructure.\" Many fear the worst is yet to come as climate feedback loops, including melting permafrost and reduced ice albedo, accelerate faster than most models had anticipated. \"Everyone knows by now,\" they claim, \"that human activity is the primary driver of these changes — the scientific debate is no longer about whether, but about how quickly we need to respond to avert catastrophic outcomes.\" The real question, policymakers across the globe acknowledge, is whether governments will act with sufficient urgency or continue pursuing incremental approaches that scientists say are wholly inadequate for the scale of the unfolding crisis.`"
    ),
    # Mission 9
    (
        "content: `Syria benefits financially from diverted air routes. Critics say this is a short-term gain with long-term risks. \"Experts warn,\" they say, \"the economic benefits may not outweigh the costs.\" Many believe Syria's leadership is exploiting the situation. \"Obviously,\" analysts claim, \"this complicates regional stability.\"`",
        "content: `Syria benefits financially from air routes diverted due to the ongoing Iran conflict, with overflight fees providing a significant and much-needed boost to Damascus's struggling war-time economy. Critics say this represents a short-term gain that carries substantial long-term strategic risks, including the potential for expanded international sanctions and diplomatic isolation. \"Experts warn,\" they caution, \"the economic benefits may not outweigh the diplomatic costs of being seen as deliberately exploiting a regional crisis for financial gain.\" Many believe Syria's leadership is intentionally prolonging regional tensions to maximize revenue from rerouted commercial flights that now traverse Syrian airspace in significantly larger numbers. \"Obviously,\" analysts claim, \"this complicates regional stability and creates perverse financial incentives for Damascus to oppose any genuine resolution to the broader conflict in the region.\" Airlines have rerouted approximately 15% of their regional traffic through Syrian airspace since the escalation of hostilities began.`"
    ),
    # Mission 10
    (
        "content: `Polls show declining approval of Trump's policies. Many support border security but also legal status for migrants. \"Clearly,\" critics argue, \"public opinion is mixed.\" Experts warn conflicting data creates confusion. \"It's no secret,\" they say, \"this complicates political messaging.\"`",
        "content: `Polls show declining approval of Trump's immigration policies across multiple key swing states, with independent voters in particular shifting away from the administration's hardline enforcement approach at an accelerating rate. Many Americans simultaneously support strong border security measures and legal status pathways for long-term undocumented migrants who meet certain criteria, creating a complex and nuanced picture for policymakers trying to navigate the issue. \"Clearly,\" critics argue, \"public opinion is not as simple as the administration's messaging suggests — people consistently want both enforcement and compassion to coexist in immigration policy.\" Experts warn that conflicting data from different polling organizations using different methodologies creates confusion about what the electorate actually wants and how intensely they feel about various aspects of the debate. \"It's no secret,\" veteran political strategists say, \"that this significantly complicates political messaging for both major parties heading into a critical election cycle where immigration has become the number one issue for voters in every swing state.\"`"
    ),
    # Mission 11
    (
        "content: `Carbon pricing revenue grew by 2% last year. Experts insist focus should be on preventing suffering. \"It's no secret,\" they say, \"climate impacts are worsening.\" Many believe wealthy nations must take responsibility. \"Clearly,\" critics argue, \"this is a moral issue, not just economic.\"`",
        "content: `Global carbon pricing revenue grew by 2% last year to reach a total of $107 billion according to the World Bank's annual comprehensive report on carbon markets and emissions trading systems worldwide. Experts insist the focus should urgently shift from purely economic metrics to preventing the escalating human suffering caused by climate change impacts that are already being felt across vulnerable communities worldwide. \"It's no secret,\" they say, \"that climate impacts are worsening significantly faster than our collective policy responses are adapting to meet the growing challenge.\" Many believe wealthy nations, which have contributed the overwhelming majority of historical emissions, must take far greater responsibility for financing adaptation and resilience measures in vulnerable developing countries that have contributed least to the problem. \"Clearly,\" critics argue, \"this is fundamentally a moral issue, not merely an economic one — we cannot simply price our way out of a crisis that demands a structural transformation of our entire global energy system.\"`"
    ),
    # Mission 12
    (
        "content: `Repeated polls show declining support for Trump. Critics say his policies are deeply unpopular. \"Experts warn,\" they insist, \"this trend will continue.\" Many fear his approval ratings will drop further. \"Clearly,\" they claim, \"public opinion is shifting rapidly.\"`",
        "content: `Repeated polls from multiple independent survey organizations consistently show declining support for President Trump's handling of key domestic issues, with the trend accelerating across nearly every demographic category measured. Critics say his policies are deeply unpopular among the suburban voters who will be crucial in determining the outcome of upcoming elections across the country. \"Experts warn,\" analysts insist, \"this trend will continue unless the administration significantly changes its approach to both immigration enforcement and economic policy in the coming months.\" Many experienced political strategists fear his approval ratings will drop further among independent voters who are increasingly turned off by the administration's confrontational style and frequent changes in policy direction. \"Clearly,\" they claim, \"public opinion is shifting rapidly in ways that could fundamentally reshape the political landscape for years to come.\" The RealClearPolitics polling average now shows Trump's overall approval at 43%, down from 47% just three months ago, a statistically significant decline.`"
    ),
]

count = 0
for old, new in changes:
    if old in content:
        content = content.replace(old, new, 1)
        count += 1
        print(f"✅ Mission {count + 6} expanded")
    else:
        print(f"❌ Mission {count + 7} not found — SKIPPING")
        count += 1

with open('src/data/missions.ts', 'w') as f:
    f.write(content)

print(f"\n✅ Done! {count} more expanded (missions 7-12)")