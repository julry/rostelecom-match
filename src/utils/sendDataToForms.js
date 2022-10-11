const GOOGLE_FORM_PHONE_ID = 'entry.891785901';
const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/u/1/d/e/1FAIpQLSdMFJ4whIVHhRt5n55HA3mKIajCICflAxZoi9vYyD8Kh8nd_A/formResponse';

export const sendDataToForms = ({phone}) => {
    const formData = new FormData();
    formData.append(GOOGLE_FORM_PHONE_ID, phone);
    const myInit = {
        method: 'POST',
        mode: 'no-cors',
        body: formData
    };
    const myRequest = new Request(GOOGLE_FORM_ACTION_URL, myInit);
    return true;
    // return fetch(myRequest).then(response => {
    //     return response
    // }).catch(e => {
    //     return;
    // })
};
