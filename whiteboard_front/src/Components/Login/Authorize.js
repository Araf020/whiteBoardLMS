import info from './info.json'
import useAuth from './Authenticate';

const  Authorize = (params) =>{
    // const [user, setUser] = useState(null);
    const data = params;
    // console.log(data);
    var user = info.users.filter((user) => user.username === data.username && user.password === data.password);
    console.log("user");
    console.log(user);
    // if authenticated
    // save a session token in local storage

//    create a session token and save it in local storage 

    var token = Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2);
    // console.log(token);

    localStorage.setItem('token',token);
    // and set a expiration date for the token
    localStorage.setItem('expirationDate', new Date(new Date().getTime() + 3600 * 1000));

    // redirect to the home page
    // window.location.href = '/home';
    
    // if not authenticated
    // show an error message
    //
    //

    localStorage.setItem('user', JSON.stringify(user));
    var authenticated = useAuth();
    console.log("authenticated");
    console.log(authenticated);
    if(authenticated){
        if(user[0]["access_level"] === "admin"){
            window.location.href = '/admin';
        }else if(user[0]["access_level"] === "student"){
            window.location.href = '/';
        }else if(user[0]["access_level"] === "instructor"){
            window.location.href = '/instructor';
        }

    }else{
        window.location.href = '/login';
    }
    
    // useEffect(() => {
    //     const user = localStorage.getItem('user');
    //     if (user) {
    //     setUser(user);
    //     } else {
    //     history.push('/login');
    //     }
    // }, [history]);
    
    // return user;
    }
export default Authorize;


