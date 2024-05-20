"use client";

import { signOutUser } from '@/app/actions/authActions';
import { transformImageUrl } from '@/lib/utils';
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  user,
} from "@nextui-org/react";
import { Session } from "next-auth";
import Link from "next/link";

type Props = {
  userInfo: {
    name: string | null;
    image: string | null;
  } | null;
};

const UserMenu = ({ userInfo }: Props) => {
  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
          color="secondary"
          name={userInfo?.name || "user avatar"}
          size="sm"
          src={transformImageUrl(userInfo?.image) || "/images/user.png"}
        />
      </DropdownTrigger>
      <DropdownMenu variant="flat" aria-label="User actions menu">
        <DropdownSection showDivider>
          <DropdownItem
            isReadOnly
            as="span"
            className="h-14 flex flex-row"
            aria-label="username"
          >
            Signed in as {userInfo?.name}
          </DropdownItem>
          <DropdownItem as={Link} href="/members/edit">
            Edit Profile
          </DropdownItem>
          <DropdownItem color="danger" onClick={async () => signOutUser()}>
            Log Out
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};
export default UserMenu;
