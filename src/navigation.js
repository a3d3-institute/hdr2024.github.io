import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  isFullWidth: true,
  links: [
    {
      text: 'About',
      links: [
        {
          text: 'HDR Ecosystem',
          href: getPermalink('/hdr'),
        },
        {
          text: 'Conference Series',
          href: getPermalink('/series'),
        },
        {
          text: 'Goals',
          href: getPermalink('/goals'),
        },
        {
          text: 'Code-of-Conduct',
          href: getPermalink('/coc'),
        },
        {
          text: 'Organizing Committee',
          href: getPermalink('/committee'),
        },
        {
          text: 'Administrative Staff',
          href: getPermalink('/staff'),
        },
      ],
    },
    {
      text: 'Speakers',
      links: [
        {
          text: 'Keynote Speaker',
        href: getPermalink('/keynote-speaker'),
        },
        {
          text: 'Public Lecture',
          href: getPermalink('/public-lecture'),
        },
      ],
    },
    {
      text: 'Agenda',
      links: [
        {
          text: 'At-a-glance',
        href: getPermalink('/at-a-glance'),
        },
        {
          text: 'Detailed',
          href: 'https://indico.cern.ch/event/1364455/timetable',
        },
      ],
    },
    {
      text: 'Practical',
      links: [
        {
          text: 'Venue',
          href: getPermalink('/venue'),
        },
        {
          text: 'Getting Here',
          href: getPermalink('/getting-here'),
        },
        {
          text: 'Parking',
          href: getPermalink('/parking'),
        },
        {
          text: 'Accommodation',
          href: getPermalink('/accommodation'),
        },
        {
          text: 'Getting Around',
          href: getPermalink('/getting-around'),
        },
        {
          text: 'Restaurants',
          href: getPermalink('/restaurants'),
        },
        {
          text: 'Explore C-U',
          href: 'https://www.tripadvisor.com/Attractions-g36806-Activities-a_allAttractions.true-Urbana_Champaign_Urbana_Illinois.html',
        },
      ],
    },
    {
      text: 'Services',
      links: [
        {
          text: 'Videoconferencing',
          href: getPermalink('/videoconf'),
        },
        {
          text: 'Closed Captioning',
          href: getPermalink('/captioning'),
        },
      ],
    },
    {
      text: 'Registration',
      href: 'https://indico.cern.ch/event/1364455/registration',
    },
    {
      text: 'Conduct',
      href: getPermalink('/coc'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
};

export const footerData = {
  links: [
  ],
  secondaryLinks: [
  ],
  socialLinks: [
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="src/assets/images/2024_HDR_Ecosystem_Logo_Small.png" alt="conference logo" loading="lazy"></img>
    2024 NSF HDR Conference. All rights reserved.
  `,
};
