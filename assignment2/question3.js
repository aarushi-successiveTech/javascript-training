function inner(user){
    return 'hello' + user;

}

function outer(a , func){
    console.log(func(a));
}

outer(' aarushi', inner);