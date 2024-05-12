import Link from 'next/link';

const MembersPage = () => {
  return (
    <div>
      <h1 className='text-3xl'>This will be the members page</h1>
      <Link href='/'>Go back home</Link>
    </div>
  )
}
export default MembersPage;