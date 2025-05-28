import { Book, DollarSignIcon, Medal, TagIcon } from 'lucide-react'

export const FAQ_LIMIT = 5
export const POST_LIMIT = 6

export const items = [
  {
    title: '홈',
    href: '/',
    urls: ['/'],
    icon: Book,
  },
  {
    title: '미션',
    href: '/mission',
    urls: ['/mission'],
    icon: Medal,
  },
  {
    title: '구독',
    href: '/subscription',
    urls: ['/subscription'],
    icon: DollarSignIcon,
  },
  {
    title: '고객센터',
    href: '/support/notice',
    urls: ['/support/notice', '/support/faq'],
    icon: TagIcon,
  },
]

export const user = {
  src: 'https://avatars.githubusercontent.com/u/84998222?v=4',
  alt: 'dummy profile image',
  nickname: '한봉훈',
  email: 'jws970306@naver.com',
  exp: 1260,
}

export const supportLinks = [
  {
    text: '공지사항',
    href: '/support/notice',
  },
  {
    text: '자주묻는 질문',
    href: '/support/faq',
  },
]

export const settingLinks = [
  {
    text: '계정 설정',
    href: '/setting/profile',
  },
  {
    text: '화면 설정',
    href: '/setting/theme',
  },
]

export const postsLinks = [
  {
    text: '최신순',
    href: '?sort=recent&page=1',
  },
  {
    text: '인기순',
    href: '?sort=popular&page=1',
  },
]

export const postLinks = [
  {
    text: '본문/댓글',
    href: '?type=default',
  },
  {
    text: 'AI 채팅',
    href: '?type=aichat',
  },
]

export const notices = [
  {
    id: 1,
    title: '서비스 점검 안내',
    createdAt: '25-05-20',
    badge: '필독',
    content: '일정에 따라 서비스 점검이 진행됩니다.',
  },
  {
    id: 2,
    title: '개인정보 처리방침 변경 안내',
    createdAt: '25-05-18',
    badge: '업데이트',
    content: '변경된 개인정보 처리방침을 확인해주세요.',
  },
  {
    id: 3,
    title: '전문가를 위한 풍성한 혜택이 찾아왔어요 🎉',
    createdAt: '25-05-21',
    badge: 'NEW',
    content: '전문가 전용 혜택을 지금 만나보세요!',
  },
  {
    id: 4,
    title: '시스템 오류 수정 완료 안내',
    createdAt: '25-05-17',
    badge: '업데이트',
    content: '일부 기능 오류가 수정되었습니다.',
  },
  {
    id: 5,
    title: '이용약관 개정 안내',
    createdAt: '25-05-15',
    badge: '필독',
    content: '이용약관이 일부 변경되었습니다.',
  },
  {
    id: 6,
    title: '정기 점검 일정 안내',
    createdAt: '25-05-14',
    badge: '필독',
    content: '정기 점검이 예정되어 있습니다.',
  },
  {
    id: 7,
    title: '이벤트 당첨자 발표',
    createdAt: '25-05-22',
    badge: 'NEW',
    content: '이벤트에 참여해주셔서 감사합니다!',
  },
  {
    id: 8,
    title: '모바일 앱 업데이트 안내',
    createdAt: '25-05-19',
    badge: '업데이트',
    content: '앱의 새로운 기능을 확인해보세요.',
  },
  {
    id: 9,
    title: '출석체크 이벤트 시작 안내',
    createdAt: '25-05-23',
    badge: 'NEW',
    content: '매일 출석하고 포인트를 받으세요!',
  },
  {
    id: 10,
    title: '고객센터 운영시간 변경 안내',
    createdAt: '25-05-16',
    badge: '업데이트',
    content: '변경된 운영시간을 확인해주세요.',
  },
  {
    id: 11,
    title: '회원 등급 제도 변경 안내',
    createdAt: '25-05-11',
    badge: '필독',
    content: '새로운 등급 혜택을 확인하세요.',
  },
  {
    id: 12,
    title: '서비스 일시 중단 사전 안내',
    createdAt: '25-05-10',
    badge: '필독',
    content: '시스템 점검으로 서비스가 일시 중단됩니다.',
  },
  {
    id: 13,
    title: '결제 시스템 개선 안내',
    createdAt: '25-05-09',
    badge: '업데이트',
    content: '더 안전한 결제가 가능해졌습니다.',
  },
  {
    id: 14,
    title: '보안 강화 작업 안내',
    createdAt: '25-05-08',
    badge: '필독',
    content: '이용자 보안을 위한 강화 작업이 진행됩니다.',
  },
  {
    id: 15,
    title: '장기 미접속 계정 처리 안내',
    createdAt: '25-05-07',
    badge: '필독',
    content: '장기 미접속 계정은 별도 조치가 진행됩니다.',
  },
  {
    id: 16,
    title: '포인트 소멸 예정 안내',
    createdAt: '25-05-06',
    badge: '필독',
    content: '소멸 예정 포인트를 확인하세요.',
  },
  {
    id: 17,
    title: '신규 콘텐츠 오픈 안내',
    createdAt: '25-05-05',
    badge: 'NEW',
    content: '새로운 콘텐츠가 추가되었습니다!',
  },
  {
    id: 18,
    title: '게시판 이용 규칙 변경 안내',
    createdAt: '25-05-04',
    badge: '업데이트',
    content: '게시판 운영 정책이 일부 변경됩니다.',
  },
  {
    id: 19,
    title: '로그인 보안 정책 변경 안내',
    createdAt: '25-05-03',
    badge: '업데이트',
    content: '보안 강화를 위한 정책이 적용됩니다.',
  },
  {
    id: 20,
    title: '이메일 인증 이벤트 안내',
    createdAt: '25-05-02',
    badge: 'NEW',
    content: '이메일 인증하고 다양한 혜택을 받아보세요!',
  },
] as Notice[]

export type Notice = {
  id: number
  title: string
  createdAt: string
  badge: '필독' | '업데이트' | 'NEW'
  content: string
}

export const faqs = [
  {
    id: 1,
    text: '비밀번호를 잊어버렸어요. 어떻게 해야 하나요?',
    answer:
      '로그인 화면에서 "비밀번호 찾기"를 클릭한 후, 가입 시 입력한 이메일 주소를 통해 비밀번호 재설정 링크를 받으실 수 있습니다.',
  },
  {
    id: 2,
    text: '회원 탈퇴는 어떻게 하나요?',
    answer: '마이페이지 > 설정 > 회원탈퇴 메뉴를 통해 탈퇴하실 수 있습니다. 탈퇴 시 모든 정보는 즉시 삭제됩니다.',
  },
  {
    id: 3,
    text: '결제 내역은 어디서 확인하나요?',
    answer: '마이페이지 > 결제 내역에서 최근 결제 기록을 확인하실 수 있습니다.',
  },
  {
    id: 4,
    text: '휴면 계정은 무엇인가요?',
    answer:
      '1년 이상 로그인 기록이 없는 계정은 개인정보 보호를 위해 휴면 상태로 전환됩니다. 로그인 시 복구할 수 있습니다.',
  },
  {
    id: 5,
    text: '이벤트 쿠폰은 어떻게 사용하나요?',
    answer: '결제 페이지에서 "쿠폰 적용" 버튼을 클릭 후, 보유 중인 쿠폰을 선택하시면 자동으로 할인됩니다.',
  },
  {
    id: 6,
    text: '이메일 주소를 변경하고 싶어요.',
    answer: '마이페이지 > 계정 정보에서 새로운 이메일 주소로 변경하실 수 있습니다. 변경 시 확인 메일이 발송됩니다.',
  },
  {
    id: 7,
    text: '로그인 알림을 받을 수 있나요?',
    answer:
      '마이페이지 > 보안 설정에서 로그인 알림 기능을 켜면 새로운 기기 접속 시 이메일로 알림을 받으실 수 있습니다.',
  },
  {
    id: 8,
    text: '포인트는 어떻게 적립되나요?',
    answer: '구매 금액의 일정 비율이 자동으로 포인트로 적립됩니다. 프로모션에 따라 추가 적립될 수 있습니다.',
  },
  {
    id: 9,
    text: '1:1 문의는 어디서 하나요?',
    answer: '고객센터 > 1:1 문의 메뉴에서 질문을 등록하시면 담당자가 순차적으로 답변을 드립니다.',
  },
  {
    id: 10,
    text: '서비스 이용 가능 시간은 어떻게 되나요?',
    answer: '서비스는 24시간 연중무휴로 운영됩니다. 단, 시스템 점검 시간에는 일부 기능이 제한될 수 있습니다.',
  },
]

export const posts = [
  {
    id: 1,
    src: 'https://wallpapers.com/images/high/cute-anime-profile-pictures-khu3pqseq0lhtrj6.webp',
    nickname: '법정스님',
    title: '무소유의 지혜',
    content: '비워야 채워집니다',
    createdAt: '2025-05-13',
    views: 142,
    likes: 10,
    comments: 4,
  },
  {
    id: 2,
    src: 'https://wallpapers.com/images/high/cute-anime-profile-pictures-0lifptfs0jd9fml3.webp',
    nickname: '혜민스님',
    title: '멈추면, 비로소 보이는 것들',
    content: '당신의 마음도 쉬어가도 괜찮습니다',
    createdAt: '2025-05-12',
    views: 198,
    likes: 25,
    comments: 7,
  },
  {
    id: 3,
    src: 'https://wallpapers.com/images/high/cute-anime-profile-pictures-dl57a1dlcfmlbwpx.webp',
    nickname: '일연스님',
    title: '고요한 아침의 기도',
    content: '모든 인연에 감사합니다',
    createdAt: '2025-05-11',
    views: 76,
    likes: 6,
    comments: 2,
  },
  {
    id: 4,
    src: 'https://i.namu.wiki/i/UUeyJ40bWrg4GzmRv00cvKr1JV0It2v-Rmjz8pDjq1tLnepFLtP53n6Tso9jLai6Zsimu_ypkbJjhTunpS36zA.webp',
    nickname: '원효스님',
    title: '깨달음은 언제 오는가',
    content: '이미 마음 안에 있었습니다',
    createdAt: '2025-05-10',
    views: 220,
    likes: 18,
    comments: 5,
  },
  {
    id: 5,
    src: 'https://i.pinimg.com/236x/5a/0e/11/5a0e11e9f5a18616f16e632b8658f78b.jpg',
    nickname: '자현스님',
    title: '하루 한 번의 침묵',
    content: '말보다 더 큰 울림이 있습니다',
    createdAt: '2025-05-09',
    views: 89,
    likes: 9,
    comments: 1,
  },
  {
    id: 24,
    src: 'https://image.zeta-ai.io/profile-image/6ebbf6c9-0fdd-4274-a993-7b9f3e1bc62d/096f1bb0-932d-426a-9d22-528e8060bec3.jpeg?w=828&q=90&f=webp',
    nickname: '명진스님',
    title: '마음을 닦는 시간',
    content: '수행은 멀리 있지 않습니다',
    createdAt: '2025-05-08',
    views: 134,
    likes: 12,
    comments: 3,
  },
  {
    id: 6,
    src: 'https://avatars.githubusercontent.com/u/88086373?v=4',
    nickname: '정목스님',
    title: '오늘도 당신을 위로합니다',
    content: '마음의 소리를 들어주세요',
    createdAt: '2025-05-07',
    views: 158,
    likes: 14,
    comments: 6,
  },
  {
    id: 7,
    src: 'https://avatars.githubusercontent.com/u/8509450?v=4',
    nickname: '수경스님',
    title: '시간은 마음을 따라 흐른다',
    content: '느리게 흘러도 괜찮습니다',
    createdAt: '2025-05-06',
    views: 105,
    likes: 8,
    comments: 2,
  },
  {
    id: 8,
    src: 'https://image.zeta-ai.io/profile-image/6ebbf6c9-0fdd-4274-a993-7b9f3e1bc62d/096f1bb0-932d-426a-9d22-528e8060bec3.jpeg?w=828&q=90&f=webp',
    nickname: '혜안스님',
    title: '마음에 귀 기울이기',
    content: '고요할수록 잘 들립니다',
    createdAt: '2025-05-05',
    views: 97,
    likes: 11,
    comments: 2,
  },
  {
    id: 9,
    src: 'https://image.zeta-ai.io/profile-image/6ebbf6c9-0fdd-4274-a993-7b9f3e1bc62d/096f1bb0-932d-426a-9d22-528e8060bec3.jpeg?w=828&q=90&f=webp',
    nickname: '도연스님',
    title: '생각을 내려놓는 연습',
    content: '생각이 줄면 삶이 가벼워집니다',
    createdAt: '2025-05-04',
    views: 121,
    likes: 15,
    comments: 3,
  },
  {
    id: 10,
    src: 'https://image.zeta-ai.io/profile-image/6ebbf6c9-0fdd-4274-a993-7b9f3e1bc62d/096f1bb0-932d-426a-9d22-528e8060bec3.jpeg?w=828&q=90&f=webp',
    nickname: '선우스님',
    title: '그대 있는 그대로',
    content: '있는 그대로의 나를 안아주세요',
    createdAt: '2025-05-03',
    views: 83,
    likes: 7,
    comments: 1,
  },
  {
    id: 11,
    src: 'https://image.zeta-ai.io/profile-image/6ebbf6c9-0fdd-4274-a993-7b9f3e1bc62d/096f1bb0-932d-426a-9d22-528e8060bec3.jpeg?w=828&q=90&f=webp',
    nickname: '법륜스님',
    title: '지금 이 순간에 집중하기',
    content: '과거는 지나갔고 미래는 오지 않았습니다',
    createdAt: '2025-05-02',
    views: 172,
    likes: 19,
    comments: 5,
  },
  {
    id: 12,
    src: 'https://image.zeta-ai.io/profile-image/6ebbf6c9-0fdd-4274-a993-7b9f3e1bc62d/096f1bb0-932d-426a-9d22-528e8060bec3.jpeg?w=828&q=90&f=webp',
    nickname: '보광스님',
    title: '행복은 멀리 있지 않다',
    content: '내 안의 감사가 행복입니다',
    createdAt: '2025-05-01',
    views: 110,
    likes: 10,
    comments: 2,
  },
  {
    id: 13,
    src: 'https://image.zeta-ai.io/profile-image/6ebbf6c9-0fdd-4274-a993-7b9f3e1bc62d/096f1bb0-932d-426a-9d22-528e8060bec3.jpeg?w=828&q=90&f=webp',
    nickname: '무여스님',
    title: '말 없는 위로',
    content: '그저 함께 있어주는 것만으로도 충분합니다',
    createdAt: '2025-04-30',
    views: 74,
    likes: 6,
    comments: 0,
  },
  {
    id: 14,
    src: 'https://wallpapers.com/images/high/cute-anime-profile-pictures-dl57a1dlcfmlbwpx.webp',
    nickname: '지현스님',
    title: '작은 것에서 오는 평화',
    content: '차 한 잔에도 마음을 담아보세요',
    createdAt: '2025-04-29',
    views: 66,
    likes: 5,
    comments: 1,
  },
  {
    id: 15,
    src: 'https://wallpapers.com/images/high/cute-anime-profile-pictures-dl57a1dlcfmlbwpx.webp',
    nickname: '청화스님',
    title: '번뇌를 이기는 법',
    content: '인정하고 흘려보내는 연습입니다',
    createdAt: '2025-04-28',
    views: 98,
    likes: 13,
    comments: 3,
  },
  {
    id: 16,
    src: 'https://wallpapers.com/images/high/cute-anime-profile-pictures-dl57a1dlcfmlbwpx.webp',
    nickname: '성철스님',
    title: '산은 산이요 물은 물이로다',
    content: '있는 그대로 보면 괴로움이 없습니다',
    createdAt: '2025-04-27',
    views: 210,
    likes: 30,
    comments: 6,
  },
  {
    id: 17,
    src: 'https://wallpapers.com/images/high/cute-anime-profile-pictures-dl57a1dlcfmlbwpx.webp',
    nickname: '운천스님',
    title: '한 발 천천히',
    content: '빨리 가는 것보다 중요한 건 방향입니다',
    createdAt: '2025-04-26',
    views: 91,
    likes: 9,
    comments: 2,
  },
]
