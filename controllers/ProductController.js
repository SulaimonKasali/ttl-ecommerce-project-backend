exports.getProducts = (req,res)=>{

    let products = [

        {
        img:'htt',
        name:'Phone',
        price:2000,
        description:'Phone Description'},

        {
            img:'htt',
            name:'Phone',
            price:2000,
            description:'Phone Description'},
        
        {
            img:'htt',
            name:'Phone',
            price:2000,
            description:'Phone Description'},
            
        {
            img:'htt',
            name:'Phone',
            price:2000,
            description:'Phone Description'},
                
            {
            img:'htt',
            name:'Phone',
            price:2000,
            description:'Phone Description'}
    ]

    res.send(products);
};

    exports.getProductById = (req,res) =>{
        res.status(200).send('Get Product by Id here');
    };

    exports.createProduct = (req,res) =>{
        res.status(200).send('Create Product Here');
    };

    exports.updateProduct = (req,res) =>{
        res.status(200).send('This API endpoint updates a product');
    };

    exports.deleteProduct = (req,res) =>{
        res.status(200).send('This API endpoint deletes a product');
    };
