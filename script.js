var mapContainer = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
var mapOptions = { // 지도를 생성할 때 필요한 기본 옵션
    center: new kakao.maps.LatLng(36.5683272, 128.7296112), // 지도의 중심좌표 - 전국 36.480167, 127.8623244(level: 12)
    level: 10 // 지도의 레벨(확대, 축소 정도)
}
var map = new kakao.maps.Map(mapContainer, mapOptions); //지도 생성 및 객체 리턴

// 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤 생성
var mapTypeControl = new kakao.maps.MapTypeControl();

// 지도에 컨트롤을 추가해야 지도위에 표시
// kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

// 지도 확대 축소를 제어할 수 있는 줌 컨트롤 생성
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

// 각지 시청 위치 (도, 시, 위도, 경도)
const cityDataSet = [
    {
        province: "경상북도", city: "경산시",
        latitude: "35.8337972", longitude: "128.8090748"
    },
    {
        province: "경상북도", city: "경주시",
        latitude: "35.8563061", longitude: "129.2250935"
    },
    {
        province: "경상북도", city: "구미시",
        latitude: "36.1198554", longitude: "128.3442447"
    },
    {
        province: "경상북도", city: "김천시",
        latitude: "36.139867", longitude: "128.1136501"
    },
    {
        province: "경상북도", city: "문경시",
        latitude: "36.5868172", longitude: "128.1870909"
    },
    {
        province: "경상북도", city: "상주시",
        latitude: "36.4109729", longitude: "128.1589371"
    },
    {
        province: "경상북도", city: "안동시",
        latitude: "36.5683272", longitude: "128.7296112"
    },
    {
        province: "경상북도", city: "영주시",
        latitude: "36.805692", longitude: "128.62396"
    },
    {
        province: "경상북도", city: "영천시",
        latitude: "36.0156997", longitude: "128.9427024"
    },
    {
        province: "경상북도", city: "포항시",
        latitude: "36.0191816", longitude: "129.3432983"
    }
];

// 데이터 준비하기(제목, 주소, 이미지, 도, 시)
const dataSet = [
    // 안동시
    {
        title: "월영교",
        address: "경북 안동시 상아동 569",
        img: "./img/img1.jpg",
        province: "경상북도", 
        city: "안동시"
    },
    {
        title: "임청각",
        address: "경북 안동시 임청각길 63",
        img: "./img/img1.jpg",
        province: "경상북도", 
        city: "안동시"
    },
    {
        title: "안동찜닭골목",
        address: "경북 안동시 서부동 185",
        img: "./img/img1.jpg",
        province: "경상북도", 
        city: "안동시"
    },
    {
        title: "안동대학교",
        address: "경북 안동시 송천동 경동로 1375",
        img: "./img/img1.jpg",
        province: "경상북도", 
        city: "안동시"
    },
    {
        title: "안동국제탈춤 페스티벌",
        address: "경북 안동시 육사로 239",
        img: "./img/img1.jpg",
        province: "경상북도", 
        city: "안동시"
    },
    // 경산시
    {
        title: "하양유원지",
        address: "경상북도 경산시 하양읍 부호리 592-1",
        img: "./img/img1.jpg",
        province: "경상북도", 
        city: "경산시"
    },
    {
        title: "불국사",
        address: "경상북도 경산시 와촌면 강학리 5",
        img: "./img/img1.jpg",
        province: "경상북도", 
        city: "경산시"
    },
    // 경주시
    {
        title: "경주보문관광단지",
        address: "경상북도 경주시 보문로 446",
        img: "./img/img1.jpg",
        province: "경상북도", 
        city: "경주시"
    },
    {
        title: "경주교촌마을",
        address: "경상북도 경주시 교동 교촌길 39-2",
        img: "./img/img1.jpg",
        province: "경상북도", 
        city: "경주시"
    },
    // 구미시
    {
        title: "구미에코랜드",
        address: "경상북도 구미시 산동면 인덕1길 195",
        img: "./img/img1.jpg",
        province: "경상북도", 
        city: "구미시"
    },
    {
        title: "약사암",
        address: "경상북도 구미시 남통동 산33-1",
        img: "./img/img1.jpg",
        province: "경상북도", 
        city: "구미시"
    },
    // 김천시
    {
        title: "직지문화공원",
        address: "경상북도 김천시 대항면 운수리 33-1",
        img: "./img/img1.jpg",
        province: "경상북도", 
        city: "김천시"
    },
    {
        title: "김천녹색미래과학관",
        address: "경상북도 김천시 혁신6로 31",
        img: "./img/img1.jpg",
        province: "경상북도", 
        city: "김천시"
    },
    // 문경시
    {
        title: "문경새재 도립공원",
        address: "경상북도 문경시 문경읍 새재로 932 KR",
        img: "./img/img1.jpg",
        province: "경상북도", 
        city: "문경시"
    },
    {
        title: "불정자연휴양림",
        address: "경상북도 문경시 불정길 180",
        img: "./img/img1.jpg",
        province: "경상북도", 
        city: "문경시"
    },
    // 상주시
    {
        title: "경천대",
        address: "경상북도 상주시 사벌면 삼덕리 산15-26",
        img: "./img/img1.jpg",
        province: "경상북도", 
        city: "상주시"
    },
    {
        title: "상주박물관",
        address: "경상북도 상주시 사벌면 경천로 684",
        img: "./img/img1.jpg",
        province: "경상북도", 
        city: "상주시"
    },
    // 영주시
    {
        title: "선비촌",
        address: "경상북도 영주시 순흥면 청구리 357",
        img: "./img/img1.jpg",
        province: "경상북도", 
        city: "영주시"
    },
    {
        title: "콩세계과학관",
        address: "경상북도 영주시 부석면 영부로 23",
        img: "./img/img1.jpg",
        province: "경상북도", 
        city: "영주시"
    },
    // 영천시
    {
        title: "공산폭포",
        address: "경상북도 영천시 신녕면 치산리",
        img: "./img/img1.jpg",
        province: "경상북도", 
        city: "영천시"
    },
    {
        title: "시안미술관",
        address: "경상북도 영천시 화산면 가래실로 364",
        img: "./img/img1.jpg",
        province: "경상북도", 
        city: "영천시"
    },
    // 포항시
    {
        title: "영일대해수욕장",
        address: "경북 포항시 북구 두호동 685-1",
        img: "./img/img1.jpg",
        province: "경상북도", 
        city: "포항시"
    },
    {
        title: "호미곶해맞이광장",
        address: "경북 포항시 남구 호미곶면 해맞이로 136",
        img: "./img/img1.jpg",
        province: "경상북도", 
        city: "포항시"
    }
];

// 주소-좌표 변환 객체 생성
var geocoder = new kakao.maps.services.Geocoder();

// 마커 이미지
var imageSrc = './img/mark_ver3_2_64.png', // 마커이미지의 주소입니다    
    imageSize = new kakao.maps.Size(34, 36), // 마커이미지의 크기입니다
    imageOption = {offset: new kakao.maps.Point(17, 36)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정

// 마커의 이미지정보를 가지고 있는 마커이미지를 생성
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

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

// setMap(dataSet); // 웹 실행하면 바로 모든 마커 출력됨

// 인포윈도우  html
function getCentent(data){
    let imgSrc = data.img;

    // html 인포윈도우
    return `
    <div class="infowindow">
        <div class="infowindow-img-container">
            <img src="${imgSrc}" class="infowindow-img" class="infowindow-img" alt="">
        </div>
        <div class="infowindow-body">
            <h3 class="infowindow-title">${data.title}</h3>
            <p class="infowindow-address">${data.address}</p>
        </div>
    </div>
    `;
}

async function setMap(dataSet) {
    for (var i = 0; i < dataSet.length; i++) {
        // 마커를 생성합니다
        let coords = await getCoordsByAddress(dataSet[i].address);
        var marker = new kakao.maps.Marker({
            map: map,          // 마커를 표시할 지도
            position: coords,  // 마커를 표시할 위치
            image: markerImage // 마커 이미지 설정
        });

        markerArray.push(marker);
      
        // 마커에 표시할 인포윈도우를 생성합니다 
        var infowindow = new kakao.maps.InfoWindow({
            content: getCentent(dataSet[i]), // 인포윈도우에 표시할 내용
        });

        //인포윈도우 배열이 생성될때마다 인포윈도우 개체 추가
        infowindowArray.push(infowindow);

        // 마커에 mouseover 이벤트와 moustout 이벤트 등록
        // 이벤트 리스너로는 클로저를 만들어서 등록
        // for문에서 클로저를 만들지 않으면 마지막 마커만 이벤트 등록됨
        kakao.maps.event.addListener(
            marker,
            "click",
            makeOverListener(map, marker, infowindow, coords)
        );
        kakao.maps.event.addListener(
            map, 
            "click",
            makeOutListener(infowindow)
        );
    }
}

// 인포윈도우를 표시하는 클로저를 만드는 함수
// 클릭시 다른 인포윈도우 닫음
// 클릭한 곳으로 지도 중심 이동
function makeOverListener(map, marker, infowindow, coords){
    return function(){
        closeInfowindow(); // 클릭시 다른 인포윈도우 닫음
        infowindow.open(map, marker);
        map.panTo(coords); // 클릭한 곳으로 지도 중심 옮김
    };
}

let infowindowArray = [] // 인포윈도우 관리를 위한 배열

function closeInfowindow(){
    for(let infowindow of infowindowArray){
        infowindow.close();
    }
}

// 인포윈도우를 닫는 클로저를 만드는 함수
function makeOutListener(infowindow){
    return function(){
        infowindow.close();
    };
}

// 카테고리 분류
function categoryHandler(){
    const province = document.querySelector(".province_dropdown .dropbtn_content");
    const city = document.querySelector(".city_dropdown .dropbtn_content");

    for(let data of cityDataSet){
        if(data.province === province.innerHTML && data.city === city.innerHTML){
            var moveLatLon = new kakao.maps.LatLng(data.latitude, data.longitude);
            map.setCenter(moveLatLon);
            map.setLevel(8);
        }
    }

    // 데이터 분류
    let categorizedDataSet = [];
    for (let data of dataSet){
        if(data.province === province.innerHTML && data.city === city.innerHTML){
            categorizedDataSet.push(data);
        }
    }

    // 기본 마커 삭제
    closeMarker();

    // 기본 인포윈도우 닫기
    closeInfowindow();
    // 실행
    setMap(categorizedDataSet);
}

let markerArray = [];
function closeMarker() {
  for (marker of markerArray) {
    marker.setMap(null)
  }
}