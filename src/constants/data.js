import images from './images';

const projects =[
    {
       title: 'Rav-Gym app',
       image: images.gymApp
    },
    {
        title: 'Gericht Restaurant',
        image: images.gericht
        
     }
];

const graphics =[
    {
       image: images.pizzaSm
    },
    {
        image: images.cheffSm
    },
    {
        image: images.venstraMp
    },
    {
        image: images.gameMp
    },
    {
        image: images.lexyCare
    },
    {
        image: images.logoMp
    },


    
]




const pricing =[

{
    title:'Basic Package',
    subTitle: 'Best for Small Businesses',
    pay: 'Ksh. 25,000',
    service:[
        'Upto 10 Web Pages',
        'Online Contact Form',
        'Optimized Graphics',
        'Social Media Integration',
        'Custom Design',
        'Front Page Slideshow',
        '1 Month Support',
        '1 Year Domain',
        'Free 1 Year Hosting'
    ]
},
{
    title:'Standard Package',
    subTitle: 'Best for Standard Company',
    pay: 'Ksh. 38,500',
    service:[
        'Content Management Syst',
        'User Login/Registration',
        'Animations',
        'Dynamic Content',
        'Administration Panel',
        'Basic Package Features',
        '1 Month Support',
        'Free 1 Year Domain',
        'Free 1 Year Hosting' 
    ]
},
{
    title:'Gold Package',
    subTitle: 'Best for Online Store',
    pay: 'Ksh. 50,500',
    service:[
        'Shopping Cart',
        'Product Catalogue',
        'Online Payment Integration',
        'User Login Registration', 
        'Custom Design',
        'Administration Panel',
        'Standard Features',
        'Free 1 Year Domain',
       ' Free 1 Year Hosting'
    ]
},
{
    title:'Corporate Package',
    subTitle: 'Best for Corporates',
    pay: 'Ksh. 90,000',
    service:[
        'Content Management Syst.',
        'Dynamic Content',
        'Online Payment, Bookings',
        'Online Chat System',
        'Administration Panel',
        'Features in other Packages',
        '3 Month Support',
        'Free 1 Year Domain',
        'Free 1 Year Hosting'
    ]
}
];

export default {pricing, projects, graphics};
