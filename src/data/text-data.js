import {
  IMobile, IPalette, IReact, ISEO, IWordpress,
} from '../components/common/Icons';

const bannerText = {
  greetings: 'Hey! I`m',
  owner_name: 'Yurii',
  owner_intro: 'Passioned, highly-motivated and hard-working Web developer.',
};

const servicesText = {
  section_title: 'Services',
  section_subtitle: 'The skills to pay the bills.',
  services_list: [
    {
      icon: IReact,
      title: 'Build Single-Page Application',
      description: `You've saw many times these cool sites which don't reload after going to another page? It's a SPA? 
        Do you want the same? Just write me.`,
    },
    {
      icon: IMobile,
      title: 'Mobile app developing',
      description: 'Are you looking for an mobile app? And you want it to work on Android and iOS. Let\'s chat!',
    },
    {
      icon: IWordpress,
      title: 'Wordpress Developing',
      description: 'You have a website, but you don`t imagine how change content? So, in this case, you need a content management system and I`ll help you with it',
    }, {
      icon: IPalette,
      title: 'Creating sites from existing design',
      description: 'Do you have a design and you don`t know how make it alive? I can help you with this problem.',
    }, {
      icon: ISEO,
      title: 'Search Engine Optimization',
      description: 'Would you like to see your website on the first position in search results? You are in the right place :)',
    },
  ],
};

const aboutText = {
  section_title: 'About',
  section_subtitle: 'Let`s explore more information about me and my experience',
  bio_title: 'Bio',
  bio_info: 'Hi again! My name is Yurii and I am Software Engineer from beautiful old city Lviv (Ukraine).\n'
      + '      I am passioned in programming, constantly trying to learn and implement something new.\n'
      + '      Beside engineering I fond of hiking, reading books and playing video games.',
  exp_title: 'Work experience',
  exp_list: [
    {
      title: 'JavaScript Software Engineer',
      company: 'EPAM Systems',
      duration: '2020-now',
      site: 'https://epam.com',
    }, {
      title: 'Front-end Engineer',
      company: 'UPQODE',
      duration: 'May 2019- November 2020',
      site: 'https://upqode.com',
    },
  ],
  exp_years: '2 Years of experience',
  portfolio_label: 'See portfolio',
  cv_link: 'https://drive.google.com/open?id=16diMItjPj-x6-Ah24nQpR4CJPqPee3NP',
  cv_link_label: 'Download CV',
};

const contactText = {
  section_title: 'Contact',
  section_subtitle: 'Available for work. Get in touch',
};

export {
  bannerText, servicesText, aboutText, contactText,
};
