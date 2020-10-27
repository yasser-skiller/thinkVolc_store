var ctx = document.querySelector("#myChart");
Chart.defaults.global.defaultFontFamily = "'DroidArabicKufiRegular'"

var data = {
    labels : ["100", "150", "300", "450", "600"],
    datasets : [
        {
            label : "الطلبات",
            data : [100, 200, 50, 300, 400],
            backgroundColor : "#a6d6fc",
            borderColor : "#48beff",
            fill : true,
            lineTension : 0.4,
            pointRadius : 2.5
        },
        {
            label : "الميعات",
            data : [200, 350, 400, 600, 500],
            backgroundColor : "#60efb5",
            borderColor : "#29dfb5",
            borderWidth: 1,
            fill : true,
            lineTension : 0.4,
            pointRadius : 2.5
        }
    ]
};

var options = {
    title : {
        display : false,
        position : "top",
        text : "Line Graph",
        fontSize : 18,
        fontColor : "#111"
    },
    legend : {
        display : true,
        position : "bottom",
        
    }
};

var chart = new Chart( ctx, {
    type : "line",
    data : data,
    options : options
} );

let DashMenu = document.querySelector('.DashMenu');
let open_hide_side = document.querySelector('.open_hide_side');


document.querySelector('#toddlebar').addEventListener('click',()=>{
    DashMenu.classList.toggle('sp_class')
    if(DashMenu.classList.contains('sp_class')){
        DashMenu.classList.add('todame');
        DashMenu.classList.remove('outdame');
    }else{
        DashMenu.classList.add('outdame')
        DashMenu.classList.remove('todame');
    }
})

open_hide_side.addEventListener('click',()=>{
    document.querySelector(".Dhachoverlay").classList.toggle('opevover');
    DashMenu.classList.toggle('DashMenuToggle');

    if(document.querySelector('#op_open_hide_side').style.display == "none"){
        // document.querySelector('#op_open_hide_side').style.display = "block";
        // document.querySelector("#close_open_hide_side").style.display = 'none';
        null
    }
    else {
        document.querySelector('#op_open_hide_side').style.display = "none";
        document.querySelector("#close_open_hide_side").style.display = 'block';
    }

})
setInterval(() => {
    if(DashMenu.classList.contains('DashMenuToggle')){
        null
    }else{
        document.querySelector('#op_open_hide_side').style.display = "block";
        document.querySelector("#close_open_hide_side").style.display = 'none';
    }
}, 0);



function overwork(){

    document.querySelector(".Dhachoverlay").classList.toggle('opevover');
    DashMenu.classList.toggle('DashMenuToggle');

    if(document.querySelector('#op_open_hide_side').style.display == "none"){
        // document.querySelector('#op_open_hide_side').style.display = "block";
        // document.querySelector("#close_open_hide_side").style.display = 'none';
        null
    }
    else {
        document.querySelector('#op_open_hide_side').style.display = "none";
        document.querySelector("#close_open_hide_side").style.display = 'block';
    }
    
    
    setInterval(() => {
        if(DashMenu.classList.contains('DashMenuToggle')){
            null
        }else{
            document.querySelector('#op_open_hide_side').style.display = "block";
            document.querySelector("#close_open_hide_side").style.display = 'none';
        }
    }, 0);
    
}

window.onclick = function(event) {
    if (event.target == document.querySelector('.Dhachoverlay')) {
        overwork()
    }
}

function myFunction(x) {
    if (x.matches) { 
        DashMenu.classList.remove('DashMenuToggle');
        document.querySelector(".Dhachoverlay").classList.remove('opevover');
    } 
    
}
  
var x = window.matchMedia("(min-width: 993px)")
myFunction(x)
x.addListener(myFunction)
 

let DadhProduct_check = document.querySelectorAll('#DadhProduct .fopp_container td input');
let arr_DadhProduct_check = Array.from(DadhProduct_check);

if(DadhProduct_check){

    arr_DadhProduct_check.forEach(element => {
        setInterval(() => {
            if(element.checked === true){
                element.parentElement.parentElement.style.backgroundColor = '#dddddd';
            }else{
                element.parentElement.parentElement.style.backgroundColor = '#fff';
            }
        }, 0);
    
    });

    document.querySelector('#deleletFRT').addEventListener('click',()=>{
        document.querySelector('#DadhProduct .fopp_container th input').checked = false;
        arr_DadhProduct_check.forEach(element => {
            if(element.checked === true){
                element.parentElement.parentElement.remove();
            }
        
        });
    })
}

let All_check_DadhProduct = document.querySelector('#DadhProduct .fopp_container th input')
if(All_check_DadhProduct){
    All_check_DadhProduct.addEventListener('click',()=>{
        if(All_check_DadhProduct.checked === true){
            arr_DadhProduct_check.forEach(element => {
                element.checked = true
                element.parentElement.parentElement.style.backgroundColor = '#dddddd';
            
            });
        }else{
            arr_DadhProduct_check.forEach(element => {
                element.checked = false
                element.parentElement.parentElement.style.backgroundColor = '#fff';
            
            });
        }
       
    })
}

let DadhOrder_check = document.querySelectorAll('#DadhOrder .fopp_container td input');
let arr_DadhOrder_check = Array.from(DadhOrder_check);

if(DadhOrder_check){

    arr_DadhOrder_check.forEach(element => {
        setInterval(() => {
            if(element.checked === true){
                element.parentElement.parentElement.style.backgroundColor = '#dddddd';
            }else{
                element.parentElement.parentElement.style.backgroundColor = '#fff';
            }
        }, 0);
    
    });

    document.querySelector('#deleletSE').addEventListener('click',()=>{
        document.querySelector('#DadhOrder .fopp_container th input').checked = false;
        arr_DadhOrder_check.forEach(element => {
            if(element.checked === true){
                element.parentElement.parentElement.remove();
            }
        
        });
    })
}
let All_check_DadhOrder = document.querySelector('#DadhOrder .fopp_container th input')
if(All_check_DadhOrder){
    All_check_DadhOrder.addEventListener('click',()=>{
        if(All_check_DadhOrder.checked === true){
            arr_DadhOrder_check.forEach(element => {
                element.checked = true
                element.parentElement.parentElement.style.backgroundColor = '#dddddd';
            
            });
        }else{
            arr_DadhOrder_check.forEach(element => {
                element.checked = false
                element.parentElement.parentElement.style.backgroundColor = '#fff';
            
            });
        }
       
    })
}
//////////////////
let DadhOrder_che = document.querySelectorAll('#DadhOrder_Item_adding .fopp_container td input');
let arr_DadhOrder_che = Array.from(DadhOrder_che);

if(DadhOrder_check){

    arr_DadhOrder_che.forEach(element => {
        setInterval(() => {
            if(element.checked === true){
                element.parentElement.parentElement.style.backgroundColor = '#dddddd';
            }else{
                element.parentElement.parentElement.style.backgroundColor = '#fff';
            }
        }, 0);

        element.parentElement.parentElement.childNodes[15].childNodes[0].addEventListener('click',()=>{
            element.parentElement.parentElement.remove();
        })
    
    });

    document.querySelector('#deleletSFG').addEventListener('click',(e)=>{
        e.preventDefault();
        document.querySelector('#DadhOrder_Item_adding .fopp_container th input').checked = false;
        arr_DadhOrder_che.forEach(element => {
            if(element.checked === true){
                element.parentElement.parentElement.remove();
            }
        
        });
    })
}
let All_che_DadhOrder = document.querySelector('#DadhOrder_Item_adding .fopp_container th input')
if(All_che_DadhOrder){
    All_che_DadhOrder.addEventListener('click',()=>{
        if(All_che_DadhOrder.checked === true){
            arr_DadhOrder_che.forEach(element => {
                element.checked = true
                element.parentElement.parentElement.style.backgroundColor = '#dddddd';
            
            });
        }else{
            arr_DadhOrder_che.forEach(element => {
                element.checked = false
                element.parentElement.parentElement.style.backgroundColor = '#fff';
            
            });
        }
       
    })
}

///////////////

let Marketing_Product_check = document.querySelectorAll('#Dadh_Marketing_Product .fopp_container td input');
let arr_Marketing_Product_check = Array.from(Marketing_Product_check);

if(Marketing_Product_check){

    arr_Marketing_Product_check.forEach(element => {
        setInterval(() => {
            if(element.checked === true){
                element.parentElement.parentElement.style.backgroundColor = '#dddddd';
            }else{
                element.parentElement.parentElement.style.backgroundColor = '#fff';
            }
        }, 0);
    
    });
    document.querySelector('#deleletTH').addEventListener('click',()=>{
        document.querySelector('#Dadh_Marketing_Product .fopp_container th input').checked = false;
        arr_Marketing_Product_check.forEach(element => {
            if(element.checked === true){
                element.parentElement.parentElement.remove();
            }
        
        });
    })
}
let All_check_Marketing = document.querySelector('#Dadh_Marketing_Product .fopp_container th input')
if(All_check_Marketing){
    All_check_Marketing.addEventListener('click',()=>{
        if(All_check_Marketing.checked === true){
            arr_Marketing_Product_check.forEach(element => {
                element.checked = true
                element.parentElement.parentElement.style.backgroundColor = '#dddddd';
            
            });
        }else{
            arr_Marketing_Product_check.forEach(element => {
                element.checked = false
                element.parentElement.parentElement.style.backgroundColor = '#fff';
            
            });
        }
       
    })
}



let DadhClint_check = document.querySelectorAll('#DadhClint .fopp_container td input');
let arr_DadhClint_check = Array.from(DadhClint_check);
if(DadhClint_check){

    arr_DadhClint_check.forEach(element => {
        setInterval(() => {
            if(element.checked === true){
                element.parentElement.parentElement.style.backgroundColor = '#dddddd';
            }else{
                element.parentElement.parentElement.style.backgroundColor = '#fff';
            }
        }, 0);
    
    });

    document.querySelector('#deleletFour').addEventListener('click',()=>{
        document.querySelector('#DadhClint .fopp_container th input').checked = false;
        arr_DadhClint_check.forEach(element => {
            if(element.checked === true){
                element.parentElement.parentElement.remove();
            }
        
        });
    })
}
let All_check_DadhClint = document.querySelector('#DadhClint .fopp_container th input')
if(All_check_DadhClint){
    All_check_DadhClint.addEventListener('click',()=>{
        if(All_check_DadhClint.checked === true){
            arr_DadhClint_check.forEach(element => {
                element.checked = true
                element.parentElement.parentElement.style.backgroundColor = '#dddddd';
            
            });
        }else{
            arr_DadhClint_check.forEach(element => {
                element.checked = false
                element.parentElement.parentElement.style.backgroundColor = '#fff';
            
            });
        }
       
    })
}


let DadhClint_paddinations_item = document.querySelectorAll('#DadhClint .paddinations .Inpaddinations span');
if(DadhClint_paddinations_item){

    let arr_DadhClint_paddinations_item = Array.from(DadhClint_paddinations_item);
    arr_DadhClint_paddinations_item.forEach(element => {
        element.addEventListener('click',()=>{

            arr_DadhClint_paddinations_item.forEach(eleme => {
                eleme.classList.remove('active_span');
            });
            element.classList.add('active_span');
        })
    
    });
}

let Marketingpaddinations_item = document.querySelectorAll('#All_Dadh_Marketing .paddinations .Inpaddinations span');
if(Marketingpaddinations_item){

    let arr_Marketingpaddinations_item = Array.from(Marketingpaddinations_item);
    arr_Marketingpaddinations_item.forEach(element => {
        element.addEventListener('click',()=>{

            arr_Marketingpaddinations_item.forEach(eleme => {
                eleme.classList.remove('active_span');
            });
            element.classList.add('active_span');
        })
    
    });
}


let DadhProductpaddinations_item = document.querySelectorAll('#DadhProduct .paddinations .Inpaddinations span');
if(DadhProductpaddinations_item){

    let arr_DadhProductpaddinations_item = Array.from(DadhProductpaddinations_item);
    arr_DadhProductpaddinations_item.forEach(element => {
        element.addEventListener('click',()=>{

            arr_DadhProductpaddinations_item.forEach(eleme => {
                eleme.classList.remove('active_span');
            });
            element.classList.add('active_span');
        })
    
    });
}

let DadhOrderpaddinations_item = document.querySelectorAll('#DadhOrder .paddinations .Inpaddinations span');
if(DadhOrderpaddinations_item){

    let arr_DadhOrderpaddinations_item = Array.from(DadhOrderpaddinations_item);
    arr_DadhOrderpaddinations_item.forEach(element => {
        element.addEventListener('click',()=>{

            arr_DadhOrderpaddinations_item.forEach(eleme => {
                eleme.classList.remove('active_span');
            });
            element.classList.add('active_span');
        })
    
    });
}



let DadhOrder_select = document.querySelectorAll('#DadhOrder .fopp_container td select');
let arr_DadhOrder_select = Array.from(DadhOrder_select);

if(DadhOrder_select){

    arr_DadhOrder_select.forEach(element => {
        
        setInterval(() => {
            if(element.value == 'قيد التنفيذ'){
                element.style.backgroundColor = 'orange';
            }
            if(element.value == 'إلغاء العملية'){
                element.style.backgroundColor = 'crimson';
            }
            if(element.value == 'نجاح العملية'){
                element.style.backgroundColor = '#7bc747';
            }
            
        }, 0);
        
    });
}
let All__DadhOrder_select = document.querySelector('#DadhOrder .fopp_container th select');
setInterval(() => {
    if(All__DadhOrder_select.value == 'قيد التنفيذ'){
        arr_DadhOrder_select.forEach(ele => {
            if(ele.parentElement.parentElement.childNodes[1].childNodes[0].checked === true){
                ele.value = 'قيد التنفيذ';
                All__DadhOrder_select.value = 'الحالة';
            }
        });
    }
    if(All__DadhOrder_select.value == 'إلغاء العملية'){
        arr_DadhOrder_select.forEach(ele => {
            if(ele.parentElement.parentElement.childNodes[1].childNodes[0].checked === true){
                ele.value = 'إلغاء العملية';
                All__DadhOrder_select.value = 'الحالة';
            }
        });
    }
    if(All__DadhOrder_select.value == 'نجاح العملية'){
        arr_DadhOrder_select.forEach(ele => {
            if(ele.parentElement.parentElement.childNodes[1].childNodes[0].checked === true){
                ele.value = 'نجاح العملية';
                All__DadhOrder_select.value = 'الحالة';
            }
        });
    }
 
}, 0);



let DadhOrderItem_select = document.querySelectorAll('#DadhOrder_Item .status .opt select');
if(DadhOrderItem_select){

    let arr_DadhOrderItem_select = Array.from(DadhOrderItem_select);
    arr_DadhOrderItem_select.forEach(element => {
        
        setInterval(() => {
            if(element.value == 'قيد التنفيذ'){
                element.style.backgroundColor = 'orange';
            }
            if(element.value == 'إلغاء العملية'){
                element.style.backgroundColor = 'crimson';
            }
            if(element.value == 'نجاح العملية'){
                element.style.backgroundColor = '#7bc747';
            }
            
        }, 0);
        
    });
}

let DadhOrder_Item_adding_select = document.querySelectorAll('#DadhOrder_Item_adding .status .opt select');
if(DadhOrder_Item_adding_select){

    let arr_DadhOrder_Item_adding_select = Array.from(DadhOrder_Item_adding_select);
    arr_DadhOrder_Item_adding_select.forEach(element => {
        
        setInterval(() => {
            if(element.value == 'قيد التنفيذ'){
                element.style.backgroundColor = 'orange';
            }
            if(element.value == 'إلغاء العملية'){
                element.style.backgroundColor = 'crimson';
            }
            if(element.value == 'نجاح العملية'){
                element.style.backgroundColor = '#7bc747';
            }
            
        }, 0);
        
    });
}



//onepage
let setting_next = document.querySelector("#setting_next");
if(setting_next){
    setting_next.addEventListener('click',()=>{
        document.querySelector('.DashbordSetting_paartOne').style.display = 'none';
        document.querySelector('.DashbordSetting_paartTwo').style.display = 'block';
    })
}  


let InputImgupload = document.querySelectorAll('#DashbordSetting input[type="file"]');

if(InputImgupload){
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
            element.addEventListener('click',()=>{
                element.style.display = 'none';
                element.parentElement.childNodes[5].childNodes[0].src = './icon/upload.svg';
                element.parentElement.childNodes[5].classList.remove('uploaded');
            })
        });
    }
}



if(document.querySelector('#head')){
    document.querySelector('#head').addEventListener('click',()=>{
        let New_Link = document.createElement('input');
        New_Link.type = 'text';
        New_Link.placeholder = 'Www.Exampale.com';
        document.querySelector('.all_links').appendChild(New_Link);
    
    })    
}
//tran menu side
let All_DashBord_Componant = document.querySelectorAll('#All_DashBord_Componant .mainclose');
if(All_DashBord_Componant){
    let arr_All_DashBord_Componant = Array.from(All_DashBord_Componant);

    // let DashMenu_item = document.querySelectorAll('.DashMenu .links a');
    // let Arr_DashMenu_item = Array.from(DashMenu_item);

    let DashMenu_itemTwo = document.querySelectorAll('.DashMenu .links p');
    let Arr_DashMenu_itemTwo = Array.from(DashMenu_itemTwo);

    let All_pro_item = document.querySelectorAll('#DadhProduct .move_one');
    let arr_All_pro_item = Array.from(All_pro_item);

    let All_ord_item = document.querySelectorAll('#DadhOrder .move_two');
    let arr_All_ord_item = Array.from(All_ord_item);

    let All_Merk_item = document.querySelectorAll('#Dadh_Marketing_Product .move_three');
    let arr_All_Merk_item = Array.from(All_Merk_item);
    


    arr_All_DashBord_Componant.forEach(element => {
        element.style.display = 'none';
        document.querySelector('#MainDashcontant').style.display = 'block';
    });

    function hideallcompant(){
        arr_All_DashBord_Componant.forEach(eleme => {
            eleme.style.display = 'none';
        });
    }

    // Arr_DashMenu_item.forEach(elem => {
    //     elem.addEventListener('click',()=>{

    //         Arr_DashMenu_item.forEach(ele => {
    //             ele.classList.remove('octiveMenu');
    //         });

    //         elem.classList.add('octiveMenu');
    //     })
        
    // });


    Arr_DashMenu_itemTwo.forEach(element => {
        element.addEventListener('click',()=>{

            Arr_DashMenu_itemTwo.forEach(ele => {
                ele.parentElement.parentElement.classList.remove('octiveMenu');
            });

            element.parentElement.parentElement.classList.add('octiveMenu');


            document.querySelector('.adding').classList.remove('sp_transformItem')
            document.querySelector('.transformItem .contant_link').style.display = 'none';

            if(element.classList.contains('main_btn')){
                hideallcompant();
                document.querySelector('#MainDashcontant').style.display = 'block';
            }

            if(element.classList.contains('pro_btn')){
                hideallcompant();
                document.querySelector('#All_DadhProduct').style.display = 'block';
                document.querySelector('#DadhProduct').style.display = 'block';
                document.querySelector('#DadhProduct_Item').style.display = 'none';
                document.querySelector('#DadhProduct_Item_adding').style.display = 'none';
                arr_All_pro_item.forEach(elee => {
                    elee.addEventListener('click',function() {
                        hideallcompant();
                        document.querySelector('#All_DadhProduct').style.display = 'block';
                        document.querySelector('#DadhProduct').style.display = 'none';
                        document.querySelector('#DadhProduct_Item_adding').style.display = 'none';
                        document.querySelector('#DadhProduct_Item').style.display = 'block';                    })
                });
                document.querySelector('#addFRT').addEventListener('click',()=>{
                    hideallcompant();
                    document.querySelector('#All_DadhProduct').style.display = 'block';
                    document.querySelector('#DadhProduct_Item_adding').style.display = 'block';
                    document.querySelector('#DadhProduct').style.display = 'none';
                    document.querySelector('#DadhProduct_Item').style.display = 'none'; 
                })
            }

            if(element.classList.contains('order_btn')){
                hideallcompant();
                document.querySelector('#All_DadhOrder').style.display = 'block';
                document.querySelector('#DadhOrder').style.display = 'block';
                document.querySelector('#DadhOrder_Item').style.display = 'none';
                document.querySelector('#DadhOrder_Item_adding').style.display = 'none';                 
                arr_All_ord_item.forEach(elee => {
                    elee.addEventListener('click',function() {
                        hideallcompant();
                        document.querySelector('#All_DadhOrder').style.display = 'block';
                        document.querySelector('#DadhOrder').style.display = 'none';
                        document.querySelector('#DadhOrder_Item').style.display = 'grid';   
                        document.querySelector('#DadhOrder_Item_adding').style.display = 'none';                 
                    })
                });
                document.querySelector('#addES').addEventListener('click',()=>{
                    hideallcompant();
                    document.querySelector('#All_DadhOrder').style.display = 'block';
                    document.querySelector('#DadhOrder').style.display = 'none';
                    document.querySelector('#DadhOrder_Item').style.display = 'none';
                    document.querySelector('#DadhOrder_Item_adding').style.display = 'block';
                })
            }

            if(element.classList.contains('merkting_btn')){
                hideallcompant();
                element.parentElement.parentElement.classList.add('sp_transformItem');
                document.querySelector('.transformItem .contant_link').style.display = 'block';
                document.querySelector('#All_Dadh_Marketing').style.display = 'block';
                document.querySelector('#Dadh_Marketing_Product').style.display = 'block';
                document.querySelector('#Dadh_Marketing_Product_Item').style.display = 'none';
                document.querySelector('#Dadh_Marketing_Soon').style.display = 'none';
                document.querySelector('#Dadh_Marketing_Product_Item_add').style.display = 'none';  

                document.querySelector('.Showadd').addEventListener('click',()=>{
                    hideallcompant();
                    document.querySelector('#All_Dadh_Marketing').style.display = 'block';
                    document.querySelector('.links .adding').classList.add('sp_transformItem');
                    document.querySelector('.transformItem .contant_link').style.display = 'block';
                    document.querySelector('#Dadh_Marketing_Soon').style.display = 'flex';
                    document.querySelector('#Dadh_Marketing_Product').style.display = 'none';
                    document.querySelector('#Dadh_Marketing_Product_Item').style.display = 'none'; 
                    document.querySelector('#Dadh_Marketing_Product_Item_add').style.display = 'none';  
                })
                arr_All_Merk_item.forEach(elee => {
                    elee.addEventListener('click',function() {
                        hideallcompant();
                        document.querySelector('#All_Dadh_Marketing').style.display = 'block';
                        document.querySelector('#Dadh_Marketing_Soon').style.display = 'none';
                        document.querySelector('#Dadh_Marketing_Product').style.display = 'none';
                        document.querySelector('#Dadh_Marketing_Product_Item_add').style.display = 'none';  
                        document.querySelector('#Dadh_Marketing_Product_Item').style.display = 'block';  
                  })
                });
                document.querySelector('#addTH').addEventListener('click',()=>{
                    hideallcompant();
                    document.querySelector('#All_Dadh_Marketing').style.display = 'block';
                    document.querySelector('#Dadh_Marketing_Soon').style.display = 'none';
                    document.querySelector('#Dadh_Marketing_Product').style.display = 'none';
                    document.querySelector('#Dadh_Marketing_Product_Item').style.display = 'none';  
                    document.querySelector('#Dadh_Marketing_Product_Item_add').style.display = 'block';  
                })

            }

            if(element.classList.contains('clint_btn')){
                hideallcompant();
                document.querySelector('#DadhClint').style.display = 'block';
            }
            if(element.classList.contains('setting_btn')){
                hideallcompant();
                document.querySelector('#DashbordSetting').style.display = 'block';
            }
        })
       
    });

    document.querySelector('#moreorders').addEventListener('click',()=>{
        hideallcompant();
        document.querySelector('#All_DadhOrder').style.display = 'block';
        document.querySelector('#DadhOrder').style.display = 'block';
        document.querySelector('#DadhOrder_Item').style.display = 'none';
        document.querySelector('#DadhOrder_Item_adding').style.display = 'none';
        Arr_DashMenu_itemTwo.forEach(ele => {
            ele.parentElement.parentElement.classList.remove('octiveMenu');
        });

        document.querySelector('.spspsp').classList.add('octiveMenu');
    })
    document.querySelector('#moresolide').addEventListener('click',()=>{
        hideallcompant();
        document.querySelector('#All_DadhOrder').style.display = 'block';
        document.querySelector('#DadhOrder').style.display = 'block';
        document.querySelector('#DadhOrder_Item').style.display = 'none';
        document.querySelector('#DadhOrder_Item_adding').style.display = 'none';
        Arr_DashMenu_itemTwo.forEach(ele => {
            ele.parentElement.parentElement.classList.remove('octiveMenu');
        });

        document.querySelector('.spspsp').classList.add('octiveMenu');
    })



}



var modal = document.querySelector("#Dadh_Marketing_Product_Item #myModal");
if(modal){
    
    var btn = document.querySelector("#Dadh_Marketing_Product_Item #myBtn");

    var span = document.querySelector("#Dadh_Marketing_Product_Item .close");

    btn.onclick = function() {
    modal.style.display = "block";
    document.getElementsByTagName("BODY")[0].style.overflow = 'hidden';

    }

    span.onclick = function() {
    modal.style.display = "none";
    document.getElementsByTagName("BODY")[0].style.overflow = 'visible';

    }
    document.querySelector('#Dadh_Marketing_Product_Item #conformbay').addEventListener('click',function() {
        modal.style.display = "none";
        document.getElementsByTagName("BODY")[0].style.overflow = 'visible';

    })

    // window.onclick = function(event) {
    //     if (event.target == modal) {
    //         modal.style.display = "none";
            
    //     }
    // }
}


var modaltwo = document.querySelector("#Dadh_Marketing_Product_Item_add #myModal");
if(modaltwo){
    
    var btntwo = document.querySelector("#Dadh_Marketing_Product_Item_add #myBtn");

    var spantwo = document.querySelector("#Dadh_Marketing_Product_Item_add .close");

    btntwo.onclick = function() {
    modaltwo.style.display = "block";
    document.getElementsByTagName("BODY")[0].style.overflow = 'hidden';

    }

    spantwo.onclick = function() {
    modaltwo.style.display = "none";
    document.getElementsByTagName("BODY")[0].style.overflow = 'visible';

    }
    document.querySelector('#Dadh_Marketing_Product_Item_add #conformbay').addEventListener('click',function() {
        modaltwo.style.display = "none";
        document.getElementsByTagName("BODY")[0].style.overflow = 'visible';

    })

    // window.onclick = function(event) {
    //     if (event.target == modaltwo) {
    //         modaltwo.style.display = "none";
            
    //     }
    // }
}

// var modalthree = document.querySelector("#DadhOrder_Item_adding #myModal");
// if(modalthree){
    
//     var btnthree = document.querySelector("#DadhOrder_Item_adding #myBtn");

//     var spanthree = document.querySelector("#DadhOrder_Item_adding .close");

//     btnthree.onclick = function() {
//     modalthree.style.display = "block";
//     document.getElementsByTagName("BODY")[0].style.overflow = 'hidden';
//     }

//     spanthree.onclick = function() {
//     modalthree.style.display = "none";
//     document.getElementsByTagName("BODY")[0].style.overflow = 'visible';
// }
//     document.querySelector('#DadhOrder_Item_adding #conformbay').addEventListener('click',function() {
//         modalthree.style.display = "none";
//         document.getElementsByTagName("BODY")[0].style.overflow = 'visible';

//     })

//     // window.onclick = function(event) {
//     //     if (event.target == modaltwo) {
//     //         modaltwo.style.display = "none";
            
//     //     }
//     // }
// }



var modalthreeer = document.querySelector("#MainDashcontant #myModal");
if(modalthreeer){
    
    var btnthreeer = document.querySelector("#MainDashcontant #myBtn");

    var spanthreeer = document.querySelector("#MainDashcontant .close");

    btnthreeer.onclick = function() {
      modalthreeer.style.display = "block";
      document.getElementsByTagName("BODY")[0].style.overflow = 'hidden';
    }

    spanthreeer.onclick = function() {
      modalthreeer.style.display = "none";
      document.getElementsByTagName("BODY")[0].style.overflow = 'visible';
    }
    document.querySelector('#MainDashcontant #conformbay').addEventListener('click',function() {
        modalthreeer.style.display = "none";
        document.getElementsByTagName("BODY")[0].style.overflow = 'visible';
    })

    
}


let words = document.querySelector('#words');

if(words){
    let wr_el ;
    let RE ;

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

let wordsagin = document.querySelector('#wordsagin');

if(wordsagin){
    let wr_elll ;
    let REEE ;

    wordsagin.addEventListener("keydown",function(e){
       
        if(e.keyCode === 13 ){
            e.preventDefault();
            wr_elll = document.createElement('div');
            REEE = document.createElement('span');
            wr_elll.classList.add('wr_ell');
            REEE.classList.add('REl');
            REEE.innerHTML = `&#x2716;`
            wr_elll.innerHTML = wordsagin.value;
            document.querySelector('#allnewwords').appendChild(wr_elll);   
            wr_elll.appendChild(REEE);   
            wordsagin.value = ""; 
        }
    });

    document.querySelector('#addwordbtntwo').addEventListener('click',()=>{
        wr_elll = document.createElement('div');
        REEE = document.createElement('span');
        wr_elll.classList.add('wr_ell');
        REEE.classList.add('REl');
        REEE.innerHTML = `&#x2716;`
        wr_elll.innerHTML = wordsagin.value;
        document.querySelector('#allnewwords').appendChild(wr_elll);   
        wr_elll.appendChild(REEE);   
        wordsagin.value = ""; 
    })
    
    setInterval(() => {
        let all_REe = document.querySelectorAll('.REl');
        let arr_all_REe = Array.from(all_REe);

        arr_all_REe.forEach(element => {
            element.addEventListener('click',()=>{
                element.parentElement.remove();
            })
        });

    }, 0);

    
}


// function knowmony(){
//     let allSumMony = document.querySelector('#DadhOrder_Item_adding .t6 span').textContent * coon;
//     document.querySelector('#DadhOrder_Item_adding .tt span').textContent = allSumMony;
// }
let coon = 1;
let plusorder = document.querySelectorAll('#DadhOrder_Item_adding .plus');
let arr_plusorder = Array.from(plusorder);
if(plusorder){
    arr_plusorder.forEach(element => {
        element.addEventListener('click',()=>{
            coon ++;
            element.parentElement.childNodes[3].textContent = coon;
            // knowmony();
        
        })
    });
}
let minorder = document.querySelectorAll('#DadhOrder_Item_adding .min');
let arr_minorder = Array.from(minorder);
if(minorder){
    arr_minorder.forEach(element => {
        element.addEventListener('click',()=>{
            coon --;
            if(coon === 0){
                coon = 1;
            }
            element.parentElement.childNodes[3].textContent = coon;
            // knowmony();
        
        })
    });
}



let InputImguploadDadhOrder = document.querySelector('#DadhOrder_Item_adding input[type="file"]');
if(InputImguploadDadhOrder){

    window.addEventListener('load', function() {
        InputImguploadDadhOrder.addEventListener('change', function() {
            if (this.files && this.files[0]) {
                InputImguploadDadhOrder.parentElement.childNodes[3].childNodes[0].src = URL.createObjectURL(this.files[0]); 
                InputImguploadDadhOrder.parentElement.childNodes[3].classList.add('uploaded');
                InputImguploadDadhOrder.parentElement.childNodes[1].style.display = 'block';
                InputImguploadDadhOrder.parentElement.style.border = 'none';
            }
        });
    
        
    });
    
    let remove_img = document.querySelector('#DadhOrder_Item_adding .Cart_pro_img .remove');
        
    remove_img.addEventListener('click',()=>{
        remove_img.style.display = 'none';
        remove_img.parentElement.childNodes[3].childNodes[0].src = './icon/plus.svg';
        remove_img.parentElement.style.border = '1px #bbb solid';
    })
  
    
}


let InputImguploadDadh_Marketing = document.querySelectorAll('#Dadh_Marketing_Product_Item_add .all_img input[type="file"]');
if(InputImguploadDadh_Marketing){
    let arr_InputImguploadDadh_Marketing = Array.from(InputImguploadDadh_Marketing);
   
    window.addEventListener('load', function() {
        arr_InputImguploadDadh_Marketing.forEach(el => {
            el.addEventListener('change', function() {
                if (this.files && this.files[0]) {
                    el.parentElement.childNodes[3].childNodes[0].src = URL.createObjectURL(this.files[0]); 
                    el.parentElement.childNodes[1].style.display = 'block';
                    el.parentElement.style.border = 'none';
                }
            });
        
        });
    });

    let remove_img_two = document.querySelectorAll('#Dadh_Marketing_Product_Item_add .all_img .remove');

    let arr_remove_img_two = Array.from(remove_img_two);
    arr_remove_img_two.forEach(element => {
        element.addEventListener('click',()=>{
            element.style.display = 'none';
            element.parentElement.childNodes[3].childNodes[0].src = './icon/plus.svg';
            element.parentElement.style.border = '1px #bbb solid';
        })
    });


    
}


let InputImguploadDadhProduct = document.querySelectorAll('#DadhProduct_Item_adding .all_img input[type="file"]');
if(InputImguploadDadhProduct){
    let arr_InputImguploadDadhProduct = Array.from(InputImguploadDadhProduct);
   
    window.addEventListener('load', function() {
        arr_InputImguploadDadhProduct.forEach(el => {
            el.addEventListener('change', function() {
                if (this.files && this.files[0]) {
                    el.parentElement.childNodes[3].childNodes[0].src = URL.createObjectURL(this.files[0]); 
                    el.parentElement.childNodes[1].style.display = 'block';
                    el.parentElement.style.border = 'none';
                }
            });
        
        });
    });

    let remove_img_three = document.querySelectorAll('#DadhProduct_Item_adding .all_img .remove');

    let arr_remove_img_three = Array.from(remove_img_three);
    arr_remove_img_three.forEach(element => {
        element.addEventListener('click',()=>{
            element.style.display = 'none';
            element.parentElement.childNodes[3].childNodes[0].src = './icon/plus.svg';
            element.parentElement.style.border = '1px #bbb solid';
        })
    });


    
}


///map
if(document.querySelector('#mymap')){
    document.querySelector('#mymap').src = `https://maps.google.com/maps?width=100%25&amp;height=200&amp;hl=en&amp;q=Jeddah%20-%20Saudi%20Arabia+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed`
}