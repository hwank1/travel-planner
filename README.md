# 🗾 Korea-Japan Travel Planner

> 한국과 일본의 주요 도시 여행 정보를 한눈에 확인할 수 있는 여행 플래너 웹앱

## 📌 프로젝트 소개

한국과 일본의 약 12개 주요 도시를 대상으로, 맛집·관광지·숙소 정보를 제공하는 여행 플래너입니다.  
Google Places API 실데이터를 기반으로 하되, 정적 JSON 캐싱 전략을 통해 API 비용 없이 빠른 응답을 제공합니다.

🔗 **배포 링크:** [https://travel-planner-ruby-delta.vercel.app/]  
📁 **GitHub:** [https://github.com/hwank1/travel-planner]

---

## ✨ 구현 기능

### ✅ 완료

- **PlaceCard / PlaceSection 컴포넌트**
  - `type` / `title` props 기반의 재사용 가능한 구조 설계
  - 기존 `RestaurantSection` · `AttractionSection`을 단일 컴포넌트로 통합
  - 이미지 중심 UI + 절대 위치 오버레이로 카드 디자인 구현

- **Google Places API (New) 연동 + JSON 캐싱**
  - `axios.post` + `X-Goog-FieldMask` 헤더로 필요한 필드만 요청
  - `locationBias`를 활용한 도시별 장소 검색
  - API 응답을 정적 JSON으로 저장 → 이후 요청은 JSON에서 바로 로드 (비용 최소화)
  - `GooglePlace` → 내부 `Place` 타입으로 매핑 처리

- **Skeleton Loading UI**
  - Tailwind `animate-pulse` 기반 스켈레톤 컴포넌트
  - 데이터 로딩 중 레이아웃 동일하게 유지해 CLS 방지

- **수동 슬라이더**
  - `useState`로 현재 인덱스 관리
  - 이전 / 다음 버튼으로 PlaceCard 전환

### 🚧 개발 중

- Amadeus API를 활용한 항공편 검색 기능
- 도시 간 항공편 조회 (출발지 · 목적지 · 날짜 입력)

---

## 🛠 기술 스택

| 구분     | 기술                    |
| -------- | ----------------------- |
| Frontend | React 18, TypeScript    |
| Styling  | Tailwind CSS            |
| Build    | Vite                    |
| HTTP     | Axios                   |
| API      | Google Places API (New) |
| 데이터   | 정적 JSON 캐싱          |

---

## 📁 프로젝트 구조

```
src/
├── components/
│   ├── PlaceCard.tsx        # 장소 카드 컴포넌트
│   ├── PlaceSection.tsx     # 섹션 래퍼 (type / title props)
├── data/
│   └── places/             # 도시별 정적 JSON 캐시
├── types/
│   └── place.ts            # Place / GooglePlace 타입 정의
└── pages/
    └── CityPage.tsx        # 도시별 페이지
```

---

## 💡 기술적 의사결정

### Google Places API 정적 JSON 캐싱

약 12개의 고정 도시를 대상으로 하는 서비스 특성상, 매 요청마다 API를 호출할 필요가 없다고 판단했습니다.  
실 API로 데이터를 한 번 수집한 뒤 JSON으로 저장해두고, 이후에는 JSON을 불러오는 방식으로 **API 비용 없이 동일한 데이터 품질**을 유지했습니다.

---

## 🚀 로컬 실행 방법

```bash
# 저장소 클론
git clone https://github.com/hwank1/travel-planner.git
cd travel-planner

# 의존성 설치
npm install

# 환경 변수 설정
cp .env.example .env
# .env에 VITE_GOOGLE_PLACES_API_KEY 입력

# 개발 서버 실행
npm run dev
```

---

## 📝 환경 변수

```env
VITE_GOOGLE_PLACES_API_KEY=your_api_key_here
```

---

## 📅 개발 일정

| 기간     | 내용                                   |
| -------- | -------------------------------------- |
| 2025.03  | 프로젝트 설계, 컴포넌트 구조 설계      |
| 2025.04  | Google Places API 연동, JSON 캐싱 구현 |
| 2025.05  | Skeleton UI, 슬라이더, UI 개선         |
| 2025.06~ | Amadeus 항공편 검색 기능 개발 예정     |

---

> 개인 포트폴리오 프로젝트입니다.
