import { fetchCurrentUserLikeIds, fetchLikedMembers } from '../actions/likeActions';
import ListsTab from './ListsTab';

const ListsPage = async ({searchParams}: {searchParams: {type:  "source" | "target" | "mutual"}}) => {
  const likeIds = await fetchCurrentUserLikeIds();
  const members = await fetchLikedMembers(searchParams.type);

  return (
    <div>
      <ListsTab members={members} likeIds={likeIds} />
    </div>
  )
}
export default ListsPage;
