import { draftMode } from "next/headers";
import qs from "qs";

export async function fetchDeepContentType(
    contentType: string,
    params: Record<string, unknown> = {}
): Promise<any> {
    const { isEnabled } = await draftMode();

    try {
        const queryParams = { ...params };

        if (isEnabled) {
            queryParams.status = "draft";
        }

        const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";
        const url = new URL(`/api/${contentType}`, baseUrl);

        const queryString = qs.stringify(queryParams, {
            encode: true,
            encodeValuesOnly: true,
            arrayFormat: "brackets",
        });

        const fullUrl = `${url.href}?${queryString}`;
        console.log("Fetching Deep Content Type:", fullUrl);

        const response = await fetch(fullUrl, {
            method: "GET",
            next: { revalidate: 60 },
        });

        if (!response.ok) {
            const text = await response.text();
            throw new Error(
                `Failed to fetch data from Strapi (status=${response.status}): ${text}`
            );
        }

        const jsonData = await response.json();

        return jsonData;
    } catch (error) {
        console.error("FetchDeepContentTypeError", error);
        throw error;
    }
}
