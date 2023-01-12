import styled from 'styled-components';
import { useState } from 'react';
import EdituserModal from './EdituserModal';

const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  button {
    width: 15%;
    height: 40px;
    background-color: var(--sec-color);
    color: white;
    font-size: 1.2rem;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    :hover {
      background-color: var(--main-font-color);
      color: white;
    }
  }
  > * {
    margin-bottom: 1%;
  }
  .img {
    background-color: white;
    border-radius: 50%;
    div {
      width: 150px;
      height: 150px;
    }
  }
  .Userinfo {
    width: 50%;
    display: flex;
    justify-content: center;
    div {
      margin-right: 10%;
    }
    span {
      margin-left: 5%;
    }
  }
  .Address {
    width: 30%;
    display: flex;
    justify-content: space-between;
  }
  .Introduce {
    margin-top: 5%;
    width: 50%;
    height: 100px;
    text-align: center;
  }
  :last-child {
    margin-bottom: 50px;
  }
`;

const UserInfo = () => {
  const [Modal, setModal] = useState(false);
  return (
    <>
      <UserInfoContainer>
        <h2>나의 정보</h2>
        <div className="img">
          <div></div>
        </div>
        <div>닉네임</div>
        <div className="Userinfo">
          <div>👤정보</div>
          <span>나이</span>
          <span>성별</span>
        </div>
        <div className="Address">
          <div>🔻지역</div>
          <div>경기도 의정부시 신곡동</div>
        </div>
        <div className="Introduce">안녕하세요 둥이 집사 입니다.</div>
        <button
          onClick={() => {
            setModal(!Modal);
          }}
        >
          정보 수정
        </button>
        <div>회원 탈퇴</div>
      </UserInfoContainer>
      {Modal ? <EdituserModal setModal={setModal} Modal={Modal} /> : ''}
    </>
  );
};

export default UserInfo;
