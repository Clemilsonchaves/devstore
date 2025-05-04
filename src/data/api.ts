import { env } from '@/env';

export function api(path: string, init?: RequestInit) {
    const baseUrl = env.NEXT_PUBLIC_API_URL || process.env.NEXT_PUBLIC_API_URL;

    if (!baseUrl) {
        throw new Error('NEXT_PUBLIC_API_URL is not defined in the environment variables.');
    }

    const apiPrefix = '/api';

    const url = new URL(apiPrefix.concat(path), baseUrl);

    return fetch(url.toString(), init);
}
