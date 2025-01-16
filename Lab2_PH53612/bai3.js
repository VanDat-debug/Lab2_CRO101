const firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('foo');
    }, 1000);
});

const secondPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //reject('Error: some bug');
        resolve('bar');
    }, 2000);
}).catch(function (err) {
    console.log(err)
});

const getList = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => data)
        .catch(error => {
            throw new Error('Fetch failed');
        });
};
Promise.all([firstPromise, secondPromise, getList()])
    .then(results => {
        console.log('Tất cả promise đã hoàn thành:', results);
    })
    .catch(error => {
        console.log('Có lỗi xảy ra:', error);
    });
