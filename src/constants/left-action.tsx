import {
  Blocks,
  CircleUserRound,
  Files,
  GitGraph,
  Search,
  Settings,
} from 'lucide-react';

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
  {
    id: 3,
    comp: GitGraph,
    label: ACTION.GitGraph,
  },
  {
    id: 4,
    comp: Blocks,
    label: ACTION.Blocks,
  },
];

const LEFT_BOTTOM_ACTION = [
  {
    id: 1,
    comp: CircleUserRound,
    label: ACTION.Profile,
  },
  {
    id: 2,
    comp: Settings,
    label: ACTION.Settings,
  },
];

export { LEFT_TOP_ACTION, LEFT_BOTTOM_ACTION, ACTION };
