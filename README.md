❄️❄️🤍성경 안나☃️☃️우영 올라프❄️❄️은형 엘사⛸⛸의 겨울 합동 세미나🤍❄️❄️

## ❄️ 파일 구조

```shell
./src
├── 📦 assets
│   └── temp.js
├── 📦 components
│   └── temp.js
├── 📦 mocks
│   └── temp.js
├── 📦 util
│   └── temp.js
├── 📦 styles
│   └── temp.js
├── index.tsx
├── App.tsx
├── Router.tsx
└── 📦 pages
    └── temp.tsx
```

## ❄️ 깃허브 컨벤션
[깃허브컨벤션](https://rowan-bronze-6ea.notion.site/452fd566d421443eafbacc83396e8a7b)

## ❄️ 커밋 컨벤션
- Feat\*\* : 기능
- Update\*\* : 업데이트
- Fix\*\* : 오류 수정
- Chore\*\* : 빌드 관련 작업
- Refactor\*\* : 리팩토링 작업
- Remove\*\* : 삭제 작업

> ex) Feat: 댓글 기능


## ❄️ 브랜치
```shell
기능/ 이슈번호
```

## ❄️ 스타일 컨벤션
- 각 요소는 styled-components 작성하기!
- styled-components 요소는 아래로 옮겨주기!

## ❄️ typescript 컨벤션
interface 이름은 다음과 같이 설정
### `i[State명]` : props를 전달받는 게 아니고, state를 아예 생성하는 데이터인 경우

    
    export interface iOrder {
      menuId: number;
      title: string;
      total: number;
      details?: iSet[];
    }

    // 사용하는법
    const [orders, setOrders] = useState<iOrder>(..);
    // 배열의 경우
    const [orders, setOrders] = useState<iOrder[]>(..);
   

### `i[State명]Props` : props로 전달받는 데이터의 interface인 경우

    
    interface iMenuProps {
      set: string;
      price: number;
    }

    export default function CardMenu({ set, price }: iMenuProps) { ... // 구조분해할당
    // 구조분해할당을 사용하면 props.set → set만 써서 사용할 수 있어요!
    // props를 받는 컴포넌트라면 반드시 이렇게 작성하기!
    


