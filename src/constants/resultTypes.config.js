import { answerTypes } from './answersTypes';

export const resultTypes = {
    [answerTypes.marketing]: {
        type: answerTypes.marketing,
        label: 'маркетинг',
        communication: 'Поработайте над совместным продуктом, займитесь исследованиями, поделитесь гипотезами и покорите сердечко аудитории своей рекламой.',
        firstDate: 'позовут на квиз: бери мерч из стартерпака - и вперед с командой блистать умом!'
    },
    [answerTypes.IT]: {
        type: answerTypes.IT,
        label: 'IT-команда',
        communication: 'Заведите непринужденный диалог о сборе требований, рефакторинге, языках программирования и контроле кода.',
        firstDate: 'пригласят в инновационный офис IT-кластера Ростелекома в Москве',
    },
    [answerTypes.HR]: {
        type: answerTypes.HR,
        label: 'HR-команда',
        communication: 'Подружите коллег и найдите новых сотрудников в семью Ростелекома.',
        description: 'поведут на церемонию награждения, ведь Ростелеком снова вошёл в число «Лучших работодателей России!',
    },
    [answerTypes.B2B]: {
        type: answerTypes.B2B,
        label: 'команда B2B',
        communication: 'Проведите переговоры с первыми лицами компаний, используя навыки убеждения и медиации.',
        description: 'поведут на уютную веранду с лимонадом и кофе»\n'
    },
};