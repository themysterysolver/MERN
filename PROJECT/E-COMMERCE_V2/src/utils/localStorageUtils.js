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
    localStorage.setItem('currentUser',JSON.stringify({
        id:newUser.id,username:newUser.username
    }));
    return true;
}

//LOGINUSER TO HANDLE LOGIN
export const loginUser=(username,password)=>{
    let users=JSON.parse(localStorage.getItem('users'))||[];
    const found=users.find(u=>u.username===username);
    if(!found)return false;
    loginUser.setItem('currentUser',JSON.parse({id:found.username,username:found.username}));
    return true;
}

//HANDLE LOGOUT
export const logoutUser=()=>{
    localStorage.removeItem('currentUser');
};

//GET CURR USER
export const getCurrentUser=()=>{
    return localStorage.getItem('currentUser');
}