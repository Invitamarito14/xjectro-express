declare function generateHash(digest: 'base64' | 'base64url' | 'hex', payload: Record<string, string>): string;
declare function generateId(): string;

export { generateHash, generateId };
