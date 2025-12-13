'use server';

import { headers } from "next/headers";

export const signUpWithEmail = async ({
  email,
  password,
  fullName,
  country,
  investmentGoals,
  riskTolerance,
  preferredIndustry,
}: SignUpFormData) => {
  try {
    // ⬇️ IMPORT INSIDE FUNCTION (runtime only)
    const { auth } = await import("@/lib/better-auth/auth");
    const { inngest } = await import("@/lib/inngest/client");

    const response = await auth.api.signUpEmail({
      body: { email, password, name: fullName },
    });

    if (response) {
      await inngest.send({
        name: "app/user.created",
        data: {
          email,
          name: fullName,
          country,
          investmentGoals,
          riskTolerance,
          preferredIndustry,
        },
      });
    }

    return { success: true, data: response };
  } catch (e) {
    console.error("Sign up failed", e);
    return { success: false, error: "Sign up failed" };
  }
};

export const signInWithEmail = async ({
  email,
  password,
}: SignInFormData) => {
  try {
    // ⬇️ IMPORT INSIDE FUNCTION
    const { auth } = await import("@/lib/better-auth/auth");

    const response = await auth.api.signInEmail({
      body: { email, password },
    });

    return { success: true, data: response };
  } catch (e) {
    console.error("Sign in failed", e);
    return { success: false, error: "Sign in failed" };
  }
};
export const signOut = async () => {
  try {
    const { auth } = await import("@/lib/better-auth/auth");
    const { headers } = await import("next/headers");

    const requestHeaders = await headers();

    await auth.api.signOut({
      headers: requestHeaders,
    });

    return { success: true };
  } catch (e) {
    console.error("Sign out failed", e);
    return { success: false, error: "Sign out failed" };
  }
};
