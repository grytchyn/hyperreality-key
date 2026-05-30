// ── TIER 1 QUESTIONS — English Only ──
import type { EthosPathosLogosQuestion, FallacyQuestion, BiasQuestion } from '../types'

export const EPL_QUESTIONS: EthosPathosLogosQuestion[] = [
  { statement: '"9 out of 10 doctors recommend this product."', correctAnswer: 'ethos', explanation: 'Authority (doctors) used as credibility — classic Ethos.' },
  { statement: '"Imagine if it were your child. Would you still hesitate?"', correctAnswer: 'pathos', explanation: 'Appeals to emotion (fear for your child) — pure Pathos.' },
  { statement: '"Studies show a 95% correlation between X and Y."', correctAnswer: 'logos', explanation: 'Relies on data and statistics — classic Logos.' },
  { statement: '"As a Nobel laureate, I can assure you this is correct."', correctAnswer: 'ethos', explanation: 'Uses personal authority to persuade — Ethos.' },
  { statement: '"This policy will destroy everything we love."', correctAnswer: 'pathos', explanation: 'Emotional fear-mongering — Pathos.' },
  { statement: '"If A > B and B > C, then A > C must be true."', correctAnswer: 'logos', explanation: 'Uses logical structure — Logos.' },
  { statement: '"Trust me, I have 20 years of experience."', correctAnswer: 'ethos', explanation: 'Appeal to experience and authority — Ethos.' },
  { statement: '"Think of the children! They deserve better."', correctAnswer: 'pathos', explanation: 'Emotional appeal about children — Pathos.' },
  { statement: '"According to peer-reviewed research published in Nature..."', correctAnswer: 'logos', explanation: 'Cites academic authority — Logos.' },
]

export const FALLACY_QUESTIONS: FallacyQuestion[] = [
  {
    statement: '"You can\'t trust his argument about climate — he drives a gas car!"',
    correctAnswer: 'ad-hominem',
    options: [{ id: 'ad-hominem', label: 'Ad Hominem (Attack the person)' }, { id: 'straw-man', label: 'Straw Man (Twist their argument)' }, { id: 'false-dilemma', label: 'False Dilemma (Only 2 choices)' }, { id: 'slippery-slope', label: 'Slippery Slope (One thing leads to disaster)' }],
    explanation: 'Attacks the person instead of the argument — classic Ad Hominem.',
  },
  {
    statement: '"So you\'re saying we should just let criminals run free?" (when they argued for prison reform)',
    correctAnswer: 'straw-man',
    options: [{ id: 'ad-hominem', label: 'Ad Hominem' }, { id: 'straw-man', label: 'Straw Man' }, { id: 'bandwagon', label: 'Bandwagon (Everyone does it)' }, { id: 'false-cause', label: 'False Cause (X before Y means X caused Y)' }],
    explanation: 'Misrepresents the original argument to make it easier to attack — Straw Man.',
  },
  {
    statement: '"Either you support this bill, or you hate our country."',
    correctAnswer: 'false-dilemma',
    options: [{ id: 'ad-hominem', label: 'Ad Hominem' }, { id: 'straw-man', label: 'Straw Man' }, { id: 'false-dilemma', label: 'False Dilemma' }, { id: 'bandwagon', label: 'Bandwagon' }],
    explanation: 'Presents only two extreme options when many exist — False Dilemma.',
  },
  {
    statement: '"If we allow same-sex marriage, next people will marry animals!"',
    correctAnswer: 'slippery-slope',
    options: [{ id: 'slippery-slope', label: 'Slippery Slope' }, { id: 'ad-hominem', label: 'Ad Hominem' }, { id: 'false-dilemma', label: 'False Dilemma' }, { id: 'false-cause', label: 'False Cause' }],
    explanation: 'Assumes one small change leads to extreme outcomes without evidence — Slippery Slope.',
  },
  {
    statement: '"Millions of people buy this product — it must be good!"',
    correctAnswer: 'bandwagon',
    options: [{ id: 'slippery-slope', label: 'Slippery Slope' }, { id: 'ad-hominem', label: 'Ad Hominem' }, { id: 'bandwagon', label: 'Bandwagon' }, { id: 'false-dilemma', label: 'False Dilemma' }],
    explanation: 'Argues popularity equals quality — Bandwagon fallacy.',
  },
  {
    statement: '"Ever since the mayor took office, crime went up. He caused it."',
    correctAnswer: 'false-cause',
    options: [{ id: 'bandwagon', label: 'Bandwagon' }, { id: 'false-cause', label: 'False Cause' }, { id: 'slippery-slope', label: 'Slippery Slope' }, { id: 'straw-man', label: 'Straw Man' }],
    explanation: 'Assumes that because B happened after A, A caused B — False Cause.',
  },
]

export const BIAS_QUESTIONS: BiasQuestion[] = [
  {
    statement: 'You only read news that confirms what you already believe.',
    correctAnswer: 'confirmation-bias',
    options: [{ id: 'confirmation-bias', label: 'Confirmation Bias (Seek what confirms)' }, { id: 'anchoring', label: 'Anchoring (First number sets the frame)' }, { id: 'framing', label: 'Framing (How it\'s presented matters)' }, { id: 'availability', label: 'Availability (Vivid examples feel common)' }],
    explanation: 'We seek information that confirms our existing beliefs — Confirmation Bias.',
  },
  {
    statement: '"A plane crash kills 200 people. Now everyone fears flying, though car accidents kill far more."',
    correctAnswer: 'availability',
    options: [{ id: 'anchoring', label: 'Anchoring' }, { id: 'framing', label: 'Framing' }, { id: 'availability', label: 'Availability' }, { id: 'confirmation-bias', label: 'Confirmation Bias' }],
    explanation: 'Vivid, memorable events seem more common than they are — Availability Heuristic.',
  },
  {
    statement: '"The first price you see was $500. Now $350 seems like a steal."',
    correctAnswer: 'anchoring',
    options: [{ id: 'anchoring', label: 'Anchoring' }, { id: 'framing', label: 'Framing' }, { id: 'availability', label: 'Availability' }, { id: 'confirmation-bias', label: 'Confirmation Bias' }],
    explanation: 'The first piece of information sets a reference point — Anchoring Effect.',
  },
  {
    statement: '"90% survival rate" sounds better than "10% death rate" — same fact, different feeling.',
    correctAnswer: 'framing',
    options: [{ id: 'anchoring', label: 'Anchoring' }, { id: 'framing', label: 'Framing' }, { id: 'availability', label: 'Availability' }, { id: 'confirmation-bias', label: 'Confirmation Bias' }],
    explanation: 'How information is presented changes how we feel about it — Framing Effect.',
  },
  {
    statement: '"I\'m bad at math, so I\'ll never understand economics."',
    correctAnswer: 'dunning-kruger',
    options: [{ id: 'anchoring', label: 'Anchoring' }, { id: 'framing', label: 'Framing' }, { id: 'dunning-kruger', label: 'Dunning-Kruger (Over/underestimate skill)' }, { id: 'availability', label: 'Availability' }],
    explanation: 'Overestimating or underestimating one\'s ability — Dunning-Kruger Effect.',
  },
]
