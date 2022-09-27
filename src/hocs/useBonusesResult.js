import { useContext } from 'react';
import { ProgressContext } from '../context/ProgressContext';
import { getCardById } from '../utils/getCardById';
import { CARD_TYPES } from '../constants/cards.config';

export const useBonusesResult = () => {
    const { answers } = useContext(ProgressContext);

    return Object.entries(answers).reduce((res, cardAnswer) => {
        const [ id, answerAgreed ] = cardAnswer;
        if (!id) return res;
        const card = getCardById(+id);
        const { type, answer } = card;
        const answerTypes = answer[answerAgreed.isAgreed ? 'agree' : 'disagree'];
        if (type !== CARD_TYPES.additive) return res;

        return [...res, ...answerTypes];
    }, [])
};
