"use client";

interface LocationSectionProps {
  onCtaClick: () => void;
}

export default function LocationSection({ onCtaClick }: LocationSectionProps) {
  const locationFeatures = [
    {
      category: "교통",
      icon: "🚗",
      items: [
        "문수로 대로변 직접 연결",
        "울산IC 10분대 접근성",
        "KTX 울산역 편리한 이동",
        "주요 간선도로 인접"
      ]
    },
    {
      category: "교육",
      icon: "🎓",
      items: [
        "삼산초, 중, 고 학군 인접",
        "울산과학기술원(UNIST) 인근",
        "다양한 학원가 형성",
        "도서관 및 교육시설 밀집"
      ]
    },
    {
      category: "편의시설",
      icon: "🛒",
      items: [
        "롯데백화점 울산점 인근",
        "대형마트 다수 위치",
        "삼산동 상업지구 생활권",
        "종합병원 접근 용이"
      ]
    },
    {
      category: "자연환경",
      icon: "🌳",
      items: [
        "문수산 자연환경 인접",
        "태화강 국가정원 근접",
        "쾌적한 주거환경",
        "도심 속 힐링 라이프"
      ]
    }
  ];

  return (
    <section id="location" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* 섹션 헤더 */}
        <div className="text-center mb-16">
          <span className="text-amber-500 font-semibold text-sm tracking-widest uppercase mb-4 block">
            Prime Location
          </span>
          <h2 className="section-title">
            <span className="text-amber-500">울산 남구</span> 중심 입지
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            삼산동 프리미엄 생활권의 중심에서<br />
            편리한 생활 인프라를 누리세요
          </p>
        </div>

        {/* 입지 장점 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {locationFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{feature.icon}</span>
                <h3 className="text-xl font-bold text-gray-900">{feature.category}</h3>
              </div>
              <ul className="space-y-3">
                {feature.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2 text-gray-600">
                    <span className="text-amber-500 mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 입지 하이라이트 */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* 지도 영역 (시각적 표현) */}
            <div className="bg-gradient-to-br from-slate-100 to-slate-200 p-8 md:p-12 flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <div className="w-40 h-40 mx-auto mb-6 bg-amber-500 rounded-full flex items-center justify-center shadow-lg">
                  <div className="text-center text-white">
                    <p className="text-3xl font-bold">남구</p>
                    <p className="text-sm">삼산동</p>
                  </div>
                </div>
                <div className="space-y-2 text-gray-600">
                  <p className="flex items-center justify-center gap-2">
                    <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                    울산역 10분
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                    문수산 5분
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                    삼산동 상권 도보권
                  </p>
                </div>
              </div>
            </div>

            {/* 설명 영역 */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                삼산동 중심 생활권<br />
                <span className="text-amber-500">프리미엄 입지의 가치</span>
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                울산 남구 삼산동은 울산의 대표적인 주거 선호 지역으로,
                우수한 교육환경과 풍부한 생활 인프라를 갖추고 있습니다.
                힐스테이트 문수로 센트럴은 이 프리미엄 입지의 중심에 위치하여
                편리한 생활과 미래 가치를 동시에 제공합니다.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-amber-50 rounded-xl">
                  <p className="text-2xl font-bold text-amber-600">10분</p>
                  <p className="text-sm text-gray-600">울산IC</p>
                </div>
                <div className="text-center p-4 bg-amber-50 rounded-xl">
                  <p className="text-2xl font-bold text-amber-600">도보권</p>
                  <p className="text-sm text-gray-600">학교</p>
                </div>
                <div className="text-center p-4 bg-amber-50 rounded-xl">
                  <p className="text-2xl font-bold text-amber-600">5분</p>
                  <p className="text-sm text-gray-600">대형마트</p>
                </div>
              </div>
              <button onClick={onCtaClick} className="cta-button w-full md:w-auto">
                입지 상담 받기
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
