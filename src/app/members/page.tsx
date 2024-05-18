import Link from "next/link";
import { geMembers } from "../actions/memberActions";
import MemberCard from "./MemberCard";

const MembersPage = async () => {
  const members = await geMembers();
  return (
    <div className="mt-10 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-8">
      {members &&
        members.map((member) => <MemberCard member={member} key={member.id} />)}
    </div>
  );
};
export default MembersPage;
