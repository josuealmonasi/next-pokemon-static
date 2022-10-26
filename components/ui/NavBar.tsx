import { Navbar } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const NavBar = () => {
  const router = useRouter();
  const { pathname } = router;
  const collapseItems = ['link1', 'link2', 'link3', 'link4'];

  return (
    <Navbar isBordered variant='sticky'>
      <Navbar.Brand>
        <Navbar.Content showIn={'xs'}>
          <Navbar.Toggle aria-label='toggle navigation' />
        </Navbar.Content>

        <Navbar.Content hideIn='xs'>
          <li>
            <Link href='/'>
              <a>
                <Image
                  src={'/assets/img/pokemon-logo.png'}
                  alt={'Pokemon'}
                  height={76}
                  width={80}
                />
              </a>
            </Link>
          </li>
        </Navbar.Content>
      </Navbar.Brand>

      <Navbar.Content hideIn='xs' variant='underline'>
        <li>
          <Link href='#'>
            {/* TODO: complete this once routes are up */}
            <a className={pathname === '' ? 'active' : 'inactive'}>link1</a>
          </Link>
        </li>

        <li>
          <Link href='#'>link2</Link>
        </li>

        <li>
          <Link href='#'>link3</Link>
        </li>

        <li>
          <Link href='#'>link4</Link>
        </li>
      </Navbar.Content>

      <Navbar.Collapse>
        {collapseItems.map(item => (
          <Navbar.CollapseItem key={item}>
            <Link href={'#'} color='inherit'>
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};
