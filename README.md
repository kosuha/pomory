# pomory

* react-native

### 프로젝트 구조

pomory/  
├── src/  
|   ├── App.js  
│   ├── assets/  
│   │   ├── images/  
│   │   └── fonts/  
│   ├── components/  
│   │   ├── common/  
│   │   └── screens/  
│   ├── models/  
│   ├── viewModels/  
│   ├── navigation/  
│   ├── services/  
│   │   ├── api/  
│   │   └── storage/  
│   ├── utils/  
│   └── config/  
├── ...  
└── index.js  


1. models/: 데이터 모델을 정의하고, 데이터 조작 및 유효성 검사 로직을 포함합니다.
2. viewModels/: ViewModel을 정의하고, 모델과 뷰 사이의 데이터 바인딩 및 상태 관리를 처리합니다.
3. services/: API 통신, 로컬 스토리지 및 기타 서비스 로직을 구현합니다.
    * api/: 서버와 통신하는 API 로직을 포함합니다.
    * storage/: 앱 내 데이터 저장 및 검색을 위한 로컬 스토리지 로직을 포함합니다.