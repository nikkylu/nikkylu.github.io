import { withBasePath } from '@/lib/site'

export type Project = {
  slug: string
  title: string
  year: string
  type: 'film' | 'photo' | 'installation' | 'research' | 'sound'
  status?: string
  tagline: string
  description: string
  medium: string
  location?: string
  cover?: string
  columns?: 1 | 2 | 3
  media: string[]
}

export const projects: Project[] = [
  {
    slug: 'particle-pixel-presence',
    title: 'Particle, Pixel, Presence',
    year: '2026',
    type: 'film',
    status: 'WIP',
    tagline: '16mm film and sound space installation',
    description: `Work in Progress. 16mm film and sound space instillation exploring human, nature, cosmo as interconnected entities. The project invites viewers to contemplate their place in the cosmos and the intricate web of relationships that define our existence as particles.`,
    medium: '16mm film · SEM imagery · electronic sound',
    columns: 1,

    cover: withBasePath('/photos/ppp/a.jpeg'),
    media: [
      withBasePath('/photos/ppp/a.jpeg'),
      withBasePath('/photos/ppp/b.jpeg'),
      withBasePath('/photos/ppp/c.jpeg'),
    ],
  },
    {
    slug: 'images-as-statements',
    title: 'Images as statements, identities as containers',
    year: '2025',
    type: 'photo',
    tagline: 'Photographic series',
    description: `Through nomadic living and adventures with remote landscapes, Nikky seeks to expose not only the impressions left by nature but also the traces of those experiences as they mark the self. Identity as a container made of flesh, open, vulnerable, and shaped by the very environments it inhabits. Photographs and videos here are not treated as transparent windows onto reality. Instead, they are statements—images as words, as voices carrying meaning independent of what they depict. Influenced by Roger Scruton’s reflections on photography, the project explores how images can hold and transmit the intensity of lived experience and imagination. Nature is not just observed and admired; it is endured, shed, and pressed against the body. Tactile encounters weave themselves into the visual record. Each image bears both the scar of the landscape and the vulnerability of human identity. The resulting body of work shows living as exposure: to experience and to be altered. Images speak as lived statements, while identity becomes a container with traces, a surface of flesh and experience.`,
    medium: '',
    columns: 1,

    cover: withBasePath('/photos/container/a.jpg'),
    media: [
      withBasePath('/photos/container/a.jpg'),
      withBasePath('/photos/container/b.jpg'),
      withBasePath('/photos/container/c.jpg'),
      withBasePath('/photos/container/d.jpg'),
      withBasePath('/photos/container/e.jpg'),
      withBasePath('/photos/container/f.jpg'),
    ],
  },
  {
    slug: 'as-we-left',
    title: 'As We Left, and Walk into Memories',
    year: '2023–2024',
    type: 'installation',
    tagline: 'Exhibited at Temporal Space, Brooklyn, NY in 2024.',
    description: `As We Left, and Walk into Memories documents the organic reconvergence with the house Nikky lived in as a child before 2010. Everything used 12 years ago was still untouched and kept in its 'original' condition. There was dust that accumulated over the years and cloth that dampened due to lack of maintenance.\n\nWhile photographing these objects, faded memories reemerge and subside onto physical particles. The process of photographing becomes a process of revisiting their childhood memories in the most vivid forms, as if walking into them, and perceiving them with an entirely different temporal identity.\n\nExhibited at Temporal Space, Brooklyn NY in 2024.`,
    medium: 'Photo installation',
    location: 'Temporal Space, Brooklyn NY',
    columns: 3,

    cover: withBasePath('/photos/memory/a.jpeg'),
    media: [
      withBasePath('/photos/memory/a.jpeg'),
      withBasePath('/photos/memory/b.jpeg'),
      withBasePath('/photos/memory/c.jpeg'),
      withBasePath('/photos/memory/d.jpeg'),
    ],
  },
  {
    slug: 'whos-been-found-by-the-water',
    title: "Who's Been Found by the Water",
    year: '2024',
    type: 'photo',
    tagline: 'Photographic series',
    description: ``,
    medium: '',
    columns: 2,

    cover: withBasePath('/photos/corpse/k.jpeg'),
    media: [
      withBasePath('/photos/corpse/a.jpeg'),
      withBasePath('/photos/corpse/b.jpeg'),
      withBasePath('/photos/corpse/c.jpeg'),
      withBasePath('/photos/corpse/d.jpeg'),
      withBasePath('/photos/corpse/e.jpeg'),
      withBasePath('/photos/corpse/f.jpeg'),
      withBasePath('/photos/corpse/g.jpeg'),
      withBasePath('/photos/corpse/h.jpeg'),
      withBasePath('/photos/corpse/i.jpeg'),
      withBasePath('/photos/corpse/j.jpeg'),
      withBasePath('/photos/corpse/k.jpeg'),
      withBasePath('/photos/corpse/l.jpeg'),
    ],
  },
//   {

//     slug: 'water',
//     title: 'Water',
//     year: '2024',
//     type: 'photo',
//     tagline: 'The proximity to a vast water body has been a defining anchor in my life since childhood. I almost never photo humans, but I would like to be with water together this time.',
//     description: `The proximity to a vast water body has been a defining anchor in my life since childhood. I almost never photograph humans, but I would like to be with water together this time.\n\nShot on 35mm film.`,
//     medium: '35mm film',
//     columns: 3,

//     cover: '/photos/water/a.jpeg',
//     media: [
//       '/photos/water/a.jpeg',
//       '/photos/water/b.jpeg',
//       '/photos/water/c.jpeg',
//       '/photos/water/d.jpeg',
//       '/photos/water/e.jpeg',
//     ],
//   },
  {
    slug: 'we-stare-into-the-world',
    title: 'We Stare into the World and See Ourselves',
    year: '2022',
    type: 'photo',
    tagline: 'Photographic series',
    description: ``,
    medium: '',
    columns: 2,

    cover: withBasePath('/photos/world/a.jpeg'),
    media: [
      withBasePath('/photos/world/a.jpeg'),
      withBasePath('/photos/world/b.jpeg'),
      withBasePath('/photos/world/c.jpeg'),
      withBasePath('/photos/world/d.jpeg'),
      withBasePath('/photos/world/e.jpeg'),
      withBasePath('/photos/world/f.jpeg'),
      withBasePath('/photos/world/g.jpeg'),
      withBasePath('/photos/world/h.jpeg'),
      withBasePath('/photos/world/i.jpeg'),
      withBasePath('/photos/world/j.jpeg'),
      withBasePath('/photos/world/k.jpeg'),
      withBasePath('/photos/world/l.jpeg'),
      withBasePath('/photos/world/m.jpeg'),
      withBasePath('/photos/world/n.jpeg'),
      withBasePath('/photos/world/o.jpeg'),
      withBasePath('/photos/world/p.jpeg'),
      withBasePath('/photos/world/q.jpeg'),
    ],
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug)
}
