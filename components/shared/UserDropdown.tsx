import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { User } from "@nextui-org/user";
import { useSupabase } from "@/providers/supabase-context";
import { LogOut } from "lucide-react";

interface User {
  user_name: string;
  avatar_url: string;
}

export default function UserDropdown({ user }: { user: User }) {
  const { supabase } = useSupabase();
  const logout = () => {
    supabase.auth.signOut();
  };

  return (
    <Dropdown placement="bottom-start">
      <DropdownTrigger>
        <User
          as="button"
          avatarProps={{
            isBordered: true,
            radius: "lg",
            src: user.avatar_url,
          }}
          classNames={{
            base: "transition-transform flex-row-reverse",
            name: "self-end",
            description: "self-end",
          }}
          description="Frontend Developer"
          name={user.user_name}
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="User Actions" variant="flat">
        <DropdownItem
          key="profile"
          className="h-14 gap-2"
          textValue={user.user_name}
        >
          <p className="font-bold">Signed in as</p>
          <p className="font-bold">{user.user_name}</p>
        </DropdownItem>
        <DropdownItem key="settings" textValue="My Settings">
          My Settings
        </DropdownItem>
        <DropdownItem key="team_settings" textValue="Bookmarks">
          Bookmarks
        </DropdownItem>
        <DropdownItem key="analytics" textValue="Analytics">
          Analytics
        </DropdownItem>
        <DropdownItem key="help_and_feedback" textValue="Help & Feedback">
          Help & Feedback
        </DropdownItem>
        <DropdownItem
          key="logout"
          color="danger"
          textValue="Log Out"
          onClick={logout}
          selectedIcon={<LogOut />}
        >
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
