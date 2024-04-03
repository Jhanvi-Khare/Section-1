 const user = { name : 'Jhanvi' , email : 'jhanvi@gmail.com' , paasword : '1234'};
 console.log(user.name);
 console.log(user.email);
 console.log( user ['password']);
 let key = 'name';

 console.log(user[key]);

 user.password = "abrakadabra";
 console.log(user);
 user.address = 'Lucknow';
 console.log(user);

 console.log( Object.keys(user) );
 console.log( Object.values(user) );

 const smartphone = {
    brand : 'Samsung' ,
    model : 's24' ,
    price : 120000 ,
    colors : ['white' , 'black' , 'blue']
 };

 console.log(smartphone.price);
 console.log(smartphone.colors[1]);

 const smartphoneList = [
    { brand: 'Samsung' , model: 's24' , price: 120000 , colors: ['white' , 'black' , 'blue'] },
    { brand: 'Apple' , model: 'iphone 15' , price: 150000 , colors: ['white' , 'blue'] },
    { brand: 'Oneplus' , model: 'nord ce 3' , price: 20000 , colors: ['white' , 'grey'] },
    { brand: 'Redmi' , model: 'note 8 pro' , price: 16000 , colors: ['white' , 'blue'] },
    { brand: 'Samsung' , model: 'z fold' , price: 164000 , colors: ['white'] },
]

 console.log(smartphoneList.length);
 console.log(smartphoneList[0].model);
 console.log(smartphoneList[3].price);
 console.log(smartphoneList[2].colors[1]);

 smartphoneList[4].colors.push( 'red' ) ;
 console.log(smartphoneList[4]);