import {fafaArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons';

const slides = [
    {
        title: 'Imagen 1',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi unde nesciunt ipsum accusamus fugiat deserunt aliquid neque? Corporis iure neque, earum assumenda impedit minima dicta accusantium culpa molestiae fugiat inventore!',
        image: 'https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg'
    },

    {
        title: 'Imagen 2',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi unde nesciunt ipsum accusamus fugiat deserunt aliquid neque? Corporis iure neque, earum assumenda impedit minima dicta accusantium culpa molestiae fugiat inventore!',
        image: 'https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg'
    },

    {
        title: 'Imagen 3',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi unde nesciunt ipsum accusamus fugiat deserunt aliquid neque? Corporis iure neque, earum assumenda impedit minima dicta accusantium culpa molestiae fugiat inventore!',
        image: 'https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg'
    }
];

const slider = () => {
    const [currentIndex, setCurrentIndex] = useState (0);
    const nextSlider = () => {
        setCurrentIndex ((prevIndex) => (prevIndex + 1) % slides.length);
    }
} 