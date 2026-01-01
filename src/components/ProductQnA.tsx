'use client';

import React from 'react';
import styles from './ProductQnA.module.css';

interface QnAItem {
  id: number;
  question: string;
  questionDate: string;
  answer?: string;
  answerDate?: string;
  isSecret?: boolean;
}

const qnaData: QnAItem[] = [
  {
    id: 1,
    question: ";; 포르테 제네럴을 각각 다 쓰라는말이예요? 그렇겐 못하고요..\n광고이미지에 제네럴에도 브라질리언 체크가 되어있어서 확실히 브라질리언도 커버 가능한건지 아닌지 확인차 질문드리는거예요\n말씀하시는거보면 제네럴은 브라질리언까진 추천하지 않는다는거예요?",
    questionDate: "2025/12/23 20:48:53",
    answer: "제너럴도 브라질리언 사용가능하며 포르테와의 차이는 강한모에 사용하느냐 아니냐의 차이입니다.\n\n참고하셔서 제품 구매하시면 좋을듯 합니다",
    answerDate: "2025/12/23 21:25:15"
  },
  {
    id: 2,
    question: "아 왁스가 끊긴다는게 아니라 두께도 충분하고 뗄 때 깨지지도 않았는데 털이 끊기고 모근까지 안뽑히는게 많다는 뜻이었어요 꾹꾹 누르는것도 다 했고용 브라질리언은 털이 끊기고 그런게 없는데 얇은모만 좀 그런거같아서요",
    questionDate: "2025/12/23 17:33:11",
    answer: "그럼 얇은모는 제너럴로 사용하시는게 좋겠습니다~",
    answerDate: "2025/12/23 18:13:43"
  },
  {
    id: 3,
    question: "포르테 사서 쓰고있는데 브라질리언 부위는 아주 만족스러운데\n비교적 모가 얇은 다리나 겨드랑이는 좀 덜 밀착되는지 끊겨서 남는 현상이 있더라구요\n이번에 다써서 새로 사야하는데 전신용으로 쓸거면 제네럴이 더 맞을까요? 제네럴도 브라질리언이 가능한건 맞는거죠?\n브라질리언 부위 모 굵기는 광고사진에 있는 정도랑 비슷한거같아요",
    questionDate: "2025/12/23 16:42:18",
    answer: "안녕하세요.\n브라질리언을 포함한 다리, 겨드랑이 다같이 하실려면 포르테 추천드립니다.\n\n얇은모는 조금 더 두껍게 바르시고 손으로 꾹꾹 눌러주시면 제모효과가 훨씬 좋습니다.\n\n감사합니다.",
    answerDate: "2025/12/23 17:29:37"
  },
  {
    id: 4,
    question: "안녕하세요.\n구매전인데 문의있어서 글 남겨요.\n왁싱스틱이랑 실리콘 바스켓은 따로 구매해야 할까요?",
    questionDate: "2025/12/20 16:31:45",
    answer: "안녕하세요.\n왁스이외의 제품은 따로 구매하셔야 됩니다.\n감사합니다.",
    answerDate: "2025/12/20 17:40:04"
  },
  {
    id: 5,
    question: "포장을 아직 뜯지 읺았는데 원래 열기전에는 비즈들이 한 덩어리처럼 딱딱한가요? 열고 난 후에는 교환이 어려울것 같아 문의남깁니다",
    questionDate: "2025/09/06 22:26:59",
    answer: "안녕하세요.\n딱딱한 경우가 가끔 있는데 개봉후 손으로 가볍게 만지면 다 분리됩니다.\n\n사용해보시고 궁금하신 사항 있으시면 언제든 문의주세요.\n감사합니다.",
    answerDate: "2025/09/07 00:03:10"
  }
];

export default function ProductQnA() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>상품 문의</h3>
        <button className={styles.writeBtn}>문의하기</button>
      </div>
      
      <div className={styles.notice}>
        <ul>
          <li>구매한 상품의 취소/반품은 마이 페이지 구매내역에서 신청 가능합니다.</li>
          <li>상품문의 및 후기게시판을 통해 취소나 환불, 반품 등은 처리되지 않습니다.</li>
          <li>가격, 판매자, 교환/환불 및 배송 등 해당 상품 자체와 관련 없는 문의는 고객센터 내 1:1 문의하기를 이용해주세요.</li>
          <li>"해당 상품 자체"와 관계없는 글, 양도, 광고성, 욕설, 비방, 도배 등의 글은 예고 없이 이동, 노출제한, 삭제 등의 조치가 취해질 수 있습니다.</li>
          <li>공개 게시판이므로 전화번호, 메일 주소 등 고객님의 소중한 개인정보는 절대 남기지 말아주세요.</li>
        </ul>
      </div>

      <div className={styles.qnaList}>
        {qnaData.map((item) => (
          <div key={item.id} className={styles.qnaItem}>
            <div className={styles.questionSection}>
              <div className={styles.qHeader}>
                <span className={styles.badgeQ}>질문</span>
                <span className={styles.user}>구매자</span>
                <span className={styles.date}>{item.questionDate.split(' ')[0]}</span>
              </div>
              <div className={styles.qContent}>{item.question}</div>
            </div>

            {item.answer && (
              <div className={styles.answerSection}>
                 <div className={styles.aHeader}>
                    <span className={styles.badgeA}>답변</span>
                    <span className={styles.adminName}>주식회사 오션테크해양연구소</span>
                    <span className={styles.date}>{item.answerDate?.split(' ')[0]}</span>
                 </div>
                 <div className={styles.aContent}>{item.answer}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
