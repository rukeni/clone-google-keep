# 설계 정의서

<aside>
💡 **문서 소개**

- 이 문서에서는 Golden-Time에 들어가는 모든 명세를 rough하게 다룹니다.
- 이 문서는 1차 명세로, 얼마든지 바뀔 수 있습니다.
- 논의하고 싶으면, 이 문서에 코멘트를 남겨주세요. 그러면 슬랙에 알림이 갑니다.

</aside>

# 1. 제공해야 할 기능

### 정의

- Golden-Time이란?
  - 시간은 금이다.
  - 시간이 아깝지 않게 관리해주는 스케줄러
  - 아날로그 다이어리 사용을 그대로 디지털 어플리케이션에서 구현.

### 목적 및 기능

- 목차 관리('/)
  - 대시보드 역할을 해야한다.
  - 당장 확인해야하는 즐겨찾기 요소를 넣는다.
- 전역
  - 포스트잇을 붙여넣을 수 있다.
- 스케줄 관리('schedule')
  - 달력이 나와야 한다.
    - 달력은 날마다 일정을 추가하여 관리할 수 있고 제목 리스트 떠야한다.
    - 달력은 한달단위, 일주일 단위, 하루 단위로 다른 UI가 나와야한다.
    - 스케줄의 긴급도와 중요도가 표시되어야 한다.
    - 오늘의 날씨가 보여야 한다.
    - 그날의 날씨도 보여주면 좋을 것 같다.
    - 이번달 지출을 표시해줘야한다.
    - 달력 한칸은 색상을 지정할 수 있어야한다.(배경색, 글씨색)
    - 시간이 몇시인지 알려줘야한다.
- 다이어리 관리('diary')
  - 다이어리를 쓰면 스케줄에 노출이 되어야 한다.
  - 썼던 다이어리 목록을 쭉 볼 수 있다.
- 인맥 관리('person')
- 돈 관리('money')
- 노트 관리('note')
- 문자보내기 기능
- 카카오톡 공유 기능

# 2. Database(Firestore)

<aside>
💡 대부분의 컬렉션은 공통적으로 아래 필드를 가집니다
- createdDate(공통적인 인덱싱을 위해) : unix 타임스탬프(number타입)
- updatedDate (optional) : unix 타임스탬프(number타입)
- deletedDate (optional, sortly 삭제를 위해) : unix 타임스탬프(number타입)
- key (required) : 참조하기 위한 document Id를 뜻함(string 타입)

</aside>

## 1) Hospital ([확인 하기](https://console.firebase.google.com/u/0/project/vetflux-fb0b5/firestore/data~2FHospital~2FfpxGic6CneztIkfjGeN4))

### 목적

- 병원에 대한 정보를 담고 있다.
- 병원 소유의 사적 데이터를 하위 컬렉션으로 소유한다.

### 주요 필드

- ← 필드 명 펼쳐서 보기
  - addressInfo : Map
    - main : String
    - sub : String
  - fullTimed : Boolean
  - geoHash : String
  - geoPoint : GeoPoint
  - key : String
  - name : String
  - openDate : TimeStamp
    - unix형식의 Number로 변경 필요 있음
  - queryNames : Array<String>

## 1-1) Chart ([확인 하기](https://console.firebase.google.com/u/0/project/vetflux-fb0b5/firestore/data~2FHospital~2FfpxGic6CneztIkfjGeN4~2FChart~2F0um24uTAZSu7RYV4knpz))

### 목적

- 병원이 소유하고 있는 차트 데이터 저장 공간

### 주요 필드

## 1-2) Visit (Chart와 통폐합, 없어질 예정)

## 1-3) WorkShare (신규 : [확인 하기 꼭!](https://console.firebase.google.com/u/0/project/vetflux-fb0b5/firestore/data~2FHospital~2FfpxGic6CneztIkfjGeN4~2FWorkShare~2FlGGsd4n4NceiOSE0U3zf))

### 목적

- 병원 내에서만 공유되어야할 기록 및 대화 내용

### 주요 필드

- ← 필드 명 펼쳐서 보기
  createdDate : Number(unix)
  key : String
  petKey : String
  readed : Boolean
  petName : String
  targeted : Boolean
  text : String
  writer : String
  writerKey : String

## 1-4) RegisteredPet (신규 : [확인 하기 꼭!](https://console.firebase.google.com/u/0/project/vetflux-fb0b5/firestore/data~2FHospital~2FfpxGic6CneztIkfjGeN4~2FRegisteredPet~2F4kbQG260x7ASTHHsrtZs))

### 목적

- 해당 병원에 치료한 적이있는 등록된 동물을 뜻함

### 주요 필드

- ← 필드 명 펼쳐서 보기
  familyKey : String
  imageUrl : String
  key : String
  petBirthday : Number(unix)
  petFeature : String
  petGender : String
  petKey : String
  petName : String
  petSpecies : String
  petType : Number
  userKey : String

## 2) VetFluxUser([확인하기](https://console.firebase.google.com/u/0/project/vetflux-fb0b5/firestore/data~2FVetFluxUser~2FYUebYwCh5jwNL8eGelTX))

### 목적

- Firebase 유저 중 벳플럭스 사용 유저만 식별하기 위한 데이터 공간

### 주요 필드

- ← 필드 명 펼쳐서 보기
  - createdDate: Number(unix)
  - email : String
  - hospitalKey: String
  - hospitalName : String
  - initialCreated : Boolean
  - key : String
  - name : String
  - role : String

## 3) MessageTemplate(신규: [꼭 확인하기!](https://console.firebase.google.com/u/0/project/vetflux-fb0b5/firestore/data~2FMessageTemplate~2FfTrr5veuVKIIwkqb4GgE))

### 목적

- 채팅을 쉽게 보내기 위한 약어의 메시지내용을 저장하기 위한 공간

### 주요 필드

- ← 필드 명 펼쳐서 보
  key : String
  keyword : String
  text: String

## 벳플럭스가 관여된 늘펫 컬렉션

## 4) Vaccines(Pet컬렉션이 소유하고있음)

### 목적

- 해당 펫이 어떻게 접종을 맞아왔는지 진행 상황을 보여줌

### 주요 필드

- ← 필드 명 펼쳐서 보기
  - chartKey: String
  - confiramtionDate : Number(unix)
  - familyKey : String
  - hospitalInfo : Map
    - key : String
    - name : String
  - key : String
  - name : String
  - order : Number
  - petInfo : Map
    - key : String
    - name : String
    - type : Number
  - scheduledDate : Number(unix)
  - vetFluxUserInfo : Map
    - key : String
    - name : String
  - createdDate : Number(unix)

# 3. 서비스 기능 별 요청 CRUD 시나리오

### 1. (공통) 사이드바 동물병원 정보 및 로그인 유저 정보 가져오기(로그인 직후)

**로그아웃 전까지 데이터 유지**

- Read
  - VetFluxUser → [name, key, hospitalName, hospitalKey]

### 2. (방문관리) 오늘 방문한 고객 정보 가져오기

**방문관리 페이지 안에서 유지**

- Read
  - Hospital → hospitalKey로 특정 → Chart → Document List → 오늘 날짜이면서 completed가 false인 데이터
  - Hospital → hospitalKey로 특정 → Chart → Document List → 오늘 날짜이면서 completed가 false이면서 담당의가 특정된 데이터

### 3. (방문관리) 방문 접수를 위한 고객 검색하기

**검색시에 생성되었다가 접수 등록 되면 사라지는 데이터**

- Read
  - Family → 핸드폰 번호로 특정 → Document(UI에서는 Document List[위치: [방문관리 - 2](https://zpl.io/Vk45QDL)])

### 4. (방문관리) 방문 접수 등록하기

- Create
  - Hospital → hospitalKey로 특정 → Chart → Document 생성

### 5. (메시지) 상담해야하는 대화 목록 다루기 (읽지 않음은 읽음으로)

**메시지 페이지 안에서 유지**

- Read
  - Hospital → hospitalKey로 특정 → Chart → Document List → completed가 false인 데이터 →
- Update
  - Hospital → hospitalKey로 특정 → Chart → chartKey로 특정 → recentMessage.readed가 false인 데이터를 true로 변경

### 6. (메시지) 차트 상태에서 업무 공유 기록 다루기

**메시지 페이지 안에서 유지**

- Read
  - Hospital → hospitalKey로 특정 → WorkShare → targeted가 true인 petKey가 chart의 petKey가 같은 데이터 리스트 →
- Create
  - Hospital → hospitalKey로 특정 → WorkShare → targeted가 true이고 petKey가 존재하는 데이터 → Document 생성
- Read
  - MessageTemplate → Document List

### 7. (메시지) 차트 상태에서 고객과 채팅하기

**메시지 페이지 안에서 유지**

- Read
  - Hospital → hospitalKey로 특정 → Chart → chartKey로 특정 → Message → Document List
- Read
  - MessageTemplate → Document List
- Create
  - Hospital → hospitalKey로 특정 → Chart → chartKey로 특정 → Message → Document 생성
- Update(대화 종료)
  - Hospital → hospitalKey로 특정 → Chart → chartKey로 특정 → completed 값을 true로 변경

### 8. (메시지) 고객의 접종 수첩 다루기(확인 필요)

**메시지 페이지 안에서 유지**

- Read
  - Pet → petKey로 특정 → Vaccines → createdDate를 기준으로 정렬 → Document List
- Create
  - Pet → petKey로 특정 → Vaccines → Document 생성
- Delete
  - 아직 어떤상황에서 삭제가 이루어져야할지 고민이 안됨. update 방식으로 softly한 삭제도 고려해야 됨.

### 9. (이전 메시지) 반려동물 이름으로 메시지 검색하기

**이전 메시지 페이지 안에서 유지**

- Read
  - Hospital → hospitalKey로 특정 → RegisteredPet → petName으로 특정 → Document List
- Read
  - Hospital → hospitalKey로 특정 → Chart → completed가 true이면서 petInfo.key로 특정 → Document List

### 10. (업무 공유) 오늘 날짜 업무 공유 리스트 다루기

**업무 공유 페이지 안에서 유지**

- Read
  - Hospital → hospitalKey로 특정 → WorkShare → createdDate가 오늘로 특정 → Document List
- Read
  - MessageTemplate → Document List
- Create
  - Hospital → hospitalKey로 특정 → WorkShare → targeted가 false → Document 생성

### 11. (업무 공유) 펫 이름 검색하고 업무 공유 리스트 다루기

**업무 공유 페이지 안에서 유지**

- Read
  - Hospital → hospitalKey로 특정 → RegisteredPet → petName으로 특정 → Document List
  - Hospital → hospitalKey로 특정 → WorkShare → petKey로 특정 → Document List
- Read
  - MessageTemplate → Document List
- Create
  - Hospital → hospitalKey로 특정 → WorkShare → petKey가 존재하고 targeted가 true → Document 생성

### 12. (업무 공유) 특정 날짜를 지정하고 업무 공유 리스트 다루기

**업무 공유 페이지 안에서 유지**

- Read
  - Hospital → hospitalKey로 특정 → WorkShare → 특정 날짜 이후 데이터 → Document List
- Read
  - MessageTemplate → Document List
