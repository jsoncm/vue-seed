import request from '../utils/request';

export const getData = data => {
    return request({
        url: './table.json',
        method: 'get',
        data
    });
};
