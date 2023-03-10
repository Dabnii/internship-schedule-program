# <p align="center"> π» `Internship` Schedule program</p>

### <p align="center"> π 2022.12.12~2023.1.6

```
ποΈ 01. refactor & restyling since 23/01/27
ποΈ 02. refactor & restyling main, table, studio components 23/02/01
ποΈ 03. refactor & restyling auto delete, keep, save components 23/02/05
ποΈ 04. refactor auto delete function 23/02/06
ποΈ 05. disabled un-used components 23/02/13
```

## π Project Goal

- `νκ·Έ` κΈ°λ₯κ³Ό `μλμ­μ ` κΈ°λ₯μ μΆκ°νμ¬ κΈμ΅ λ°μ΄ν° κ΄λ¦¬ νΈμμ± μ¦λ λͺ©ν

## πββοΈ Team

- `FE Intern` μ΄λ€λΉ, μ΄μ μ£Ό
- `FE Junior` SJλ§€λμ λ

## π Features

- `λ€λΉ FE` πββοΈ μ€μΌμ₯΄ νκ·Έ μμ±,μλ μ­μ  λ° μλ μΆμ² κΈ°λ₯
- `μ μ£Ό FE` πββοΈ μ€μΌμ₯΄ νκ·Έ μλμ­μ  μΊλ¦°λ μμ±, μλ μ­μ  κ²°κ³Ό νμ΄μ§

## π  Tools

- `Notion`, `Jira`, `Git`, `Slack`,`postman`

## π  Engineering Stack

- π» FE:
  - `JavaScript`, `React`, `SASS`

## π λμ μ μννΈ

- `μ€μΌμ₯΄ νκ·Έ μμ± λͺ¨λ¬μ°½ κ°λ°`
- `μ€μΌμ₯΄ νκ·Έ μλ μ­μ  κΈ°λ₯`
- `μ€μΌμ₯΄ νκ·Έ μλ μΆμ² κΈ°λ₯`

### πͺ μμ ννΈλ₯Ό λ΄λΉνκ² λ μ΄μ 

- `REST api` ν΅μ  νμ΅
- `antd` λΌμ΄λΈλ¬λ¦¬ νμ©

## <p align="center">π λλ₯Ό μ±μ₯νκ² ν μ½λ λ€μ¬λ€λ³΄κΈ°

### π‘ async & await

- π€ promise νμ©

  > `FE`μ`BE` ν΅μ  μ€ κ°μ₯ λ§μ μ€λ₯κ° λ°μνλ κ΅¬κ°μ΄ ν΅μ μ΄λ€. μ¬ν ν΄μ¨ νλ‘μ νΈλ λ¨μν κ΅¬μ‘°μ λ°μ΄ν°μκΈ°μ `fetch`, `then()`λ©μλλ§μ μ¬μ©νλ€. νμμμλ λ λ§μ λ°μ΄ν°λ€μ΄ ν΅μ  λκΈ° λλ¬Έμ μλ¬ νΈλ€λ§μ΄ μ€μν κ²μ νμ΅.

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

### π©βπ©βπ§βπ¦ μμμμ λΆλͺ¨λ‘ λ°μ΄ν° λ³΄λ΄κΈ°

1. π¨βπ¨βπ¦ λΆλͺ¨ componentμμ `useStateλ₯Ό` ν΅ν΄ μ λ¬ λ°μ λ°μ΄ν°λ₯Ό μ μ₯ν  λ³μμ μΈ
1. π¨βπ¨βπ¦ λΆλͺ¨ componentμμ `propsλ‘` `setter`λ₯Ό μ λ¬
1. πΌ μμ componentμμ λΆλͺ¨λ‘ λΆν° μ λ¬ λ°μ `setter`λ₯Ό ν΅ν΄ λ°μ΄ν°λ₯Ό μ μ₯

> λ¨ λ°©ν₯μΌλ‘ μ§νλλ props μ λ¬ λ°©μμ΄ μλ°©ν₯μ΄ λ  μ μμμ νμ΅!

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

### π― Input

- μ μ  μμ₯μμ ν λ² λ μκ°νκΈ°

  > μ λ¬ λ°μ νλ©΄ κ³νμμ `input`μ΄ λ¨μν νμ€νΈλ‘ κ΅¬μ±λμ΄ μμλ€. μ μ λ ν΄λΉ νμ€νΈκ° μλ ₯μ°½μμ μΈμ§νκΈ°κ° μ΄λ €μΈ κ² κ°μ, κΈ°νμμλ λ€λ₯΄μ§λ§ λ¨Όμ  μκ²¬μ μ μνμ¬ μΈνμ°½μμ λ³΄μ¬μ£ΌκΈ°λ‘ νλ€.
  > ![BA](https://user-images.githubusercontent.com/110847597/212609365-60cbfb7d-e073-4022-8317-2315d040e9e0.png)

  ```jsx
  //inputμ°½μ up,down arrowλ₯Ό μΈμ λ display
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
      opacity: 1;
  }
  ```

## <p align="center"> `Internship` π `Retrospective`

### 4L: Liked, Learned, Lacked, Longed for

- π μ’μλ κ²(Liked)
  - νμ μ½λλ₯Ό μ§μ  μ²΄ν ν΄ λ³Έ κ²
  - `antd` λΌμ΄λΈλ¬λ¦¬λ₯Ό μ¬μ© ν κ²
  - ν΅μ  (`promise`, `axios`)μ ν΅νμ¬ λ°°ν¬κΉμ§ μ§ν ν κ²
  - UIμ `input`λ¨Όμ  μκ²¬μ μ μ ν κ²
- π λ°°μ΄ κ²(Learned)
  - μ€λ¬΄μ ν΅μ (postman, μΈν°νμ΄μ μ°Έκ³ μ, κΈ°νμ νμ©λ²)
    - μλ₯Ό λ€μ΄, Backendμκ² μ μ‘ν΄μΌ ν  λ°μ΄ν°κ° `console.log`μ μ°μ΄μ λ³΄μ΄μ§ μλλ€λ©΄, νλ‘ νΈμμ μ μνλ κ²μ΄ μλ μμ²­μ΄λ μ§λ¬Έμ ν΅νμ¬ λ°μ΄ν° μ μ‘ λ°©μμ λΌμ ν΄μΌ ν¨
- π¦ λΆμ‘±νλ κ²(Lacked)
  - λ°μ΄ν° ν΅μ μ νμ΄λ° μμΈ‘
- π― λ°λΌλ κ²(Longed for)
  - μ κ·Ήμ μΌλ‘ μ§λ¬Ένκ³ , κ²μνλ κ³Όμ μμ λ§μ΄ λ°°μ λ€. μ΄μ μ νλ μ€μλ₯Ό λ€μ νμ§ μλλ‘ λ³΅μ΅νκ³  λ λΈλ ₯νκΈ°!

---

- [Internship daily retrospective](https://github.com/Dabnii/Dabnii.github.io/blob/main/Projects/2022.12/Dec2ndWeek.md)

<p align="center"> E.O.D
