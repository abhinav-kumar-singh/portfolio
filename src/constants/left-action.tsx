import { CircleUserRound, Files, Search } from 'lucide-react';

enum ACTION {
  Files = 'Files',
  Search = 'Search',
  GitGraph = 'GitGraph',
  Blocks = 'Blocks',
  Profile = 'Profile',
  Settings = 'Settings',
}

const LEFT_TOP_ACTION = [
  {
    id: 1,
    comp: Files,
    label: ACTION.Files,
  },
  {
    id: 2,
    comp: Search,
    label: ACTION.Search,
  },
];

const LEFT_BOTTOM_ACTION = [
  {
    id: 1,
    comp: CircleUserRound,
    label: ACTION.Profile,
  },
];

export { LEFT_TOP_ACTION, LEFT_BOTTOM_ACTION, ACTION };
