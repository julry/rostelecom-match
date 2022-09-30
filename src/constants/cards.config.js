import { answerTypes } from './answersTypes';
import { card1, card10, card11, card2, card3, card4, card5, card6, card7, card8, card9 } from './images';

export const CARD_TYPES = {
    common: 'common',
    dependent: 'dependent',
    additive: 'additive',
};

export const cards = [
    {
        id: 0,
        text: 'Легко улавливаю вайб\nаудитории и могу\nсоздать креатив\nпод любой запрос',
        type: CARD_TYPES.common,
        answer: {
            agree: [answerTypes.marketing, answerTypes.HR],
            disagree: [answerTypes.IT, answerTypes.B2B],
        },
        image: card1
    },
    {
        id: 1,
        text: 'Отлично анализирую\nи структурирую\nинформацию,\nпросчитываю всё наперед',
        type: CARD_TYPES.common,
        answer: {
            agree: [answerTypes.IT, answerTypes.marketing],
            disagree: [answerTypes.B2B, answerTypes.HR],
        },
        image: card2
    },
    {
        id: 2,
        text: 'Я с собеседником\nна одной волне. Знаю,\nкогда поставить\nэмоджи, а когда - точку',
        type: CARD_TYPES.common,
        answer: {
            agree: [answerTypes.B2B, answerTypes.HR],
            disagree: [answerTypes.IT, answerTypes.marketing],
        },
        image: card3
    },
    {
        id: 3,
        text: 'Я технарь до мозга\nкостей, во снах вижу код',
        type: CARD_TYPES.dependent,
        answer: {
            agree: [answerTypes.IT],
            disagree: [],
        },
        image: card4
    },
    {
        id: 4,
        text: 'Хорошо разбираюсь\nв людях, умею харизмой\nпритягивать самых\nклассных из них',
        type: CARD_TYPES.dependent,
        answer: {
            agree: [answerTypes.HR],
            disagree: [],
        },
        image: card5
    },
    {
        id: 5,
        text: 'Слежу за крутыми\nбрендами и рекламными\nкампаниями. Однажды и я\nприложу руку к созданию\nи продвижению чего-то\nинновационного',
        type: CARD_TYPES.dependent,
        answer: {
            agree: [answerTypes.marketing],
            disagree: [],
        },
        image: card6
    },
    {
        id: 6,
        text: 'Уговорю любого купить\nдаже бетонную стену\nпод Тулой',
        type: CARD_TYPES.dependent,
        answer: {
            agree: [answerTypes.B2B],
            disagree: [],
        },
        image: card7
    },
    {
        id: 7,
        text: 'Предпочитаю чередовать\nработу в классном офисе\nи дома на диване\nс чашкой чая\nи любимым котом',
        type: CARD_TYPES.additive,
        answer: {
            agree: ['Выполнять рабочие задачки прямо из домашнего кресла'],
            disagree: ['Чилить в больших и стильных офисах компании'],
        },
        image: card8
    },
    {
        id: 8,
        text: 'Люблю проходить\nобразовательные\nкурсы – знаний много\nне бывает',
        type: CARD_TYPES.additive,
        answer: {
            agree: [
                'Устраивать кинопросмотры с безлимитным\nдоступом к сериалам и фильмам на Wink',
                'Учиться сразу на 500 курсах онлайн-университета',
            ],
            disagree: [
                'Устраивать кинопросмотры с безлимитным доступом к сериалам и фильмам на Wink',
            ],
        },
        image: card9
    },
    {
        id: 9,
        text: 'Хочу быть уверенным\nв завтрашнем дне\nи чувствовать заботу\nработодателя. А если\nбесплатно предоставят\nпсихолога - вообще\nсупер!',
        type: CARD_TYPES.additive,
        answer: {
            agree: [
                'Ходить на онлайн-консультации с психологом за\nсчёт компании',
                'Воплощать в жизнь самые смелые задумки\nчерез «Портал идей»'
            ],
            disagree: ['Воплощать в жизнь самые смелые задумки\nчерез «Портал идей»'],
        },
        image: card10
    },
    {
        id: 10,
        text: 'Я командный игрок.\nМечтаю разделить\nсвои спорт-хобби\nс коллегами\nи разнообразить досуг',
        type: CARD_TYPES.additive,
        answer: {
            agree: [
                'Побеждать на корпоративных турнирах по\nволейболу, настольному хоккею и даже киберспорту',
            ],
            disagree: ['Сражаться в интеллектуальных битвах на квизах'],
        },
        image: card11
    },
];
