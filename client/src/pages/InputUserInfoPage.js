import styled from 'styled-components';
import Container from '../components/Container';

const SContainer = styled(Container)`
  display: flex;
  justify-content: center;
`;
const SInputInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  text-align: center;
  color: var(--main-font-color);
  font-weight: 500;
  input {
    border: 1px solid #b7a69e;
  }
  .next-button {
    line-height: 50px;
    border: 0;
    border-radius: 10px;
    background-color: var(--main-color);
    font-size: 1.5rem;
    color: white;
    margin-top: 20px;
  }
  .title {
    color: var(--main-font-color);
    font-size: 2rem;
    font-weight: 500;
  }
  .input-container {
    display: flex;
    margin-top: 15px;
    .image-container {
      display: flex;
      flex-direction: column;
      padding-right: 10px;
      div {
        background-color: white;
        width: 100px;
        height: 100px;
        border-radius: 50%;
      }
      button {
        line-height: 15px;
        margin: 3px 0;
        background-color: var(--bg-color);
        border: 0;
        border-radius: 10px;
        :hover {
          background-color: var(--sec-color);
        }
      }
    }
    .nickname-input {
      display: flex;
      padding: 10px;
      input {
        margin-left: 10px;
        border-radius: 5px;
        ::placeholder {
          color: var(--sec-color);
          font-weight: 500;
          padding-left: 10px;
        }
      }
    }
    .gender-select {
      display: flex;
      padding: 10px;
      .gender-button {
        display: flex;
        justify-content: center;
        flex-grow: 1;
        margin-left: 24px;
        button {
          flex-grow: 1;
          line-height: 10px;
          background-color: white;
          border: 0;
          border-radius: 10px;
          color: var(--sec-color);
          font-weight: 500;
          :hover {
            background-color: var(--bg-color);
          }
        }
      }
    }
    .age-select {
      display: flex;
      padding: 10px;
      select {
        text-align: center;
        margin-left: 24px;
        flex-grow: 1;
        border-radius: 5px;
        border: 1px solid #b7a69e;
      }
    }
  }
  .address-container {
    text-align: left;
    input {
      width: 100%;
      height: 30px;
      border: 1px solid #b7a69e;
      border-radius: 5px;
      ::placeholder {
        color: var(--sec-color);
        font-weight: 500;
        padding-left: 10px;
      }
    }
    textarea {
      width: 100%;
      resize: none;
      height: 100px;
      border: 1px solid #b7a69e;
      border-radius: 5px;
      ::placeholder {
        color: var(--sec-color);
        font-weight: 500;
        padding: 10px 0 0 10px;
      }
    }
  }
`;

const InputUserInfoPage = () => {
  return (
    <SContainer>
      <SInputInfoContainer>
        <div className="title">집사 정보 입력</div>
        <div className="input-container">
          <div className="image-container">
            <div></div>
            <button>이미지 업로드</button>
            <button>이미지 삭제</button>
          </div>
          <div>
            <div className="nickname-input">
              <div>닉네임</div>
              <input placeholder="닉네임"></input>
            </div>
            <div className="gender-select">
              <div>성별</div>
              <div className="gender-button">
                <button>남</button>
                <button>여</button>
              </div>
            </div>
            <div className="age-select">
              <div>나이</div>
              <select>
                <option value="1">10대</option>
                <option value="2">20대</option>
                <option value="3">30대</option>
                <option value="4">40대 이상</option>
              </select>
            </div>
          </div>
        </div>
        <div className="address-container">
          <div>주소</div>
          <input placeholder="주소를 검색하세요"></input>
          <div>인사말</div>
          <textarea placeholder="인사말을 입력하세요"></textarea>
        </div>
        <button className="next-button">가입 완료</button>
      </SInputInfoContainer>
    </SContainer>
  );
};

export default InputUserInfoPage;
