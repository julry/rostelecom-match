import { cards } from "../constants/cards.config";

export const getCardById = (id) => {
    return cards.find(card => card?.id === id);
};