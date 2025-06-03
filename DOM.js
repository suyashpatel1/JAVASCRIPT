// DOM - Method String 


// function String(){
    // *Length of string
// let text= "siddharth"   
// console.log(text.length)

// *Slice OF String
// let text = "Quiters never Win."
// let Slice= text.slice(0,17);
// console.log(Slice)

// *Concat

// let text1 ="DEFEAT "
// let text2 =" IS NOT"
// let text3 =" ACCEPTED"
// let PARA = text1.concat(text2,text3);
// console.log(PARA)

// *Substring
// let text =" Unity and valour"
// let Exract = text.substring(10,17);
// console.log(Exract)

// * Replace
// let text = " WE THE VETERAN"
// let Result= text.replace("VETERAN","VETERANS");
// console.log(Result)
// }
      
// *Upper Case 
// let sentence = "hit and run"
// let convert= sentence.toUpperCase();
// console.log(convert)


// *Lower Case
// let text = " KINDNESS PURIFIES YOUR CHARECTER"
// let convert = text.toLowerCase();
// console.log(convert)

// *Trim
// let text = " Plant prepare there own food by the process of Photosynthesis "
// let trimmed=text.trim();
// console.log(trimmed)

// *Char at ()
// let word="Eagle"

// console.log(word.charAt(4))

// *charCodeAt()
// let text ="SPETSNAZ"
// console.log(text.charCodeAt(2))
// console.log("P".charCodeAt(0))

// *Index of
// let text = "NECESSITY  IS THE MOTHER OF INVENTION"
// console.log(text.indexOf("MOTHER"))


// * Replace all 
// let text = " This is a String of Js "
// console.log(text.replaceAll("String","js"))
// *Split method 
// let officer = "HE is an officer"
// console.log(officer.split("-"));


// *Array
// let Fruits =["apple","banana"]
// }
// // String()
// TEMPLATE LETRALS('')
// It support both single and double qoutes
//It support Multiline String
//It support all html tags
// function SIYA(){
    // let str = `<h1>HELLO WORLD</h1> `
    // document.write(str)
    // let name = "Suyash"
    // let age =25
//     // alert('I am ${name} and i am age${year} old.')
// let AAJAA=()=>{
//     // alert("AAJAA")
//     // method DOM
//     // 1. document.getElementById("")
//     // 2.document.getElementsByName("")
//     // Special  document.querySelector
// let me=document.querySelector(".box1")
   
// //  me.style.color="brown"
// // me.style.background.Color="Red"
// // me.style.border="2px solid brown"
// me.style.backgroundImage="Url('')"

// }
// let button=()=>{
//     let myname=document.querySelector(".box1")
   
//     // myname.style.color="Green"
//     myname.style.backgroundImage="url(./bab.jpg)"
//     // myname.style.border="2px solid red"
  
// }
// let btn1=()=>{
//     let reset=document.querySelector(".box1")
//     reset.style.reset

// }
// let btn1=()=>{
//      let box=document.querySelector(".box1")
//  box.style.backgroundColor="Red"
//  }
// SUM 
// let Show = () => {
//   let see = document.querySelector("#num1").value;
//   let seeu = document.querySelector("#num2").value;
//   let result = document.querySelector("#show");
//   result.innerHTML = Number(see) + Number(seeu);
// };

// // let Show=()=>{

// //   let store =document.querySelector("#text")
// //   let ans =
// }

let validate=()=>{
let name=document.querySelector("#Name").value
let num=document.querySelector("#Phone ").value
let mail=document.querySelector("#E-mail").value
let pass=document.querySelector("#Password ").value
let cpass =document.querySelector("#Confirm").value


let ename=document.querySelector("#name")
let enumb=document.querySelector("#Number")
let email=document.querySelector("#mail")
let epass=document.querySelector("#Pass")
let ec=document.querySelector("#Cpass")
if (name=="")
{
    let namebox=document.querySelector("#Name")
    namebox.style.border= "1px solid red"
    
     namebox.placeholder="Please this field is required"
     
  
    
    return false
}
else if (isNaN(num)) {
        let phonebox = document.querySelector("#Phone");
        phonebox.style.border = "1px solid red";
        phonebox.value = "";
        phonebox.placeholder = "Only digits allowed";
        enumb.style.color = "red";
        return false;
    }
else if (!mail.includes("@") || !mail.includes(".")) {
        let mailbox = document.querySelector("#E-mail");
        mailbox.style.border = "1px solid red";
        mailbox.value = "";
        mailbox.placeholder = "Enter a valid email";
        email.style.color = "red";
        return false;
    }

 else if (!pass.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/)) {
    let passbox = document.querySelector("#Password");
    passbox.style.border = "1px solid red";
    passbox.value = "";
    passbox.placeholder = "Choose strong one";
    epass.style.color = "red";
    return false;
}


else if (cpass!=pass){
    let namepass=document.querySelector("#Confirm")
    pass.style.border= "1px solid red"
    pass.placeholder="Password does not match"

    return false



}


}

