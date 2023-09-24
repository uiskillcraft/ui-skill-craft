"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { createPagesBrowserClient  } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

import type { Session, SupabaseClient } from "@supabase/auth-helpers-nextjs";

type SupabaseContext = {
	supabase: SupabaseClient;
	session: Session | null
};

const Context = createContext<SupabaseContext | undefined>(undefined);

export default function SupabaseProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [supabase] = useState(() => createPagesBrowserClient ());
	const [session, setSession] = useState<Session|null>(null)
	const router = useRouter();

	const getConnectedUser = async() => {
		const { data } = await supabase.auth.getSession();

		if(data?.session){
			setSession(data.session)
		} else {
			setSession(null)
		}
	}

	useEffect(() => {
		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange(() => {
			getConnectedUser();
			router.refresh()
		});
		
		
		return () => {
			subscription.unsubscribe();
		};
	}, [router, supabase]);

	return (
		<Context.Provider value={{ supabase, session }}>
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