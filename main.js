let userInput = document.getElementById('date');
let result = document.getElementById('result');
let resultHoroscope = document.getElementById('resultHoroscope');
let horoscope = document.getElementById('hide');
let contentTyping = document.getElementById('typingeffect');
userInput.max = new Date().toISOString().split("T")[0];

const textLoad = () => {
    setTimeout(() => {
        contentTyping.textContent = "Votre horoscope ?";
    },4000);
    setTimeout(() => {
        contentTyping.textContent = "Calculateur d'âge";
    },8000);
    setTimeout(() => {
        contentTyping.textContent = "DEV BY ESS";
    },12000);
    setTimeout(() => {
        contentTyping.textContent = "Votre horoscope ?";
    },16000);
}
textLoad();
let horoscopeDisplay = false;
function calculateAge(){
    let birthDateInput = userInput.value.trim(); 
    if (!birthDateInput) {
        alert("Veuillez entrer votre date de naissance.");
        return; 
    }
    horoscopeDisplay = true;
    ShowHoroscope();
    let birthDate = new Date(birthDateInput);
    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();
    let today = new Date();
    let d2 = today.getDate();
    let m2 = today.getMonth() +1;
    let y2 = today.getFullYear();
    let d3, m3,y3;
    y3 = y2 - y1;
    if(m2 >= m1){
        m3 = m2 - m1;
    }else{
        y3--;
        m3 = 12 + m2 - m1;
    }
    if(d2 >= d1){
        d3 = d2 -d1;
    }else{
        m3--;
        d3 = getDaysInMonth(y1,m1) + d2 - d1;
    }
    if(m3 < 0 ){
        m3 = 11;
        y3--;
    }
    horoscopeValue = getHoroscope(m1, d1);
    result.innerHTML = `Vous avez &#129325; ${y3} ans, ${m3} mois et ${d3} jours.`;
    horoscopeDisplay = true;
    ShowHoroscope();
}
function getDaysInMonth(year, month){
    return new Date(year , month ,0).getDate();
}
function getHoroscope(m1, d1) {
    console.log(m1,d1)
    if ((m1 == 3 && d1 >= 21) || (m1 == 4 && d1 <= 19)) {
        return "Bélier";
    } else if ((m1 == 4 && d1 >= 20) || (m1 == 5 && d1 <= 20)) {
        return "Taureau";
    } else if ((m1 == 5 && d1 >= 21) || (m1 == 6 && d1 <= 20)) {
        return "Gémeaux";
    } else if ((m1 == 6 && d1 >= 21) || (m1 == 7 && d1 <= 22)) {
        return "Cancer";
    } else if ((m1 == 7 && d1 >= 23) || (m1 == 8 && d1 <= 22)) {
        return "Lion";
    } else if ((m1 == 8 && d1 >= 23) || (m1 == 9 && d1 <= 22)) {
        return "Vierge";
    } else if ((m1 == 9 && d1 >= 23) || (m1 == 10 && d1 <= 22)) {
        return "Balance";
    } else if ((m1 == 10 && d1 >= 23) || (m1 == 11 && d1 <= 21)) {
        return "Scorpion";
    } else if ((m1 == 11 && d1 >= 22) || (m1 == 12 && d1 <= 21)) {
        return "Sagittaire";
    } else if ((m1 == 12 && d1 >= 22) || (m1 == 1 && d1 <= 19)) {
        return "Capricorne";
    } else if ((m1 == 1 && d1 >= 20) || (m1 == 2 && d1 <= 18)) {
        return "Verseau";
    } else if ((m1 == 2 && d1 >= 19) || (m1 == 3 && d1 <= 20)) {
        return "Poissons";
    } else {
        return "Jour ou mois invalide";
    }    
}
function scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
}
function ShowHoroscope(){
    if(horoscopeDisplay === false){
        horoscope.style.display ='none';
    }else{
        scrollToBottom();
        horoscope.style.display = 'flex';
    }    
}
function ShowResult(){
    resultHoroscope.innerHTML = `Votre Honorscope et ${horoscopeValue}`;
}

