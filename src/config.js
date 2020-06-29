module.exports = {
  siteTitle: 'Phat Nguyen | Software Engineer',
  siteDescription:
    'Phat Nguyen is a software engineer. Specially interested in back-end development.',
  siteKeywords:
    'Phat, Phat, Nguyen, n2phat, software engineer, back-end engineer, php, ruby, ruby on rails, javascript, asia',
  siteUrl: 'https://phat.live',
  siteLanguage: 'en_US',
  googleAnalyticsID: '',
  googleVerification: '',
  name: 'Phat Nguyen',
  location: 'Saigon, Vietnam',
  email: 'n2phat.work@gmail.com',
  github: 'https://github.com/mrwalruss',
  twitterHandle: '',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/mrwalruss',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/ph%C3%A1t-nguy%E1%BB%85n-a2a145a3/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
