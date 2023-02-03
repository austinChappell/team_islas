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
      'Doug Bush received his bachelor’s degree from the University of North Texas in music education and is an international clinician, adjudicator, educator, performer, and composer.  As a performer, Bush has worked with Grammy-nominated artists Poovalur Sriji, Horacio Hernandez, and Ignacio Berroa. As a composer, Bush has written solos, ensembles, and method index including the bestselling index for snare drum, Super Hands, Master Hands, and Opening Statement. Bush has been commissioned for original works performed for the TMEA Invited Percussion Ensemble, PASIC Invited Percussion Ensemble (High School), and Midwest Invited Percussion Ensemble concerts. Together with his wife, Patricia Islas they have written, arranged, and taught for numerous award-winning high school band programs including champions of the Thunder in the Hills Drumline Contest, HEB Drumline Contest, Plano Drumline Contest, North Texas Drumline Contest, Lewisville Drumline Contest, Lone Star Drumline Contest, PASIC Drumline Contest, and Texas State and BOA marching band champions. They have also served as percussion teachers and arrangers for World and Open Class Drum and Bugle corps. Doug Bush proudly endorses Mapex/Majestic Percussion, Pro-Mark Sticks and Mallets, Remo Drum Heads, SABIAN Cymbals, Beetle Percussion, and Lot Riot Apparel.',
    ],
    renderImage: () => <StaticImage alt="Doug Bush" src="../images/bios/doug.jpg" />,
  },
];
