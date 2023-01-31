import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import DougImage from '../images/bios/doug.jpg';
import PatriciaImage from '../images/bios/patricia.jpg';

export const BIOS = [
  {
    title: 'Patricia Islas',
    image: PatriciaImage,
    paragraphs: [
      'Patricia Islas is a performer, composer, arranger, adjudicator and educator in the Dallas area. Mrs. Islas is a graduate of the University of North Texas and holds a bachelor’s degree in music performance. While at North Texas, Mrs. Islas studied percussion under Mark Ford, Dr. Robert Schietroma, Christopher Deane, Paul and Sandi Rennick among others. She has also studied marimba with She-e Wu and Leigh Howard Stevens. With an interest in a variety of musical styles, Mrs. Islas performed with the Indoor Drumline, South Indian, Gamelan, Contemporary, and Classical Percussion ensembles while at North Texas. She also performed with the University of North Texas Symphonic Band under the direction of Dennis Fisher.',
      'In 2002 Mrs. Islas received the award for the Best Individual Keyboard Soloist at the Percussive Arts Society International Convention. Mrs. Islas was a winner of the UNT Concerto Competition in 2004, which led to performing with the Richardson Symphony Orchestra. During her time performing in the UNT Drumline, they were awarded first place at consecutive PASIC Drumline Contests. Mrs. Islas has performed at several music conventions including Marimba 2010 Festival and Conference, PASIC and SEMUS, Society for Electro-Acoustic Music in the United States.',
      'Since graduating Mrs. Islas has been an educator in the Dallas area for several years. Mrs. Islas has arranged and taught drumlines who have won numerous Outstanding Front Ensemble, Best Arrangement, and First Place awards. In addition to her work with many Dallas area schools, Mrs. Islas spent the summers of 2004, 2005, and 2006 arranging music and serving as frontline technician for the Southwind Drum and Bugle Corps. Mrs. Islas also taught the 2007 Blue Knights front ensemble.',
      'Recently Mrs. Islas has performed clinics for many DFW area high schools along with Lone Star Percussion, A&M University Commerce, the Minnesota Day of Percussion and the Iowa Day of Percussion. Mrs. Islas has also been an adjudicator for several drumline and concert percussion contests including The Sun City Throwdown in El Paso. In 2011 and 2014 Patricia traveled to London to meet with Grammy winner Imogen Heap after contributing to a song titled “Lifeline” off of Imogen’s latest album. Currently Mrs. Islas is performing and composing music for her contemporary musical duo Team Islas who has performed several times with Grammy nominated and Grammy winning musicians. Patricia Islas proudly represents Lot Riot, Pro-Mark Sticks and Mallets, and Majestic Percussion.',
    ],
    renderImage: () => <StaticImage alt="Patricia Islas" src="../images/bios/patricia.jpg" />,
  },
  {
    title: 'Doug Bush',
    image: DougImage,
    paragraphs: [
      'Doug Bush received his bachelor’s degree from University of North Texas in music education. His marching performance career included two seasons with the Phantom Legion (1997-1998), one with the Madison Scouts (2000), and one with the 2002 PASIC Champion University of North Texas Drum Line. Bush has received first, second and third place honors as a performer and educator in various bass ensembles for both DCI and PASIC and from 2004 - 2010 bass lines under his instruction received consistent first or second place finishes in the DCI Solo and Ensemble Competition. Bush has also studied and performed African, South Indian, Afro-Cuban, Jazz and Orchestral percussion with notable educators Poovalur Srinivasan, Jeff Prosperie, Jeff Moore, Paul and Sandi Rennick, Jim Yakas, Christopher Deane, and Ed Smith and is an international clinician, arranger, and educator. He has been teaching percussion at several Texas State Marching Band champion, PASIC Drumline Contest champion and Lone Star Drumline Contest champion schools in the North Texas area for the past fifteen years as well as the University of North Texas Marching Band and Austin College in Sherman, Texas. He served as the bass tech for the Southwind Drum and Bugle Corps for four years (2003-2006), as well as two years as a co-arranger and a member of the design team (2005-2006). Bush was the bass tech for the Blue Knights Drum and Bugle Corps in 2007 and a Consultant for the Blue Knights Drum and Bugle Corps from 2008 to 2011. In 2009, he also instructed the DCA A-Class drum champions The Vigilantes. Bush is the author of the acclaimed intermediate rudimental drumming book Super Hands.',
      'Doug Bush is an endorsee for Lot Riot apparel, Remo Drum Heads, Mapex and Majestic Percussion, Beetle Percussion, Dream Cymbals and Gongs and Pro-Mark Sticks and Mallets where he is the designer of the Optima Bass Drum Mallets. He is currently living in Plano, Texas, where he performs drum set and hand drums with the contemporary duo Team Islas.',
    ],
    renderImage: () => <StaticImage alt="Doug Bush" src="../images/bios/doug.jpg" />,
  },
];
