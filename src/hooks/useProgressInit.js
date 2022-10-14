import { useState } from 'react';
import { cards, CARD_TYPES } from '../constants/cards.config';
import { forks } from '../constants/forks.config';
import { screens } from '../constants/screens.config';
import { getCardById } from '../utils/getCardById'

const getCardsByFork = (fork) => {
    const cardsByFork = [...cards];
    const dependentCards = cards.filter(card => card.type === CARD_TYPES.dependent);
    const firstDependentIndex = cards.indexOf(dependentCards[0]);
    const dependentCardsCount = dependentCards.length;
    cardsByFork.splice(firstDependentIndex, dependentCardsCount, ...fork.order.map(id => getCardById(id)));
    return cardsByFork;
};

const INITIAL_FORK = forks[0];
const INITIAL_ANSWERS = {};
const INITIAL_PROGRESS = {
    answers: INITIAL_ANSWERS,
    fork: INITIAL_FORK,
    cards: getCardsByFork(INITIAL_FORK),
};

export function useProgressInit() {
    const [progress, setProgress] = useState(INITIAL_PROGRESS);
    const [currentScreenIndex, setCurrentScreenIndex] = useState(0);
    const screen = screens[currentScreenIndex];

    const setPrev = () => {
        const canSet = currentScreenIndex > 0;
        if (canSet) {
            setCurrentScreenIndex(currentScreenIndex - 1);
        }
    };

    const next = () => {
        const nextScreenIndex = currentScreenIndex + 1;
        const canNext = nextScreenIndex <= screens.length - 1;

        if (canNext) {
            if (progress.wrapperRef) progress.wrapperRef.current.scrollTop = 0;
            setCurrentScreenIndex(nextScreenIndex);
        }
    };

    const updateCards = () => {
        const answers = {...progress.answers};
        const availableForks = forks.filter(fork => fork.answers
                .filter(answer => !!answers[answer.id] && answers[answer.id].isAgreed === answer.isAgreed)
                .length === Object.keys(answers).length
        );
        setProgress(progress => ({
                ...progress,
                cards: getCardsByFork(availableForks[0]),
                fork: availableForks[0]
            })
        );
    };

    const updateAnswer = (name, value) => {
        setProgress(progress => {
            return {
                ...progress,
                answers: {...progress.answers, [name]: value}
            };
        });
    };

    const updateProgress = (name, value) => {
        setProgress(progress => ({...progress, [name]: value}));
    };

    return {
        progress,
        currentScreenIndex,
        cards: progress.cards,
        answers: progress.answers,
        fork: progress.fork,
        screen,
        next,
        updateAnswer,
        setPrev,
        updateProgress,
        updateCards
    };
}
