import { HiStar } from "react-icons/hi";
import { MdSend, MdShield } from "react-icons/md";
import people01 from '../images/people01.png';
import people02 from '../images/people02.png';
import people03 from '../images/people03.png';
import airbnb from '../images/airbnb.png';
import coinbase from '../images/coinbase.png';
import dropbox from '../images/dropbox.png';
import binance from '../images/binance.png';
import { MdFacebook } from "react-icons/md";
import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
export const navLinks = [
{
    id: "home",
    title: "Home",
    },
{
    id: "features",
    title: "Features",
    },
{
    id: "product",
    title: "Product",
    },
{
id: "clients",
title: "Clients",
},
];

export const features = [
{
    id:"feature-1",
    icon: <HiStar />,
    title: "Reward",
    content:
    "The best credit cards offer some tantalizing combinations of promotions and prizes.",
},
{
    id:"feature-2",
    icon: <MdShield />,
    title: "100% Secured",
    content:
    "We take proactive steps make sure your information and transactions are secure.",
},
{
    id:"feature-3",
    icon: <MdSend /> ,
    title: "Balance Transfer",
    content:
    "A balance transfer credit card can save you a lot of money in interest charges.",
},
];

export const feedback= [
{
    id:"feedback-1",
    content:
     "Money is only a tool. it will take you wherever you wish, but it will not replace you as a driver.",
    name:"Herman Jensen",
    title: "Founder & Leader",
    img: people01,

},
{
    id:"feedback-2",
    content:
     "Money make your life easier, if you're lucky to have it, you're lucky.",
    name:"Steve Mark",
    title: "Founder & Leader",
    img: people02,

},
{
    id:"feedback-3",
    content:
    "It is usually people in the money business, finance, and international trade that are really rich.",
    name:"Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,

},
];

export const stats = [
    {
        id: "stat-1",
        title:"User Active",
        value: "3800+",
    },
    {
        id: "stat-2",
        title:"Trusted by Company",
        value: "230+",
    },
    {
        id: "stat-3",
        title:"Transaction",
        value: "$230m+",
    },
]

export const footerLinks =[
    {
        title:"Useful Links",
        links:[
            {
                name: "Content",
                link: "https://www.hoobank.com/content/",
            },
            {
                name:"How it Works",
                link: "https://www.hoobank.com/how-it-works/",
            },

            {
                name: "Create",
                link: "https://www.hoobank.com/create/",
            },
            {
                name: "Explore",
                link: "https://www.hoobank.com/explore/",
            },
            {
name: "Terms & Services",
link: "https://www.hoobank.com/terms-and-services",
            },
        ],
        },
            {
            title:"Community",
            links:[
            {
                name: "Help Center",
                link: "https://www.hoobank.com/help-center/",
            },
            {
                name: "Partners",
                link: "https://www.hoobank.com/partners/",
            },
            {
                name: "Suggestion",
                link: "https://www.hoobank.com/suggestions/",
            },
            {
                name: "Blog",
                link: "https://www.hoobank.com/blog/"
            },
            {
                name: "Newsletters",
                link: "https://www.hoobank.com/newsletters/"
            },
        ],
    },
{
title:"Partner",
links:[
{
    name: "Our Partner",
    link: "https://www.hoobank.com/our-partner/",
},
{
    name: "Become a Partner",
    link: "https://www.hoobank.com/become-a-partner",
}
],
},
];
export const socialMedia= [
    {
        id: "social-media-1",
        icon: < FiInstagram/>,
        link: "https://www.instagram.com/"
    },
    {
        id: "social-media-2",
        icon: <MdFacebook />,
        link: "https://www.facebook.com/",
    },
    {
        id: "social-media-3",
        icon: <FiTwitter />,
        link: "https://www.twitter.com/"
    },
    {
        id: "social-media-4",
        icon: <FiLinkedin />,
        link: "https://www.linkedin.com/"
    }
]
export const clients=[
{
    id:"client-1",
    logo: airbnb,
},
{
id:"client-2",
logo: binance,
},
{
    id:"client-3",
    logo: coinbase,
},
{
    id: "client-4",
    logo: dropbox,
},
];