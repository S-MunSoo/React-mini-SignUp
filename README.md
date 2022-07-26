## 🐻 React 프론트엔드 미니 사전과제 프로젝트 #1 회원가입 폼

### 요구사항 및 학습 목표 ✅

1. autofocus : 페이지가 로드 된 시점에 ID 입력 창에 Focus가 되어 있어야 한다
2. 유효성검사 로직 : ID, 비밀번호, 비밀번호 확인 필드에 대한 유효성 검사를 수행해야 한다.
3. 유효성 검사 시점

- input focus out 시 해당 input의 유효성을 검사합니다.
- 가입하기 버튼을 눌렀을 때 모든 필드의 유효성을 검사합니다.

4. 유효성 검사 패턴

- 모든 필드의 값은 빠짐 없이 입력해야 합니다.
- ID, 비밀번호, 비밀번호 확인 필드는 유효성 조건을 충족해야 합니다.
- ID: 5~20자. 영문 소문자, 숫자. 특수기호(\_),(-)만 사용 가능
- 비밀번호: 8~16자. 영문 대/소문자, 숫자 사용 가능
- 비밀번호 확인: 비밀번호와 일치

5. 커스텀 에러 메세지

- 유효하지 않은 값일 경우, 각 경우에 맞는 에러 메시지를 보여주어야 합니다.
- 유효성 조건과 에러 메시지는 아래를 참고해주세요.
  (공통) 빈 값일 경우: 필수 정보입니다.
  [ID] 유효하지 않은 값일 경우: “5~20자의 영문 소문자, 숫자와 특수기호(\_),(-)만 사용 가능합니다.”
  [비밀번호] 유효하지 않은 값일 경우: “8~16자 영문 대 소문자, 숫자를 사용하세요.”
  [비밀번호 확인] 유효하지 않은 값일 경우: “비밀번호가 일치하지 않습니다.”

6. 입력 확인 모달 창

- 가입하기 버튼 클릭 시, 모든 input의 값이 유효한 상태일 경우 입력한 아이디와 비밀번호를 확인할 수 있는 모달 창을 보여주어야 합니다.

7. 폰트 사이즈 조절 버튼

- 회원가입 폼에 사용된 기본 폰트 사이즈는 16px입니다.
- 기본 폰트 사이즈를 기준으로 1px씩 폰트 사이즈를 조절할 수 있는 기능을 구현해주세요.
  (최소: 12px, 최대: 20px)
- 현재 폰트 사이즈가 20px일 경우 + 버튼 비활성화
- 현재 폰트 사이즈가 12px일 경우 - 버튼 비활성화
