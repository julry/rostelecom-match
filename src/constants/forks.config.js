import { answerTypes } from './answersTypes';

export const forks = [
    {
        answers: [
            {
                id: 0,
                isAgreed: true,
            },
            {
                id: 1,
                isAgreed: true,
            },
            {
                id: 2,
                isAgreed: true,
            }
        ],
        order: [5, 4, 6],
        priority: answerTypes.marketing
    },
    {
        answers: [
            {
                id: 0,
                isAgreed: true,
            },
            {
                id: 1,
                isAgreed: false,
            },
            {
                id: 2,
                isAgreed: false,
            }
        ],
        order: [5, 4, 3],
        priority: answerTypes.HR
    },
    {
        answers: [
            {
                id: 0,
                isAgreed: false,
            },
            {
                id: 1,
                isAgreed: false,
            },
            {
                id: 2,
                isAgreed: false,
            }
        ],
        order: [3, 6, 5],
        priority: answerTypes.IT
    },
    {
        answers: [
            {
                id: 0,
                isAgreed: false,
            },
            {
                id: 1,
                isAgreed: true,
            },
            {
                id: 2,
                isAgreed: true,
            }
        ],
        order: [3, 6, 4],
        priority: answerTypes.IT
    },
    {
        answers: [
            {
                id: 0,
                isAgreed: true,
            },
            {
                id: 1,
                isAgreed: false,
            },
            {
                id: 2,
                isAgreed: true,
            }
        ],
        order: [4, 6, 5],
        priority: answerTypes.HR
    },
    {
        answers: [
            {
                id: 0,
                isAgreed: false,
            },
            {
                id: 1,
                isAgreed: false,
            },
            {
                id: 2,
                isAgreed: true,
            }
        ],
        order: [6, 4, 3],
        priority: answerTypes.B2B
    },
    {
        answers: [
            {
                id: 0,
                isAgreed: false,
            },
            {
                id: 1,
                isAgreed: true,
            },
            {
                id: 2,
                isAgreed: false,
            }
        ],
        order: [3, 5, 6],
        priority: answerTypes.IT
    },
    {
        answers: [
            {
                id: 0,
                isAgreed: true,
            },
            {
                id: 1,
                isAgreed: true,
            },
            {
                id: 2,
                isAgreed: false,
            }
        ],
        order: [5, 3, 4],
        priority: answerTypes.marketing
    },
]