// '도' 드롭다운 리스트
// '도' 서브메뉴 출력
document.getElementsByClassName('province').onclick = ()=>{
    showMenu(value); // dropbtn_content 값 변경
};

// 드롭다운 리스트 출력하는 거
dropdown = (category) => {
    if(category == 'province'){
        var v = document.querySelector(".province_dropdown .dropdown-content");
        var dropbtn = document.querySelector(".province_dropdown .dropbtn");
    }
    if(category == 'city'){
        var v = document.querySelector(".city_dropdown .dropdown-content");
        var dropbtn = document.querySelector(".city_dropdown .dropbtn");
    }
    v.classList.toggle('show'); // 괄호안의 값이 있으면 classList에서 없애고, 없으면 만들어준다.
    dropbtn.style.borderColor = 'rgb(94, 94, 94)';
}

// dropbtn_content 값 변경
showMenu=(value, category)=>{ 
    if(category == 'province'){
        var dropbtn_content = document.querySelector(".province_dropdown .dropbtn_content");
        var dropbtn_click = document.querySelector(".province_dropdown .dropbtn_click");
        var dropbtn = document.querySelector('.province_dropdown .dropbtn');
    }
    if(category == 'city'){
        var dropbtn_content = document.querySelector(".city_dropdown .dropbtn_content");
        var dropbtn_click = document.querySelector(".city_dropdown .dropbtn_click");
        var dropbtn = document.querySelector('.city_dropdown .dropbtn');
    }
    
    dropbtn_content.innerText = value;
    //dropbtn_content.style.color = '#FF0000'; // 드롭리스트에서 값정하면 글꼴 색 변경
    //dropbtn.style.borderColor = '#00FF00';   // 드롭리스트에서 값정하면 테두리 색 변경
}

// 다른 부분 누르면 다롭다운 리스트 안보이게
window.onclick=(e)=>{
    if(!e.target.matches('.dropbtn_click')){
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var dropbtn_content = document.querySelector('.dropbtn_content');
        var dropbtn_click = document.querySelector('.dropbtn_click');
        var dropbtn = document.querySelector('.dropbtn');

        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}