import { useContext } from 'react';
import { ProgressContext } from '../context/ProgressContext';
import { answerTypes } from '../constants/answersTypes';
import {resultTypes} from '../constants/resultTypes.config';
import { getCardById } from '../utils/getCardById';
import { CARD_TYPES } from '../constants/cards.config';

const DEFAULT_RESULT = answerTypes.marketing;
const MAX_CONTROVERSIAL_POINTS = 5;

export const useResult = () => {
    const { answers, fork } = useContext(ProgressContext);

    const resultPoints = Object.entries(answers).reduce((res, cardAnswer) => {
        const [ id, answerAgreed ] = cardAnswer;
        if (!id) return res;

        const card = getCardById(+id);
        const { type, answer } = card;
        let points = 0;
        const answerTypes = answer[answerAgreed.isAgreed ? 'agree' : 'disagree'];

        switch (type) {
            case CARD_TYPES.common:
                points = 1;
                break;
            case CARD_TYPES.dependent:
                points = 3;
                break;
            case CARD_TYPES.additive:
            default:
                return res;
        }
        return { ...answerTypes.reduce((result, t) => ({ ...result, [t]: (result[t] || 0) + points }), {...res}) };
    }, {})

    const maxPoints = Math.max(...Object.keys(resultPoints).map(key => resultPoints[key]));
    const finalTypes = Object.keys(resultPoints).filter(key => resultPoints[key] === maxPoints);
    let resultType = finalTypes[0];
    if (finalTypes.length > 1) {
        if (resultPoints[finalTypes[0]] === MAX_CONTROVERSIAL_POINTS || fork.alwaysPriority) {
            resultType = fork.priority;
        } else {
            resultType = finalTypes.find(type => type !== fork.priority);
        }
    }

    return resultTypes[resultType || DEFAULT_RESULT];
};
