import Link from "next/link";
import { geMembers } from "../actions/memberActions";
import MemberCard from "./MemberCard";
import { fetchCurrentUserLikeIds } from "../actions/likeActions";

const MembersPage = async () => {
  const members = await geMembers();
  const likeIds = await fetchCurrentUserLikeIds();

  return (
    <div className="mt-10 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-8">
      {members &&
        members.map((member) => 
        <MemberCard member={member} likeIds={likeIds} key={member.id} />)}
    </div>
  );
};
export default MembersPage;
