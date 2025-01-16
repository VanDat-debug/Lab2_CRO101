const oldData = [
    { code: 'ab', name: 'Son môi' },
    { code: 'ac', name: 'Sữa rửa mặt' },
    { code: 'null;', name: 'null' },
    { code: 'null;', name: '' },
];

const ArrayToObject = ({ array = [], keyId = '' }) =>
    Object.fromEntries(
        (array || []).map(item => [keyId ? item[keyId] : item, item])
    );

const result = ArrayToObject({ array: oldData, keyId: 'code' });

const filterObject = obj => {

    Object.keys(obj).forEach(key => {
        const item = obj[key];
        // Kiểm tra và xóa phần tử nếu không hợp lệ
        if (!item.code || !item.name || item.code === 'null;' || !item.name.trim()) {
            delete obj[key]; // Xóa phần tử không hợp lệ
        }
    });
    return obj;
};

const filteredResult = filterObject(result);
console.log(filteredResult);
