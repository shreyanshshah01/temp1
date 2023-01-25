//DOMs
let dynamicWindow=document.querySelector(".dynamicwindow");
let buttons=document.querySelectorAll(".navbuttons");
let temp="#homebutton";
class detailkeeper{
    names;
    education;
    designation;
    constructor(a,b,c){
        this.names=a;
        this.education=b;
        this.designation=c;
    }
}



function buttonFunction(){
    if (this.id!=temp){
        document.querySelector(temp).style.background="transparent";
        document.querySelector(temp).style.color="white";
        this.style.background="white";
        this.style.color="rgba(0, 24, 189, 0.8)";
        temp="#"+this.id;
    }
    if(temp=='#homebutton') dynamicWindow.innerHTML=HomeText;
    else if(temp=='#connectbutton') dynamicWindow.innerHTML=ContactText;
    else if (temp=='#teambutton') dynamicWindow.innerHTML=TeamText;

}

//EVent Listnes / Misc.
for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",buttonFunction);
}



//TExt declarations
let HomeText='<div class="sliderwindow">' +
'</div>' +
'<div class="subpara">' +
    '<div class="heading"><div class="highlight1">O</div>UR MOTTOS</div>' + 
    '<div class="sub"><div class="highlight">P</div>ROVIDE WHAT YOU NEED.</div>' +
    '<div class="sub"><div class="highlight">P</div>ERFECTION IN THINGS.</div>'  +
    '<div class="sub"><div class="highlight">P</div>ROVIDE ON THE TIME.</div>' +
'</div>';

let ContactText='<div class="customerContact">'+
'<div class="backgroundphoto"></div>' +
'<div class="details">' +
    '<div class="heading"><div class="highlight1">M</div>ail Us At</div>' +
    '<div class="sub">Imamailsimp@hmail.com</div>' +
    '<div class="heading"><div class="highlight1">C</div>all Us At</div>' +
    '<div class="sub">+69 6869686968</div>' +
    '<div class="sub">+96 9668966869</div>' +
'</div>' +
'</div>' ;


let TeamText='<div class="team">' +
'<div class="template">' +
    '<img src="https://i.ibb.co/8zJJYD0/Whats-App-Image-2023-01-25-at-13-48-07.jpg" alt="" class="photoimg">' +
    '<div class="details">' +
        '<div class="name">Sahil Kumar Pandey</div>' +
        '<div class="Edu">B.Tech IIIT Bengaluru</div>' +
        '<div class="desg">Frontend Specialist</div>' +
    '</div>'+
'</div>' +
'<div class="template"> ' +
    '<img src="https://i.ibb.co/ZJMzdHY/Whats-App-Image-2023-01-25-at-13-48-18.jpg" alt="" class="photoimg">' +
    '<div class="details">' +
        '<div class="name">Tejas Vishwakarma</div>' +
        '<div class="Edu">Msc. Networking , BHU</div>' +
        '<div class="desg">Networking Specialist</div>' +
    '</div>' +

'</div>' +
'<div class="template">' +
    '<img src="https://i.ibb.co/DbTbSY1/Whats-App-Image-2023-01-25-at-13-48-33.jpg" alt="" class="photoimg">' +
    '<div class="details">' +
        '<div class="name">Priyanshu Patel</div>' +
        '<div class="Edu">MCA NIT Warangal</div>' +
        '<div class="desg">Data Warehousing Specialist</div>' +
    '</div>' +

'</div>' +
'<div class="template">' +
    '<img src="https://i.ibb.co/Qd4cfpj/customer-Support.png" alt="" class="photoimg">' +
    '<div class="details">' +
        '<div class="name">Pranav Dubey</div>' +
        '<div class="Edu">MCA NIT Trichy</div>' +
        '<div class="desg">Java Application Developer</div>' +
    '</div>' +
'</div>' +
'<div class="template">' +
    '<img src="https://i.ibb.co/xmQX4jS/Whats-App-Image-2023-01-25-at-14-05-00.jpg" alt="" class="photoimg">' +
    '<div class="details">' +
        '<div class="name">Shreyansh Shah</div>' +
        '<div class="Edu">MCA University Of Delhi</div>' +
        '<div class="desg">Algorithm / Backend Specialist</div>' +
    '</div>' +

'</div>' +

'</div>' ;