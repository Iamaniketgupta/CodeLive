/*
    Dark Mode
*/ 
const themeBtn = document.querySelector('#themeBtn');
const themeIcn = document.querySelector('#themeBtn');
const body=document.querySelector("body");
themeBtn.addEventListener("click",()=>{
    
    body.classList.toggle("light");
    themeIcn.classList.toggle("fa-sun");
    themeIcn.classList.toggle("fa-moon");

});

/*
    Color Picker
*/

const color=document.querySelector("#color");
let colorval= document.querySelector("#colorval");
colorval.textContent=color.value;

color.addEventListener('input',()=>{
    colorval.innerText=color.value;
    colorval.style.background=`${color.value}`;
    colorval.style.backgroundClip="text";
    colorval.style.color="transparent";
});

color.addEventListener('change',()=>{
    let copiedmsg =document.querySelector("#copiedmsg");
    navigator.clipboard.writeText(colorval.innerText)
    .then(()=>{
        copiedmsg.style.display="block";
        setTimeout(()=>{
            copiedmsg.style.display="none";
        },3000);
    })
    .catch(err=>{
        console.error('Could not copy',err);
    });
});

/* 
    Output
*/ 

function run() {
    console.log("Run function called");

    let htmlCode = document.querySelector("#html-code").value;
    let cssCode = document.querySelector("#css-code").value;
    let jsCode = document.querySelector("#js-code").value;
    let output = document.querySelector("#output");

   output.contentDocument.body.innerHTML=htmlCode+`<style>${cssCode}</style>`
    output.contentWindow.eval(jsCode);

    localStorage.setItem('htmlCode', htmlCode);
    localStorage.setItem('cssCode', cssCode);
    localStorage.setItem('jsCode', jsCode);
}

window.addEventListener('load', () => {
    document.querySelector("#html-code").value = localStorage.getItem('htmlCode') || '';
    document.querySelector("#css-code").value = localStorage.getItem('cssCode') || '';
    document.querySelector("#js-code").value = localStorage.getItem('jsCode') || '';
});
