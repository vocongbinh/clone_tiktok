import { request } from '~/utils/request';
export const search = async (value, type = 'less') => {
    try {
        const res = await request.get('users/search?', {
            params: {
                q: value,
                type,
            },
        });
        return res.data;
    } catch (e) {
        console.log(e);
    }
};
