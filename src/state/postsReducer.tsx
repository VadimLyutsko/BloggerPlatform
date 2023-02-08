import bloggerImg from '../BlogsPage/BlogsInfo/Articles/Article/bloggerImg.svg';
import {PostPropsType} from '../BlogsPage/BlogsInfo/Articles/Article/Article';


type ActionsType = {}


const initialState: PostPropsType[] = [
    {
        id: '1',
        bloggerImg: bloggerImg,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ',
        link: 'https://www.youtube.com/',
        title: 'The best blog in our village'
    }, {
        id: '2',
        bloggerImg: bloggerImg,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ',
        link: 'https://www.youtube.com/',
        title: 'Warriors'
    }, {
        id: '3',
        bloggerImg: bloggerImg,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ',
        link: 'https://www.youtube.com/',
        title: 'Audience Platform'
    },
    {
        id: '3',
        bloggerImg: bloggerImg,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ',
        link: 'https://www.youtube.com/',
        title: 'Audience Platform'
    },
    {
        id: '3',
        bloggerImg: bloggerImg,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ',
        link: 'https://www.youtube.com/',
        title: 'Audience Platform'
    }
];

export const postsReducer = (state: PostPropsType[] = initialState, action: ActionsType): PostPropsType[] => {
    return state;

};
