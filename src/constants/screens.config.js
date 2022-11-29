import { StartScreen } from '../components/screens/StartScreen';
import { DescriptiveScreen } from '../components/screens/DescriptiveScreen';
import { QuestionScreen } from '../components/screens/QuestionScreen';
import { Final } from '../components/screens/Final';
import { BonusScreen } from '../components/screens/BonusScreen';
import { card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11 } from './images';

export const screens = [
    {
        id: 0,
        component: StartScreen,
        preloadImages: [],
    },
    {
        id: 1,
        component: DescriptiveScreen,
        preloadImages: [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11],
    },
    {
        id: 2,
        component: QuestionScreen,
        preloadImages: [],
    },
    {
        id: 3,
        component: Final,
        preloadImages: [],
    },
    {
        id: 4,
        component: BonusScreen,
        preloadImages: [],
    },
];
