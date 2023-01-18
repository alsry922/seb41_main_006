const dummyBoards = {
  data: [
    {
      boardId: 1,
      title: '친구 찾아요',
      content: '우리 강쥐랑 친구할 사람 + 시간 변경요',
      countLike: 0,
      appointTime: '2023-01-10T13:00:00',
      meetingPlace: '서울시 송파구 잠실 7동',
      boardStatus: 'BOARD_OPEN',
      member: {
        createdAt: '2023-01-17T18:04:29.626048',
        modifiedAt: '2023-01-17T18:04:29.626048',
        memberId: 1,
        nickName: '예린',
        age: 26,
        gender: 'F',
        address: '서울시 송파구 잠실 7동',
        memberStatus: 'MEMBER_ACTIVE',
        aboutMe: '안녕하세요~~~',
        profileImage:
          'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
        roles: ['ROLE_USER'],
      },
      comments: [
        {
          commentsId: 1,
          boardId: 1,
          memberId: 1,
          content: '1',
          parentId: null,
          depth: 0,
          createdAt: '2023-01-18T00:21:51.146955',
          modifiedAt: '2023-01-18T00:21:51.146955',
          reComments: [
            {
              id: 1,
              content: '답글1',
              memberName: '정하',
              createdAt: '2023-01-16T11:44:05',
              likes: 3,
              profile_img:
                'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
            },
            {
              id: 2,
              content: '답글2',
              memberName: '혜리',
              createdAt: '2023-01-16T11:44:05',
              likes: 4,
              profile_img:
                'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
            },
          ],
        },
        {
          commentsId: 2,
          boardId: 1,
          memberId: 1,
          content: '바꿀게요 캬캬캬캬',
          parentId: 1,
          depth: 1,
          createdAt: '2023-01-18T00:23:20.539972',
          modifiedAt: '2023-01-18T00:26:21.633211',
        },
      ],
      createdAt: '2023-01-17T18:10:15.859825',
      modifiedAt: '2023-01-17T18:10:42.707895',
    },
    {
      boardId: 2,
      title: '친구 찾아요',
      content: '우리 강쥐랑 친구할 사람 + 시간 변경요',
      countLike: 0,
      appointTime: '2023-01-10T13:00:00',
      meetingPlace: '부산 해운대구 중동',
      boardStatus: 'BOARD_OPEN',
      member: {
        memberId: 2,
        createdAt: '2023-01-17T18:04:29.626048',
        modifiedAt: '2023-01-17T18:04:29.626048',
        nickName: '규성',
        age: 26,
        gender: 'M',
        address: '경기도 의정부시 신곡동',
        memberStatus: 'MEMBER_ACTIVE',
        aboutMe: '안녕하세요! 둥일, 둥이 집사입니다.',
        profileImage: null,
        roles: ['ROLE_USER'],
      },
      comments: [
        {
          commentsId: 1,
          boardId: 2,
          memberId: 1,
          content: '1',
          parentId: null,
          depth: 0,
          createdAt: '2023-01-18T00:21:51.146955',
          modifiedAt: '2023-01-18T00:21:51.146955',
        },
        {
          commentsId: 2,
          boardId: 2,
          memberId: 1,
          content: '바꿀게요 캬캬캬캬',
          parentId: 1,
          depth: 1,
          createdAt: '2023-01-18T00:23:20.539972',
          modifiedAt: '2023-01-18T00:26:21.633211',
        },
      ],
      createdAt: '2023-01-17T18:10:15.859825',
      modifiedAt: '2023-01-17T18:10:42.707895',
    },
  ],
};

// const dummyBoards = [
//   {
//     boardId: 1,
//     title: '같이 산책해요!',
//     createdAt: '2023-01-16T10:47:05',
//     content: '저희 달콩이와 같이 산책하실 분!',
//     member: {
//       id: 1,
//       nickName: '예린',
//       profileImg:
//         'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
//       age: 25,
//       gender: 'F',
//       address: '서울시 광진구',
//       memberStatus: 'MEMBER_ACTIVE',
//     },
//     meetingPlace: '서울시 송파구 잠실7동 OOO앞',
//     appointTime: '2023-01-16T15:30:00',
//     countLike: 3,
//     boardStatus: 'BOARD_OPEN',
//     comments: [
//       {
//         id: 1,
//         content: '저 근처에 사는데 같이 산책하고 싶어요!!',
//         memberName: '정하',
//         createdAt: '2023-01-16T11:44:05',
//         date: '2023.01.05(목)',
//         time: '오후 7시',
//         likes: 3,
//         profile_img:
//           'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
//         reComments: [
//           {
//             id: 1,
//             content: '답글1',
//             memberName: '정하',
//             createdAt: '2023-01-16T11:44:05',
//             likes: 3,
//             profile_img:
//               'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
//           },
//           {
//             id: 2,
//             content: '답글2',
//             memberName: '혜리',
//             createdAt: '2023-01-16T11:44:05',
//             likes: 4,
//             profile_img:
//               'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
//           },
//         ],
//       },
//       {
//         id: 2,
//         content: '저도요2',
//         memberName: '혜리',
//         createdAt: '2023-01-16T11:44:05',
//         likes: 4,
//         profile_img:
//           'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
//         reComments: [],
//       },
//     ],
//   },
//   {
//     id: 2,
//     title: '오늘 같이 산책하실 분!',
//     createdAt: '2023-01-16T10:47:05',
//     content:
//       '안녕하세요~ 말티즈 둥이 키우는 집사입니다. 귀엽고 깜찍하고 사랑스럽고 예쁜 아이입니다. 같이 산책하면서 재밌는 시간 보내요! 생각 있으신 분은 댓글 달아주세요~!',
//     member: {
//       id: 2,
//       nickName: '규성',
//       profile_img:
//         'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
//     },
//     meetingPlace: '서울시 송파구 잠실7동 OOO앞',
//     appointTime: '2023-01-16T15:00:00',
//     countLike: 3,
//     status: 'BOARD_CLOSE',
//     comments: [
//       {
//         id: 1,
//         content: '저 근처에 사는데 같이 산책하고 싶어요!!',
//         memberName: '정하',
//         createdAt: '2023-01-16T11:44:05',
//         date: '2023.01.05(목)',
//         time: '오후 7시',
//         likes: 3,
//         profile_img:
//           'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
//         reComments: [
//           {
//             id: 1,
//             content: '답글1',
//             memberName: '정하',
//             createdAt: '2023-01-16T11:44:05',
//             likes: 3,
//             profile_img:
//               'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
//           },
//           {
//             id: 2,
//             content: '답글2',
//             memberName: '혜리',
//             createdAt: '2023-01-16T11:44:05',
//             likes: 4,
//             profile_img:
//               'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
//           },
//         ],
//       },
//       {
//         id: 2,
//         content: '저도요2',
//         memberName: '혜리',
//         createdAt: '2023-01-16T11:44:05',
//         likes: 4,
//         profile_img:
//           'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
//         reComments: [],
//       },
//     ],
//   },
//   {
//     id: 3,
//     title: '같이 산책해요!',
//     createdAt: '2023-01-16T10:47:05',
//     content: '저희 달콩이와 같이 산책하실 분!',
//     member: {
//       id: 1,
//       nickName: '예린',
//       profile_img:
//         'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
//     },
//     meetingPlace: '서울시 송파구 잠실7동 OOO앞',
//     appointTime: '2023-01-16T15:30:00',
//     countLike: 3,
//     status: 'BOARD_OPEN',
//     comments: [],
//   },
//   {
//     id: 4,
//     title: '오늘 같이 산책하실 분!',
//     createdAt: '2023-01-16T10:47:05',
//     content:
//       '안녕하세요~ 말티즈 둥이 키우는 집사입니다. 귀엽고 깜찍하고 사랑스럽고 예쁜 아이입니다. 같이 산책하면서 재밌는 시간 보내요! 생각 있으신 분은 댓글 달아주세요~!',
//     member: {
//       id: 2,
//       nickName: '규성',
//       profile_img:
//         'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
//     },
//     meetingPlace: '서울시 송파구 잠실7동 OOO앞',
//     appointTime: '2023-01-16T15:00:00',
//     countLike: 3,
//     status: 'BOARD_CLOSE',
//     comments: [],
//   },
//   {
//     id: 5,
//     title: '같이 산책해요!',
//     createdAt: '2023-01-16T10:47:05',
//     content: '저희 달콩이와 같이 산책하실 분!',
//     member: {
//       id: 1,
//       nickName: '예린',
//       profile_img:
//         'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
//     },
//     meetingPlace: '서울시 송파구 잠실7동 OOO앞',
//     appointTime: '2023-01-16T15:00:00',
//     countLike: 3,
//     status: 'BOARD_OPEN',
//     comments: [],
//   },
//   {
//     id: 6,
//     title: '오늘 같이 산책하실 분!',
//     createdAt: '2023-01-16T10:47:05',
//     content:
//       '안녕하세요~ 말티즈 둥이 키우는 집사입니다. 귀엽고 깜찍하고 사랑스럽고 예쁜 아이입니다. 같이 산책하면서 재밌는 시간 보내요! 생각 있으신 분은 댓글 달아주세요~!',
//     member: {
//       id: 2,
//       nickName: '규성',
//       profile_img:
//         'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
//     },
//     meetingPlace: '서울시 송파구 잠실7동 OOO앞',
//     appointTime: '2023-01-16T15:00:00',
//     countLike: 3,
//     status: 'BOARD_CLOSE',
//     comments: [],
//   },
//   {
//     id: 7,
//     title: '같이 산책해요!',
//     createdAt: '2023-01-16T10:47:05',
//     content: '저희 달콩이와 같이 산책하실 분!',
//     member: {
//       id: 1,
//       nickName: '예린',
//       profile_img:
//         'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
//     },
//     meetingPlace: '서울시 송파구 잠실7동 OOO앞',
//     appointTime: '2023-01-16T15:00:00',
//     countLike: 3,
//     status: 'BOARD_OPEN',
//     comments: [],
//   },
//   {
//     id: 8,
//     title: '오늘 같이 산책하실 분!',
//     createdAt: '2023-01-16T10:47:05',
//     content:
//       '안녕하세요~ 말티즈 둥이 키우는 집사입니다. 귀엽고 깜찍하고 사랑스럽고 예쁜 아이입니다. 같이 산책하면서 재밌는 시간 보내요! 생각 있으신 분은 댓글 달아주세요~!',
//     member: {
//       id: 2,
//       nickName: '규성',
//       profile_img:
//         'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
//     },
//     meetingPlace: '서울시 송파구 잠실7동 OOO앞',
//     appointTime: '2023-01-16T15:00:00',
//     countLike: 3,
//     status: 'BOARD_CLOSE',
//     comments: [],
//   },
// ];

export default dummyBoards;
