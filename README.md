# <p align="center"> 💻 `Internship` Schedule program</p>

### <p align="center"> 📆 2022.12.12~2023.1.6

```
🏗️ 01. refactor & restyling since 23/01/27
🏗️ 02. refactor & restyling main, table, studio components 23/02/01
🏗️ 03. refactor & restyling auto delete, keep, save components 23/02/05
🏗️ 04. refactor auto delete function 23/02/06
🏗️ 05. disabled un-used components 23/02/13
```

## 🏆 Project Goal

- `태그` 기능과 `자동삭제` 기능을 추가하여 금융 데이터 관리 편의성 증대 목표

## 🙎‍♀️ Team

- `FE Intern` 이다빈, 이유주
- `FE Junior` SJ매니저님

## 📌 Features

- `다빈 FE` 🙋‍♀️ 스케쥴 태그 생성,자동 삭제 및 자동 추천 기능
- `유주 FE` 🙋‍♀️ 스케쥴 태그 자동삭제 캘린더 생성, 자동 삭제 결과 페이지

## 🛠 Tools

- `Notion`, `Jira`, `Git`, `Slack`,`postman`

## 🛠 Engineering Stack

- 💻 FE:
  - `JavaScript`, `React`, `SASS`

## 🚀 나의 제작파트

- `스케쥴 태그 생성 모달창 개발`
- `스케쥴 태그 자동 삭제 기능`
- `스케쥴 태그 자동 추천 기능`

### 💪 위의 파트를 담당하게 된 이유

- `REST api` 통신 학습
- `antd` 라이브러리 활용

## <p align="center">👀 나를 성장하게 한 코드 들여다보기

### 💡 async & await

- 🤙 promise 활용

  > `FE`와`BE` 통신 중 가장 많은 오류가 발생하는 구간이 통신이다. 여태 해온 프로젝트는 단순한 구조의 데이터였기에 `fetch`, `then()`메소드만을 사용했다. 현업에서는 더 많은 데이터들이 통신 되기 때문에 에러 핸들링이 중요한 것을 학습.

  ```jsx
  getTableApi = async ({ projectId, workspaceId, responseType }) => {
    const authToken = localStorage.getItem('auth_token');
    try {
      const response = await fetch(`url`, {
        method: 'GET',
        headers: {
          Authorization: authToken,
          'client-server': 'application/json',
        },
      });

      const tagReadData = await response.json();
    } catch (err) {
      console.log(err);
    }
  };
  ```

### 👩‍👩‍👧‍👦 자식에서 부모로 데이터 보내기

1. 👨‍👨‍👦 부모 component에서 `useState를` 통해 전달 받을 데이터를 저장할 변수선언
1. 👨‍👨‍👦 부모 component에서 `props로` `setter`를 전달
1. 👼 자식 component에서 부모로 부터 전달 받은 `setter`를 통해 데이터를 저장

> 단 방향으로 진행되던 props 전달 방식이 양방향이 될 수 있음을 학습!

```jsx
//parent
state = {
  keyDataFromChild: [],
};

uploadTagCreate = async () => {
  const { keyDataFromChild } = this.state;

  await api({
    url: `url`,
    method: 'post',
    headers: { 'content-type': 'application/json' },
    data: {
      tag_id: keyDataFromChild[0],
    },
  }).then(response => {
    const { data } = response;
  });
};

const getKeyData = value => {
  this.setState({ keyDataFromChild: value });
};

//child
state = {
  keys: [],
};

onRowKeysChange = keys => {
  this.setState({ keys });
  const { getKeyData } = this.props;
  getKeyData(keys);
};
```

### 🎯 Input

- 유저 입장에서 한 번 더 생각하기

  > 전달 받은 화면 계획서에 `input`이 단순한 텍스트로 구성되어 있었다. 유저는 해당 텍스트가 입력창임을 인지하기가 어려울 것 같아, 기획서와는 다르지만 먼저 의견을 제시하여 인풋창임을 보여주기로 했다.
  > ![BA](https://user-images.githubusercontent.com/110847597/212609365-60cbfb7d-e073-4022-8317-2315d040e9e0.png)

  ```jsx
  //input창의 up,down arrow를 언제나 display
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
      opacity: 1;
  }
  ```

## <p align="center"> `Internship` 📝 `Retrospective`

### 4L: Liked, Learned, Lacked, Longed for

- 😍 좋았던 것(Liked)
  - 협업 코드를 직접 체험 해 본 것
  - `antd` 라이브러리를 사용 한 것
  - 통신 (`promise`, `axios`)을 통하여 배포까지 진행 한 것
  - UI의 `input`먼저 의견을 제시 한 것
- 📚 배운 것(Learned)
  - 실무의 통신(postman, 인터페이서 참고서, 기획서 활용법)
    - 예를 들어, Backend에게 전송해야 할 데이터가 `console.log`에 찍어서 보이지 않는다면, 프론트에서 제작하는 것이 아닌 요청이나 질문을 통하여 데이터 전송 방식을 논의 해야 함
- 💦 부족했던 것(Lacked)
  - 데이터 통신의 타이밍 예측
- 🕯 바라는 것(Longed for)
  - 적극적으로 질문하고, 검색하는 과정에서 많이 배웠다. 이전에 했던 실수를 다시 하지 않도록 복습하고 더 노력하기!

---

- [Internship daily retrospective](https://github.com/Dabnii/Dabnii.github.io/blob/main/Projects/2022.12/Dec2ndWeek.md)

<p align="center"> E.O.D
