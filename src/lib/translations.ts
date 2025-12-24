export type Language = 'ko' | 'en';

export const translations = {
  ko: {
    nav: {
      home: '홈',
      about: '연구소 소개',
      lacan: '라캉 왁스',
      alminer: '알마이너',
      business: '비즈니스 센터',
      shop: '쇼핑몰 바로가기',
    },
    global: {
      title: 'Global Network',
      subtitle: '전 세계와 함께하는 오션해양테크',
      description: '아마존, 쇼피, 큐텐 등 글로벌 주요 유통 채널을 통해 K-Beauty의 우수성을 알리고 있습니다.',
      partners: [
        { name: 'Amazon US', region: 'North America' },
        { name: 'Shopee', region: 'Southeast Asia' },
        { name: 'Qoo10', region: 'Japan' },
        { name: 'Rakuten', region: 'Japan' }
      ]
    },
    business: {
      title: 'BUSINESS CENTER',
      subtitle: 'Resources for Partners',
      download: {
        title: '브랜드 리소스 다운로드',
        desc: '고해상도 제품 이미지, 국/영문 브로슈어, 로고 파일을 다운로드하실 수 있습니다.',
        kit: '미디어 킷',
        catalog: '제품 카탈로그 (PDF)',
        bi: '브랜드 로고 (AI/PNG)'
      },
      inquiry: {
        title: '수출 및 대량 구매 문의',
        desc: '글로벌 파트너십 및 대량 구매(Wholesale) 관련 문의를 남겨주세요.',
        btn: '문의하기'
      }
    },
    pro: {
      title: 'PRO MEMBER ZONE',
      login: {
        title: '전문가 회원 로그인',
        desc: '라캉 프로 회원은 전용 최저가 혜택과 교육 자료를 이용하실 수 있습니다.',
        idLabel: '사업자/면허 번호',
        pwLabel: '비밀번호',
        btn: '로그인',
        register: '전문가 회원가입 신청'
      }
    },
    hero: {
      title: '한국오션해양테크연구소',
      subtitle: '해양 기술과 뷰티 사이언스의 만남',
      cta: '자세히 보기',
    },
    about: {
      title: '연구소 소개',
      description: '한국오션해양테크연구소는 해양 바이오 자원에서 추출한 유효 성분과 첨단 데이터 분석 기술을 결합하여, 뷰티 산업의 새로운 패러다임을 제시합니다.',
      ceo: '대표이사: 조제복',
      address: '부산광역시 남구 못골번영로 71번길 74 (대연동, 부산예술대학교 본관 4층)',
      contact: '문의하기',
      vision: 'Vision',
      visionText: '글로벌 No.1 뷰티 데이터 플랫폼',
    },
    lacan: {
      title: 'LACAN WAX',
      subtitle: 'The Absolute Standard for Professionals',
      description: '라캉 왁스는 오직 검증된 전문가(Authorized Personnel)만을 위해 설계된 하이엔드 왁스 브랜드입니다. 수많은 살롱 데이터와 피드백을 기반으로 완성된 완벽한 그립감과 저자극 포뮬러는, 당신의 시술 가치를 한 차원 더 높여줍니다.',
      features: [
        { title: 'Exclusive Membership', desc: '철저한 멤버십 승인 절차를 통해 비전문가의 무분별한 접근을 차단하고 전문가의 권익을 보호합니다.' },
        { title: 'Hypoallergenic Formula', desc: '민감한 Y존 시술에도 자극을 최소화하는 최상급 로진과 천연 에센셜 오일 블렌딩.' },
        { title: 'Perfect Grip & Control', desc: '가는 연모부터 굵은 모근까지 한 번에 제어하는 강력한 그립력과 빠른 건조 속도.' },
        { title: 'Technical Education', desc: '라캉 아카데미를 통해 단순 제품 공급을 넘어, 시술 테크닉과 살롱 경영 노하우를 공유합니다.' }
      ],
      products: [
        { name: 'Lacan Hard Wax', desc: '최상의 그립감과 낮은 융점으로 모든 부위에 적용 가능한 전문가용 프리미엄 하드 왁스.', tag: 'Signature' },
        { name: 'Lacan Brazilian Pack', desc: 'Y존 미백 및 주름 개선 이중 기능성 인증. 시술 후 진정과 탄력을 위한 특수 설계 마스크.', tag: 'Best Seller' },
        { name: 'Post-Care Solution', desc: '인그로운 헤어 예방과 피부 진정을 위한 전문가 전용 애프터케어 라인.', tag: 'Professional' },
        { name: 'Pre-Waxing Oil', desc: '피부 보호막을 형성하여 스킨 탈락을 방지하고 통증을 완화하는 전처리 오일.', tag: 'Essential' }
      ],
      cta: '전문가 인증 및 파트너 신청'
    },
    alminer: {
      title: 'ALMINER',
      subtitle: 'Expertise Made Easy, Professional Self-Waxing',
      description: '알마이너는 전문가용 왁스 브랜드 "라캉(LA CAN)"의 기술력을 홈케어로 확장한 프리미엄 셀프 왁싱 브랜드입니다. 집에서도 실수가 없도록 안전하고 완벽한 제모를 위해 3단계 핵심 테크놀로지를 적용했습니다.',
      comingSoon: '데이터 기반 뷰티 솔루션 고도화 중',
      features: [
        { title: '엘라스틱 테크', desc: '끊어지거나 깨지지 않는 유연함으로 롱 스트립 시술이 가능한 고탄성 포뮬러' },
        { title: '모발 응집 테크', desc: '85% 이상의 고순도 소나무 수지로 짧고 미세한 털까지 완벽하게 잡아내는 기술' },
        { title: '스킨 프로텍트', desc: '피부 점착은 낮추고 모발 응집력은 높여 자극을 최소화한 저온 공법 적용' }
      ],
      product: {
        name: '알마이너 하드 왁스',
        desc: '페이스부터 바디, 브라질리언까지 하나로 끝내는 올인원 프리미엄 하드 왁스. 50-55도의 낮은 융점으로 피부 자극을 최소화했습니다.',
        specs: [
          'Elasticity Tech: 끊어짐 없는 탄성',
          'Hair Cohesion Tech: 강력한 모발 그립',
          'Low Temp Method: 50~55°C 저온 시술',
          'Paraffin #55 함유: 부드러운 발림성'
        ]
      },
      cta: '지금 쿠팡에서 구매하기'
    },
    footer: {
      rights: '© 2024 Korea Ocean Marine Tech Research Institute. All rights reserved.',
      companyName: '(주)오션테크해양연구소',
      businessNum: '사업자등록번호: 000-00-00000',
      tel: 'Tel: 010-7169-3438',
      email: 'Email: jbanion@naver.com'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      lacan: 'Lacan Wax',
      alminer: 'Alminer',
      business: 'Business',
      shop: 'Visit Shop',
    },
    global: {
      title: 'Global Network',
      subtitle: 'Connecting with the World',
      description: 'We are promoting the excellence of K-Beauty through major global distribution channels such as Amazon, Shopee, and Qoo10.',
      partners: [
        { name: 'Amazon US', region: 'North America' },
        { name: 'Shopee', region: 'Southeast Asia' },
        { name: 'Qoo10', region: 'Japan' },
        { name: 'Rakuten', region: 'Japan' }
      ]
    },
    business: {
      title: 'BUSINESS CENTER',
      subtitle: 'Resources for Partners',
      download: {
        title: 'Download Resources',
        desc: 'Access high-resolution product images, brochures, and brand logos.',
        kit: 'Media Kit',
        catalog: 'Product Catalog (PDF)',
        bi: 'Brand Logo (AI/PNG)'
      },
      inquiry: {
        title: 'Wholesale & Export Inquiry',
        desc: 'Please contact us for global partnership and wholesale inquiries.',
        btn: 'Contact Us'
      }
    },
    pro: {
      title: 'PRO MEMBER ZONE',
      login: {
        title: 'Professional Login',
        desc: 'Lacan Pro members get exclusive pricing and educational resources.',
        idLabel: 'License / Biz Number',
        pwLabel: 'Password',
        btn: 'Login',
        register: 'Apply for Pro Membership'
      }
    },
    hero: {
      title: 'Korea Ocean Marine Tech Research Institute',
      subtitle: 'Convergence of Marine Tech & Beauty Science',
      cta: 'Learn More',
    },
    about: {
      title: 'About Us',
      description: 'We present a new paradigm in the beauty industry by combining active ingredients extracted from marine bio-resources with advanced data analytics.',
      ceo: 'CEO: Jo Je-bok',
      address: '4F Main Bldg, Busan All Arts College, 74 Motgol-beonyeong-ro 71-beongil, Nam-gu, Busan, Korea',
      contact: 'Contact Us',
      vision: 'Vision',
      visionText: 'Global No.1 Beauty Data Platform',
    },
    lacan: {
      title: 'LACAN WAX',
      subtitle: 'The Absolute Standard for Professionals',
      description: '라캉 왁스는 오직 검증된 전문가(Authorized Personnel)만을 위해 설계된 하이엔드 왁스 브랜드입니다. 수많은 살롱 데이터와 피드백을 기반으로 완성된 완벽한 그립감과 저자극 포뮬러는, 당신의 시술 가치를 한 차원 더 높여줍니다.',
      features: [
        { title: 'Exclusive Membership', desc: '철저한 멤버십 승인 절차를 통해 비전문가의 무분별한 접근을 차단하고 전문가의 권익을 보호합니다.' },
        { title: 'Hypoallergenic Formula', desc: '민감한 Y존 시술에도 자극을 최소화하는 최상급 로진과 천연 에센셜 오일 블렌딩.' },
        { title: 'Perfect Grip & Control', desc: '가는 연모부터 굵은 모근까지 한 번에 제어하는 강력한 그립력과 빠른 건조 속도.' },
        { title: 'Technical Education', desc: '라캉 아카데미를 통해 단순 제품 공급을 넘어, 시술 테크닉과 살롱 경영 노하우를 공유합니다.' }
      ],
      products: [
        { name: 'Lacan Hard Wax', desc: '최상의 그립감과 낮은 융점으로 모든 부위에 적용 가능한 전문가용 프리미엄 하드 왁스.', tag: 'Signature' },
        { name: 'Lacan Brazilian Pack', desc: 'Y존 미백 및 주름 개선 이중 기능성 인증. 시술 후 진정과 탄력을 위한 특수 설계 마스크.', tag: 'Best Seller' },
        { name: 'Post-Care Solution', desc: '인그로운 헤어 예방과 피부 진정을 위한 전문가 전용 애프터케어 라인.', tag: 'Professional' },
        { name: 'Pre-Waxing Oil', desc: '피부 보호막을 형성하여 스킨 탈락을 방지하고 통증을 완화하는 전처리 오일.', tag: 'Essential' }
      ],
      cta: '전문가 인증 및 파트너 신청'
    },
    alminer: {
      title: 'ALMINER',
      subtitle: 'Expertise Made Easy, Professional Self-Waxing',
      description: 'Alminer is a premium self-waxing brand that translates the expertise of "LA CAN" for home use. It incorporates 3 core technologies to ensure safe, flawless hair removal for beginners at home.',
      comingSoon: 'Advancing Data-Driven Beauty Solutions',
      features: [
        { title: 'Elasticity Tech', desc: 'High-elasticity formula allowing long-strip application without breaking or cracking.' },
        { title: 'Hair Cohesion Tech', desc: 'Uses over 85% high-purity pine resin to perfectly grip even short and fine hairs.' },
        { title: 'Skin Protect', desc: 'Low-temperature method that minimizes skin irritation by prioritizing hair grip over skin adhesion.' }
      ],
      product: {
        name: 'Alminer Hard Wax',
        desc: 'An all-in-one premium hard wax for face, body, and Brazilian. Minimized skin irritation with a low melting point of 50-55°C.',
        specs: [
          'Elasticity Tech: Break-free flexibility',
          'Hair Cohesion Tech: Powerful hair grip',
          'Low Temp Method: 50~55°C safe waxing',
          'Paraffin #55: Smooth application'
        ]
      },
      cta: 'Buy on Coupang'
    },
    footer: {
      rights: '© 2024 Korea Ocean Marine Tech Research Institute. All rights reserved.',
      companyName: 'Korea Ocean Marine Tech Research Institute Co., Ltd.',
      businessNum: 'Registration No: 000-00-00000',
      tel: 'Tel: +82 10-7169-3438',
      email: 'Email: jbanion@naver.com'
    }
  }
};
