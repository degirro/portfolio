export type WorkDataType = {
    img: string;
    url: string;
    name: string;
    desc: string;
    stack: string[]
}

export const ProfessionalWorkData: WorkDataType[] = [
    {
        img: '',
        url: 'https://www.i-buy-exotics.com',
        name: 'i Buy Exotics',
        desc: 'Website designed for exotic car trading',
        stack: ['React', 'Express.js']
    },
    {
        img: '',
        url: 'https://www.catalystautogroup.com',
        name: 'Catalyst Auto Group',
        desc: 'Business providing exotic car rental services',
        stack: ['Wordpress']
    },
    {
        img: '',
        url: 'https://www.exoticdetailsct.com',
        name: 'Exotic Details',
        desc: 'Business provding car detailing services',
        stack: ['Wordpress']
    },
    {
        img: '',
        url: 'https://www.brattdentalcare.com/',
        name: 'Brattleboro Dental Care',
        desc: 'Family-owned dental business',
        stack: ['Wordpress']
    },
    {
        img: '',
        url: 'https://www.thetechteamct.com',
        name: 'The Tech Team',
        desc: 'Small business providing tech repair and software solutions',
        stack: ['Wordpress']
    },
]

export const ProjectsData: WorkDataType[] = [
    {
        img: '',
        url: 'https://www.github.com/degirro/weatherwise',
        name: 'Weatherwise',
        desc: 'Web app that uses AI to suggest activities based on current weather',
        stack: ['React', 'Spring Boot', 'Spring Security', 'PostgreSQL']
    },
    {
        img: '',
        url: 'https://www.github.com/degirro/dot-blog',
        name: 'Dot Blog',
        desc: 'Blog website',
        stack: ['Angular', 'ASP.NET Core', 'Identity', 'PostgreSQL']
    },
    {
        img: '',
        url: 'https://www.github.com/degirro/versle',
        name: 'Versle',
        desc: 'Game inspired by Wordle where users try to corrently guess the bible verse',
        stack: ['React', 'Laravel', 'Authentication', 'SQLite']
    },
    {
        img: '',
        url: 'https://www.github.com/degirro/ticket-tracker-react',
        name: 'Squash It',
        desc: 'Ticket tracker web app to manage work flow',
        stack: ['React', 'Nestjs', 'Passport.js', 'MySQL']
    },
]