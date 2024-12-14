export type TechnologiesType = {
    name: string;
    svg: string;
    color: string;
}

export interface ITechnologyData {
    title: string
    technologies: TechnologiesType[]
}

export const TechnologyData: ITechnologyData[] = [
    {
        title: "Frontend",
        technologies: [
            { name: 'React', svg: 'react.svg', color: '#7ccce44c' },
            { name: 'Angular', svg: 'angular.svg', color: '#e47c7c4c' },
            { name: 'React-Query', svg: 'reactquery.svg', color: '#e47c7c4c' },
            { name: 'RxJS', svg: 'rxjs.svg', color: '#e47cdf2e' },
            { name: 'Next.js', svg: 'nextjs.svg', color: '#acacac46' },
            { name: 'HTML', svg: 'html.svg', color: '#e4c07c4c' },
            { name: 'CSS', svg: 'css.svg', color: '#7ca6e44c' },
            { name: 'SASS', svg: 'sass.svg', color: '#e17ce44c' },
        ]
    },
    {
        title: "Backend",
        technologies: [
            { name: 'Spring Boot', svg: 'spring.svg', color: '#7fe47c4c' },
            { name: '.NET', svg: 'dotnet.svg', color: '#b27ce44c' },
            { name: 'Laravel', svg: 'laravel.svg', color: '#e47c7c4c' },
            { name: 'Express.js', svg: 'express.svg', color: '#acacac46' },
            { name: 'Node.js', svg: 'nodejs.svg', color: '#7ce4854c' },
            { name: 'NestJS', svg: 'nestjs.svg', color: '#e47c8d4c' },
            { name: 'PostgreSQL', svg: 'postgresql.svg', color: '#7c86e44c' },
            { name: 'MySQL', svg: 'mysql.svg', color: '#7ccce44c' },
        ]
    },
    {
        title: "Tools",
        technologies: [
            { name: 'Wordpress', svg: 'wordpress.svg', color: '#acacac46' },
            { name: 'Docker', svg: 'docker.svg', color: '#7ca6e44c' },
            { name: 'Git', svg: 'git.svg', color: '#e4ae7c4c' },
            { name: 'Bash', svg: 'bash.svg', color: '#acacac46' },
            { name: 'Webpack', svg: 'webpack.svg', color: '#7ca6e44c' },
            { name: 'Socket.io', svg: 'socketio.svg', color: '#acacac46' },
        ]
    }
];
