# Fungap
![Frame 14120](https://user-images.githubusercontent.com/89460880/144413012-68612fe9-b1f7-428d-8ce9-6fa53c9a3a31.png)

## ๐ ํ๋ก์ ํธ ์๊ฐ  
#### ๐ ๊ฐ๋ฐ๊ธฐ๊ฐ 2021.10.25 ~ 2021.12.03    
> MBTI๋ฅผ ํตํด ์์ ๊ณผ ํ์ธ์ ์ดํดํ๊ณ  ์ถ์ MZ์ธ๋๋ฅผ ์ํด,    
> ์ฌ๋ฌ MBTI ์ฝํ์ธ ๋ฅผ ์ ๊ณตํ์ฌ ์๋ก์ ์ฐจ์ด์ ๋ํ ์ฌ๋ฏธ๋ฅผ ๋๋ ์ ์๋ ์๋น์ค

* ์ฌ์ดํธ ๋งํฌ: <https://fungap.shop>
* ์๊ฐ ์์ : <https://www.youtube.com/watch?v=EUYZv5PJMtI>

## ๐ง๐ปโ๐ป ํ ๊ตฌ์ฑ
- Frontend : ์กฐ์ฑ๋ฏผ(ENFJ), ์๋๊ฑด(INFJ), ๊น์ธ์ฐ(INFP)
- Backend : ์ ์๊ท(ENFP), ์ ์ฑ์(INTP), ์ค์ ๋ฏผ(ISTP)
- Designer : ๊น๋ฏผ๊ฒฝ(ESTJ), ๊น์์ฐ(ESFJ)

## ๐๊ฐ๋ฐํ๋ก์ธ์ค & ERD
- [git HUb issue&Project](https://github.com/fungap/Appendix-back/blob/main/develop_process.md)
- [ERD](https://github.com/fungap/Appendix-back/blob/main/erd.md)

## ๐จ ์ํคํ์ณ
![image](https://user-images.githubusercontent.com/88120776/144158286-65ad9dde-0e7d-41c9-a386-daaad75e7bbf.png)<br><br>

[์ํคํ์ณ ์ค๋ช](https://github.com/fungap/Appendix-back/blob/main/architecture.md)<br><br>

## ๐  ๊ธฐ์  ์คํ ๋ฐ ๋ผ์ด๋ธ๋ฌ๋ฆฌ

### ๊ธฐ์  ๊ฐ๋ฐ ํ๊ฒฝ

|         ์ข๋ฅ          |         ์ด๋ฆ          |
| :-------------------: | :-------------------: |
|    ์๋ฒํ๋ ์์ํฌ     |        Express        |
|       Database        |         Mysql         |
|       ๋ชจ๋ํฐ๋ง        | ๊ทธ๋ผํ๋,ํ๋ก๋ฉํ์ฐ์ค |
|         CI/CD         |        ์  ํจ์ค         |
| container ocastration |       ๋์ปค์ค์        |
|       ๊ฒ์์์ง        |    elastic search     |
|    ๋น๋์ด๋ฏธ์ง ์ ์ฅ    |      docker hub       |
|      ํ๋ก์์๋ฒ       |         nginx         |
|      ๋ถํํ์คํธ       |        jmeter         |
|       ๊ฐ๋ฐ์ธ์ด        | Javascript,Typescript |

### ์ฃผ์ ๋ผ์ด๋ธ๋ฌ๋ฆฌ
  |๋ผ์ด๋ธ๋ฌ๋ฆฌ|์ค๋ช|
  |:------:|:---:|
|cors|๊ต์ฐจ๋ฆฌ์์ค๊ณต์ |
|dotenv|์ํฌ๋ฆฟํค ์ํธํ|
|jsonwebtoken|ํ์๊ฐ์ ์๋๋ฐฉ์|
|sequelize|MySQL ORM|
|cookie-parser|์กฐํ์์ค๋ณต๋ฐฉ์ง|
|Mysql|Mysql|
|bycrypt|๋น๋ฐ๋ฒํธ ํด์ฌํ|
|swagger-autogen|์ค์จ๊ฑฐ ์๋์์ฑ|
|joi|์ ํจ์ฑ๊ฒ์ฌ|
|winston|๋ก๊ทธ๊ด๋ฆฌ|
|morgan|๋ก๊ทธ๊ด๋ฆฌ|
|nodemailer|๋ฉ์ผ์ธ์ฆ|
|socket.io|์ฑํ|
|helmet|๋ณด์๊ฐํ|
|typescript|typescript|  

## ๐ ์ฃผ์ APi ๊ธฐ๋ฅ | Main API
[์์ธ๋ณด๊ธฐ](https://github.com/fungap/Appendix-back/blob/main/API.md)
1. ํ์๊ฐ์,์์๋ก๊ทธ์ธ(์นด์นด์ค,๊ตฌ๊ธ,๋ค์ด๋ฒ),์ด๋ฉ์ผ ์ธ์ฆ(๋น๋ฐ๋ฒํธ ์ฐพ๊ธฐ)
2. ์ฑํ,์ ํ๋ณ ์ฑํ๋ฐฉ(E,i,F,T) 
3. ์ปจํ์ธ  ๊ฒ์ (Elastic search)
4. ์ํฉ๋ณ MBTI ๋ฐ์ ์ปจํ์ธ (์ข์์, ์กฐํ์, ๋๊ธ, ๊ณต์ )
5. ๋ฐธ๋ฐ์ค๊ฒ์ MBTI๋ณ ํฌํ ์ปจํ์ธ (ํฌํ, ์กฐํ์, ๋๊ธ, ์ข์์, ๊ณต์ )
6. MBTi๊ถํฉํ์คํธ ์ปจํ์ธ (๊ณต์ )

## ๐ํธ๋ฌ๋ธ ์ํ
[์์ธ๋ณด๊ธฐ](https://github.com/fungap/Appendix-back/blob/main/trouble.md)
1. cookie ๋ฅผ ์ด์ฉํ ์กฐํ์ ์ค๋ณต ๋ฐฉ์ง
2. table ์ ์๋ like state ๊ฐ ๊ณ์ฐ
3. ์  ํจ์ค EC2 ์์๋ ์ฐ๊ฒฐ์ด ์๋์์ง๋ง GCP์์๋ ์๋๋ ๋ฌธ์ 
4. ์ฟ ๋ฒ๋คํฐ์ค ํด๋ฌ์คํฐ ์ํ

## โจ๊ธฐ์ ์  ์ฑ๋ฆฐ์ง 
[๋์ปค์ค์&๋ชจ๋ํฐ๋ง](https://github.com/fungap/Appendix-back/blob/main/docker-swarm%26monitoring.md)<br>
[์ฑํ](https://github.com/fungap/Appendix-back/blob/main/chatting.md)<br>
[๊ฒ์์์ง&๋ถ์์์ง](https://github.com/fungap/Appendix-back/blob/main/search_engin%26Analysis_tool.md)<br>
[์์๋ก๊ทธ์ธ](https://github.com/fungap/Appendix-back/blob/main/social-login.md)<br>
[ํ์์คํฌ๋ฆฝํธ](https://github.com/fungap/Appendix-back/blob/main/typescript.md)<br>

## โ์์ฌ์ ๋ ์  && ์ํ๋ก๊ทธ
- ์๋์ ๊ธฐํ, ๊ธฐ์ ์ ์ธ ๋์ ๊ณผ ์คํจ ๊ทธ๋ฆฌ๊ณ  ์ค๋ฒ์์ง๋์ด๋ง<br>
์ฒซ๋  ์์ง์ ์นํ์ง ์์ ํ์๋ค๊ฐ์ ๋ง๋จ์ด ์์ ํ ๋ชจ๋ ์ด์ ์ ์ผ๋ก ๊ธฐํ์ ํ๊ณ  ๋ฐฑ์ค๋ ํ์๋ค ๊ณผ ์ด๋ป๊ฒ ์งํํ ๊ฒ์ธ์ง ํ์๋ฅผ ํ๋ค. ๋น์ด์ ๊ณํ์ ์ฒ์๋ถํฐ ๋ชจ๋  ์ฝ๋๋ฅผ ์๋ก๊ฐ ๊ฐ์ด ํ๋ ๋ฆฌ๋ทฐ๋ฅผ ํ๋ฉด์ ํ๋ก์ ํธ ์ ๋ฐ์ ๋ด๊ฐ ๋ชจ๋ฅด๋ ์ฝ๋๊ฐ ์๊ฒ ํ๋ ๊ฒ ์ด์๋ค. 1์ฃผ์ผ ๊ฐ passport๋ฅผ ์ด์ฉํ ์์๋ก๊ทธ์ธ์ด๋, ๊ธฐ๋ณธ api ์ค๊ณ, https ์ค์  ๋ฑ์ ํจ๊ป ๋ธ์์ ๊ฐ๋๋ค๊ณผ ์ฌ์ฉ๊ทผ๊ฑฐ๋ฑ์ ์ ๋ฆฌํ๋ฉด์ ์งํํ์๋ค. ๊ทธ๋ฌ๋ ์ฐ๋ฆฌ๋ ์ฌ๋ฌ ๋ฉํ ๋ง์ ๋ฐ์ผ๋ฉด์ ํ๋ก์ ํธ์ ๋ฐฉํฅ์ ๋ํ ์๊ตฌ์ฌ์ ๊ฐ๊ฒ ๋์๊ณ  ๊ฒฐ๊ตญ ์ผ์ฃผ์ผ ๋ง์ ๋น์ด์ ๊ธฐํ์ ์๊ฒ ๋์ด๋ฒ๋ ธ๋ค. ์ด๋ ๋ฉํ์ด ๋ง์ด ํ๋ค๋ ธ๋ ๊ฒ ๊ฐ๋ค. ์ผ์ฃผ์ผ๊ฐ์ ์๊ฐ์ด ๊ฑฐ์ ์ฆ๋ฐ ํ๋ค ์ํผ ํ๊ณ  ๋จ๋ค๋ณด๋ค ๋ฆ์ถฐ์ง๋ค๋ ์๊ฐ์ด ๊ฐํ๋ค. ๊ฒฐ๊ตญ์ 2์ฃผ์ฐจ์๋ ๊ฐ์ด ๋ฆฌ๋ทฐํ๋ฉด์ ๋ชจ๋  ์ฝ๋๋ฅผ ๊ฐ์ด ์ง๋ ๊ฒ์ ํ์ง ๋ชปํ๊ณ  ํํธ๋ฅผ ๋๋ ์ ์งํํ๋ค. 4์ฃผ์ฐจ ๋ถํฐ๋ ๋ณธ๊ฒฉ์ ์ผ๋ก ๊ธฐ์ ์  ์ฑ๋ฆฐ์ง๋ฅผ ์๋ํ๋ค. ๋๋ ์๋ฒ๊ด๋ฆฌ ์ธํ๋ผ๋ฅผ ๋งก์๋๋ฐ ์ฟ ๋ฒ๋คํฐ์ค ๊ตฌ์ถ์ ์๋ ํ๋ค. ํ์ง๋ง ์ฑ๊ณตํ์ง ๋ชปํ๊ณ  ๊ฒฐ๊ตญ ๋์ปค์ค์์ผ๋ก ๊ตฌ์ฑ์ํ๊ณ  ๋ชจ๋ํฐ๋ง์๋ ๊ทธ๋ผํ๋ ํ๋ก๋ฉํ์ฐ์ค ๋ฅผ ํฉ์ฉํ๋ค. ์ํคํ์ณ ๋ฉด์์ ๋ญ๊ฐ ํํํ ๊ทผ๊ฑฐ๋ฅผ ๋ฐํ์ผ๋ก ์ค๊ณํ๊ธฐ ๋ณด๋ค๋ ์กฐ๊ธ ๋ ๊น๊ฒ ํ๊ณ  ๋ค๋ค๋ณด๋ ๋ณด์ด๋ ์ด๋ค ์คํฉ์ข์ ๊ธฐ์ ๋ค์ ๋์ด ๋ง์ด ๊ฐ๋ ๊ฒ ๊ฐ๋ค. ๋ฐ๋ผ์ ์ค๋ฒ์์ง๋๋ง์ด๋ผ๋ ๊ตด๋ ๋ฅผ ๋ฒ์ด๋๊ธฐ ํ๋ค๋ค๊ณ  ์๊ฐํ๋ค. ๋ค๋ง ์ฌ๋ฌ ๋ฉํ ๋ง์ด๋ ํ๋ก์ ํธ ๋ฐฉํฅ๋ค์ ์ก๋ ๊ณ ๋ฏผ๋ค์ ํ ๋ ๊ฒฐ๊ตญ์ ์ ํํ ๊ฒ์ ์ฐ๋ฆฌ๊ฐ ํ๊ณ  ์ถ์ดํ๋ ๊ฒ๋ค์ ํ์ ์๋ค. ๋ถ๋ช ์ง๊ธ์์ ์กฐ๊ธ์ ๋ ์์ฝ๊ณ  ๋ ๊ทผ๊ฑฐ์๋ ๊ฐ๋ฐ์ ํ์ผ๋ฉด ์ด๋ ์๊น ํ๋ ์์ฌ์์ด ๋๋ ๊ฒ๋ ์ฌ์ค์ด๋ค.<br><br>
- ํ๋ก ํธ3 ๋ฐฑ์ค๋3 ๋์์ด๋ 2 ํ์๊ณผ ์ํต<br>
ํ๋ก ํธ์ ๋ฐฑ์๋ ๊ทธ๋ฆฌ๊ณ  ๋์์ด๋๋ถ๋ค๊น์ง ์ด๋ ๊ฒ 8๋ช์ ๋จ์๋ก ํ์์ ํ๋ ๊ฒ์ด ์ฒ์์ด๊ธฐ๋ ํ๊ธฐ์ ์ฒ์์๋ ์๋นํ ๋ฏ์ค์๋ค. ์ํตํ๋ฉด์ ์ต๋ํ ๋ถ๋๋ฌ์ด ํ๋ฒ์ ์ฌ์ฉํ๋ ค๊ณ  ๋ธ๋ ฅํ๋ค. ์๋ฌด๋๋ ์ฅ์๊ฐ ์ง์ค์ ํ๋ฉด์ ์ฝ๋ฉ์ ํ๋ค๋ณด๋ฉด ์กฐ๊ทธ๋งํ ๋งํฌ๋ ํ๋์ ์ฝ๊ฒ ์์ฒ๋ฅผ ์ค ์ ์์ ๊ฒ ๊ฐ์๋ค. ๊ฐ์ธ์ ์ธ ์๊ฐ ์ด์ง๋ง ์ฐ๋ฆฌ ํ์ด ์ํต๊ณผ ํ ์๋์ง๋ ์ ์ผ ์ข์๋ค๊ณ  ์๊ฐํ๋ค. ๋ฌด์กฐ๊ฑด ์ข๊ณ ์ข๋ค๊ณ  ํ๋ ๊ฒ์ด ์๋๋ผ ์ด๋ค๋ถ๋ถ์์๋ ๋ฑ ์๊ตฌํ  ์ ์๋ ์ํฉ๊ณผ ๊ฑฐ์  ํ  ์ ์๋ ์ํฉ์์ ์ ์ ํ๊ฒ ํํ ํ  ๋ ๊ฐ ์๋ค๊ณ  ์๊ฐํ๋๋ฐ ์ด๋ถ๋ถ๋ ์๋ก์๊ฒ ์ง์ค์ ์ผ๋ก ์ด์ผ๊ธฐ ํ๊ณ  ๊ฐ์ ์์ด ๋ฐ์๋ค์ด๋ ๋ถ๋ถ์ด ์ข์๋ค๊ณ  ์๊ฐํ๋ค.<br><br>
- ํ๋ฃจ์ 15์๊ฐ์ฉ 6์ฃผ??<br>
์์นจ 9์ ๋ถํฐ ๋ฐค 11์๊น์ง 6์ฃผ๊ฐ ํ๋ค๋ ๊ฒ์ ๋ญ๊ฐ ๋๋ ์ด๋ ๊ฒ ๊น์ง ํ  ์ ์๊ตฌ๋ ํ๋ ์๊ฐ์ด ๋ ๋ค. ์ ๋ง ์งง์ ์๊ฐ ๋์ ๋ง์ ๊ฒ๋ค์ ์ถ์ฝ์ ์ผ๋ก ๋ชธ์์ ์ง์ด๋ฃ์ ๋๋์ด๋ค. ์ด๋ฌํ ๊ฒฝํ์ ์ฌํ๊ป ๊ฒช์ด๋ณด์ง ๋ชปํ๋ ๊ฒฝํ์ธ ๊ฒ๋ฟ ์๋๋ผ ์์ผ๋ก๋ ํ๊ธฐ ํ๋  ๊ฒฝํ์ธ ๊ฒ์ ํ์คํ๋ค 
