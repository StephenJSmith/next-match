import EditForm from './EditForm';
import { getAuthUserId } from '@/app/actions/authActions';
import { getMemberByUserId } from '@/app/actions/memberActions';
import { notFound } from 'next/navigation';
import CardInnerWrapper from '@/components/CardInnerWrapper';

const MemberEditPage = async () => {
  const userId = await getAuthUserId();
  const member = await getMemberByUserId(userId);
  if (!member) return notFound();
  
  return (
    <CardInnerWrapper
      header='Profile'
      body={
        <EditForm member={member} />
      }
    />
)
}
export default MemberEditPage;
