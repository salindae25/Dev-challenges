import cookie from "cookie";
import { v4 as uuid } from "@lukeed/uuid";
import type { RequestEvent } from "@sveltejs/kit";

export const handle = async ({ event, resolve }) => {
    const cookies = cookie.parse(event.request.headers.cookie || "");
    event.locals.userid = cookies.userid || uuid();

    // TODO https://github.com/sveltejs/kit/issues/1046
    const method = event.url.searchParams.get("_method");
    if (method) {
        event.method = method.toUpperCase();
    }
    const response = await resolve(event, { ssr: false });

    if (!cookies.userid) {
        // if this is the first time the user has visited this app,
        // set a cookie so that we recognise them when they return
        response.headers["set-cookie"] = cookie.serialize(
            "userid",
            event.locals.userid,
            {
                path: "/",
                httpOnly: true,
            }
        );
    }

    return response;
};
