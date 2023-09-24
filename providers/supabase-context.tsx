'use client'

import type { SupabaseClient } from "@supabase/auth-helpers-nextjs";
import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type SupabaseContext = {
  supabase: SupabaseClient;
};

const Context = createContext<SupabaseContext | undefined>(undefined);

export default function SupabaseProvider({
  children,
}: {
  children: ReactNode;
}) {
  const router = useRouter();
  const [supabase] = useState(() => createPagesBrowserClient());

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
        // const { data, error } = await supabase.auth.getSession()


      router.refresh();
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [supabase, router]);

  return (
    <Context.Provider value={{ supabase }}>
      <>{children}</>
    </Context.Provider>
  );
}

export const useSupabase = () => {
  const context = useContext(Context);

  if (context === undefined) {
    throw new Error("useSupabase must be used inside SupabaseProvider");
  }

  return context;
};
