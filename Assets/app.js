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
