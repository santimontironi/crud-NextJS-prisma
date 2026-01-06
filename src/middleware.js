import { withAuth } from "next-auth/middleware";

export default withAuth;

export const config = {
  matcher: ["/tasks/:path*", "/new/:path*"],
};