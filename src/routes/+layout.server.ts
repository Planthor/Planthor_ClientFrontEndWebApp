import { TOKEN_KEY } from "$lib/constants/auth";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ cookies, fetch }) => {
  const accessToken = cookies.get(TOKEN_KEY.ACCESS_TOKEN);

  if (!accessToken) {
    return { user: null };
  }

  return {user: accessToken};
};
