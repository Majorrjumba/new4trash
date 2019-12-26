
//var u ={"Num":0,"lessonsPH":1,"lessonsGI":1};localStorage.setItem("userIS",JSON.stringify(u));var ANK = {anks:[""]}; localStorage.setItem("ANK",JSON.stringify(ANK));var GUIT = {Lessons:["2019-12-30"]};localStorage.setItem("GUIT",JSON.stringify(GUIT));var PHNO = {Lessons:["2019-12-30"]};localStorage.setItem("PHNO",JSON.stringify(PHNO));

var count2 = 0;
var count3 = 0;
var radio1 = 0;
var text4 = 0;
var ank = document.getElementById("ank");
var kolvo = parseInt(JSON.parse(localStorage.getItem("userIS")).Num);
document.getElementById("info").innerText="Количество зарегестрировавшихся пользователей: "+kolvo;
function getCheckedradio() {
  if((document.getElementById("M")).checked)
  radio1=1;else radio1=2;
return(radio1);
}
function getCheckedCheckBoxes() {
  var checkboxes = document.getElementsByClassName('checkbox');
  var checkboxesChecked = []; // можно в массиве их хранить, если нужно использовать 
  for (var index = 0; index < checkboxes.length; index++) {
     if (checkboxes[index].checked) {
        checkboxesChecked.push(checkboxes[index].value);// делайте что нужно - это для наглядности
     }else{
      checkboxesChecked.push("off");}
  }
  var Is = JSON.parse(localStorage.getItem("user"))
  if(checkboxesChecked[0]==="off"&&checkboxesChecked[1]==="off") {   
    let user = {
    "Name": JSON.parse(localStorage.getItem("user")).Name,
    "Password": JSON.parse(localStorage.getItem("user")).Password,
    "Email": JSON.parse(localStorage.getItem("user")).Email,
    "true":JSON.parse(localStorage.getItem("user")).true,
    "isT": JSON.parse(localStorage.getItem("user")).isT,
    "dir":"0"};
    localStorage.setItem("user",JSON.stringify(user));
    document.location.href = "mspro.html";
}
  if(checkboxesChecked[0]==="on"&&checkboxesChecked[1]==="off"){   
    let user = {
    "Name": JSON.parse(localStorage.getItem("user")).Name,
    "Password": JSON.parse(localStorage.getItem("user")).Password,
    "Email": JSON.parse(localStorage.getItem("user")).Email,
    "true":JSON.parse(localStorage.getItem("user")).true,
    "isT": JSON.parse(localStorage.getItem("user")).isT,
    "dir":"1"};
    localStorage.setItem("user",JSON.stringify(user));
    document.location.href = "mspro.html";
}
  if(checkboxesChecked[0]==="off"&&checkboxesChecked[1]==="on"){   
    let user = {
    "Name": JSON.parse(localStorage.getItem("user")).Name,
    "Password": JSON.parse(localStorage.getItem("user")).Password,
    "Email": JSON.parse(localStorage.getItem("user")).Email,
    "true":JSON.parse(localStorage.getItem("user")).true,
    "isT": JSON.parse(localStorage.getItem("user")).isT,
    "dir":"2"};
    localStorage.setItem("user",JSON.stringify(user));
    document.location.href = "mspro.html";
}
  if(checkboxesChecked[0]==="on"&&checkboxesChecked[1]==="on"){   
    let user = {
    "Name": JSON.parse(localStorage.getItem("user")).Name,
    "Password": JSON.parse(localStorage.getItem("user")).Password,
    "Email": JSON.parse(localStorage.getItem("user")).Email,
    "true":JSON.parse(localStorage.getItem("user")).true,
    "isT": JSON.parse(localStorage.getItem("user")).isT,
    "dir":"3"};
    localStorage.setItem("user",JSON.stringify(user));
    document.location.href = "mspro.html";
}
return(parseInt(JSON.parse(localStorage.getItem("user")).dir));
}
function getCheckedCheckBoxes1() {
  var checkboxes = document.getElementsByClassName('checkbox');
  var checkboxesChecked = []; // можно в массиве их хранить, если нужно использовать 
  for (var index = 0; index < checkboxes.length; index++) {
     if (checkboxes[index].checked) {
        checkboxesChecked.push(checkboxes[index].value);// делайте что нужно - это для наглядности
     }else{
      checkboxesChecked.push("off");}
  }
  if(checkboxesChecked[0]==="off"&&checkboxesChecked[1]==="off") {   
    f=0;
}
  if(checkboxesChecked[0]==="on"&&checkboxesChecked[1]==="off"){   
    f=1;
}
  if(checkboxesChecked[0]==="off"&&checkboxesChecked[1]==="on"){   
    f=2;
}
  if(checkboxesChecked[0]==="on"&&checkboxesChecked[1]==="on"){   
    f=3;
}
return(f);
}
function Made(event){
var f = JSON.parse(localStorage.getItem("ANK"));
var t = getCheckedCheckBoxes1();
if(t===0) t="Не выбран";
if(t===1) t="Фортепиано";
if(t===2) t="Гитара";
if(t===3) t="Фортепиано и гитара";
var s = getCheckedradio();
if(s===1) s="Мужской";
if(s===2) s="Женский";
var r = "Номер телефона: "+document.getElementById("Name").value+" Инструмент: "+t+" Пол: "+s
f.anks.push(r)
localStorage.setItem("ANK",JSON.stringify(f));
console.log(JSON.parse(localStorage.getItem("ANK")).anks[0]);
}
if(document.location.href.toString().slice(-10)==="mspro.html"){
  var kolvo1 = parseInt(JSON.parse(localStorage.getItem("userIS")).lessonsPH);
  var kolvo2 = parseInt(JSON.parse(localStorage.getItem("userIS")).lessonsGI);
  document.getElementById("textins5").innerText="Ваше имя:"+ JSON.parse(localStorage.getItem("user")).Name;
  document.getElementById("textins6").innerText="Ваша почта:"+ JSON.parse(localStorage.getItem("user")).Email;
  if(parseInt(JSON.parse(localStorage.getItem("user")).dir)===1)
  document.getElementById("textins1").innerText="Общее количество назначенных занятий на данный: "+kolvo1;
  if(parseInt(JSON.parse(localStorage.getItem("user")).dir)===2)
  document.getElementById("textins1").innerText="Общее количество назначенных занятий на данный: "+kolvo2;
  if(parseInt(JSON.parse(localStorage.getItem("user")).dir)===3)
  document.getElementById("textins1").innerText="Общее количество назначенных занятий на данный: "+(kolvo1+kolvo2);
if(parseInt(JSON.parse(localStorage.getItem("user")).isT)===1){

  for(a=0; a<JSON.parse(localStorage.getItem("ANK")).anks.length; a++){
    text4 += JSON.parse(localStorage.getItem("ANK")).anks[a]+"\r\n"};
  console.log(text4);
document.getElementById("textins2").innerText= "Заявки:  " + text4;
document.getElementById('davaToday').valueAsDate = new Date();
document.getElementById('dateToday').valueAsDate = new Date();
document.getElementById('prof').style.visibility = "visible";
var butP = document.getElementById("buttonP");  
var butG = document.getElementById("buttonG"); 
console.log(document.getElementById('davaToday').value)}}
function addPL(event){
    var f = JSON.parse(localStorage.getItem("PHNO"));
    f.Lessons.push(document.getElementById('davaToday').value)
    localStorage.setItem("PHNO",JSON.stringify(f));
    var i =parseInt(JSON.parse(localStorage.getItem("userIS")).lessonsPH, 10)+1;
    var u ={"Num":parseInt(JSON.parse(localStorage.getItem("userIS")).Num),"lessonsPH":i, "lessonsGI":JSON.parse(localStorage.getItem("userIS")).lessonsGI};
    localStorage.setItem("userIS",JSON.stringify(u));
    console.log(JSON.parse(localStorage.getItem("PHNO")).Lessons[1]);
    location.reload()
}
function addGL(event){
    var f = JSON.parse(localStorage.getItem("GUIT"));
    f.Lessons.push(document.getElementById('dateToday').value)
    localStorage.setItem("GUIT",JSON.stringify(f));
    var i =parseInt(JSON.parse(localStorage.getItem("userIS")).lessonsGI, 10)+1;
    var u ={"Num":parseInt(JSON.parse(localStorage.getItem("userIS")).Num),"lessonsPH":JSON.parse(localStorage.getItem("userIS")).lessonsPH,"lessonsGI":i};
    localStorage.setItem("userIS",JSON.stringify(u));
    console.log(JSON.parse(localStorage.getItem("GUIT")).Lessons[1]);
    location.reload()
}





  function Calendar2(id, year, month) {
    var Dlast = new Date(year,month+1,0).getDate(),
        D = new Date(year,month,Dlast),
        DNlast = new Date(D.getFullYear(),D.getMonth(),Dlast).getDay(),
        DNfirst = new Date(D.getFullYear(),D.getMonth(),1).getDay(),
        calendar = '<tr>',
        month=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];
    if (DNfirst != 0) {
      for(var  i = 1; i < DNfirst; i++) calendar += '<td>';
    }else{
      for(var  i = 0; i < 6; i++) calendar += '<td>';
    }
    for(var  i = 1; i <= Dlast; i++) {
      if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
        calendar += '<td class="today">' + i;
      }else{
          for(p=0;p<JSON.parse(localStorage.getItem("PHNO")).Lessons.length;p++){
            if (D.getFullYear()+"-"+(D.getMonth()+1)+"-"+i == JSON.parse(localStorage.getItem("PHNO")).Lessons[p])
              count2++;
          }
          for(p=0;p<JSON.parse(localStorage.getItem("GUIT")).Lessons.length;p++){
            if (D.getFullYear()+"-"+(D.getMonth()+1)+"-"+i == JSON.parse(localStorage.getItem("GUIT")).Lessons[p])
              count3++;
          }
          if(count2===0&&count3===0){
            calendar += '<td>' + i;
            count2=0;count3=0;
          }
          if(count2===1&&count3===0){
            calendar += '<td class="lpday">' + i;
            count2=0;count3=0;
          }
          if(count2===0&&count3===1){
            calendar += '<td class="lgday">' + i;
            count2=0;count3=0;
          }
          if(count2===1&&count3===1){
            calendar += '<td class="lgpday">' + i;
            count2=0;count3=0;
          }
      }
      if (new Date(D.getFullYear(),D.getMonth(),i).getDay() == 0) {
        calendar += '<tr>';
      }
    }//console.log(D.getFullYear()+"-"+D.getMonth()+"-"+i); if ((D.getFullYear()+"-"+D.getMonth()+"-"+i)===(document.getElementById('davaToday').value))console.log("yes"); else console.log("no");;
    for(var  i = DNlast; i < 7; i++) calendar += '<td>&nbsp;';
    document.querySelector('#'+id+' tbody').innerHTML = calendar;
    document.querySelector('#'+id+' thead td:nth-child(2)').innerHTML = month[D.getMonth()] +' '+ D.getFullYear();
    document.querySelector('#'+id+' thead td:nth-child(2)').dataset.month = D.getMonth();
    document.querySelector('#'+id+' thead td:nth-child(2)').dataset.year = D.getFullYear();
    if (document.querySelectorAll('#'+id+' tbody tr').length < 6) {
        document.querySelector('#'+id+' tbody').innerHTML += '<tr><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;';
    }
    }
    Calendar2("calendar2", new Date().getFullYear(), new Date().getMonth());
    document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(1)').onclick = function() {
      Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month)-1);
    }
    document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(3)').onclick = function() {
      Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month)+1);
    }





var root = document.querySelector(':root');
var rootStyles = getComputedStyle(root);
var but2 = document.getElementById("button2");
var but3 = document.getElementById("button3");
var time = new Date();
function gettime(){
    var hours = time.getHours()
    var minutes =time.getMinutes()
    if (minutes<10)minutes = "0"+minutes;
    if (minutes===0)minutes ="00";
    if (hours<10)hours = "0"+hours;
    if (hours===0)hours ="00";
    document.getElementById("regibut").innerHTML ="Время "+hours+":"+minutes;
}


function chB(event){
root.style.setProperty('--background-background', 'linear-gradient(90deg, rgba(255,218,170,1) 0%, rgba(255,228,194,1) 16%, rgba(255,237,214,1) 50%, rgba(255,228,194,1) 84%, rgba(255,218,170,1) 100%)');
root.style.setProperty('--button-bgcolor', '#fdeaa8');
document.getElementById("bg").style.backgroundColor ="#fdeaa8"
document.getElementById("button3").style.backgroundColor ="#7FFFD4"
if (parseInt(JSON.parse(localStorage.getItem("user")).true)===1){
document.getElementById("regibut").style.backgroundColor ="white"
document.getElementById("enterbut").style.backgroundColor ="#fcdc6e"}
}
function chL(event){
root.style.setProperty('--background-background', 'linear-gradient(90deg, rgb(0, 140, 255) 0%, rgb(96, 109, 255) 16%, rgb(153, 162, 255) 50%, rgb(96, 109, 255) 84%, rgb(0, 140, 255) 100%)');
root.style.setProperty('--button-bgcolor', '#7FFFD4');
document.getElementById("bg").style.backgroundColor ="#7FFFD4"
document.getElementById("button2").style.backgroundColor ="#fdeaa8"
if (parseInt(JSON.parse(localStorage.getItem("user")).true)===1){
document.getElementById("regibut").style.backgroundColor ="white"
document.getElementById("enterbut").style.backgroundColor ="#00e195"}
}
function onexit(){
    if (parseInt(JSON.parse(localStorage.getItem("userIS")).Num)===0)
    location.href='#zatemnenie2';
    else
    if (parseInt(JSON.parse(localStorage.getItem("user")).true)===1){
         let user = {
        "Name": JSON.parse(localStorage.getItem("user")).Name,
        "Password": JSON.parse(localStorage.getItem("user")).Password,
        "Email": JSON.parse(localStorage.getItem("user")).Email,
        "true":"0"};
        localStorage.setItem("user",JSON.stringify(user));
        document.getElementById("enterbut").innerHTML ="Вход"; root.style.setProperty('--regi-color', 'rgba(148,144,143,0.4)');
        root.style.setProperty('--prof-color', 'rgba(255, 0, 0, 0.178)');
        document.location.href = "mssite.html";
    }
        else location.href='#zatemnenie2'
    ;

}
function regibut(){
    if (parseInt(JSON.parse(localStorage.getItem("userIS")).Num)===0)
    location.href='#zatemnenie';
    else
    if(parseInt(JSON.parse(localStorage.getItem("user")).true)===0){
    location.href='#zatemnenie';}
    else{
            gettime();setTimeout(()=>{
            document.getElementById("regibut").innerHTML ="Ваше имя: "+JSON.parse(localStorage.getItem("user")).Name}, 4000);

        
    }
    
}
function profile(){
    if (parseInt(JSON.parse(localStorage.getItem("userIS")).Num)===0){
        if(confirm("У вас уже есть аккаунт?")===true){
        if(confirm("Войти?")===true)document.location.href="#zatemnenie2";}
        else
        if(confirm("Создать?")===true)document.location.href="#zatemnenie";
    }
    else{
    if(parseInt(JSON.parse(localStorage.getItem("user")).true)===0){
        if(confirm("У вас уже есть аккаунт?")===true){
        if(confirm("Войти?")===true)document.location.href="#zatemnenie2";}
        else
        if(confirm("Создать?")===true)document.location.href="#zatemnenie";}
    else
    location.href='mspro.html';}

}
var but = document.getElementById("button1");  
var but1 = document.getElementById("button11");

window.onload = function() {
document.getElementById("button3").style.backgroundColor ="#7FFFD4"
if (parseInt(JSON.parse(localStorage.getItem("userIS")).Num)===0){
document.getElementById("enterbut").innerHTML ="Вход"
document.getElementById("regibut").innerHTML ="Регистрация"
root.style.setProperty('--regi-color', 'rgba(148,144,143,0.4)');
root.style.setProperty('--prof-color', 'rgba(255, 0, 0, 0.178)');}
else{
if(parseInt(JSON.parse(localStorage.getItem("user")).true)===1){
    document.getElementById("enterbut").innerHTML ="Выход";
    document.getElementById("regibut").innerHTML ="Ваше имя: "+JSON.parse(localStorage.getItem("user")).Name;
    document.getElementById("regibut").style.backgroundColor ="white"
    document.getElementById("enterbut").style.backgroundColor ="#fcdc6e"
    root.style.setProperty('--regi-color', 'rgba(255, 0, 0, 0.178)');
    root.style.setProperty('--prof-color', 'rgba(148,144,143,0.4)');
}
if(parseInt(JSON.parse(localStorage.getItem("user")).true)===0){
    document.getElementById("enterbut").innerHTML ="Вход"
    document.getElementById("regibut").innerHTML ="Регистрация"
    root.style.setProperty('--regi-color', 'rgba(148,144,143,0.4)');
    root.style.setProperty('--prof-color', 'rgba(255, 0, 0, 0.178)');
    
}}
 };
            function AddUser(event){
                var f = 0;
                var name = document.getElementById("name").value;
                var password = document.getElementById("pass").value;
                var email = document.getElementById("email").value; 
                for(p=0; p<parseInt(JSON.parse(localStorage.getItem("userIS")).Num);p++){
                    var emailexp = JSON.parse(localStorage.getItem("user"+p)).Email;
                    console.log(JSON.parse(localStorage.getItem("user"+p)).Email);
                if(emailexp===email) f++;}
                
                var nameexp = /^[А-Я]/
                var passwordexp = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,10}/
                var emailexp =/^([a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-z]+)$/
                if(nameexp.test(name)&&emailexp.test(email)&&passwordexp.test(password)&&f===0&&!(parseInt(JSON.parse(localStorage.getItem("userIS")).Num)===0))
                {     let user = {
                    "Name": name,
                    "Password": password,
                    "Email": email,
                    "true":"1",
                    "isT":"0",
                    "dir":"0"};
                    localStorage.setItem("user"+JSON.parse(localStorage.getItem("userIS")).Num,JSON.stringify(user));
                    localStorage.setItem("user",JSON.stringify(user));
                    document.location.href = "mspro.html";
                    console.log(JSON.parse(localStorage.getItem("userIS")).Num);
                    var i =parseInt(JSON.parse(localStorage.getItem("userIS")).Num, 10)+1;
                    var u ={"Num":i,"lessonsPH":JSON.parse(localStorage.getItem("userIS")).lessonsPH,"lessonsGI":JSON.parse(localStorage.getItem("userIS")).lessonsGI};
                    localStorage.setItem("userIS",JSON.stringify(u));
                    f=0;
                }
                else   
                {
                    if (!(nameexp.test(name))) 
                    document.getElementById("name").style.border = "3px inset red";
                 if (!(emailexp.test(email)))  
                 document.getElementById("email").style.border = "3px inset red";
                 if (!(passwordexp.test(password)))
                    document.getElementById("pass").style.border = "3px inset red";
                }  
                if(parseInt(JSON.parse(localStorage.getItem("userIS")).Num)===0){
                    let user = {
                    "Name": name,
                    "Password": password,
                    "Email": email,
                    "true":"1",
                    "isT":"1",
                    "dir":"0"};
                    localStorage.setItem("user"+JSON.parse(localStorage.getItem("userIS")).Num,JSON.stringify(user));
                    localStorage.setItem("user",JSON.stringify(user));
                    document.location.href = "mspro.html";
                    console.log(JSON.parse(localStorage.getItem("userIS")).Num);
                    var i =parseInt(JSON.parse(localStorage.getItem("userIS")).Num, 10)+1;
                    var u ={"Num":i,"lessonsPH":JSON.parse(localStorage.getItem("userIS")).lessonsPH,"lessonsGI":JSON.parse(localStorage.getItem("userIS")).lessonsGI};
                    localStorage.setItem("userIS",JSON.stringify(u));f=0;};
                if(f>0){ 
                    confirm("Аккаунта существует. Войти?") ? document.location.href = "#zatemnenie2" : alert("Введите иную почту");
                    f=0;}
            }


            function EnterUser(event){
                var f=0;
                f=0;
                var password = document.getElementById("pass1").value;
                var email = document.getElementById("email1").value;
                for(p=0; p<parseInt(JSON.parse(localStorage.getItem("userIS")).Num);p++){
                    var passwordexp = JSON.parse(localStorage.getItem("user"+p)).Password;
                    var emailexp = JSON.parse(localStorage.getItem("user"+p)).Email;
                    
                if (!(emailexp===email))f++;
                if(emailexp===email&&passwordexp===password)
                {   
                    let user = {
                    "Name": JSON.parse(localStorage.getItem("user"+p)).Name,
                    "Password": password,
                    "Email": email,
                    "true":"1",
                    "isT": JSON.parse(localStorage.getItem("user"+p)).isT,
                    "dir":JSON.parse(localStorage.getItem("user"+p)).dir};
                    localStorage.setItem("user",JSON.stringify(user));
                    document.location.href = "mspro.html";
                }
                else   
                {
                 if ((emailexp===email)&&!(passwordexp===password))  
                 document.getElementById("pass1").style.border = "3px inset red";
                } }
                if(f===(parseInt(JSON.parse(localStorage.getItem("userIS")).Num))){confirm("Аккаунт не существует. Создать?") ? document.location.href = "#zatemnenie" : alert("Введите иную почту");}
            }
            ank.addEventListener('click', Made);
            but1.addEventListener('click', EnterUser);
            but.addEventListener('click', AddUser);
            but2.addEventListener('click', chB);
            but3.addEventListener('click', chL);
            if(document.location.href.toString().slice(-10)==="mspro.html"){if(parseInt(JSON.parse(localStorage.getItem("user")).isT)===1){
            butP.addEventListener('click', addPL);
            butG.addEventListener('click', addGL);}}
