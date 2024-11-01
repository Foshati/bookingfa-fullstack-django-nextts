import Image from 'next/image';
import Link from 'next/link';

const Navbar = async () => {
  return (
    <nav className='fixed left-0 top-0 z-10 w-full border-b bg-white py-6'>
      <div className='mx-auto max-w-[1500px] px-6'>
        <div className='flex items-center justify-between'>
          <Link href='/'>
            <Image src='/logo.png' alt='DjangoBnb logo' width={180} height={38} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
