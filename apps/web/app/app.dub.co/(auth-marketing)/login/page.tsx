import { GoogleButton } from "@/ui/auth/login/google-button";
import { AuthLayout } from "@/ui/layout/auth-layout";
import { APP_DOMAIN, constructMetadata } from "@dub/utils";
import { Suspense } from "react";

export const metadata = constructMetadata({
  title: "Sign in to NexaWin Links",
  canonicalUrl: `${APP_DOMAIN}/login`,
});

export default function LoginPage() {
  return (
    <AuthLayout showTerms="app">
      <div className="w-full max-w-sm">
        <h3 className="text-center text-xl font-semibold">
          Log in to NexaWin Links
        </h3>
        <p className="mt-2 text-center text-sm text-neutral-500">
          Use your @techfinityhub.net Google account
        </p>
        <div className="mt-8">
          <Suspense>
            <GoogleButton />
          </Suspense>
        </div>
      </div>
    </AuthLayout>
  );
}
