const login = document.getElementById('login');
const myform = document.getElementById('login-form');
const msg = document.getElementById('msg');

login.addEventListener('click', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    if(email.value=="" || password.value==""){
        msg.classList.add('error');
        msg.innerHTML='please enter all fields';
        setTimeout(()=>msg.remove(),3000);
    }
   else{

    let obj = {
        email: email.value,
        password: password.value
    }
    console.log(obj);
    axios.post('http://localhost:3000/user/login',obj)
        .then(res=>{
            console.log(res.status)
            localStorage.setItem('token',`${res.data.token}`)
            localStorage.setItem('rows',5)
            //window.location.href='./expensesheet.html';
            alert(res.data.message)
        })
        .catch(err=>{
            console.log(err)
        })
   }  
});