'use client'

import { posts } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useState } from 'react'

type Type = { text: string; type: 'default' | 'aichat' }

const types = [
  {
    text: '본문/댓글',
    type: 'default',
  },
  {
    text: 'AI 채팅',
    type: 'aichat',
  },
] as Type[]

const dummyContent = `<div class="toastui-editor-contents" style="overflow-wrap: break-word;"><p data-nodeid="1544">프로그래머스 프론트엔드 데브코스 3기를 수료한 배채연 님의 인터뷰입니다. 채연 님은 단순히 기술을 배우는데 그치지 않고 스스로 고민하고 반복하며 진짜 실력을 쌓아나갔다고 하는데요. 협업 프로젝트에서 PO 역할을 맡아 팀을 이끌고, 개발자로서 한 단계 더 성장할 수 있었던 채연 님의 여정이 궁금하시다면, 아래 인터뷰를 확인해보세요!<br>
<br>
<br></p>
<h3 data-nodeid="1545">안녕하세요. 자기 소개 부탁드립니다.</h3>
<p data-nodeid="1546">안녕하세요! 저는 프로그래머스 프론트엔드 데브코스 3기를 수료한 주니어 프론트엔드 개발자 배채연입니다. 사용자에게 더 나은 경험을 제공하는 화면을 만드는 데 큰 매력을 느껴 프론트엔드 개발을 시작하게 되었고, 현재는 수료 이후 취업을 준비하고 있습니다.</p>
<p data-nodeid="1547"><img data-nodeid="1587" alt="image.png" src="https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/production/presigned_urls_with_path/blog_images/393b42b4-ded7-4616-bce5-475430b929d1/image.png"></p>
<h3 data-nodeid="1548">프로그래머스 데브코스는 어떻게 알게 되셨나요?</h3>
<p data-nodeid="1549">부트캠프를 통해 체계적으로 프론트엔드 기술을 배우고 싶다는 생각이 들어, 구글에 '프론트엔드 부트캠프'를 검색하던 중 프로그래머스 데브코스를 처음 알게 되었습니다.<br>
<br>
수강생 후기들을 보면서 <strong data-nodeid="1604">실무 중심의 커리큘럼과 꼼꼼한 코드 리뷰, 협업 기반의 프로젝트가 인상 깊었고, 이곳이라면 제대로 배울 수 있겠다는 확신</strong>이 들어 지원하게 되었습니다.<br>
<br></p>
<h3 data-nodeid="1550">타사도 있지만 프로그래머스를 선택하신 이유가 있을까요?</h3>
<p data-nodeid="1551">비슷한 교육 과정들도 많이 찾아봤지만, 프로그래머스를 선택한 가장 큰 이유는 <strong data-nodeid="1625">코딩 교육 분야에서의 높은 인지도와 신뢰도</strong>였습니다. 특히 PCCP(프로그래머스 코딩 역량 인증 시험)와 코딩 테스트 등 <strong data-nodeid="1626">자체적인 평가 시스템이 잘 마련되어 있어 학습 후 실력을 객관적으로 점검할 수 있다는 점</strong>이 신뢰를 주었습니다.<br>
<br>
또한 <strong data-nodeid="1627">마지막 프로젝트를 백엔드 개발자 분들과 협업해 실무처럼 진행한다는 점</strong>도 인상 깊었습니다. 단순히 기술을 배우는 데 그치지 않고, 실무에 필요한 협업 역량까지 함께 키울 수 있다는 확신이 들어 프로그래머스를 선택하게 되었습니다.<br>
<br></p>
<h3 data-nodeid="1552">약 6개월동안 데브코스에 참여해주셨는데요. 어떤 것이 가장 기억에 남나요?</h3>
<p data-nodeid="1553">가장 기억에 남는 순간은 <strong data-nodeid="1648">매일 아침 팀원들과 함께 했던 스크럼 시간</strong>이었습니다.<br>
<br>
바로 수업이나 코딩을 시작하기 전에 서로의 컨디션을 체크하고, 어제 학습한 내용과 오늘의 계획을 공유하는 이 시간이 자연스럽게 아이스브레이킹이 되었던 것 같아요.<br>
<br>
이 시간을 통해 <strong data-nodeid="1649">팀원들과 유대감도 쌓을 수 있었고, 하루의 방향을 정리하면서 더 집중력 있게 학습을 시작</strong>할 수 있었던 점이 특히 인상 깊게 남아 있습니다.<br>
<br></p>
<h3 data-nodeid="1554">데브코스를 하면서 성장했다고 느꼈던 계기가 있다면 말씀해주세요.</h3>
<p data-nodeid="1555">데브코스를 처음 시작했을 땐 저보다 지식도 많고 실력 있는 분들이 많아 보여서, 제가 팀장을 맡게 될 일은 없을 거라고 생각했어요. 그런데 마지막 백엔드와의 협업 프로젝트에서는 프론트엔드 팀장을 넘어 <strong data-nodeid="1668">프로젝트 오너(PO) 역할을 맡게 되었고, 전체 프로젝트를 조율하며 팀원들과 끝까지 함께 달려 기한 내에 완성</strong>해낼 수 있었습니다.<br>
<br>
물론 부담이 컸지만 그만큼 책임감도 생겼고, 마지막 프로젝트가 끝난 뒤에는 데브코스에 처음 데브코스에 참여했을 때의 제 모습과 비교해 정말 많이 성장했다는 것을 크게 느낄 수 있었습니다.<br>
<br>
<img data-nodeid="1665" alt="image.png" src="https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/production/presigned_urls_with_path/blog_images/fe3edafd-a6e5-4cf4-9a03-359c9e9a5373/image.png"><br>
👆 최종 프로젝트에서 PO를 맡은 채연 님과 함께 했던 팀원들</p>
<p data-nodeid="1556"><br></p>
<h3 data-nodeid="1557">최종 프로젝트에 대해 소개해주세요.</h3>
<p data-nodeid="1558">저희 팀은 'Planit(플랜잇)'이라는 <strong data-nodeid="1724">여행 통합 플랫폼</strong>을 만들었습니다. 여행 일정을 날짜별로 정리하고, 위치 기반 지도를 통해 동선을 설계하며, 원하는 숙소를 확인하고 예약까지 할 수 있는 서비스입니다. 또한 챗봇 기능을 통해 여행 관련 정보를 쉽게 얻을 수 있고, 시각적으로 일정을 구성해 완벽한 여행을 준비할 수 있도록 돕는 것이 목표였습니다.<br>
<br>
이 프로젝트에서 특히 좋았던 점은 팀원 모두가 서로의 의견을 존중하고, 항상 부드러운 말투로 소통해 주셨다는 점이에요! 덕분에 갈등 없이 끝까지 협력할 수 있었고, <strong data-nodeid="1725">긍정적인 팀워크를 경험</strong>할 수 있었어요.<br>
<br>
다만 아쉬웠던 점도 있었는데요. 협업이 처음인 팀원들이 많아 한 기능을 구현할 때 어디까지 논의하고 정리해야 하는지에 대한 경험이 부족했습니다. 그래서 개발을 시작했다가 다시 의견을 나누고, 그에 따라 코드를 수정하는 과정을 반복하면서 일정이 조금씩 지연되기도 했습니다.<br>
<br>
하지만 이 경험을 통해 <strong data-nodeid="1726">사소한 부분이라도 명확히 소통하고, 논의한 내용은 문서화하여 정리하는 습관</strong>을 들일 수 있었던 점은 큰 배움이고 경험이었던 것 같아요.<br>
<img data-nodeid="1705" alt="image.png" src="https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/production/presigned_urls_with_path/blog_images/d6e8c6cf-aed3-49fb-8e04-02ad2e77c4ae/image.png"><br>
<br>
<img data-nodeid="1711" alt="image.png" src="https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/production/presigned_urls_with_path/blog_images/925d3017-034e-4710-825b-7c99087a1427/image.png"><br>
<br>
<img data-nodeid="1717" alt="image.png" src="https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/production/presigned_urls_with_path/blog_images/a7e26f8f-3f6e-4a48-aa40-11551b210f22/image.png"><br>
<br>
👆 채연 님의 최종 프로젝트 발표 자료 중 발췌<br>
<br></p>
<h3 data-nodeid="1559">데브코스를 통해 이루고자 했던 목표가 있었나요? 어느 정도 이뤘다고 생각하세요?</h3>
<p data-nodeid="1560">부트캠프를 시작하기 전에 약 1년 정도 개발을 쉬고 있었고, 이전에 프론트엔드 웹 개발을 겉핥기 식으로만 배웠던 터라, 이번 기회에 <strong data-nodeid="1743">기초부터 다시 제대로 배우고 싶다는 목표</strong>가 있었습니다. 또한 실무에서 많이 사용되는 최신 프레임워크나 라이브러리들을 자유롭게 다룰 수 있는 개발자가 되고 싶다는 목표도 있었어요.<br>
<br>
목표를 10이라고 본다면 지금은 7까지는 도달했다고 생각합니다. 그 과정에서 가장 크게 느낀 점은, 단순히 수업을 듣고 프로젝트를 수행한다고 해서 실력이 저절로 늘지는 않는다는 것이었습니다. <strong data-nodeid="1744">진짜 실력은 결국 스스로 고민하고, 반복해서 도전하는 과정 속에서 쌓인다는 것</strong>을 몸으로 느낄 수 있었습니다.<br>
<br></p>
<h3 data-nodeid="1561">수업을 진행해주신 강사님은 어떠셨나요?</h3>
<p data-nodeid="1562">약 6개월 동안 함께했던 이해성 강사님은 지금까지도 기억에 많이 남아있는데요. 프론트엔드 강사님이셨지만 백엔드까지 아우르는 폭넓은 지식과 실력을 갖추신 모습을 보며, <strong data-nodeid="1765">저도 언젠가는 풀스택 개발자가 되고 싶다는 동기부여</strong>를 많이 받았어요.<br>
<br>
늘 웃는 모습으로 학생들을 대해주셨지만 때로는 따끔한 피드백도 아끼지 않으셨는데요. '당근과 채찍'을 적절히 주시는 덕분에 저도 프로젝트에 더 몰입할 수 있었습니다.<br>
<br>
또한 프로젝트 발표를 총 4번 중 3번을 맡아 진행했는데, 그때마다 발표를 잘했다고 칭찬해주셨던 것이 특히 기억에 남습니다. 그 말 한마디가 큰 자신감이 되었고, 지금도 소중한 기억으로 남아 있습니다.<br>
<br></p>
<h3 data-nodeid="1563">운영 매니저와 함께한 6개월은 어떠셨나요?</h3>
<p data-nodeid="1564">프론트엔드 3기 4회차의 운영을 맡아주신 페이지 매니저님이 기억에 많이 남습니다. 처음에는 조금 무서운(?) 느낌도 있어서 줌에 함께 있으면 말을 쉽게 꺼내지 못하곤 했는데요. 제가 수업에 조금 늦거나 하면 '무슨 일 있으신가요?'하고 먼저 챙겨주시고, 궁금한 점이 생겨 질문하면 늦은 시간에도 빠르게 답변을 주셔서 정말 감동이었어요.<br>
<br>
어느 순간부터는 '<strong data-nodeid="1789">장난기 넘치지만 일은 정말 정확하게 하시는 매니저님!</strong>'이라 느꼈고, 많은 학생들을 통솔하고 챙기시는 모습이 정말 대단하게 느껴졌습니다. 페이지 매니저님 외에 다른 운영 매니저님들도 모두 친절하게 도와주셔서, <strong data-nodeid="1790">6개월 동안 불편함이나 불만없이 과정에 집중</strong>할 수 있었던 것 같아요.<br>
<br></p>
<h3 data-nodeid="1565">함께 스터디한 동료는 어땠나요? 수료 후에도 소통하고 있으신가요?</h3>
<p data-nodeid="1566">총 4번의 프로젝트를 진행하며 다양한 팀원들과 함께했는데, 매번 분위기가 정말 좋았어요. 덕분에 스트레스를 받거나 불편함 없이 프로젝트에 몰입할 수 있었고, <strong data-nodeid="1807">협업에 대한 긍정적인 인상</strong>을 많이 남길 수 있었어요.<br>
<br>
최종 프로젝트 당시 사용하던 디스코드 방과 프론트엔드-백엔드 공동 디스코드 방도 여전히 접속해 있습니다. 요즘은 자격증 공부와 취업 준비로 바쁘다 보니 자주 소통하진 않지만, <strong data-nodeid="1808">궁금한 점이 생기거나 공유할 이야기가 있을 땐 언제든지 편하게 이야기할 수 있는 커뮤니티</strong>로 남아 있습니다.<br>
<br></p>
<h3 data-nodeid="1567">전반적인 멘토링 경험은 어땠는지 말씀해주세요.</h3>
<p data-nodeid="1568">데브코스 기간 동안 두 분의 멘토님께 멘토링을 받았는데, 두 분 모두 밝고 친절하셔서 정말 인상 깊었습니다. 사실 이전에는 '개발자는 조금 시니컬할 것 같다'는 편견이 있었는데, 멘토님들을 만나면서 그런 고정관념이 완전히 사라졌어요.<br>
<br>
멘토링 시간에는 기술적인 질문은 물론이고, <strong data-nodeid="1836">실무 환경에 대한 이야기나 제가 가지고 있던 고민, 최신 기술 트렌드까지 폭넓게 이야기</strong>할 수 있었고, 매번 많은 도움을 받을 수 있었습니다.<br>
<br>
특히, <strong data-nodeid="1837">"지금 내가 어떤 방향으로 공부해야 하는지"에 대해 구체적인 지표</strong>를 세울 수 있었던 점이 가장 좋았고, 덕분에 막연했던 불안감도 많이 줄일 수 있었습니다.<br>
<br></p>
<h3 data-nodeid="1569">데브코스 수강을 고민하고 있는 분들에게 추천한다면?</h3>
<p data-nodeid="1570">프로그래머스 데브코스는 '<strong data-nodeid="1873">직접 해보며 배우는 과정</strong>'이라는 말이 딱 어울리는 부트캠프였습니다.<br>
<br>
총 4번의 프로젝트를 통해 다양한 주제를 다루며 경험을 쌓을 수 있었고, 특히 마지막에는 <strong data-nodeid="1874">실제 백엔드 개발자분들과 협업 프로젝트를 진행하면서 실무에 가까운 협업을 경험</strong>할 수 있었어요.<br>
<br>
또 프로그래머스 <strong data-nodeid="1875">코딩 테스트가 있어서 학습을 진행하면서 제 실력을 점검</strong>해보기에도 좋았어요. 무엇보다 운영 매니저님, 강사님, 멘토님 모두 수강생 한 명 한 명을 진심으로 챙겨주시고, 고민을 내 일처럼 함께 해결해주려는 <strong data-nodeid="1876">따뜻한 분위기가 데브코스의 큰 장점</strong>으로 느껴졌습니다.<br>
<br>
프론트엔드 개발을 진지하게 배우고 싶은 분이라면, 데브코스를 통해 실력은 물론 자신감과 협업 경험까지 모두 얻을 수 있을 거라고 생각합니다!<br>
<br></p>
<h3 data-nodeid="1571">앞으로 어떤 개발자로 성장하고 싶으신가요?</h3>
<p data-nodeid="1572">제 성격을 살려 <strong data-nodeid="1893">협업에 강한 개발자</strong>가 되고 싶습니다. 친화력 있고 따뜻한 성격 덕분에 팀 프로젝트에서도 소통에 힘이 되었던 경험이 많았고, 앞으로도 팀 안에서 꼭 필요한 존재가 되고 싶어요.<br>
<br>
또 빠르게 변화하는 프론트엔드 생태계 속에서 현실에 안주하지 않고, 꾸준히 공부하고 도전하며 성장해나가는 개발자가 되고자 합니다. <strong data-nodeid="1894">기술뿐만 아니라 업무에 임하는 태도에서도 신뢰받을 수 있는 개발자</strong>로 성장하고 싶습니다.<br>
<br></p>
<h3 data-nodeid="1573">마지막으로 후배 수강생들을 위한 응원의 한 마디, 부탁드립니다.</h3>
<p data-nodeid="1574">개발자가 된다는 건 정말 쉽지 않은 길이라고 생각해요. 데브코스든 다른 어떤 부트캠프든, 그 과정이 줄 수 있는 건 흙과 물, 햇볕 같은 환경일 뿐이에요. 그 안에서 <strong data-nodeid="1922">씨앗인 내가 꽃을 피울 수 있을지는 결국 나 자신의 노력에 달려 있다고 느꼈습니다</strong>. 좋은 결과를 얻기 위해선 주도적인 자세가 무엇보다도 중요한 것 같아요.<br>
<br>
이미 이 길을 선택하셨다면, 끝까지 최선을 다해 꽃을 피워보세요. 언젠가 어딘가에서 '데브코스를 수료한 동료 개발자'로 만나 뵐 수 있으면 좋겠습니다. 진심으로 응원합니다!<br>
<br>
<br>
<a data-nodeid="1921" target="_blank" rel="noopener" href="https://school.programmers.co.kr/learn/courses/25072/25072-5%EA%B8%B0-k-digital-training-%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C-%EA%B8%B0%EB%B0%98-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EC%97%94%EC%A7%80%EB%8B%88%EC%96%B4%EB%A7%81"><img data-nodeid="1920" alt="FE_배너.jpg" src="https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/production/presigned_urls_with_path/blog_images/0b788977-b1a0-4cff-a6c9-449c8ca260d3/FE_%E1%84%87%E1%85%A2%E1%84%82%E1%85%A5.jpg"></a></p>































</div>`

export const PostContents = ({ id }: { id: number }) => {
  const [currentType, setCurrentType] = useState<'default' | 'aichat'>('default')
  const post = posts.filter((post) => post.id === id)[0]

  return (
    <div className="space-y-10">
      <div className="space-x-6">
        {types.map((type) => (
          <button
            onClick={() => setCurrentType(type.type)}
            key={type.type}
            className={cn(
              'font-bold text-xl hover:opacity-80',
              type.type === currentType ? 'text-brand' : 'text-muted-foreground/80',
            )}
          >
            {type.text}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        <div className="flex gap-3">
          <Image
            src={post.src}
            alt="dummy user"
            width={60}
            height={60}
            className="object-cover rounded-xl"
          />

          <div className="flex items-center gap-2">
            <p className="text-2xl font-bold">{post.nickname}</p>
            <Image
              src={'https://i.pinimg.com/170x/61/4f/17/614f17670e4b002ad2512fa028209520.jpg'}
              alt="dummy"
              width={80}
              height={80}
              className="size-6 rounded-xl object-contain"
            />
          </div>
        </div>

        <div className="flex items-end gap-2">
          <h2 className="text-3xl font-black">{post.title}</h2>
          <p className="text-lg text-muted-foreground"> {post.createdAt}</p>
        </div>
        <article
          className="prose md:prose-lg"
          dangerouslySetInnerHTML={{ __html: dummyContent }}
        ></article>
      </div>
    </div>
  )
}
