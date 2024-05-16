"use client";

import { signOutUser } from '@/app/actions/authActions';
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
  user: Session["user"];
};

const UserMenu = ({ user }: Props) => {
  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
          color="secondary"
          name={user?.name || "user avatar"}
          size="sm"
          src={user?.image || "/images/user.png"}
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
            Signed in as {user?.name}
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
