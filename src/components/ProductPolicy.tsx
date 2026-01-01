'use client';

import React from 'react';
import styles from './ProductPolicy.module.css';

export default function ProductPolicy() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>배송정보</h3>
      <table className={styles.table}>
        <tbody>
          <tr>
            <th>배송방법</th>
            <td>순차배송</td>
            <th>배송비</th>
            <td>무료배송<br/><span className={styles.subtext}>- 로켓배송 상품 중 19,800원 이상 구매 시 무료배송<br/>- 도서산간 지역 추가비용 없음</span></td>
          </tr>
          <tr>
            <th>묶음배송 여부</th>
            <td colSpan={3}>가능</td>
          </tr>
          <tr>
            <th>배송기간</th>
            <td colSpan={3}>
              ㆍ쿠팡친구 배송 지역 : 주문 및 결제 완료 후, 1-2일 이내 도착<br/>
              ㆍ쿠팡친구 미배송 지역 : 주문 및 결제 완료 후, 2-3일 이내 도착<br/>
              <span className={styles.subtext}>- 도서 산간 지역 등은 하루가 더 소요될 수 있습니다. 곧 고객님께도 쿠팡친구가 찾아갈 수 있도록 노력하겠습니다<br/>
              - 천재지변, 물량 수급 변동 등 예외적인 사유 발생 시, 다소 지연될 수 있는 점 양해 부탁드립니다.</span>
            </td>
          </tr>
        </tbody>
      </table>

      <h3 className={styles.title} style={{marginTop: '50px'}}>교환/반품 안내</h3>
      <div className={styles.noticeBox}>
        <p>ㆍ교환/반품에 관한 일반적인 사항은 판매자가 제시사항보다 관계법령이 우선합니다.</p>
        <p>다만, 판매자의 제시사항이 관계법령보다 소비자에게 유리한 경우에는 판매자 제시사항이 적용됩니다.</p>
      </div>
      
      <table className={styles.table}>
        <tbody>
          <tr>
            <th>교환/반품 비용</th>
            <td>
              ㆍ와우멤버십 회원: 무료로 반품/교환 가능<br/>
              ㆍ와우멤버십 회원 아닌 경우:<br/>
              1) [총 주문금액] - [반품 상품금액] = 19,800원 미만인 경우 반품비 5,000원<br/>
              2) [총 주문금액] - [반품 상품금액] = 19,800원 이상인 경우 반품비 2,500원
            </td>
          </tr>
          <tr>
            <th>교환/반품 신청 기준일</th>
            <td>
              ㆍ단순변심에 의한 로켓배송 상품의 교환/반품은 제품 수령 후 30일 이내까지 가능<br/>
              ㆍ상품의 내용이 표시·광고의 내용과 다른 경우에는 상품을 수령한 날부터 3개월 이내
            </td>
          </tr>
        </tbody>
      </table>

      <h3 className={styles.title} style={{marginTop: '40px'}}>교환/반품 제한사항</h3>
      <ul className={styles.limitList}>
        <li>주문/제작 상품의 경우, 상품의 제작이 이미 진행된 경우</li>
        <li>상품 포장을 개봉하여 사용 또는 설치 완료되어 상품의 가치가 훼손된 경우</li>
        <li>고객의 사용, 시간경과, 일부 소비에 의하여 상품의 가치가 현저히 감소한 경우</li>
        <li>세트상품 일부 사용, 구성품을 분실하였거나 취급 부주의로 인한 파손/고장/오염으로 재판매 불가한 경우</li>
      </ul>

      <h3 className={styles.title} style={{marginTop: '40px'}}>판매자 정보</h3>
      <table className={styles.sellerTable}>
        <tbody>
          <tr>
             <th>상호/대표자</th>
             <td>주식회사 오션테크해양연구소 (브랜드: R-minu) / 조제복</td>
             <th>사업장 소재지</th>
             <td>부산광역시 남구 못골번영로71번길 74 부산예술대학 본관 4층</td>
          </tr>
          <tr>
             <th>e-mail</th>
             <td>jbanion@naver.com</td>
             <th>연락처</th>
             <td>010-3885-9770</td>
          </tr>
          <tr>
             <th>사업자번호</th>
             <td>617-81-82570</td>
             <th>통신판매업 신고번호</th>
             <td>2023-부산남구-0316</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
