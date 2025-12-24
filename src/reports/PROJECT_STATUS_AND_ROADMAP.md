# [PROJECT REPORT] OceanTech Global Platform Development

**문서 작성일**: 2025년 12월 21일  
**작성자**: Antigravity (Lead Developer)  
**프로젝트 단계**: Phase 1 (Brand Showcase & UI Foundation) 완료

---

## 1. Phase 1: 브랜드 통합 및 비주얼 아이덴티티 구축 (완료)

현재까지 "**해양 테크 기반의 글로벌 뷰티 기업**"이라는 이미지를 시각화하고, B2B(라캉)와 B2C(알마이너)를 아우르는 통합 플랫폼의 기초를 다졌습니다.

### 1.1 핵심 성과 (Key Achievements)

1.  **Dual-Brand Architecture (이원화 구조 설계)**

    - **메인 홈**: 'Tech(알마이너)'와 'Pro(라캉)' 두 가지 축을 시각적으로 분리하여 방문자 목적에 맞게 유도.
    - **헤더/네비게이션**: 배경색(Dark/Light)에 따라 자동으로 최적화되는 반응형 테마 적용.

2.  **Brand Identity Restoration (브랜드 본연의 색깔 찾기)**

    - **Alminer (B2C)**: 쿠팡 데이터를 기반으로 **Vibrant Orange & White** 테마 적용. 3대 핵심 기술(Elasticity, Cohesion, Protect) 시각화.
    - **Lacan (B2B)**: 전문가 전용의 무게감을 주는 **Matte Black & Gold** 테마 적용. 살롱 전용 멤버십 및 교육 프로그램 강조.

3.  **Global Standard UI/UX**
    - **반응형 웹**: 모바일부터 데스크탑까지 끊김 없는 사용자 경험 제공.
    - **Tech Visuals**: 단순 텍스트 나열을 넘어, 타임라인(History), 테크 맵(Tech Map), 동적 인터랙션(Scroll & Hover) 구현.
    - **i18n (다국어 기초)**: 영문/국문 전환 기능 탑재로 해외 바이어 대응 기초 마련.

---

## 2. Phase 2: 글로벌 세일즈 및 플랫폼 확장 (제안 단계)

"해외 바이어 노출"과 "직접 판매(DTC)", "입점 채널 관리"라는 새로운 비즈니스 목표를 달성하기 위한 고도화 계획입니다.

### 2.1 Global B2B & Export (해외 바이어 대응)

해외 바이어에게 신뢰를 주고, 실제 계약으로 이어지게 하기 위한 기능입니다.

- **Global Sales Map (글로벌 현황판)**:
  - 쇼피(Shopee), 아마존(Amazon), 큐텐(Qoo10) 등 현재 입점된 국가와 채널을 세계 지도상에 시각화하여 보여주는 대시보드 섹션.
  - _효과_: "이미 글로벌에서 검증된 브랜드"라는 인식을 심어줌.
- **Digtal Catalog & Media Kit 다운로드**:
  - 바이어들이 별도 문의 없이도 제품 사양서(Spec Sheet), 고화질 누끼컷, 브랜드 소개서(PDF)를 다운로드할 수 있는 'Business Resource' 페이지.
- **B2B Inquiry Form (대량 구매 문의)**:
  - 일반 이메일 링크가 아닌, 바이어 정보(국가, 유통 채널, 예상 주문량)를 구조화하여 받는 비즈니스 폼 구축.

### 2.2 Direct Commerce (자사몰 기능)

단순 홍보를 넘어 실제 매출을 발생시키는 단계입니다.

- **Unified Cart & Checkout**:
  - 알마이너(일반)와 라캉(전문가) 제품을 장바구니에 담고 결제하는 프로세스.
  - _결제 모듈_: 해외 카드(PayPal/Stripe) 및 국내 결제(Toss/KakaoPay) 연동.
- **프로(Pro) 인증 시스템**:
  - 라캉 제품은 '사업자 등록증'이나 '자격증'을 업로드하여 승인된 회원만 가격을 보고 구매할 수 있도록 하는 **폐쇄형 B2B몰** 기능 (기존 라캉 사이트 흡수).

### 2.3 Channel Management (입점 현황 관리)

입점된 외부 쇼핑몰들과의 연결성을 강화합니다.

- **Live Channel Link**:
  - "Buy Now on Amazon", "Shop on Shopee" 등 국가별/채널별 구매 좌표를 안내하는 스마트 링크 허브.
- **Channel API Integration (장기 로드맵)**:
  - 추후 아마존/쇼피의 판매 데이터를 가져와 관리자 페이지에서 통합 매출을 확인하는 기능.

---

## 3. Immediate Action Items (우선 순위 제안)

해외 바이어에게 임팩트를 주기 위해 다음 순서로 개발을 제안합니다.

1.  **[Business] 글로벌 세일즈 맵 (Sales Map) 구현**: "우리는 글로벌로 뻗어나가는 기업이다"를 메인에서 시각적으로 증명.
2.  **[Commerce] 프로덕트 상세 페이지(PDP) 고도화**: 단순 소개를 넘어 'Spec Table', 'Download PDF' 등이 포함된 바이어 친화적 상세 페이지.
3.  **[System] 문의하기(Inquiry) 고도화**: 단순 메일 발송이 아닌, 폼 양식 개발.

---

**비고**: 본 문서는 `src/reports/PROJECT_STATUS_AND_ROADMAP.md`에 저장됩니다.
