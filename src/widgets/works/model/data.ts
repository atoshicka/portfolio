import react from '@/shared/assets/icon/react.svg';
import typescript from '@/shared/assets/icon/typescript.svg';
import javaScript from '@/shared/assets/icon/javascript.svg';
import css from '@/shared/assets/icon/css3.svg';
import reactRouter from '@/shared/assets/icon/reactrouter.svg';
import nodeJs from '@/shared/assets/icon/nodejs.svg';
import express from '@/shared/assets/icon/express.svg';
import postgresql from '@/shared/assets/icon/postgresql.svg';
import firebase from '@/shared/assets/icon/firebase.svg';
import redux from '@/shared/assets/icon/redux.svg';
import axios from '@/shared/assets/icon/axios.svg';
import reactnavigation from '@/shared/assets/icon/reactnavigation.svg';
import html from '@/shared/assets/icon/html.svg';
import docker from '@/shared/assets/icon/docker.svg';
import form from '../assets/projects/form.svg';
import gitLunch from '../assets/projects/gitLunch.svg';
import theLastHunt from '../assets/projects/theLastHunt.svg';

export const projects = [
    {
        image: form,
        title: 'Форма авторизации',
        description: 'Форма входа/регистрации пользователя с хэшированием пароля и JWT-токенами для аутентификации.',
        href: 'https://github.com/atoshicka/Form',
        techs: [
            { src: react, alt: 'react' },
            { src: typescript, alt: 'typescript' },
            { src: css, alt: 'css' },
            { src: reactRouter, alt: 'react router' },
            { src: nodeJs, alt: 'Node.js' },
            { src: express, alt: 'express' },
            { src: postgresql, alt: 'PostgreSQL' },
            { src: docker, alt: 'Docker' },
        ],
    },
    {
        image: theLastHunt,
        title: 'The Last Hunt',
        description: 'Игра в жанре tower defense, где охотникам необходимо сражаться против монстров.',
        href: 'https://github.com/atoshicka/The-Last-Hunt',
        techs: [
            { src: html, alt: 'html' },
            { src: css, alt: 'css' },
            { src: javaScript, alt: 'js' },
        ],
    },
    {
        image: gitLunch,
        title: 'GitLunch',
        description: 'Мобильное приложение на андроид, направленное на студентов. Предзаказ обедов на любой рабочий день недели, отслеживание статуса заказа, а так же push-уведомления о готовности и успешном оформлении. Разработано до стадии MVP.',
        href: 'https://github.com/atoshicka/GitLunch',
        techs: [
            { src: react, alt: 'react native' },
            { src: typescript, alt: 'typescript' },
            { src: firebase, alt: 'firebase' },
            { src: reactnavigation, alt: 'react navigation' },
            { src: axios, alt: 'axios' },
            { src: redux, alt: 'redux' },
        ],
    },
];