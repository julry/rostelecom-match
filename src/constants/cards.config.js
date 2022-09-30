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
        text: 'Легко улавливаю вайб аудитории и могу создать креатив под любой запрос',
        type: CARD_TYPES.common,
        answer: {
            agree: [answerTypes.marketing, answerTypes.HR],
            disagree: [answerTypes.IT, answerTypes.B2B],
        },
        image: card1
    },
    {
        id: 1,
        text: 'Отлично анализирую и структурирую информацию, просчитываю всё наперед',
        type: CARD_TYPES.common,
        answer: {
            agree: [answerTypes.IT, answerTypes.marketing],
            disagree: [answerTypes.B2B, answerTypes.HR],
        },
        image: card2
    },
    {
        id: 2,
        text: 'Я с собеседником на одной волне. Знаю, когда отправить стикер, а когда – формальное сообщение',
        type: CARD_TYPES.common,
        answer: {
            agree: [answerTypes.B2B, answerTypes.HR],
            disagree: [answerTypes.IT, answerTypes.marketing],
        },
        image: card3
    },
    {
        id: 3,
        text: 'Я технарь до мозга костей, во снах вижу код',
        type: CARD_TYPES.dependent,
        answer: {
            agree: [answerTypes.IT],
            disagree: [],
        },
        image: card4
    },
    {
        id: 4,
        text: 'Хорошо разбираюсь в людях, умею харизмой притягивать самых классных из них',
        type: CARD_TYPES.dependent,
        answer: {
            agree: [answerTypes.HR],
            disagree: [],
        },
        image: card5
    },
    {
        id: 5,
        text: 'Слежу за крутыми брендами и рекламными кампаниями. Однажды и я приложу руку к созданию и продвижению чего-то инновационного',
        type: CARD_TYPES.dependent,
        answer: {
            agree: [answerTypes.marketing],
            disagree: [],
        },
        image: card6
    },
    {
        id: 6,
        text: 'Уговорю любого купить даже бетонную стену под Тулой',
        type: CARD_TYPES.dependent,
        answer: {
            agree: [answerTypes.B2B],
            disagree: [],
        },
        image: card7
    },
    {
        id: 7,
        text: 'Предпочитаю чередовать работу в классном офисе и дома на диване с чашкой чая и любимым котом',
        type: CARD_TYPES.additive,
        answer: {
            agree: ['Выполнять рабочие задачки прямо из домашнего кресла'],
            disagree: ['Чилить в больших и стильных офисах компании'],
        },
        image: card8
    },
    {
        id: 8,
        text: 'Люблю проходить образовательные курсы – знаний много не бывает',
        type: CARD_TYPES.additive,
        answer: {
            agree: [
                'Устраивать кинопросмотры с безлимитным доступом к сериалам и фильмам на Wink',
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
        text: 'Хочу быть уверенным в завтрашнем дне и чувствовать заботу работодателя. А если бесплатно предоставят психолога - вообще супер!',
        type: CARD_TYPES.additive,
        answer: {
            agree: [
                'Ходить на онлайн-консультации с психологом за счёт компании',
                'Воплощать в жизнь самые смелые задумки через «Портал идей»'
            ],
            disagree: ['Воплощать в жизнь самые смелые задумки через «Портал идей»'],
        },
        image: card10
    },
    {
        id: 10,
        text: 'Я командный игрок. Мечтаю разделить свои спорт-хобби с коллегами и разнообразить досуг',
        type: CARD_TYPES.additive,
        answer: {
            agree: [
                'Побеждать на корпоративных турнирах по волейболу, настольному хоккею и даже киберспорту',
            ],
            disagree: ['Сражаться в интеллектуальных битвах на квизах'],
        },
        image: card11
    },
];
