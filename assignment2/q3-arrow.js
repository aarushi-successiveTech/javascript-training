const inner = (user) => 'Hello' + user

const outer = (a, func) => {
    console.log(func(a))
}

outer(' aarushi' , inner)