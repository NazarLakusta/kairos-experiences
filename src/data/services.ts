export type Service = {
  id: string
  name: string
  duration: string
  price: string
  summary: string
  detail: string
  capacity: string
}

export const services: Service[] = [
  {
    id: 'atelier-tasting',
    name: 'Atelier Tasting',
    duration: '2.5 hrs',
    price: 'from $180',
    summary: 'A guided sensory tasting built around seasonal produce and quiet conversation.',
    detail:
      'Six small plates, paired infusions, and a short process talk with our resident chef. Ideal for couples or small creative teams who want focus without formality.',
    capacity: '2–6 guests',
  },
  {
    id: 'sound-ritual',
    name: 'Sound Ritual',
    duration: '75 min',
    price: 'from $95',
    summary: 'Immersive resonance session with live instruments and low light.',
    detail:
      'Lying down, eyes soft — crystal bowls, voice, and textured percussion move through the room in waves. No talking required. Arrive early to settle.',
    capacity: '1–12 guests',
  },
  {
    id: 'table-private',
    name: 'Private Table',
    duration: '3 hrs',
    price: 'from $320',
    summary: 'A closed-door dinner scored like a short film — courses, pacing, and silence designed.',
    detail:
      'Menu locked two days before. Optional wine pairing. The room holds one party only. Perfect for milestones you do not want announced to a dining room.',
    capacity: '4–10 guests',
  },
  {
    id: 'studio-day',
    name: 'Studio Day',
    duration: 'Full day',
    price: 'from $890',
    summary: 'The whole house for a brand shoot, workshop, or offsite with kitchen and garden access.',
    detail:
      'Includes room reset, morning briefing, light lunch, and golden-hour terrace. Add catering or a facilitator on request.',
    capacity: 'up to 16 guests',
  },
]

export const timeSlots = [
  '10:00',
  '11:30',
  '13:00',
  '15:00',
  '17:00',
  '19:00',
] as const

export const processSteps = [
  {
    n: '01',
    title: 'Choose the form',
    text: 'Pick a service that matches the energy you want — tasting, ritual, table, or the full house.',
  },
  {
    n: '02',
    title: 'Lock a moment',
    text: 'Select a date and time. We confirm within a few hours with prep notes and arrival details.',
  },
  {
    n: '03',
    title: 'Arrive present',
    text: 'The space is set before you walk in. You only bring yourself — and whoever the moment is for.',
  },
] as const
