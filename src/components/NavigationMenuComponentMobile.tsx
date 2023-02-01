import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { CaretDown } from 'phosphor-react';

interface NavigationMenuComponentMobileProps {
  options: 'features' | 'company';
}

export function NavigationMenuComponentMobile({ options }: NavigationMenuComponentMobileProps) {

  if (options === 'features') {

    return (
      <NavigationMenu.Root className=''>
        <NavigationMenu.List className='flex flex-col gap-3'>

          <NavigationMenu.Item>
            <NavigationMenu.Trigger className='text-greyCustom-400 hover:text-black transition-colors flex items-center gap-1'>
              Features
              <CaretDown />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className='bg-white text-start text-greyCustom-400 py-8 px-4 rounded-md'>
              <ul className='flex flex-col gap-3'>
                <li className='flex flex-row gap-4'>
                  <img src="./images/icon-todo.svg" alt="" />
                  <a href="#">Todo List</a>
                </li>
                <li className='flex flex-row gap-4'>
                  <img src="./images/icon-calendar.svg" alt="" />
                  <a href="#">Calendar</a>
                </li>
                <li className='flex flex-row gap-4'>
                  <img src="./images/icon-reminders.svg" alt="" />
                  <a href="#">Reminders</a>
                </li>
                <li className='flex flex-row gap-4'>
                  <img src="./images/icon-planning.svg" alt="" />
                  <a href="#">Planning</a>
                </li>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>


          <NavigationMenu.Indicator />
        </NavigationMenu.List>

        <NavigationMenu.Viewport />
      </NavigationMenu.Root>
    )
  }

  if (options === 'company') {
    return (
      <NavigationMenu.Root className=''>
        <NavigationMenu.List className='flex flex-col gap-3'>


          <NavigationMenu.Item>
            <NavigationMenu.Trigger className='text-greyCustom-400 hover:text-black transition-colors flex items-center gap-1'>
              Company
              <CaretDown />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className='bg-white text-start text-greyCustom-400 py-8 px-4 rounded-md'>
              <ul className='flex flex-col gap-3'>
                <li>
                  <a href="#">History</a>
                </li>
                <li>
                  <a href="#">Our Team</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>


          <NavigationMenu.Indicator />
        </NavigationMenu.List>

        <NavigationMenu.Viewport />
      </NavigationMenu.Root>
    )
  }

  return null

}