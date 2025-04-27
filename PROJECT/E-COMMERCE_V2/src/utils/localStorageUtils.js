//REGISTER USER TO HANDLE SIGIN
export const registerUser=(username,password,email)=>{
    let users=JSON.parse(localStorage.getItem('users'))||[];
    const existing=users.find(u=>u.username===username);
    if(existing)return false;

    const newUser={
        id:Date.now().toString(),username,password,email,cart:[],orders:[]
    };
    users.push(newUser);
    localStorage.setItem('users',JSON.stringify(users));
    // localStorage.setItem('currentUser',JSON.stringify({
    //     id:newUser.id,username:newUser.username
    // }));
    return true;
}

//LOGINUSER TO HANDLE LOGIN
export const loginUser=(username,password)=>{
    let users=JSON.parse(localStorage.getItem('users'))||[];
    const found=users.find(u=>u.username===username);
    if(!found)return false;
    if(found.password!==password)return false;
    localStorage.setItem('currentUser',JSON.stringify({id:found.id,username:found.username}));
    return true;
}

//HANDLE LOGOUT
export const logoutUser=()=>{
    localStorage.removeItem('currentUser');
};

//GET CURR USER
export const getCurrentUser=()=>{
    return JSON.parse(localStorage.getItem('currentUser'));
}

//adding items to cart
export const addToCart=(product)=>{
    let users=JSON.parse(localStorage.getItem('users'))||[];
    let currentUser=getCurrentUser();
    if(!currentUser)return;

    let user=users.find(u=>u.id===currentUser.id);
    if(!user)return;

    let existingProduct = user.cart.find(item => item.productId === product.productId);
    if (existingProduct) {
        existingProduct.quantity += product.quantity;
    } else {
        user.cart.push(product);
    }
    localStorage.setItem('users',JSON.stringify(users));
    console.log(JSON.parse(localStorage.getItem('users')))
};

//place the order
export const placeOrder=()=>{
    let users=JSON.parse(localStorage.getItem('users'))||[];
    let currentUser=getCurrentUser();
    if(!currentUser)return;

    let user=users.find(u=>u.id===currentUser.id);
    if(!user)return;

    user.orders.push({
        orderId:"order_"+Date.now(),
        items:[...user.cart],
        totalAmount:user.cart.reduce((sum,item)=>sum+item.price*item.quantity,0),
        orderDate:new Date().toLocaleDateString()
    });

    user.cart=[]
    localStorage.setItem('users',JSON.stringify(users));
}

export const getCart = () => {
    let users=JSON.parse(localStorage.getItem('users')) || [];
    let currentUser=getCurrentUser();
    if(!currentUser)return [];
  
    let user=users.find(u => u.id === currentUser.id);
    return user?user.cart:[];
  };
  
  export const getOrders=()=>{
    let users=JSON.parse(localStorage.getItem('users'))||[];
    let currentUser=getCurrentUser();
    if (!currentUser)return [];
  
    let user=users.find(u => u.id === currentUser.id);
    return user?user.orders:[];
  };