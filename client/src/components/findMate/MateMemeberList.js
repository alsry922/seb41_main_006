import { useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import { getMemberList } from '../../api/member/member';
import styled from 'styled-components';
import MateMemberCard from './MateMemberCard';
import { GrayDog } from '../common/DogSvg';

const MemberList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
  overflow-x: scroll;
  // 스크롤바 가리기
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
  gap: 1.5rem;
  padding-bottom: 3rem;
`;

const NoMemberBox = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  > .dog-face {
    width: 13rem;
    height: 16rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  > .no-pets-msg {
    margin-top: 1rem;
    font-weight: 500;
  }
`;

const MateMemberList = () => {
  const { code } = useSelector((state) => state.address);
  const { data: memberList, isLoading } = useQuery(
    ['members', code],
    async () => await getMemberList({ page: 1, size: 10, placeCode: code }),
    {
      placeholderData: [],
    }
  );

  if (isLoading) {
    <div>loading...</div>;
  }

  if (!memberList || memberList.length === 0) {
    return (
      <NoMemberBox>
        <div className="dog-face">
          <GrayDog></GrayDog>
        </div>
        <div className="no-pets-msg">주소에 해당하는 모임 글이 없습니다!</div>
      </NoMemberBox>
    );
  }

  return (
    <MemberList>
      {memberList.map((el) => (
        <li key={el.memberId}>
          <MateMemberCard member={el} />
        </li>
      ))}
    </MemberList>
  );
};

export default MateMemberList;
