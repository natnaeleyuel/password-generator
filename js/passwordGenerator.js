const content1 = document.getElementById("div3");
const content2 = document.getElementById("div4");
const content3 = document.getElementById("div5");
const follower = document.getElementById("follower");
const body = document.getElementById("body");
const onofButton  = document.getElementById("onofBtn");
const subDiv = document.getElementById("subDiv");
const div3 = document.getElementById("div3");
const div4 = document.getElementById("div4");
const div5 = document.getElementById("div5");
const footer = document.getElementById("footer");

function passwordGene(){
    const commonDiv = document.querySelectorAll('.common');
    const spBlacks = document.querySelectorAll('.spBlack');
    const spWhites = document.querySelectorAll('.spWhite');
    const checkboxLabel = document.querySelectorAll('.checkboxLabel');
    const computedStyle = window.getComputedStyle(onofButton);
    const backgroundImage = computedStyle.backgroundImage;
    if(backgroundImage.includes('images/onButton.png')){
        footer.style.backgroundColor = "hsl(208, 100%, 10%)";
        body.style.backgroundColor = "black";
        subDiv.style.backgroundColor = "white";
        subDiv.style.color = "black";
        onofButton.style.border = "1.9px solid white";
        commonDiv.forEach(function(div){
            div.style.color = "hsl(207, 91%, 4%)";
        });
        spBlacks.forEach(function(spBlack){
            spBlack.style.backgroundColor = "hsl(0, 0%, 0%)";
            spBlack.style.color = "hsl(208, 100%, 97%)";
        });
        spWhites.forEach(function(spWhite){
            spWhite.style.backgroundColor = "hsl(0, 0%, 100%)";
            spWhite.style.color = "hsl(0, 0%, 0%)";
        });
        checkboxLabel.forEach(function(lebels){
            lebels.style.color = "white";
        });
        onofButton.style.backgroundImage = "url('images/offButton.png')";
    }
    else if(backgroundImage.includes('images/offButton.png')){
        follower.style.backgroundColor = "red";
        follower.style.display = "none";
        onofButton.style.backgroundImage = "url('images/onButton.png')";
        body.style.backgroundColor = "hsl(47, 100%, 50%)";
        subDiv.style.backgroundColor = "hsl(207, 91%, 4%)";
        subDiv.style.color = "hsl(208, 100%, 97%)";
        footer.style.backgroundColor = "hsl(207, 91%, 4%)";
        commonDiv.forEach(function(div){
            div.style.color = "hsl(208, 100%, 97%)";
        });
        follower.style.backgroundColor = 
        onofButton.style.border = "none";
        spWhites.forEach(function(spWhite){
            spWhite.style.backgroundColor = "hsl(0, 0%, 0%)";
            spWhite.style.color = "hsl(208, 100%, 97%)";
        });
        spBlacks.forEach(function(spBlack){
            spBlack.style.backgroundColor = "hsl(0, 0%, 100%)";
            spBlack.style.color = "hsl(0, 0%, 0%)";
        });
        checkboxLabel.forEach(function(lebels){
            lebels.style.color = "black";
        });
    }
    else{
        console.log(backgroundImage);
    }
}
function onFunction(){
    const computedStyle = window.getComputedStyle(onofButton);
    const backgroundImage = computedStyle.backgroundImage;
    if(backgroundImage.includes('images/offButton.png')){
        const dot = document.querySelector('#follower');
        follower.style.display = "block";
        document.addEventListener('mousemove', (event) => {
            dot.style.left = `${event.pageX}px`;
            dot.style.top = `${event.pageY}px`;
            dot.style.display = "block";
            follower.style.display = 'block';
        });
        window.addEventListener('mouseout', (event) => {
            if (!event.relatedTarget || event.relatedTarget.nodeName === "HTML") {
                dot.style.display = "none";
            }
        });
        window.addEventListener('mouseover', () => {
            dot.style.display = "block";
        });
    }
    else if(backgroundImage.includes('images/onButton.png')){
        const dot = document.querySelector('#follower');
        follower.style.display = "none";
        document.addEventListener('mousemove', (event) => {
            dot.style.left = `${event.pageX}px`;
            dot.style.top = `${event.pageY}px`;
            dot.style.display = "none";
            follower.style.display = 'none';
        });
        window.addEventListener('mouseout', (event) => {
            if (!event.relatedTarget || event.relatedTarget.nodeName === "HTML") {
                dot.style.display = "none";
            }
        });
        window.addEventListener('mouseover', () => {
            dot.style.display = "none";
        });
    }
}

const number = document.getElementById('number');
const lowercase = document.getElementById('lowercase');
const uppercase = document.getElementById('uppercase');
const symbol = document.getElementById('symbol');
let result = document.getElementById('result');
let length;


const numChars = "0123456789";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const symbolChars = "!@#$%^&*()_-+=~<>,./?:;{}[]";
let chars = "";
let generatePass = "";
function generateFun(){
    chars = "";
    generatePass = "";
    plength = document.getElementById('passlength');
    plength = Number(plength.value);
    
    if(plength <= 50){
        if(number.checked){
            chars = chars + numChars;
        }
        if(lowercase.checked){
            chars = chars + lowercaseChars;
        }
        if(uppercase.checked){
            chars = chars +uppercaseChars;
        }
        if(symbol.checked){
            chars = chars + symbolChars;
        }
    }
    let num = 0;
    if(plength === 0 && chars.length > 0){
        result.innerHTML = "The length must be atleast 1."
    }
    else if(chars.length >= plength && plength > 0){
        for(let i = 0; i < plength; i++){
            num = Math.floor(Math.random() * chars.length);
            generatePass = generatePass + chars[num]; 
        }
        if (generatePass.length === plength){
            result.innerHTML = generatePass;
        }
    }
    else if(chars.length === 0 && plength <= 0){
        result.innerHTML = "Password";
    }
    else if(plength > 50){
        result.innerHTML = "The maximum length of password can be generated is 50."
    }
    else{
        result.innerHTML = "The length of the password needs to much with the selected chars length."
    }
}

