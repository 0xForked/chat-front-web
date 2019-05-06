import { getUser as User } from './user';
// chat menu
const Menu = [
  {
    text: 'Chat',
    icon: 'chat_bubble',
    to: { path: '/chat/messaging' },
  },
  {
    text: 'Contacts',
    icon: 'people',
    to: { path: '/chat/contact' },
  },

];
// chat group
const Groups = [
  {
    'uuid': 'a44f8ade-513c-46b5-bae4-0acf809860e6',
    'title': 'nisi',
    'users': [
      'da95e977-cd54-4077-a767-1b7f33ef6919'
    ],
    'created_by': '60d07662-bfec-42c7-b044-c81bc4ff8c7a',
    'created_at': '2018-04-10T15:02:15.476Z'
  },
  {
    'uuid': 'c86f170d-9a36-4f2c-bb76-2de65aa8c7bf',
    'title': 'odio',
    'users': [
      '46d6f992-5729-4588-b7f8-ce74f21157ba',
      '7d910620-84e1-49fc-951e-d375587b8189'
    ],
    'created_by': 'eef93cb1-7766-4413-a5cf-ecbf71fa3674',
    'created_at': '2018-04-11T04:02:56.728Z'
  },
];

const Messages = [
  {
    'uuid': '2cc7e60b-a81b-4859-bb88-e894e11eb77d',
    'chatId': 'a44f8ade-513c-46b5-bae4-0acf809860e6',
    'text': 'Ex laudantium veniam aut repellendus voluptatem vitae suscipit at quisquam.',
    'userId': 'da95e977-cd54-4077-a767-1b7f33ef6919',
    'created_at': '2018-04-10T18:42:25.141Z'
  },
  {
    'uuid': '2a2c7ea4-e2c1-47ac-8dc8-73ed074abb99',
    'chatId': 'a44f8ade-513c-46b5-bae4-0acf809860e6',
    'text': 'Natus ex qui at in et porro.',
    'userId': 'da95e977-cd54-4077-a767-1b7f33ef6919',
    'created_at': '2018-04-10T09:39:34.913Z'
  },
  {
    'uuid': '063c9eb5-249a-4778-9367-ebfd33f69a4e',
    'chatId': 'a44f8ade-513c-46b5-bae4-0acf809860e6',
    'text': 'Ut et qui unde nulla.',
    'userId': 'da95e977-cd54-4077-a767-1b7f33ef6919',
    'created_at': '2018-04-11T04:47:33.345Z'
  },
  {
    'uuid': '2ea77894-ae69-4a2b-9bf2-86b555f4d84b',
    'chatId': 'c86f170d-9a36-4f2c-bb76-2de65aa8c7bf',
    'text': 'Impedit sed ducimus ut suscipit nobis id.',
    'userId': '46d6f992-5729-4588-b7f8-ce74f21157ba',
    'created_at': '2018-04-10T23:11:40.311Z'
  },
  {
    'uuid': '09fc211d-e8a2-4bae-bb40-6a707c3c5eac',
    'chatId': 'c86f170d-9a36-4f2c-bb76-2de65aa8c7bf',
    'text': 'Quia laborum labore maiores magnam sint.',
    'userId': '46d6f992-5729-4588-b7f8-ce74f21157ba',
    'created_at': '2018-04-10T16:47:00.297Z'
  },
  {
    'uuid': '9150380c-7675-4780-8395-e1d6fa1749f7',
    'chatId': 'c86f170d-9a36-4f2c-bb76-2de65aa8c7bf',
    'text': 'Aut consectetur est eligendi impedit.',
    'userId': '46d6f992-5729-4588-b7f8-ce74f21157ba',
    'created_at': '2018-04-11T00:22:22.961Z'
  },
  {
    'uuid': '757c2b29-5121-4c51-a9a0-390a537307bc',
    'chatId': 'c86f170d-9a36-4f2c-bb76-2de65aa8c7bf',
    'text': 'Recusandae voluptatibus nisi perferendis et ut quo repellat.',
    'userId': '7d910620-84e1-49fc-951e-d375587b8189',
    'created_at': '2018-04-10T14:30:41.149Z'
  },
  {
    'uuid': 'c06da098-5532-4b4b-95fe-f9cc9b64a44a',
    'chatId': 'c86f170d-9a36-4f2c-bb76-2de65aa8c7bf',
    'text': 'Beatae laborum enim.',
    'userId': '7d910620-84e1-49fc-951e-d375587b8189',
    'created_at': '2018-04-10T20:57:39.530Z'
  },
  {
    'uuid': '9e6b676c-9042-497c-a96e-c78b2d30570f',
    'chatId': 'c86f170d-9a36-4f2c-bb76-2de65aa8c7bf',
    'text': 'Ullam aliquid sint dicta nisi veritatis dolor.',
    'userId': '7d910620-84e1-49fc-951e-d375587b8189',
    'created_at': '2018-04-10T11:14:29.366Z'
  },
];

// Add user to map
Messages.map((item) => {
  let tmp  = User().find(x => x.uuid === item.userId);
  item.user = {
    'uuid': tmp.uuid,
    'name': tmp.name,
    'avatar': tmp.avatar
  };
  return item;
});

// add messages to group
Groups.map((item) => {
  item.messages = Messages.filter(x => x.chatId === item.uuid);
  item.user = User().find(x => x.uuid === item.created_by);
  return item;
});

// get chat group
const getChatById = (uuid) => {
  return (uuid !== undefined) ? Groups.find(x => x.uuid === uuid) : Groups[0];
};

export {
  Menu,
  Groups,
  getChatById
};