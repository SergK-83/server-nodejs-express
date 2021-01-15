// JSON data
const products = {
    data: [
        {
            _id: '5fad634b94fbec0435f3e58f',
            title: 'Product 111',
            img: 'assets/img/product-4.jpg',
            price: 2345,
            author: 'Igor',
            isFavorite: false
        },
        {
            _id: '5fad634b94fbec0435f3e590',
            title: 'Product 231',
            img: 'assets/img/product-5.jpg',
            price: 23,
            author: 'Vlad',
            isFavorite: true
        },
        {
            _id: '5fad634b94fbec0435f3e591',
            title: 'Product 2345',
            img: 'assets/img/product-2.jpg',
            price: 221,
            author: 'Vlad',
            isFavorite: false
        },
        {
            _id: '5fad634b94fbec0435f3e592',
            title: 'Product 31',
            img: 'assets/img/product-7.jpg',
            price: 334,
            author: 'Lena',
            isFavorite: false
        },
        {
            _id: '5fad634b94fbec0435f3e593',
            title: 'Product 11',
            img: 'assets/img/product-8.jpg',
            price: 22,
            author: 'Igor',
            isFavorite: false
        },
        {
            _id: '5fad634b94fbec0435f3e594',
            title: 'Product 122',
            img: 'assets/img/product-9.jpg',
            price: 1200,
            author: 'Max',
            isFavorite: true
        },
        {
            _id: '5fad634b94fbec0435f3e595',
            title: 'Product 1',
            img: 'assets/img/product-1.jpg',
            price: 200,
            author: 'Igor',
            isFavorite: true
        },
        {
            _id: '5fad634b94fbec0435f3e596',
            title: 'Product 234',
            img: 'assets/img/product-3.jpg',
            price: 333,
            author: 'Igor',
            isFavorite: true
        },
        {
            _id: '5fad634b94fbec0435f3e597',
            title: 'Product 41',
            img: 'assets/img/product-6.jpg',
            price: 2344,
            author: 'Lena',
            isFavorite: false
        }
    ]
};

// Router
const router = app => {
    app.get('/', (request, response) => {
        response.send({
            message: 'Node.js and Express REST API'
        });
    });

    app.get('/products', (request, response) => {
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.send(products);
    });

    app.get(`/products/:id`, (request, response) => {
        let productId = request.params.id;
        let productItem = products.data.find((obj) => {
            return obj._id === productId;
        });

        response.setHeader('Access-Control-Allow-Origin', '*');
        response.send(productItem);
    });

    app.post('/checkUsername', (request, response) => {
        let answer = {
            data: {
                "Имя пользователя занято": true
            },
            error: null
        }

        сonsole.log(request.body);

        response.setHeader('Access-Control-Allow-Origin', '*');
        response.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
        response.send(answer);
    });
}

// Export the router
module.exports = router;