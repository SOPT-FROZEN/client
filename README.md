โ๏ธโ๏ธ๐ค์ฑ๊ฒฝ ์๋โ๏ธโ๏ธ์ฐ์ ์ฌ๋ผํโ๏ธโ๏ธ์ํ ์์ฌโธโธ์ ๊ฒจ์ธ ํฉ๋ ์ธ๋ฏธ๋๐คโ๏ธโ๏ธ

## โ๏ธ ํ์ผ ๊ตฌ์กฐ

```shell
./src
โโโ ๐ฆ assets
โ   โโโ temp.js
โโโ ๐ฆ components
โ   โโโ temp.js
โโโ ๐ฆ mocks
โ   โโโ temp.js
โโโ ๐ฆ util
โ   โโโ temp.js
โโโ ๐ฆ styles
โ   โโโ temp.js
โโโ index.tsx
โโโ App.tsx
โโโ Router.tsx
โโโ ๐ฆ pages
    โโโ temp.tsx
```

## โ๏ธ ๊นํ๋ธ ์ปจ๋ฒค์
[๊นํ๋ธ์ปจ๋ฒค์](https://rowan-bronze-6ea.notion.site/452fd566d421443eafbacc83396e8a7b)

## โ๏ธ ์ปค๋ฐ ์ปจ๋ฒค์
- Feat\*\* : ๊ธฐ๋ฅ
- Update\*\* : ์๋ฐ์ดํธ
- Fix\*\* : ์ค๋ฅ ์์ 
- Chore\*\* : ๋น๋ ๊ด๋ จ ์์
- Refactor\*\* : ๋ฆฌํฉํ ๋ง ์์
- Remove\*\* : ์ญ์  ์์

> ex) Feat: ๋๊ธ ๊ธฐ๋ฅ


## โ๏ธ ๋ธ๋์น
```shell
๊ธฐ๋ฅ/ ์ด์๋ฒํธ
```

## โ๏ธ ์คํ์ผ ์ปจ๋ฒค์
- ๊ฐ ์์๋ styled-components ์์ฑํ๊ธฐ!
- styled-components ์์๋ ์๋๋ก ์ฎ๊ฒจ์ฃผ๊ธฐ!

## โ๏ธ typescript ์ปจ๋ฒค์
interface ์ด๋ฆ์ ๋ค์๊ณผ ๊ฐ์ด ์ค์ 
### `i[State๋ช]` : props๋ฅผ ์ ๋ฌ๋ฐ๋ ๊ฒ ์๋๊ณ , state๋ฅผ ์์ ์์ฑํ๋ ๋ฐ์ดํฐ์ธ ๊ฒฝ์ฐ

    
    export interface iOrder {
      menuId: number;
      title: string;
      total: number;
      details?: iSet[];
    }

    // ์ฌ์ฉํ๋๋ฒ
    const [orders, setOrders] = useState<iOrder>(..);
    // ๋ฐฐ์ด์ ๊ฒฝ์ฐ
    const [orders, setOrders] = useState<iOrder[]>(..);
   

### `i[State๋ช]Props` : props๋ก ์ ๋ฌ๋ฐ๋ ๋ฐ์ดํฐ์ interface์ธ ๊ฒฝ์ฐ

    
    interface iMenuProps {
      set: string;
      price: number;
    }

    export default function CardMenu({ set, price }: iMenuProps) { ... // ๊ตฌ์กฐ๋ถํดํ ๋น
    // ๊ตฌ์กฐ๋ถํดํ ๋น์ ์ฌ์ฉํ๋ฉด props.set โ set๋ง ์จ์ ์ฌ์ฉํ  ์ ์์ด์!
    // props๋ฅผ ๋ฐ๋ ์ปดํฌ๋ํธ๋ผ๋ฉด ๋ฐ๋์ ์ด๋ ๊ฒ ์์ฑํ๊ธฐ!
    


