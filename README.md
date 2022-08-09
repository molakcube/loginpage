구현한 기능

1. localstorage에 sginin 페이지에서 받은 아이디와 패스워드 저장
2. login 페이지에서 localstorage에서의 값을 가져와 id와 pw 비교후, 적절한 알림창 표시
3. login과 signin 성공했을 때 화면 표시
4. localstorage 비우는 버튼 추가

이번에 구현한 기능

1. if문에 else가 존재하지 않아 비밀번호와 아이디가 일치하지 않아도 WELCOME이 출력되던 현상 수정

다음에 해볼 것

1. 섹션 배치
2. ID를 만들 때 최대, 최소 길이 제한
3. ID 만들 때 영문과 숫자 조합으로만 가능하게 만들기
4. PW도 같은 매커니즘 구현

꺠달은 것

1. 아이디 생성 성공시 알림과 함께 로그인페이지로 넘어가려고 시도했으나, http를 사용한 주소가 필요하다는 것을 꺠달음. 즉, 서버로 html을 가동 시켜야 url을 통한 자동 넘어가기가 가능하다는 것을 알아냄
2. class와 id값이 동시에 존재할 경우 id에 있는 값이 우선 됨. class에 display hidden을 적용했지만, id에 있던 display flex가 우선순위로 잡혀 hidden이 적용되지 않았음
3. null과 undefined는 같은 값과 같은 객체값이어서 ===을 사용하면 true가 나옴. 두 값을 구분하기 위해서는 값만 비교하는 연산자 ==만 사용해야 함

최종 구현 기능 생각해보기

1. ID와 PW를 받았을 때 특정 저장장치에 저장 후, welcome! + ID 띄우기
2. ID의 형식이 메일 형식으로만 받을 수 있게 하기, ID길이 30글자로 제한
3. 비밀번호가 특수문자/영문/숫자만 입력가능하게 하고, 모두 들어가야하며 최소길이 8, 최대길이 20으로 제한하기
4. 새로고침시 다시 로그인하게 만들되, 저장장치에 남아있는 기록 유지하기
5. ID와 맞지 않은 PW가 들어왔을 때 멈추게 하기

최종구현 UI 생각해보기

1. 로그인 섹션은 작은 박스로 구분하기
2. 입력창에 label요소들 집어넣기
3. 패스워드가 틀렸거나 양식에 맞지 않는 행동일 때, 해당 부분이 부르르 떨리게 하기
