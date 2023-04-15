// 저장용 코드
window.onload=()=>{
  // 드랍다운 리스트 출력을 위한
  document.querySelector('.dropbtn_content').onclick = ()=>{
      dropdown();
  }

  // '도' 드롭다운 리스트
  document.getElementsByClassName('province').onclick = ()=>{ // '도' 서브메뉴 출력
      showMenu(value); // dropbtn_content 값 변경
  };
  dropdown = () => { // 드롭다운 리스트 출력하는 거
      var v = document.querySelector('.dropdown-content');
      var dropbtn = document.querySelector('.dropbtn')
      v.classList.toggle('show');
      dropbtn.style.borderColor = 'rgb(94, 94, 94)';
  }
  showMenu=(value)=>{ // dropbtn_content 값 변경
      var dropbtn_content = document.querySelector('.dropbtn_content');
      var dropbtn_click = document.querySelector('.dropbtn_click');
      var dropbtn = document.querySelector('.dropbtn');
      
      dropbtn_content.innerText = value;
      dropbtn_content.style.color = '#FF0000';
      dropbtn.style.borderColor = '#00FF00';
  }
}

// 1개인 버전
// '도' 드롭다운 리스트
document.getElementsByClassName('province').onclick = ()=>{ // '도' 서브메뉴 출력
    showMenu(value); // dropbtn_content 값 변경
};

// 드롭다운 리스트 출력하는 거
dropdown = (category) => { 
    var category = category;
    var v = document.querySelector(".dropdown-content");
    var dropbtn = document.querySelector(".dropbtn");
    v.classList.toggle('show'); // 괄호안의 값이 있으면 classList에서 없애고, 없으면 만들어준다.
    dropbtn.style.borderColor = 'rgb(94, 94, 94)';
}

// dropbtn_content 값 변경
showMenu=(value)=>{ 
    var dropbtn_content = document.querySelector('.dropbtn_content');
    var dropbtn_click = document.querySelector('.dropbtn_click');
    var dropbtn = document.querySelector('.dropbtn');
    
    dropbtn_content.innerText = value;
    dropbtn_content.style.color = '#FF0000';
    dropbtn.style.borderColor = '#00FF00';
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
// 1개인 버전


// 지도에 마커 찍기 (비동기식 처리)
function getCoordsByAddress(address){
    return new Promise((resolve, reject)=>{
        geocoder.addressSearch(address, function(result, status){
            // 정상적으로 검색이 완료되면
            if(status === kakao.maps.services.Status.OK){
                var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
                return resolve(coords);
            }
            reject(new Error("getCoordsByAddress Error: not valid Address"));
        });
    });
}
// 지도에 마커 찍기 (비동기식 처리)

//
for (var i = 0; i < dataSet.length; i ++) {
    // 주소로 좌표를 검색합니다, 주소를 dataSet의 주소를 넣어줍니다.
    geocoder.addressSearch(dataSet[i].address, function(result, status) {
        // 정상적으로 검색이 완료됐으면 
        if (status === kakao.maps.services.Status.OK) {
            var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
                // 마커를 생성합니다
            var marker = new kakao.maps.Marker({
                map: map, // 마커를 표시할 지도
                position: coords, // 마커를 표시할 위치
            });
        }
    });
}
//