"use client";

import { useSupabase } from "@/providers/supabase-context";
import { Button } from "@nextui-org/button";
import { Github } from "lucide-react";

export default function GithubButton() {
  const { supabase } = useSupabase();
  const signUpWithGithub = () => {
    supabase.auth.signInWithOAuth({ provider: "github" });
  };
  
  return (
    <Button
      size="lg"
      variant="bordered"
      color="secondary"
      disableRipple
      startContent={<Github />}
      onClick={signUpWithGithub}
    >
      Login with Github
    </Button>
  );
}
