import axios from 'axios';

const createService = (API) => {
    return {
        get: () => axios(API).then(({data}) => data),
        delete: (id) => axios.delete(API + `/${id}`).then(({data}) => data),
        patch: (id, payload) => axios.patch(API + `/${id}`, payload).then(({data}) => data),
        post: (payload) => axios.post(API, payload).then(({data}) => data)
    };
};

export default createService;