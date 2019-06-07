# 실전코딩 13주차 과제
> 201704147 이용재

> 201702063 이지현

> 201702019 박채연

## Dependency
`$ npm i react-native-slide react-native-svg-charts d3-shape`

## Goal
- 날씨 앱을 보다 나은 UX와 환경을 갖추도록 구성

## Result
![img](assets/readme.gif)

## Improvement
### 1. api 변경
- `Current weather API` 에서 [`5 days/3 hour forecast API`](https://openweathermap.org/forecast5) 로 API 변경
- 기존엔 현재날씨에 대한 정보만 Json으로 받을 수 있었음
- API를 바꾸고 3시간마다 측정된 5일치 데이터(총 36개)를 Json으로 한번에 받아올 수 있어 이를 그래프로 그려보기로 함
### 2. 날씨 정보
- MapView로 지도를 출력하고 Json으로부터 파싱한 데이터로 위도경도를 매핑해 해당 지역을 표시하고 지도에 핀이 뜰 수 있도록 함
- 상단에 5일치 데이터(여기서는 온도)를 Json에서 해당 항목을 적절히 파싱하여 새로운 리스트를 만들고 d3를 사용해 그래프로 표현
- x축에 따라 온도, 습도, 현재 기후상태가 실시간으로 갱신될 수 있도록 slider를 넣고 이를 해당 x축에 매핑
- 핀을 클릭하면 wikipedia로부터 가져온 해당 지역의 정보를 출력할 수 있도록 함 
### 3. UX 개선점
- 어플 진입시 아이콘 설정
- 초기 화면을 좀 더 이쁘게 보이도록 개선
- 날씨정보 부분을 좀 더 이쁘게 보이도록 개선

