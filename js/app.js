// let slidder = document.querySelector('.swiper-containe');
// if(slidder){
  setTimeout(() => {
    //header
  var swiper = new Swiper('.swiper-containe', {
    spaceBetween: 30,
    effect: 'fade',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  }, 0);
// }

let list = document.querySelectorAll('.list');
let ar_list = Array.from(list);

let prouduct_img = document.querySelectorAll('.over');
let ar_prouduct_img = Array.from(prouduct_img)


let heart_Counter = document.querySelector('#loved_Num');
let Buy_Counter = document.querySelector('#Buy_Num');

ar_prouduct_img.forEach(element => {
    element.addEventListener('mouseenter',()=>{
      element.parentElement.children[1].style.display = "flex";
    })
});

ar_prouduct_img.forEach(element => {
   element.addEventListener('mouseleave',()=>{
     element.parentElement.children[1].style.display = "none";
   })
});

ar_list.forEach(element => {
    element.addEventListener('mouseenter',function(){
    this.style.display = 'flex';
  })
});


ar_list.forEach(element => {
    element.addEventListener('mouseleave',function(){
    this.style.display = 'none';
  })
});

//heart
let heart_Coun ;
// heart_Counter.textContent = 0;

if(heart_Coun == 0 || heart_Counter.textContent == 0 ){
    document.querySelector('.BigHeart2').style.display = 'none';
    document.querySelector('.BigHeart1').style.display = 'block';
}

ar_list.forEach(element => {
    element.children[0].addEventListener('click',function(){

        if(this.style.color === 'crimson'){
            heart_Coun --;
            heart_Counter.textContent = heart_Coun;
            this.style.color = '#000';
        }else{
            heart_Coun ++;
            heart_Counter.textContent = heart_Coun;
            this.style.color = 'crimson';
        }

        if(heart_Coun > 0 ){
            document.querySelector('.BigHeart1').style.display = 'none';
            document.querySelector('.BigHeart2').style.display = 'block';
            document.querySelector('.BigHeart2').style.color = 'crimson';
            document.querySelector('.BigHeart2').style.fontSize = '30px';
        }
        if(heart_Coun == 0 || heart_Counter.textContent == 0 ){
            document.querySelector('.BigHeart2').style.display = 'none';
            document.querySelector('.BigHeart1').style.display = 'block';
        }
        
         
    })
});

//Buy
let Buy_Coun ;
let arr_icon = document.querySelector('.fa-arrow-down');
if(arr_icon){
    let ar_arr_icon = Array.from(arr_icon);
// Buy_Counter.textContent = 0

ar_list.forEach(element => {
    element.children[2].addEventListener('click',function(){

        if(this.style.display !== 'none'){
            Buy_Coun ++;
            Buy_Counter.textContent = Buy_Coun;
            this.style.display = 'none';
            element.children[3].classList.add('hide')
            element.children[3].style.display = 'block';
        }
    
    })

    element.children[3].addEventListener('click',function(){

        if(this.classList.contains('hide')){
            Buy_Coun --;
            Buy_Counter.textContent = Buy_Coun;
            element.children[2].style.display = 'block';
            this.classList.remove('hide');
            this.style.display = 'none';
        }
    
    })
});
}


//Buycontact
let QU = document.querySelectorAll('.t9');
let ar_QU = Array.from(QU);

let plus = document.querySelectorAll('.plus');
let ar_plus = Array.from(plus);

let min = document.querySelectorAll('.min');
let ar_min = Array.from(min);

let QU_count = 1;

// QU.textContent = QU_count;

ar_plus.forEach(el => {
    el.addEventListener('click', ()=>{
        QU_count ++;
        el.parentElement.children[1].textContent = QU_count;
    })
});


ar_min.forEach(el => {
    el.addEventListener('click', ()=>{
        QU_count --;
        if(QU_count < 1){
            QU_count = 0 ;
        }
        el.parentElement.children[1].textContent = QU_count;
    })
});


let texr_area = document.querySelector('#matxt');

if(texr_area){
    let Cmatxt = document.querySelector('#Cmatxt');
    let Max_length = texr_area.getAttribute('maxlength');
    texr_area.oninput = function(){
        Cmatxt.textContent = Max_length - this.value.length
    }

}




let password_trick = document.querySelector("#password");
let show = document.querySelector(".show");
let hide = document.querySelector(".hide");

if(password_trick){

    hide.style.display = "none";
    // show.style.display = "none";

    password_trick.addEventListener("keypress",()=>{
        show.style.display = "block";
    });

    setInterval(() => {
        if(password_trick.value === ""){
            show.style.display = "none";
        }

    }, 0);

    show.addEventListener('click',()=>{
        password_trick.setAttribute('type','text');
        hide.style.display = "block";
        show.style.display = "none";
        
    });

    hide.addEventListener('click',()=>{
        password_trick.setAttribute('type','password');
        show.style.display = "block";
        hide.style.display = "none";
        
    });

}

let recycle_item = document.querySelectorAll('.recycle_item');
let dash = document.querySelectorAll('.dash');
let pay_info = document.querySelector('#pay_info');
let drive_info = document.querySelector('#drive_info');
let login_info = document.querySelector('#login_info');

if(recycle_item && dash &&  login_info && drive_info && pay_info){
    let arr_recycle_item = Array.from(recycle_item);
    let arr_dash = Array.from(dash);

    window.addEventListener('load',()=>{

        login_info.style.display = 'block';
        pay_info.style.display = 'none';
        drive_info.style.display = 'none';

        arr_recycle_item.forEach(element => {
            element.classList.toggle('recycle_item_off')
        });

        arr_dash.forEach(element => {
            element.classList.toggle('dash_off')
        });

        arr_recycle_item[0].classList.toggle('recycle_item_off');


    })

    arr_recycle_item[1].addEventListener('click',()=>{

        pay_info.style.display = 'none';
        login_info.style.display = 'none';
        drive_info.style.display = 'block';

        arr_recycle_item.forEach(element => {
            element.classList.remove('recycle_item_off')
        });

        arr_dash[0].classList.remove('dash_off');
        arr_dash[1].classList.add('dash_off');

        arr_recycle_item[2].classList.add('recycle_item_off');


    })

    arr_recycle_item[2].addEventListener('click',()=>{

        pay_info.style.display = 'block';
        login_info.style.display = 'none';
        drive_info.style.display = 'none';

        arr_recycle_item.forEach(element => {
            element.classList.remove('recycle_item_off')
        });

        arr_dash.forEach(element => {
            element.classList.remove('dash_off')
        });

    })
}
let price_value_input = document.querySelector('#price_value_input');
let price_chossen = document.querySelector('#price_chossen');
 setInterval(() => {
    if(price_value_input && price_chossen){
        price_chossen.textContent = price_value_input.value;
    }else{
        null
    }
 }, 0);
if(document.querySelector('#head')){
    document.querySelector('#head').addEventListener('click',()=>{
        let New_Link = document.createElement('input');
        New_Link.type = 'text';
        New_Link.placeholder = 'Www.Exampale.com';
        document.querySelector('.all_links').appendChild(New_Link);
    
    })    
}


 
let InputImgupload = document.querySelectorAll('input[type="file"]');
let arr_InputImgupload = Array.from(InputImgupload);

window.addEventListener('load', function() {
    arr_InputImgupload.forEach(el => {
        el.addEventListener('change', function() {
            if (this.files && this.files[0]) {
                el.parentElement.childNodes[5].childNodes[0].src = URL.createObjectURL(this.files[0]); 
                el.parentElement.childNodes[5].classList.add('uploaded');
                el.parentElement.childNodes[3].style.display = 'block';
            }
        });
    
    });
});

let remove = document.querySelectorAll('.part_one .remove');
if(remove){
    let arr_remove = Array.from(remove);
    arr_remove.forEach(element => {
        // console.log(element.parentElement.childNodes)
        element.addEventListener('click',()=>{
            element.style.display = 'none';
            element.parentElement.childNodes[5].childNodes[0].src = './icon/upload.svg';
            element.parentElement.childNodes[5].classList.remove('uploaded');
        })
    });
}

    
//onepage
let compRegis = document.querySelector("#compRegis");
if(compRegis){
    compRegis.addEventListener('click',()=>{
        document.querySelector('.registration_Main_page').style.display = 'none';
        document.querySelector('.completeRegistration_Main_page').style.display = 'block';
    })
}  
// slider
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 10,
  // init: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
     nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  }
});
let words = document.querySelector('#words');

if(words){
    let wr_el ;
    let RE ;
    console.log("sfdsg")

    words.addEventListener("keydown",function(e){ 
        if(e.keyCode === 13 ){
            e.preventDefault();
            wr_el = document.createElement('div');
            RE = document.createElement('span');
            wr_el.classList.add('wr_el');
            RE.classList.add('RE');
            RE.innerHTML = `&#x2716;`
            wr_el.innerHTML = words.value;
            document.querySelector('#wordsParent').appendChild(wr_el);   
            wr_el.appendChild(RE);   
            words.value = ""; 
        }
    });

    document.querySelector('#addwordbtn').addEventListener('click',()=>{
        wr_el = document.createElement('div');
        RE = document.createElement('span');
        wr_el.classList.add('wr_el');
        RE.classList.add('RE');
        RE.innerHTML = `&#x2716;`
        wr_el.innerHTML = words.value;
        document.querySelector('#wordsParent').appendChild(wr_el);   
        wr_el.appendChild(RE);   
        words.value = ""; 
    })
    
    setInterval(() => {
        let all_RE = document.querySelectorAll('.RE');
        let arr_all_RE = Array.from(all_RE);

        arr_all_RE.forEach(element => {
            element.addEventListener('click',()=>{
                element.parentElement.remove();
            })
        });

    }, 0);

    
}