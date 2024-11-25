//before leaering cookie first of all we want to know why it is needed so we need cookie to tell server that i am authroized user 
// when we request to server he ask to login every time that who are you and we login each time to tell this so  then cookie is introduced 
//in cookie we send request to server and then server generate a string and that is stick to the request another time we send and then server will know that the user is valid user to validate cookie

//TO  set cookies
// 1 => agar koi b hmaara route m request marega home route m tw response m hmko cookie kk sth data send krna ha  
        // res.coookie("name","anuj");
// 2=> ab cookie bn gyi cookie means browser m kuch chiz send krna 
// 3 => ab m jis b route m jaunga usme cookie chipk k jaigi 
// 4=> we can read cookie by req.cookie
// 5 => we cannot read cookie like this we need to use a middleware and we have to download a package called cookie parser 

const express=require('express');
const app=express();
const cookieParser=require('cookie-parser')

app.use(cookieParser());

app.get('/',(req,res)=>{

    // step 1: to set cookie
    res.cookie("Name","anuj");
    res.send("done");
})

//so ab is wala route m mane cookie ni create ki tw ab jo cookie create ki ha vo automatic browser kk sth chlta rehga
app.get('/read',(req,res)=>{

    // mne cookie home m bnai and i want to read in read route
    console.log("cookie is :",req.cookies);
    res.send("read page");
})


app.listen(4000,()=>{
    console.log("server starts")
})