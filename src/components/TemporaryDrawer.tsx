
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import ButtonMui from '@mui/material/Button';
import { List as PhosphorList } from 'phosphor-react';
import { NavigationMenuComponentMobile } from './NavigationMenuComponentMobile';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        setState({ ...state, [anchor]: open });
      };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}    >

      <div className='mt-20 w-full px-4 flex flex-col gap-3'>
        <NavigationMenuComponentMobile options='features' />
        <NavigationMenuComponentMobile options='company' />
        <a href="#" className="text-greyCustom-400 hover:text-black transition-colors">Carrers</a>
        <a href="#" className="text-greyCustom-400 hover:text-black transition-colors">About</a>
      </div>
      <div className='mt-10 w-full px-4 flex flex-col gap-3'>
        <button className='text-greyCustom-400'>Login</button>
        <button className="text-greyCustom-400 bg-white w-full text-base py-3 rounded-2xl text-center border-2 border-greyCustom-400">
          Register
        </button>
      </div>
    </Box>
  );

  return (
    <div>
      {(['right'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <ButtonMui onClick={toggleDrawer(anchor, true)}>
            <PhosphorList size={30} color='#6b7280' weight="bold" />
          </ButtonMui>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}